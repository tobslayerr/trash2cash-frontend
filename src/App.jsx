import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Rewards from "./pages/Rewards";
import DropZone from "./pages/DropZone";
import ImpactTracker from "./pages/ImpactTracker";
import Challenge from "./pages/Challenge";
import Streak from "./pages/Streak";
import Leaderboard from "./pages/Leaderboard";
import Wallet from "./pages/Wallet";
import Tips from "./pages/Tips";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router className="font-poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/dropzone" element={<DropZone />} />
        <Route path="/impact-tracker" element={<ImpactTracker />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/streak" element={<Streak />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </Router>
  );
}

export default App;