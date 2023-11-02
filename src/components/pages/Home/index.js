// src/components/molecules/LoginForm.js
import React,{ useEffect, useState } from 'react';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import InputField from '../../atoms/InputField';
import { auth } from '../../../firebase';
import Header from '../../molecules/Header';
import { db } from '../../../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import Card from '../../molecules/Card';
const Home = () => {
  const [data, setData] = useState([]);
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
  /*const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        title: title,
        description: description,
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }*/
  const handleAdd2CartClick = (id) => {
    console.log('Add to Cart clicked for card with ID:',id);
    // Perform your logic with the card ID here
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
