// import React, { useState, FormEvent } from 'react';
// import style from './AuthPanel.module.css';

// type FormData = {
//   fullName: string;
//   email: string;
//   phone: string;
// };

// type Props = {
//   onRegister: (data: FormData) => void;
// };

// export default function RegisterForm({ onRegister }: Props) {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: '',
//     email: '',
//     phone: '',
//   });
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     let newValue = value;

//     if (name === 'fullName') {
//       newValue = value.trimStart();
//       if (newValue.trim() === '') newValue = '';
//     } else if (name === 'email') {
//       newValue = value.replace(/\s/g, '');
//     } else if (name === 'phone') {
//       newValue = value.replace(/[^0-9+()-]/g, '');
//     }

//     setFormData((prev) => ({ ...prev, [name]: newValue }));
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     setError(null);

//     if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
//       setError('All fields are required');
//       return;
//     }

//     if (!formData.email.includes('@')) {
//       setError('Email is not valid');
//       return;
//     }

//     const digits = formData.phone.replace(/\D/g, '');
//     if (digits.length < 8) {
//       setError('Phone must be at least 10 digits');
//       return;
//     }

//     onRegister(formData);

//     setFormData({
//       fullName: '',
//       email: '',
//       phone: '',
//     });

//     alert('Signed up!');
//   };

//   return (
//     <form className={style.form} onSubmit={handleSubmit} noValidate>
//       <label>
//         Full Name
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Enter your full name"
//           value={formData.fullName}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Email Address
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Phone Number
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Enter your phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//       </label>

//       {error && <div style={{ color: 'red' }}>{error}</div>}

//       <button type="submit" className={style.createBtn}>Create Account</button>
//     </form>
//   );
// }



// import React, { useState, FormEvent } from 'react';
// import style from './AuthPanel.module.css';

// type FormData = {
//   fullName: string;
//   email: string;
//   phone: string;
// };

// type Props = {
//   onRegister: (data: FormData) => void;
// };

// export default function RegisterForm({ onRegister }: Props) {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: '',
//     email: '',
//     phone: '',
//   });
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     let newValue = value;

//     if (name === 'fullName') {
//       newValue = value.trimStart();
//       if (newValue.trim() === '') newValue = '';
//     } else if (name === 'email') {
//       newValue = value.replace(/\s/g, '');
//     } else if (name === 'phone') {
//       newValue = value.replace(/[^0-9+()-]/g, '');
//     }

//     setFormData((prev) => ({ ...prev, [name]: newValue }));
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     setError(null);

//     if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
//       setError('All fields are required');
//       return;
//     }

//     if (!formData.email.includes('@')) {
//       setError('Email is not valid');
//       return;
//     }

//     const digits = formData.phone.replace(/\D/g, '');
//     if (digits.length < 8) {
//       setError('Phone must be at least 8 digits');
//       return;
//     }

//     onRegister(formData);

//     setFormData({
//       fullName: '',
//       email: '',
//       phone: '',
//     });
//   };

//   return (
//     <form className={style.form} onSubmit={handleSubmit} noValidate>
//       <label>
//         Full Name
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Enter your full name"
//           value={formData.fullName}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Email Address
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Phone Number
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Enter your phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//       </label>

//       {error && <div style={{ color: 'red' }}>{error}</div>}

//       <button type="submit" className={style.createBtn}>Create Account</button>
//     </form>
//   );
// }



// 'use client';

// import React, { useState, FormEvent } from 'react';
// import GoogleAuthButton from './GoogleButton/GoogleButton';
// import baseStyle from './BaseForm.module.css';

// type RegisterData = {
//   fullName: string;
//   email: string;
//   phone: string;
// };

// type Props = {
//   onSuccess?: () => void;
// };

// export default function RegisterForm({ onSuccess }: Props) {
//   const [registerData, setRegisterData] = useState<RegisterData>({
//     fullName: '',
//     email: '',
//     phone: '',
//   });

//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   // Обработчик изменений формы
//   const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     let cleaned = value;

//     if (name === 'fullName') cleaned = value.trimStart();
//     if (name === 'email') cleaned = value.replace(/\s/g, '');
//     if (name === 'phone') cleaned = value.replace(/[^0-9+()-]/g, '');

//     setRegisterData((prev) => ({ ...prev, [name]: cleaned }));
//   };

//   // Отправка формы регистрации
//   const handleRegisterSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setError(null);

//     const { fullName, email, phone } = registerData;

//     if (!fullName || !email || !phone) {
//       setError('All fields are required');
//       return;
//     }

//     if (!email.includes('@')) {
//       setError('Invalid email');
//       return;
//     }

//     const digits = phone.replace(/\D/g, '');
//     if (digits.length < 8) {
//       setError('Phone must be at least 8 digits');
//       return;
//     }

//     try {
//       setLoading(true);
//       // Тут делай запрос на регистрацию

//       localStorage.setItem('emailToVerify', email);
//       if (onSuccess) onSuccess();
//     } catch (err) {
//       setError('Registration error');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2 className={baseStyle.logoTitle}>EasyLearn</h2>

//       {/* Переключатель (Sign Up активна, Sign In неактивна без действия) */}
//       <div className={baseStyle.authButtons}>
//         <button type="button" className={baseStyle.activeBtn}>
//           Sign Up
//         </button>
//         <button type="button" disabled style={{ opacity: 0.5, cursor: 'default' }}>
//           Sign In
//         </button>
//       </div>

//       {/* Форма регистрации */}
//       <form className={baseStyle.form} onSubmit={handleRegisterSubmit}>
//         <label>
//           Full Name
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Enter your full name"
//             value={registerData.fullName}
//             onChange={handleRegisterChange}
//           />
//         </label>

//         <label>
//           Email Address
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={registerData.email}
//             onChange={handleRegisterChange}
//           />
//         </label>

//         <label>
//           Phone Number
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Enter your phone"
//             value={registerData.phone}
//             onChange={handleRegisterChange}
//           />
//         </label>

//         {error && <div style={{ color: 'red' }}>{error}</div>}

//         <button type="submit" className={baseStyle.createBtn} disabled={loading}>
//           {loading ? 'Registering...' : 'Create Account'}
//         </button>
//         <div className={baseStyle.separator}>or</div>
//         <GoogleAuthButton />
//       </form>
//     </div>
//   );
// }




// 'use client';

// import React, { useState, FormEvent } from 'react';
// import GoogleAuthButton from './GoogleButton/GoogleButton';
// import Link from 'next/link';
// import Image from 'next/image';
// import baseStyle from './BaseForm.module.css';

// type RegisterData = {
//   fullName: string;
//   email: string;
//   phone: string;
// };

// type LoginData = {
//   email: string;
//   password: string;
// };

// type Props = {
//   onSuccess?: () => void;
// };

// export default function RegisterForm({ onSuccess }: Props) {
//   const [authMode, setAuthMode] = useState<'signUp' | 'signIn'>('signUp');


//   const [registerData, setRegisterData] = useState<RegisterData>({
//     fullName: '',
//     email: '',
//     phone: '',
//   });


//   const [loginData, setLoginData] = useState<LoginData>({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);


//   const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     let cleaned = value;

//     if (name === 'fullName') cleaned = value.trimStart();
//     if (name === 'email') cleaned = value.replace(/\s/g, '');
//     if (name === 'phone') cleaned = value.replace(/[^0-9+()-]/g, '');

//     setRegisterData((prev) => ({ ...prev, [name]: cleaned }));
//   };

//   const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setLoginData((prev) => ({ ...prev, [name]: value }));
//   };


//   const handleRegisterSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setError(null);

//     const { fullName, email, phone } = registerData;

//     if (!fullName || !email || !phone) {
//       setError('All fields are required');
//       return;
//     }

//     if (!email.includes('@')) {
//       setError('Invalid email');
//       return;
//     }

//     const digits = phone.replace(/\D/g, '');
//     if (digits.length < 8) {
//       setError('Phone must be at least 8 digits');
//       return;
//     }

//     try {
//       setLoading(true);
//       // server zapros 

//       localStorage.setItem('emailToVerify', email);
//       if (onSuccess) onSuccess();
//     } catch (err) {
//       setError('Registration error');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={baseStyle.form}>
//       <div className={baseStyle.logoBlock}>
//         <Image
//           src={`/icons/vector.png`}
//           alt='VectorLogo'
//           width={34}
//           height={34}
//         />
//         <h2 className={baseStyle.logoTitle}>EasyLearn</h2>
//       </div>

//       <div className={baseStyle.authButtons}>
//         <button
//           type="button"
//           className={`${baseStyle.authButton} ${authMode === 'signUp' ? baseStyle.activeBtn : baseStyle.inactiveBtn}`}
//           onClick={() => setAuthMode('signUp')}
//         >
//           Sign Up
//         </button>
//         <button
//           type="button"
//           className={`${baseStyle.authButton} ${authMode === 'signIn' ? baseStyle.activeBtn : baseStyle.inactiveBtn}`}
//           onClick={() => setAuthMode('signIn')}
//         >
//           Sign In
//         </button>
//       </div>


//       {/* form */}
//       {authMode === 'signUp' ? (
//         <form onSubmit={handleRegisterSubmit}>
//           <label>
//             Full Name
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Enter your full name"
//               value={registerData.fullName}
//               onChange={handleRegisterChange}
//             />
//           </label>

//           <label>
//             Email Address
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={registerData.email}
//               onChange={handleRegisterChange}
//             />
//           </label>

//           <label>
//             Phone Number
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter your phone"
//               value={registerData.phone}
//               onChange={handleRegisterChange}
//             />
//           </label>

//           {error && <div style={{ color: 'red' }}>{error}</div>}

//           <button type="submit" className={baseStyle.createBtn} disabled={loading}>
//             {loading ? 'Registering...' : 'Create Account'}
//           </button>
//           <div className={baseStyle.separator}>or</div>
//           <GoogleAuthButton />

//           <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
//             <p style={{ fontSize: '12px', letterSpacing: '0.5px', color: '#666', marginTop: '12px', textAlign: 'center' }}>
//               By signing up to create an account I accept Company’s
//             </p>
//             <span style={{ textAlign: 'center' }}>
//               <Link style={{ textDecoration: 'underline ' }} href="/terms" target="_blank" rel="noopener noreferrer"> Terms of use </Link> &{' '}
//               <Link style={{ textDecoration: 'underline ' }} href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>.
//             </span>
//           </div>

//         </form>
//       ) : (
//         <div>hello</div>
//       )}
//     </div>
//   );
// }


'use client';

import React, { useState, FormEvent } from 'react';
import GoogleAuthButton from './GoogleButton/GoogleButton';
import Link from 'next/link';
import Image from 'next/image';
import baseStyle from './BaseForm.module.css';

type RegisterData = {
  fullName: string;
  email: string;
  phone: string;
};

type LoginData = {
  email: string;
  password: string;
};

type Props = {
  onSuccess?: () => void;
};

export default function RegisterForm({ onSuccess }: Props) {
  const [authMode, setAuthMode] = useState<'signUp' | 'signIn'>('signUp');

  const [registerData, setRegisterData] = useState<RegisterData>({
    fullName: '',
    email: '',
    phone: '',
  });

  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let cleaned = value;

    if (name === 'fullName') cleaned = value.trimStart();
    if (name === 'email') cleaned = value.replace(/\s/g, '');
    if (name === 'phone') cleaned = value.replace(/[^0-9+()-]/g, '');

    setRegisterData((prev) => ({ ...prev, [name]: cleaned }));
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (authMode === 'signUp') {
      const { fullName, email, phone } = registerData;

      if (!fullName || !email || !phone) {
        setError('All fields are required');
        return;
      }

      if (!email.includes('@')) {
        setError('Invalid email');
        return;
      }

      const digits = phone.replace(/\D/g, '');
      if (digits.length < 8) {
        setError('Phone must be at least 8 digits');
        return;
      }

      try {
        setLoading(true);
        // Server request goes here
        localStorage.setItem('emailToVerify', email);
        if (onSuccess) onSuccess();
      } catch (err) {
        setError('Registration error');
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      // Login logic
      const { email, password } = loginData;
      if (!email || !password) {
        setError('Both fields required');
        return;
      }

      try {
        setLoading(true);
        // Server request
        if (onSuccess) onSuccess();
      } catch (err) {
        setError('Login error');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={baseStyle.form}>
      <div className={baseStyle.logoBlock}>
        <Image
          src={`/icons/vector.png`}
          alt='VectorLogo'
          width={34}
          height={34}
        />
        <h2 className={baseStyle.logoTitle}>EasyLearn</h2>
      </div>

      <div className={baseStyle.authButtons}>
        <button
          type="button"
          className={`${baseStyle.authButton} ${authMode === 'signUp' ? baseStyle.activeBtn : baseStyle.inactiveBtn}`}
          onClick={() => setAuthMode('signUp')}
        >
          Sign Up
        </button>
        <button
          type="button"
          className={`${baseStyle.authButton} ${authMode === 'signIn' ? baseStyle.activeBtn : baseStyle.inactiveBtn}`}
          onClick={() => setAuthMode('signIn')}
        >
          Sign In
        </button>
      </div>

      {authMode === 'signUp' ? (
        <>
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={registerData.fullName}
              onChange={handleRegisterChange}
            />
          </label>

          <label>
            Email Address
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={registerData.email}
              onChange={handleRegisterChange}
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone"
              value={registerData.phone}
              onChange={handleRegisterChange}
            />
          </label>
        </>
      ) : (
        <>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleLoginChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleLoginChange}
            />
          </label>
        </>
      )}

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button type="submit" className={baseStyle.createBtn} disabled={loading}>
        {loading ? (authMode === 'signUp' ? 'Registering...' : 'Logging in...') : (authMode === 'signUp' ? 'Create Account' : 'Log In')}
      </button>

      <div className={baseStyle.separator}>or</div>
      <GoogleAuthButton />

      {authMode === 'signUp' && (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
          <p style={{ fontSize: '12px', letterSpacing: '0.5px', color: '#666', marginTop: '12px', textAlign: 'center' }}>
            By signing up to create an account I accept Company’s
          </p>
          <span style={{ textAlign: 'center' }}>
            <Link style={{ textDecoration: 'underline' }} href="/terms" target="_blank" rel="noopener noreferrer">
              Terms of use
            </Link>{' '}
            &{' '}
            <Link style={{ textDecoration: 'underline' }} href="/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>.
          </span>
        </div>
      )}
    </form>
  );
}
