import React, { useEffect ,useState } from 'react';
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';
import { signOut } from 'firebase/auth';

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const handleLoginButtonClick = () => {
        navigate('/Login');
      };
      const handleSignupButtonClick = () => {
        navigate('/Signup');
      };
      const handleCartButtonClick = () => {
        navigate('/Cart');
      };
      const handleLogoutButton = async () => {
        try {
          await signOut(auth);
          navigate('/');
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