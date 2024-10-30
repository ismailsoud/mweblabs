import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Announce success to screen readers
        const successMessage = document.getElementById('form-status');
        if (successMessage) {
          successMessage.focus();
        }
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-backGround">
      <form 
        onSubmit={handleSubmit} 
        className="space-y-6"
        aria-label="Contact form"
        noValidate
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300">
            Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 ${
              errors.name ? 'border-red-500' : ''
            }`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-300">
            Subject <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={`mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 ${
              errors.subject ? 'border-red-500' : ''
            }`}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300">
            Message <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            rows={4}
            className={`mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 ${
              errors.message ? 'border-red-500' : ''
            }`}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={status === 'sending'}
            aria-disabled={status === 'sending'}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-800 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-purple-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {status && (
          <div
            id="form-status"
            className={`text-center p-3 rounded ${
              status === 'success' ? 'bg-green-800/20 text-green-500' : 
              status === 'error' ? 'bg-red-800/20 text-red-500' : ''
            }`}
            role="status"
            aria-live="polite"
            tabIndex="-1"
          >
            {status === 'success' && 'Message sent successfully!'}
            {status === 'error' && 'Failed to send message. Please try again.'}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
