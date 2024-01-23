import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import { Header } from "../Navbar/Header";
import Browse from "./Browse";

const Body = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Body;
