import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { CheckCircle, Mail, Lock, User, ChevronDown } from 'lucide-react';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('farmer');
  const [isSignUp, setIsSignUp] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn, signUp } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isSignUp) {
        await signUp(email, password, fullName, role);
        setIsSignUp(false);
        alert('Account created successfully! Please login.');
      } else {
        await signIn(email, password, rememberMe);
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err?.response?.data?.error || err?.message || 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-200">
      <div className="max-w-md w-full bg-white p-10 rounded-xl shadow-lg border border-green-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 animate-fade-in">{isSignUp ? 'Create Account' : 'Sign In'}</h2>
        {error && (
          <div className="bg-red-500 text-white px-4 py-3 rounded mb-4 text-center font-semibold">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignUp && (
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-600" size={18} />
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 bg-white text-gray-800" required />
              </div>
            </div>
          )}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-600" size={18} />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 bg-white text-gray-800" required />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-600" size={18} />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 bg-white text-gray-800" required />
            </div>
          </div>
          {!isSignUp && (
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="hidden" />
              <label htmlFor="rememberMe" className="flex items-center cursor-pointer text-gray-700">
                <div className={`w-5 h-5 border-2 border-green-500 rounded flex items-center justify-center ${rememberMe ? 'bg-green-500' : 'bg-white'}`}>
                  {rememberMe && <CheckCircle className="text-white" size={18} />}
                </div>
                <span className="ml-2">Remember Me</span>
              </label>
            </div>
          )}
          <button type="submit" className="w-full bg-green-500 text-white py-3 px-4 rounded-md font-semibold hover:bg-green-600 transition duration-200">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <p className="mt-6 text-center text-gray-700">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-orange-500 font-semibold hover:underline">
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Auth;
