'use client';

import React, { useState, FormEvent } from 'react';
import baseStyle from './BaseForm.module.css'

type Props = {
    onComplete?: () => void;
};

export default function AccountSetupForm({ onComplete }: Props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!username || !password || !passwordRepeat) {
            setError('All fields are required');
            return;
        }

        if (password !== passwordRepeat) {
            setError('The passwords do not match');
            return;
        }

        setLoading(true);


        setTimeout(() => {
            setLoading(false);
            if (onComplete) onComplete();
        }, 500);
    };

    return (
        <form className={baseStyle.form} onSubmit={handleSubmit}>
            <h2 className={baseStyle.logoTitle}>EasyLearn</h2>
             <h2 className={baseStyle.formTitle}>Account Setup</h2>

            <label>
                Username
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                />
            </label>

            <label>
                Password
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
            </label>

            <label>
                Repeat Password
                <input
                    type="password"
                    value={passwordRepeat}
                    onChange={(e) => setPasswordRepeat(e.target.value)}
                    placeholder="Repeat your password"
                />
            </label>

            {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}

            <button type="submit" className={baseStyle.createBtn} disabled={loading}>
                {loading ? 'Submitting...' : 'Continue'}
            </button>
        </form>
    );
}

