import React, { useState } from 'react';
import { X, CheckCircle, Lock } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
    setTimeout(() => {
      onLoginSuccess(email || 'client@ralphlauren.in');
      setLoggedIn(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="bg-white max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close authentication"
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-black rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {loggedIn ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle className="w-12 h-12 text-[#1E5631] mx-auto animate-bounce" />
            <h3 className="font-serif-brand text-xl text-black">Welcome to Selleria Luxury</h3>
            <p className="text-xs text-gray-500">Signing into your partner & client portal...</p>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="font-serif-brand text-xl font-normal tracking-[0.25em] text-black block mb-1">
                SELLERIA LUXURY
              </span>
              <p className="text-xs uppercase tracking-widest text-[#1E5631] font-semibold">
                {isSignUp ? 'Create a B2B Partner Profile' : 'B2B Partner & Client Sign In'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-700 uppercase tracking-wider text-[10px] font-semibold mb-1">
                  Business Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="partner@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 border border-gray-300 focus:border-[#1E5631] outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700 uppercase tracking-wider text-[10px] font-semibold mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2.5 border border-gray-300 focus:border-[#1E5631] outline-none text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#1E5631] hover:bg-[#184728] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>{isSignUp ? 'Create B2B Account' : 'Sign In to Portal'}</span>
                </button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-gray-100 text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-xs text-gray-600 hover:text-[#1E5631] underline tracking-wider cursor-pointer"
              >
                {isSignUp
                  ? 'Already have an account? Sign in'
                  : 'New to Selleria Luxury? Create a B2B client profile'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
