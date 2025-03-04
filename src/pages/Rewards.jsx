import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ovoLogo from "../assets/ovo.png";
import gopayLogo from "../assets/gopay.png";
import danaLogo from "../assets/dana.png";
import bgImage from "../assets/bg.jpg";

const paymentOptions = [
  { id: 1, name: "OVO", rate: 100, logo: ovoLogo },
  { id: 2, name: "GoPay", rate: 100, logo: gopayLogo },
  { id: 3, name: "DANA", rate: 100, logo: danaLogo },
];

const Rewards = () => {
  const [userPoints, setUserPoints] = useState(800);
  const [selectedOption, setSelectedOption] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleRedeem = () => {
    if (!selectedOption) {
      setMessage("Silakan pilih metode pembayaran.");
      return;
    }
    if (!phoneNumber) {
      setMessage("Silakan masukkan nomor HP Anda.");
      return;
    }
    if (!amount || parseInt(amount) <= 0) {
      setMessage("Silakan masukkan jumlah yang valid.");
      return;
    }
    const pointsRequired = parseInt(amount) * selectedOption.rate;
    if (userPoints >= pointsRequired) {
      setUserPoints(userPoints - pointsRequired);
      setMessage(`✅ Poin berhasil dikonversi! Rp${amount}.000 telah dikirim ke ${phoneNumber} (${selectedOption.name}).`);
      setAmount("");
      setPhoneNumber("");
    } else {
      setMessage("❌ Poin Anda tidak cukup untuk penukaran ini.");
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
          Tukar Poin
        </motion.h1>
        <motion.p
          className="mt-2 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Tukar poin Anda menjadi saldo OVO, GoPay, atau DANA
        </motion.p>

        <motion.h2
          className="text-xl font-semibold text-green-700 mt-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Poin Anda: {userPoints}
        </motion.h2>

        <div className="flex justify-around mt-4">
          {paymentOptions.map((option) => (
            <motion.button
              key={option.id}
              className={`flex flex-col items-center p-2 border rounded-lg w-1/3 transition-all ${
                selectedOption?.id === option.id ? "border-green-600 bg-green-100" : "border-gray-300 bg-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedOption(option)}
            >
              <img src={option.logo} alt={option.name} className="w-12 h-12" />
              <span className="mt-1 text-sm font-semibold">{option.name}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selectedOption && (
            <motion.div
              key="inputs"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
            >
              <input
                type="text"
                className="w-full p-2 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Masukkan nomor HP"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="number"
                className="w-full p-2 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Jumlah dalam ribuan (misal: 10 untuk Rp10.000)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <motion.button
                onClick={handleRedeem}
                className="mt-4 w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Tukarkan Poin
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {message && (
            <motion.p
              key="message"
              className="mt-4 font-semibold text-green-700"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Rewards;
