/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, useTheme } from '@emotion/react';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/forms/Button'

const AuthPage = ({ setIsAuth }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    localStorage.setItem('isAuth', true);
    setIsAuth(true);
    navigate('/profile');
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="text-center" css={{ marginTop: 200 }}>
        <h2 css={{ marginBottom: 20, color: theme.onBackground }}>Sign In</h2>
        <Button
          iconName="google-plus"
          icontype="logo"
          onClick={() => signInWithGoogle()}
        >
          Sign In With Google Account
        </Button>
      </div>
    </div>
  );
};

export default AuthPage;