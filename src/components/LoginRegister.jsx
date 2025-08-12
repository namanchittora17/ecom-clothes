import React from 'react'

const LoginRegister = () => {
  return (
   <div className="flex items-center justify-center min-h-screen">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
    <form method="GET" className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = "/login"; }}>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" id="name" name="name" required className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
      </div>
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" required className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
      </div>
      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" name="password" required className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
      </div>
      {/* Confirm Password */}
      <div>
        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" required className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
      </div>
      {/* Register Button */}
      <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">Register</button>
      {/* Back to Login */}
      <p className="text-center text-sm text-gray-600">Already have an account? 
        <a href="/login" className="text-black underline hover:text-gray-800">Login</a>
      </p>
    </form>
  </div>
</div>
  )
}

export default LoginRegister