import React from 'react';
import { motion } from 'framer-motion';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-primary py-12">
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-third rounded-xl shadow-md w-full max-w-2xl mx-4"
            >
                <h2 className="text-2xl font-bold mb-6 text-primary-text text-center">Registration</h2>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-secondary-text mb-1">First Name</label>
                            <input type="text" id="firstName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary" placeholder="Enter your first name" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-secondary-text mb-1">Last Name</label>
                            <input type="text" id="lastName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary-text mb-1">Email</label>
                        <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary" placeholder="Enter your email" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-secondary-text mb-1">Password</label>
                        <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary" placeholder="Enter your password" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary-text mb-1">Confirm Password</label>
                        <input type="password" id="confirmPassword" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary" placeholder="Confirm your password" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-secondary-text mb-1">Phone Number</label>
                        <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary" placeholder="Enter your phone number" />
                    </div>
                    <div>
                        <label htmlFor="dob" className="block text-sm font-medium text-secondary-text mb-1">Date of Birth</label>
                        <input type="date" id="dob" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary" />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-secondary-text mb-1">Address</label>
                        <input type="text" id="address" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary" placeholder="Enter your address" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-secondary-text mb-1">City</label>
                            <input type="text" id="city" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary" placeholder="Enter your city" />
                        </div>
                        <div>
                            <label htmlFor="state" className="block text-sm font-medium text-secondary-text mb-1">State/Province</label>
                            <input type="text" id="state" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary" placeholder="Enter your state/province" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="zip" className="block text-sm font-medium text-secondary-text mb-1">Zip/Postal Code</label>
                            <input type="text" id="zip" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary" placeholder="Enter your zip/postal code" />
                        </div>
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium text-secondary-text mb-1">Country</label>
                            <input type="text" id="country" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary" placeholder="Enter your country" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="occupation" className="block text-sm font-medium text-secondary-text mb-1">Occupation</label>
                        <input type="text" id="occupation" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary" placeholder="Enter your occupation" />
                    </div>
                    <div>
                        <label htmlFor="interests" className="block text-sm font-medium text-secondary-text mb-1">Interests</label>
                        <input type="text" id="interests" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary" placeholder="Enter your interests" />
                    </div>
                    <div>
                        <label htmlFor="hearAboutUs" className="block text-sm font-medium text-secondary-text mb-1">How did you hear about us?</label>
                        <select id="hearAboutUs" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary">
                            <option value="">Select an option</option>
                            <option value="search">Search Engine</option>
                            <option value="social">Social Media</option>
                            <option value="friend">Friend Referral</option>
                            <option value="ad">Advertisement</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-[#6b90bd] transition-colors duration-300"
                    >
                        Register
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;