import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../common/Button";
import { signIn } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import DialogBox from "./DialogBox";

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInCompleted, setSignInCompleted] = useState(false);

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      console.log("Attempting sign in...");
      const token = await signIn({ email, password });
      console.log("Sign-in successful. Token:", token);

      dispatch({ type: "SIGN_IN_SUCCESS", payload: { token } });
      console.log("Dispatched SIGN_IN_SUCCESS action with payload:", { token });

      localStorage.setItem("user", JSON.stringify({ token }));
      console.log("Stored user data in local storage:", { token });

      // Set the sign-in completion state to true
      setSignInCompleted(true);

      // Redirect to the dashboard after a delay
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Sign In Error:", error);
    }
  };

  const closeDialog = () => {
    setSignInCompleted(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignIn}
        method="post"
        className="bg-stone-200 p-8 rounded shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Sign In Page
        </h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
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
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
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
        <Button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign In
        </Button>
        <p className="mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </form>

      <DialogBox
        isOpen={signInCompleted}
        onClose={closeDialog}
        message="Signing completed! Redirecting to the dashboard..."
      />
    </div>
  );
};

export default SignIn;
