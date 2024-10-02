import React from 'react';
import { motion } from 'framer-motion';

const GalleryItem = ({ item }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-lg"
        >
            <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black bg-opacity-50">
                <h3 className="text-xl text-white font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{item.description}</p>
            </div>
        </motion.div>
    );
};

export default GalleryItem;