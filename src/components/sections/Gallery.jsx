import React from 'react';
import SectionHeader from "../ui/SectionHeader";
import { motion } from 'framer-motion';
import { galleryItems } from "../../utils";

const Gallery = () => {
    return (
        <section className="mt-5 max-w-4xl mx-auto md:px-8" id="gallery">
            <SectionHeader title={"Gallery."} subtitle={"My Visual Journey"} />

            <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-0 gap-5">
                {galleryItems.slice(0, 4).map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                            <p className="text-white text-xl font-bold mb-2">{item.title}</p>
                            <p className="text-white text-sm text-center">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;