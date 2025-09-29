
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { API_ENDPOINTS, apiCall } from '@/lib/api-config';
import { AllergySignupRequest, AllergySignupResponse } from '@/lib/api-types';

interface FormState {
  email: string;
  isSubmitting: boolean;
  message: string;
  isError: boolean;
  isSuccess: boolean;
}

export default function AllergySignupForm() {
  const [state, setState] = useState<FormState>({
    email: '',
    isSubmitting: false,
    message: '',
    isError: false,
    isSuccess: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!state.email) {
      setState(prev => ({
        ...prev,
        message: 'Email is required',
        isError: true
      }));
      return;
    }

    setState(prev => ({ ...prev, isSubmitting: true, message: '', isError: false }));

    try {
      const requestData: AllergySignupRequest = { email: state.email };
      const data = await apiCall<AllergySignupResponse>(
        API_ENDPOINTS.allergySignup, 
        {
          method: 'POST',
          body: JSON.stringify(requestData),
        }
      );

      if (data?.success) {
        setState(prev => ({
          ...prev,
          isSubmitting: false,
          isSuccess: true,
          message: data?.message || 'Successfully signed up!',
          email: ''
        }));
      } else {
        setState(prev => ({
          ...prev,
          isSubmitting: false,
          isError: true,
          message: data?.error || 'Failed to sign up. Please try again.'
        }));
      }
    } catch (error) {
      console.error('Signup error:', error);
      setState(prev => ({
        ...prev,
        isSubmitting: false,
        isError: true,
        message: 'Network error. Please try again.'
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({
      ...prev,
      email: e.target.value,
      message: '',
      isError: false,
      isSuccess: false
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="email"
            value={state.email}
            onChange={handleInputChange}
            placeholder="Enter your email for early access"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--healthy-teal)] focus:border-transparent transition-colors"
            disabled={state.isSubmitting || state.isSuccess}
            required
          />
        </div>

        <motion.button
          type="submit"
          disabled={state.isSubmitting || state.isSuccess}
          whileHover={{ scale: state.isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[var(--healthy-teal)] text-white py-3 px-6 rounded-md hover:bg-[var(--healthy-teal-dark)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {state.isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing up...
            </>
          ) : state.isSuccess ? (
            <>
              <CheckCircle className="h-4 w-4" />
              Signed up!
            </>
          ) : (
            'Get Early Access'
          )}
        </motion.button>

        {state.message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`flex items-center gap-2 text-sm ${
              state.isError ? 'text-red-600' : 'text-green-600'
            }`}
          >
            {state.isError ? (
              <AlertCircle className="h-4 w-4" />
            ) : (
              <CheckCircle className="h-4 w-4" />
            )}
            {state.message}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
