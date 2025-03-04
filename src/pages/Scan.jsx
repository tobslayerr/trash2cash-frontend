import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "../assets/bg.jpg";

const Scan = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef(null);

  const startCamera = async () => {
    setCameraActive(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera: ", error);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      let tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
    setCameraActive(false);
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Scan QR Code
      </motion.h1>

      <motion.p
        className="mt-3 text-lg text-center max-w-lg text-black bg-white bg-opacity-70 p-2 rounded-lg shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      >
        Klik tombol di bawah untuk mulai scan QR Code 📷
      </motion.p>

      <motion.div
        className="mt-8 w-full max-w-md p-6 bg-white bg-opacity-90 shadow-xl rounded-lg text-gray-900 text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {!cameraActive ? (
          <motion.button
            onClick={startCamera}
            className="mt-4 w-full bg-green-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📷 Mulai Scan QR Code
          </motion.button>
        ) : (
          <AnimatePresence>
            <motion.div
              key="camera"
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
            >
              <video ref={videoRef} autoPlay className="w-full h-auto rounded-lg shadow-md mt-4"></video>
              <motion.button
                onClick={stopCamera}
                className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full shadow-md hover:bg-red-700 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ❌ Close
              </motion.button>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
};

export default Scan;
