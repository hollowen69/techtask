import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Success =  () => {
  
   
      const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const paymentId = searchParams.get('paymentId');
    const payerId = searchParams.get('PayerID');
    const response = fetch('http://127.0.0.1:8000/execute/', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(
        
          {
            "paymentId" : paymentId,
            "payerId" : payerId
          }),
      });
      
      if (response.ok) {
        const data =  response.json();

        console.log(JSON.parse(data))  ; 
      } else {
        // Handle errors here
        console.error('Error occurred while fetching data');
      }
      ;
  
      
    

    // Call the async function to fetch data when the component mounts
  

  return (
    
    <h1>payement is success</h1>
  );
};

export default Success;
