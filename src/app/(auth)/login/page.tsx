"use client";

import Link from "next/link";

export default function Login() {
  const handleLogin = (e: any) => {
    e.preventDefault();
    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* <!-- Left: Image --> */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      {/* <!-- Right: Login Form --> */}
      <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={(e) => handleLogin(e)}>
          {/* <!-- Email Input --> */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* <!-- Password Input --> */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* <!-- Remember Me Checkbox --> */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label htmlFor="remember" className="text-gray-600 ml-2">
              Remember Me
            </label>
          </div>
          {/* <!-- Forgot Password Link --> */}
          <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          {/* <!-- Login Button --> */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
        {/* <!-- Sign up Link --> */}
        <div className="mt-6 text-blue-500 text-center">
          <Link href="/register" className="hover:underline">
            Sign up Here
          </Link>
        </div>
      </div>
    </div>
  );
}
