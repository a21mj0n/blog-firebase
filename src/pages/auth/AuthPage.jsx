/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, useTheme } from '@emotion/react';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

const AuthPage = ({ setIsAuth }) => {
  const theme = useTheme();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    localStorage.setItem('isAuth', true);
    setIsAuth(true);
    window.location.href = '/';
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="text-center" css={{ marginTop: 200 }}>
        <h2 css={{ marginBottom: 20, color: theme.secondary }}>Sign In</h2>
        <button
          onClick={() => signInWithGoogle()} className="btn"
          css={{ color: theme.primary, backgroundColor: theme.secondary }}
        >
          Sign In With Google Account
        </button>
      </div>
    </div>
  );
};

export default AuthPage;