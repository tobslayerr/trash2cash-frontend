import React from "react";
import bgImage from "../assets/bg.jpg";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ImpactTracker = () => {
  const userImpact = {
    totalRecycled: 15, 
    treesSaved: 30, 
    carbonReduced: 50, 
  };

  const data = {
    labels: ["Sampah Didaur Ulang", "Pohon Diselamatkan", "Pengurangan Karbon"],
    datasets: [
      {
        label: "Dampak Anda",
        data: [userImpact.totalRecycled, userImpact.treesSaved, userImpact.carbonReduced],
        backgroundColor: ["#34D399", "#60A5FA", "#FBBF24"],
        borderColor: "#ffffff",
        borderWidth: 1,
      },
    ],
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
        <h1 className="text-3xl font-bold text-green-700">Impact Tracker</h1>
        <p className="mt-2 text-lg text-gray-700">Lihat dampak positif Anda terhadap lingkungan</p>

        <motion.div
          className="mt-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
        </motion.div>

        <motion.table
          className="mt-6 w-full text-gray-800 border-collapse border border-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <thead>
            <tr className="bg-green-200">
              <th className="border border-gray-300 p-2">Kategori</th>
              <th className="border border-gray-300 p-2">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {[ 
              { icon: "♻️", category: "Sampah Didaur Ulang", value: `${userImpact.totalRecycled} kg` },
              { icon: "🌳", category: "Pohon Diselamatkan", value: userImpact.treesSaved },
              { icon: "🌍", category: "Pengurangan Karbon", value: `${userImpact.carbonReduced} kg CO2` }
            ].map((item, index) => (
              <motion.tr key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <td className="border border-gray-300 p-2">{item.icon} {item.category}</td>
                <td className="border border-gray-300 p-2">{item.value}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </motion.div>
    </div>
  );
};

export default ImpactTracker;
