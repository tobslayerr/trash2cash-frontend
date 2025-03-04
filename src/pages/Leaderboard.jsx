import React from "react";
import bgImage from "../assets/bg.jpg";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const leaderboardData = [
  { id: 1, name: "Alice", points: 1200 },
  { id: 2, name: "Bob", points: 1100 },
  { id: 3, name: "Charlie", points: 950 },
  { id: 4, name: "David", points: 800 },
  { id: 5, name: "Eve", points: 750 },
];

const data = {
  labels: leaderboardData.map(user => user.name),
  datasets: [
    {
      label: "Poin",
      data: leaderboardData.map(user => user.points),
      backgroundColor: ["#34D399", "#60A5FA", "#FBBF24", "#F87171", "#A78BFA"],
      borderColor: "#ffffff",
      borderWidth: 1,
    },
  ],
};

const Leaderboard = () => {
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
        <h1 className="text-3xl font-bold text-green-700">EcoLeaderboard</h1>
        <p className="mt-2 text-lg text-gray-700">Peringkat pengguna terbaik dalam pengelolaan sampah</p>

        <motion.div
          className="mt-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
        </motion.div>

        <ul className="mt-6 space-y-2">
          {leaderboardData.map((user, index) => (
            <motion.li
              key={user.id}
              className="flex justify-between p-3 bg-gray-100 rounded-lg shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span className="font-semibold">#{index + 1} {user.name}</span>
              <span>{user.points} Poin</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Leaderboard;
