import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/bg.jpg";

const Streak = () => {
  const [streakDays, setStreakDays] = useState(5); 
  const [message, setMessage] = useState("");

  const claimReward = () => {
    if (streakDays >= 7) {
      setMessage("🎉 Selamat! Anda mendapatkan bonus 100 poin atas dedikasi Anda dalam mendaur ulang selama 7 hari berturut-turut.");
      setStreakDays(0); 
    } else {
      setMessage("🔥 Lanjutkan daur ulang setiap hari untuk mendapatkan bonus!");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white p-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        className="w-full max-w-md p-6 bg-white bg-opacity-90 shadow-lg rounded-lg text-gray-900 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold text-green-700">Recycle Streak</h1>
        <p className="mt-2 text-lg text-gray-700">Kumpulkan streak harian untuk mendapatkan bonus!</p>
        
        <motion.h2 
          className="text-xl font-semibold text-green-700 mt-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Streak Anda: {streakDays} hari
        </motion.h2>

        <p className="mt-2 text-gray-700">Daur ulang setiap hari tanpa terputus untuk mencapai 7 hari dan klaim bonus poin!</p>

        <motion.button
          onClick={claimReward}
          className={`mt-4 w-full text-white px-4 py-2 rounded-lg transition ${streakDays >= 7 ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}`}
          disabled={streakDays < 7}
          whileHover={streakDays >= 7 ? { scale: 1.05 } : {}}
          transition={{ duration: 0.2 }}
        >
          {streakDays >= 7 ? "🎁 Klaim Bonus" : "🔥 Teruskan Streak!"}
        </motion.button>

        {message && (
          <motion.p
            className="mt-4 font-semibold text-green-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Streak;
