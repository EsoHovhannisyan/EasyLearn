'use client';

import React from 'react';
import style from './GoogleButton.module.css'



export default function GoogleAuthButton() {
  const handleGoogleSignIn = () => {
    //  Google logika stex
    alert('Google sign-in coming soon...');
  };

  return (
    <button className={style.googleBtn} onClick={handleGoogleSignIn}>
      <img src="/icons/Google.png" alt="Google" width={24} height={24} />
    </button>
  );
}
