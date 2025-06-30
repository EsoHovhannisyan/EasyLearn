
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import RegisterForm from '@/components/RegistrationForm/RegisterForm';
import VerifyCodeForm from '@/components/RegistrationForm/VerifyEmail';
import AccountSetupForm from '@/components/RegistrationForm/AccountSetupForm';
import CustomizeProfileForm from '@/components/RegistrationForm/CustomizeProfileForm';
import FinalStep from '@/components/RegistrationForm/FinalStep';
import baseStyle from '@/components/RegistrationForm/BaseForm.module.css'


export default function SignupPage() {
    const [step, setStep] = useState<'register' | 'verify' | 'account' | 'customize' | 'final'>('register');
    const router = useRouter();

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
            {step === 'register' && <RegisterForm onSuccess={() => setStep('verify')} />}

            {step === 'verify' && (
                <VerifyCodeForm onVerifySuccess={() => setStep('account')} />
            )}

            {step === 'account' && (
                <AccountSetupForm onComplete={() => setStep('customize')} />
            )}

            {step === 'customize' && (
                <CustomizeProfileForm onComplete={() => setStep('final')} />
            )}

            {step === 'final' && (
                <FinalStep onStartAction={() => router.push('/homePage')} />
            )}

        </div>
    );
}

