
import React,{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import Header from '../../molecules/Header';
import { db } from '../../../firebase';
import { collection,   getDocs } from "firebase/firestore";
import PaypalComponent from '../../molecules/PayPalComponent';

const Home = () => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // New state for loading indicator
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Products'));
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(documents);
        setIsLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching data: ', error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
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
  
  const handlePayButtonClick = async (price) => {
    if (user) {
    try {
      const response = await fetch('http://127.0.0.1:8000/setup/', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(
        
          {
            "price" : price
          }),
      });
      
      if (response.ok) {
        const data = await response.json();
        window.location.replace( JSON.parse(data).initUrl );
       navigate(JSON.parse(data).initUrl);
      } else {
        // Handle errors here
        console.error('Error occurred while fetching data');
      }
    } catch (error) {
      // Handle network errors here
      console.error('Error occurred while fetching data2', error);
    }}
    else{
      navigate("/login");
    }
  };
  console.log("eeeeee",items);
  return (
    <div>
      <Header />
      <h2>store Items:</h2>
      <div>
        {isLoading ? ( // Show loading message while data is being fetched
          <p>Loading...</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className=''>
              <PaypalComponent id={item.id} buttonText="buy now" price={item.Price} onButtonClick={handlePayButtonClick} title={item.ProductName} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
