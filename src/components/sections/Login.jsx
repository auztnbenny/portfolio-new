import React from 'react';
import { motion } from 'framer-motion';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-primary">
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-third rounded-xl shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-primary-text text-center">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary-text mb-1">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-secondary-text mb-1">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-[#6b90bd] transition-colors duration-300"
                    >
                        Login
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;