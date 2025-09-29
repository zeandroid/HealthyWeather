
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { API_ENDPOINTS, apiCall } from '@/lib/api-config';
import { ContactSubmissionRequest, ContactSubmissionResponse } from '@/lib/api-types';

interface FormState {
  name: string;
  email: string;
  message: string;
  isSubmitting: boolean;
  responseMessage: string;
  isError: boolean;
  isSuccess: boolean;
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    isSubmitting: false,
    responseMessage: '',
    isError: false,
    isSuccess: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!state.name || !state.email || !state.message) {
      setState(prev => ({
        ...prev,
        responseMessage: 'All fields are required',
        isError: true
      }));
      return;
    }

    setState(prev => ({ 
      ...prev, 
      isSubmitting: true, 
      responseMessage: '', 
      isError: false, 
      isSuccess: false 
    }));

    try {
      const requestData: ContactSubmissionRequest = {
        name: state.name,
        email: state.email,
        message: state.message
      };
      
      const data = await apiCall<ContactSubmissionResponse>(
        API_ENDPOINTS.contact, 
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
          responseMessage: data?.message || 'Message sent successfully!',
          name: '',
          email: '',
          message: ''
        }));
      } else {
        setState(prev => ({
          ...prev,
          isSubmitting: false,
          isError: true,
          responseMessage: data?.error || 'Failed to send message. Please try again.'
        }));
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setState(prev => ({
        ...prev,
        isSubmitting: false,
        isError: true,
        responseMessage: 'Network error. Please try again.'
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      [name]: value,
      responseMessage: '',
      isError: false,
      isSuccess: false
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleInputChange}
              placeholder="Your name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--healthy-teal)] focus:border-transparent transition-colors"
              disabled={state.isSubmitting}
              required
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleInputChange}
              placeholder="Your email"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--healthy-teal)] focus:border-transparent transition-colors"
              disabled={state.isSubmitting}
              required
            />
          </div>
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <textarea
            name="message"
            value={state.message}
            onChange={handleInputChange}
            placeholder="Your message"
            rows={5}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--healthy-teal)] focus:border-transparent transition-colors resize-vertical"
            disabled={state.isSubmitting}
            required
          />
        </div>

        <motion.button
          type="submit"
          disabled={state.isSubmitting}
          whileHover={{ scale: state.isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[var(--healthy-teal)] text-white py-3 px-6 rounded-md hover:bg-[var(--healthy-teal-dark)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {state.isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </motion.button>

        {state.responseMessage && (
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
            {state.responseMessage}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
