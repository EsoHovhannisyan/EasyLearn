'use client';

import React, { useState, FormEvent, useRef } from 'react';
import baseStyle from './BaseForm.module.css'

type Props = {
    onComplete?: () => void;
};

export default function CustomizeProfileForm({ onComplete }: Props) {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleUploadClick = () => {
        inputRef.current?.click(); 
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // logika server nkari zagruzki hamar

        setTimeout(() => {
            setLoading(false);
            if (onComplete) onComplete();
        }, 1000);
    };

    const handleSkip = () => {
        if (onComplete) onComplete();
    };

    return (
        <form className={baseStyle.form} onSubmit={handleSubmit}>
            <h2 className={baseStyle.logoTitle}>EasyLearn</h2>
            <h2 className={baseStyle.formTitle}>Customize your Profile</h2>
            <p>Add a profile picture — or skip this step</p>

            <div style={{width:'358px',display:'flex', justifyContent:'center', alignItems:'center', marginBottom: 20, textAlign: 'center' }}>
                {preview ? (
                    <img
                        src={preview}
                        alt="Profile preview"
                        style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover' }}
                    />
                ) : (
                    <div
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: '50%',
                            backgroundColor: '#ccc',
                            display: 'inline-flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: 40,
                            color: '#888',
                            userSelect: 'none',
                        }}
                    >
                        👤
                    </div>
                )}
            </div>

            
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={inputRef}
                style={{ display: 'none' }}
            />

          
            <button
                type="button"
                onClick={handleUploadClick}
                disabled={loading}
                style={{
                    padding: '10px 20px',
                    cursor: 'pointer',
                    borderRadius: 5,
                    border: '1px solid #0070f3',
                    backgroundColor: 'white',
                    color: '#0070f3',
                    marginBottom: 20,
                }}
            >
                Upload Image
            </button>

            <br />

            <button
                type="submit"
                className={baseStyle.createBtn}
                disabled={loading}
                style={{ marginTop: 10, marginRight: 10 }}
            >
                {loading ? 'Saving...' : 'Create Account'}
            </button>

            <button
                type="button"
                onClick={handleSkip}
                disabled={loading}
                style={{ marginTop: 10 }}
                className={baseStyle.skipBtn}
            >
                Skip this step
            </button>
        </form>
    );
}


