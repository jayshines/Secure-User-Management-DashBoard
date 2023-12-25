// SignUp.tsx
import React, { useState } from 'react';
import Button from '../common/Button';
import { signUp } from '../services/api';
import { Link } from 'react-router-dom';
import DialogBox from './DialogBox';


const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpCompleted, setSignUpCompleted] = useState(false);

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      console.log('Attempting sign up...');
      await signUp({ email, password });
      console.log('Sign-up successful.');

      // Set the sign-up completion state to true
      setSignUpCompleted(true);
    } catch (error) {
      console.error('Sign Up Error:', error);
    }
  };

  const closeDialog = () => {
    setSignUpCompleted(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <form
        onSubmit={handleSignUp}
        method="post"
        className="bg-white p-8 rounded shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up Page</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-1">
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-1">
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <Button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Sign Up
        </Button>

        <p className="mt-4">
          Already have an account? <Link to="/signin" className="text-blue-500">Sign In</Link>
        </p>
      </form>

      <DialogBox
        isOpen={signUpCompleted}
        onClose={closeDialog}
        message="SignUp Completed, You can SignIn Now!"
      />
    </div>
  );
};

export default SignUp;
