import React, { useEffect ,useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Logout from './Logout';

const Home =  () => {
    
      
      const [user, setUser] = useState(null);

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
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Home</h2>
      {user ? (
        <div className="mb-4">
          <p className="text-green-600 mb-2">Welcome, {user.email}! You are logged in.</p>
          <Logout />
        </div>
      ) : (
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
            onClick={handleLoginButtonClick}
          >
            Login
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleRegisterButtonClick}
          >
            Register
          </button>
        </div>
      )}
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded"
        onClick={handleCartButtonClick}
      >
        Cart
      </button>
    </div>
  );
};

export default Home;
