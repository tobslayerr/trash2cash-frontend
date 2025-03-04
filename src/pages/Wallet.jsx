import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/bg.jpg";

const Wallet = () => {
  const [userPoints, setUserPoints] = useState(1200);
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Dapat Poin", amount: 300, date: "2025-03-01" },
    { id: 2, type: "Tukar ke OVO", amount: -500, date: "2025-02-28" },
    { id: 3, type: "Dapat Poin", amount: 400, date: "2025-02-27" },
  ]);

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
        <h1 className="text-3xl font-bold text-green-700">Waste Wallet</h1>
        <p className="mt-2 text-lg text-gray-700">Kelola poin hasil daur ulang Anda</p>

        <motion.h2
          className="text-xl font-semibold text-green-700 mt-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Poin Anda: {userPoints}
        </motion.h2>

        <h3 className="mt-4 text-lg font-semibold text-green-700">Riwayat Transaksi</h3>
        <ul className="mt-2 space-y-2">
          {transactions.map((tx, index) => (
            <motion.li
              key={tx.id}
              className={`flex justify-between p-3 bg-gray-100 rounded-lg shadow ${
                tx.amount < 0 ? "text-red-500" : "text-green-700"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span>{tx.type}</span>
              <span>{tx.amount} Poin</span>
              <span className="text-gray-500 text-sm">{tx.date}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Wallet;
