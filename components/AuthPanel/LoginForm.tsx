import React, { useState, FormEvent } from 'react';
import style from './AuthPanel.module.css';

type Props = {
  registeredEmail: string;
};

export default function LoginForm({ registeredEmail }: Props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.replace(/\s/g, ''));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    if (email !== registeredEmail) {
      setError('This email is not registered');
      return;
    }

    alert('Signed in!');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit} noValidate>
      <label>
        Email Address
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        />
      </label>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button type="submit" className={style.createBtn}>Sign In</button>
    </form>
  );
}


