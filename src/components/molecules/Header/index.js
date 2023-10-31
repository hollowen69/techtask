import React, { useEffect ,useState } from 'react';
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import InputField from '../../atoms/InputField';
import Button from '../../atoms/Button';
import { signOut } from 'firebase/auth';

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const handleLoginButtonClick = () => {
        // Navigate to a different route on button click
        navigate('/Login');
      };
      const handleSignupButtonClick = () => {
        // Navigate to a different route on button click
        navigate('/Signup');
      };
      const handleCartButtonClick = () => {
        // Navigate to a different route on button click
        navigate('/Cart');
      };
      const handleLogoutButton = async () => {
        try {
          await signOut(auth);
          navigate('/');
          // Handle successful logout (e.g., redirect to Home)
        } catch (error) {
          console.error(error.message);
        }
      };
      
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
        <div className="">
          <h2 className="">MyApp</h2>
          {user ? (
            <div className="">
              <p className="">Welcome, {user.email}! You are logged in.</p>
              <Button
                label="LogOut"
                className=""
                onClick={handleLogoutButton}
              />
            </div>
          ) : (
            <div className="">
              <Button
                label="Login"
                className=""
                onClick={handleLoginButtonClick}
              />
                
                <Button
                label="Signup"
                className=""
                onClick={handleSignupButtonClick}
              />
            </div>
          )}
          <Button
                label="Cart"
                className=""
                onClick={handleCartButtonClick}
              />
        </div>
      );
};

export default Header;