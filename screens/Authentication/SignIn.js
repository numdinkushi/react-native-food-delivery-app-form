import React from 'react';
import {
    View,
    Text
} from 'react-native';
import AuthLayout from './AuthLayout';

const SignIn = () => {
    return (
        <AuthLayout
            title="Let's Sign You In"
            subtitle="Welcome back, you have been missed"
        />
    )
}

export default SignIn;