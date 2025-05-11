"use client";
import React, { useState } from "react";
import "./todoApp.css";

export default function TodoApp() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Todo Management Application
        </h1>
        <LoginComponent />
        {/* <WelcomeComponent /> */}
      </div>
    </div>
  );
}

function LoginComponent() {
  const [username, setUsername] = useState("Prayag");
  const [password, setPassword] = useState("123456");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLogin(event) {
    event.preventDefault();
    if (username === "Prayag" && password === "123456") {
      setIsAuthenticated(true);
      setIsError(false);
    } else {
      setIsAuthenticated(false);
      setIsError(true);
    }
  }

  function SuccessMessage() {
    if (!isAuthenticated) return null;
    return (
      <div className="mb-4 text-green-600 font-medium text-center">
        Authenticated Successfully.
      </div>
    );
  }

  function ErrorMessage() {
    if (!isError) return null;
    return (
      <div className="mb-4 text-red-600 font-medium text-center">
        Invalid Credentials. Please try again.
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <SuccessMessage />
      <ErrorMessage />
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          value={password}
          onChange={handlePasswordChange}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
        >
          Login
        </button>
      </div>
    </form>
  );
}
