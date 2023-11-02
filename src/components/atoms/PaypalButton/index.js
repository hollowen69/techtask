import React from 'react';
import { PayPalScriptProvider,PayPalButtons } from '@paypal/react-paypal-js';
const PaypalButton = () => {
  return (
    <PayPalScriptProvider options={{ 'client-id': "AZd-N_p1KIwEBwZ_viHjaficWO551hVNQZbQ_uyktV3qQy9zB29hUJbqV__VJ--2BD6hxFwBu8_5yoGj" }}>
    <PayPalButtons style={{layout: "horizontal"}}
    createOrder={(data,actions) => {
          return actions.order.create({
              purchase_units:[
                  {
                    amount:{
                      value:"10.00"
                    }
                  }

              ]


          });

    }}  

    onCancel={( ) =>{
      console.log("you canceled");
    }}
    onError={() =>{
          console.log("there was an error");

    }}
    onApprove={(data,actions) =>{
        return actions.order.capture().then(
          details => {
            console.log("payement was successful " + details.payer.name.given_name);
          }
        )
      
    }}
    />
    </PayPalScriptProvider>
  ); 
}
export default PaypalButton;