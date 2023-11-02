// src/components/molecules/LoginForm.js
import React,{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import Header from '../../molecules/Header';
import { db } from '../../../firebase';
import { collection,  addDoc, getDocs } from "firebase/firestore";
import Card from '../../molecules/Card';
const Home = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Products'));
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(documents);
        setData(documents);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData(); // Call the async function to fetch data when the component mounts
  }, []);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        setUser(user);
      } else {
        // User is not logged in
        
        setUser(null);
        
      }
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);
  const handleAdd2CartClick = async (id,price,title) => {
    if(user){
      try {
        const docRef = await addDoc(collection(db, 'Cart'), {
          ProduId: id,
          UserID: user.uid,
          Price: price,
          Title: title,
          timestamp: new Date(),
        });
        console.log('Task added with ID: ', docRef.id);
      } catch (error) {
        console.error('Error adding task: ', error);
      }
    }
    else{
      navigate('/Login');
    }
 
  };

  return (

    <div>
        <Header />
       
      <h2>store Items:</h2>
      
      <div >
        {data.map((item) => (
          <div className='border-2 table-caption'>
            <Card key={item.id} id={item.id} buttonText="Add to Cart" price={item.Price} imageSrc={item.ImgUrl}  onButtonClick={handleAdd2CartClick} title={item.ProductName}/>
          </div>
          
        ))}
      </div>
    </div>
    
  );
};

export default Home;
