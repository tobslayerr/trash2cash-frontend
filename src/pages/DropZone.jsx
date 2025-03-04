import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "../assets/bg.jpg";

const DropZone = () => {
  const [location, setLocation] = useState(null);
  
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error mendapatkan lokasi: ", error);
        }
      );
    } else {
      console.error("Geolokasi tidak didukung oleh browser ini.");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white p-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        className="w-full max-w-md p-6 bg-white bg-opacity-90 shadow-lg rounded-lg text-gray-900 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="text-3xl font-bold text-green-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          DropZone
        </motion.h1>
        <motion.p
          className="mt-2 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Temukan mesin sampah terdekat dan dapatkan kode untuk Scan & Earn!
        </motion.p>
        <motion.button
          onClick={getLocation}
          className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📍 Cari Mesin Sampah Terdekat
        </motion.button>
        <AnimatePresence>
          {location && (
            <motion.div
              className="mt-6 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl font-semibold text-green-700">Lokasi Anda:</h2>
              <p className="text-gray-700">Latitude: {location.lat}</p>
              <p className="text-gray-700">Longitude: {location.lng}</p>
              <motion.iframe
                className="mt-4 w-full h-64 rounded-lg shadow-lg"
                title="Google Maps"
                src={`https://www.google.com/maps?q=${location.lat},${location.lng}&output=embed`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              ></motion.iframe>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DropZone;
