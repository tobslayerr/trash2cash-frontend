import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/bg.jpg";

const challengeList = [
  { id: 1, name: "Daur ulang 5 botol plastik", points: 50 },
  { id: 2, name: "Gunakan tas belanja ramah lingkungan selama seminggu", points: 100 },
  { id: 3, name: "Kumpulkan 2kg sampah plastik", points: 200 },
];

const Challenge = () => {
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [userPoints, setUserPoints] = useState(500);

  const completeChallenge = (challenge) => {
    if (!completedChallenges.includes(challenge.id)) {
      setCompletedChallenges([...completedChallenges, challenge.id]);
      setUserPoints(userPoints + challenge.points);
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
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold text-green-700">TrashTastic Challenge</h1>
        <p className="mt-2 text-lg text-gray-700">Selesaikan tantangan dan dapatkan poin tambahan!</p>

        <motion.h2
          className="text-xl font-semibold text-green-700 mt-4"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5, repeat: 1 }}
        >
          Poin Anda: {userPoints}
        </motion.h2>

        <ul className="mt-4 space-y-2">
          {challengeList.map((challenge, index) => (
            <motion.li
              key={challenge.id}
              className="flex justify-between p-3 bg-gray-100 rounded-lg shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span>{challenge.name} ({challenge.points} poin)</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => completeChallenge(challenge)}
                className={`px-3 py-1 rounded-lg text-white ${
                  completedChallenges.includes(challenge.id)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 transition"
                }`}
                disabled={completedChallenges.includes(challenge.id)}
              >
                {completedChallenges.includes(challenge.id) ? "Selesai" : "Selesaikan"}
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Challenge;
