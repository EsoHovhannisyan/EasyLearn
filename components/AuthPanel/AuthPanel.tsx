'use client';
import { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import style from './AuthPanel.module.css';

export default function AuthPanel() {
  const [mode, setMode] = useState<'signup' | 'signin'>('signup');

  return (
    <div className={style.authPanel}>
      <h2>EasyLearn</h2>

      <div className={style.buttons}>
        <button
          className={mode === 'signup' ? style.activeBtn : ''}
          onClick={() => setMode('signup')}
        >
          Sign Up
        </button>
        <button
          className={mode === 'signin' ? style.activeBtn : ''}
          onClick={() => setMode('signin')}
        >
          Sign In
        </button>
      </div>

      {mode === 'signup' ? <RegisterForm /> : <LoginForm />}

      <div className={style.separator}>or</div>
      <button className={style.googleBtn}>Sign up with Google</button>
    </div>
  );
}

