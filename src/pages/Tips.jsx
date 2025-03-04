import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/bg.jpg";

const tipsList = [
  { id: 1, title: "Gunakan Botol Minum Isi Ulang", description: "Kurangi penggunaan botol plastik sekali pakai dengan membawa botol minum sendiri." },
  { id: 2, title: "Bawa Tas Belanja Sendiri", description: "Hindari penggunaan plastik dengan membawa tas belanja kain atau ramah lingkungan." },
  { id: 3, title: "Pisahkan Sampah dengan Benar", description: "Pastikan untuk memilah sampah organik dan non-organik agar lebih mudah didaur ulang." },
  { id: 4, title: "Gunakan Produk Ramah Lingkungan", description: "Pilih produk dengan kemasan minimal atau yang dapat digunakan kembali." },
  { id: 5, title: "Manfaatkan Sampah Organik", description: "Sampah organik bisa dijadikan kompos untuk menyuburkan tanaman." },
];

const Tips = () => {
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
        <h1 className="text-3xl font-bold text-green-700">TrashTips</h1>
        <p className="mt-2 text-lg text-gray-700">Tips dan edukasi tentang daur ulang sampah</p>

        <ul className="mt-4 space-y-4">
          {tipsList.map((tip, index) => (
            <motion.li
              key={tip.id}
              className="p-4 bg-gray-100 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-lg font-semibold text-green-700">{tip.title}</h3>
              <p className="text-gray-700 mt-1">{tip.description}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Tips;
