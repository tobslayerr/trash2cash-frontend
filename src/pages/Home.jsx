import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import bgImage from "../assets/bg.jpg";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-green-900"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.h1
        className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-green-700 via-lime-600 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <TypeAnimation
          sequence={[
            "Trash2Cash",  
            3000,          
            "",           
            500,           
          ]}
          wrapper="span"
          speed={20} 
          repeat={Infinity} 
        />
      </motion.h1>

      <motion.p
        className="mt-4 text-sm sm:text-xl text-center max-w-2xl text-green-800 bg-white bg-opacity-50 p-2 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        Ubah sampah Anda menjadi poin dan hadiah menarik sambil menjaga lingkungan tetap bersih! 
      </motion.p>

      <motion.div
        className="mt-10 w-full max-w-sm sm:max-w-xl p-6 sm:p-8 bg-white bg-opacity-80 shadow-xl rounded-2xl text-gray-900 text-center border-2 border-green-500"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
          Fitur Utama
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-6 text-base sm:text-lg">
          <div className="p-2 sm:p-3 rounded-lg bg-lime-100 text-green-900 shadow">
            <strong>Scan & Earn</strong>
          </div>
          <div className="p-2 sm:p-3 rounded-lg bg-lime-100 text-green-900 shadow">
            <strong>EcoPoints</strong>
          </div>
          <div className="p-2 sm:p-3 rounded-lg bg-lime-100 text-green-900 shadow">
            <strong>Green Rewards</strong>
          </div>
          <div className="p-2 sm:p-3 rounded-lg bg-lime-100 text-green-900 shadow">
            <strong>DropZone</strong>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/scan"
              className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
            >
              🚀Mulai Scan Untuk mendapatkan poin
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
