import React, { useState, FormEvent } from 'react';
import style from './AuthPanel.module.css';

type LoginData = {
  email: string;
};

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginData>({
    email: '',
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const cleanValue = value.replace(/\s/g, '');
    setFormData((prev) => ({ ...prev, [name]: cleanValue }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please enter a valid email');
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
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button type="submit" className={style.createBtn}>Sign In</button>
    </form>
  );
}

