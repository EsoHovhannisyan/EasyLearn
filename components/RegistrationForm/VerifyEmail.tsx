'use client';

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import baseStyle from './BaseForm.module.css'

type Props = {
    onVerifySuccess?: () => void;
};

export default function VerifyCodeForm({ onVerifySuccess }: Props) {
    const [code, setCode] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 4) setCode(value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        if (code.length !== 4) {
            setError('Enter 4 digits');
            return;
        }

        try {
            setLoading(true);

            //   const response = await fetch('/api/verify', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ code }),
            //   });

            //   if (!response.ok) {
            //     throw new Error('Verification failed');
            //   }


            if (onVerifySuccess) {
                onVerifySuccess();
            } 

        } catch (err) {
            setError('Invalid code, try again');
        } finally {
            setLoading(false);
        }
    };

    return (
        // <form className={baseStyle.form} onSubmit={handleSubmit}>
        //   <label>
        //     Verification Code
        //     <input
        //       type="text"
        //       inputMode="numeric"
        //       maxLength={4}
        //       placeholder="Enter 4-digit code"
        //       value={code}
        //       onChange={handleChange}
        //       autoFocus
        //       disabled={loading}
        //     />
        //   </label>

        //   {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}

        //   <button type="submit" className={baseStyle.createBtn} disabled={loading} style={{ marginTop: 12 }}>
        //     {loading ? 'Verifying...' : 'Verify'}
        //   </button>
        // </form>



        <form className={baseStyle.form} onSubmit={handleSubmit}>
            <div className={baseStyle.logoTitleBlock}>
                <h2  className={baseStyle.logoTitle}>EasyLearn</h2>
                <h2 className={baseStyle.formTitle}>Email Verification</h2>
                <p className={baseStyle.formDescription}>
                    We've sent a 4-digit verification code
                </p>
                <p className={baseStyle.formDescription}>
                    to your email
                </p>
                <Image
                    src={`/icons/email.png`}
                    alt='logo'
                    width={98}
                    height={98}
                />
            </div>
            <label>
                Verification Code
                <input
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="Enter 4-digit code"
                    value={code}
                    onChange={handleChange}
                    autoFocus
                    disabled={loading}
                />
            </label>

            {error && <div className={baseStyle.errorMessage}>{error}</div>}

            <button
                type="submit"
                className={baseStyle.createBtn}
                disabled={loading}
                style={{ marginTop: 12 }}
            >
                {loading ? 'Verifying...' : 'Verify'}
            </button>
        </form>

    );
}