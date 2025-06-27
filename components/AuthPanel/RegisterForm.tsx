import React, { useState, FormEvent } from 'react';
import style from './AuthPanel.module.css';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
};

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'fullName') {
      newValue = value.trimStart();
      if (newValue.trim() === '') newValue = '';
    } else if (name === 'email') {
      newValue = value.replace(/\s/g, '');
    } else if (name === 'phone') {
      newValue = value.replace(/[^0-9+()-]/g, '');
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('All fields are required');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Email is not valid');
      return;
    }

    const digits = formData.phone.replace(/\D/g, '');
    if (digits.length < 10) {
      setError('Phone must be at least 10 digits');
      return;
    }

    alert('Signed up!');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit} noValidate>
      <label>
        Full Name
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
        />
      </label>

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

      <label>
        Phone Number
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button type="submit" className={style.createBtn}>Create Account</button>
    </form>
  );
}


