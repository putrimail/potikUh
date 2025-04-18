import "./App.css";
import HomePages from "./pages/HomePages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statwaves from "./pages/Statwaves";
import Inspire from "./pages/Inspire";
function App() {
  console.log(window.location.hostname);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/statwaves" element={<Statwaves />} />
        <Route path="/inspire" element={<Inspire />} />
      </Routes>
    </Router>
  );
}

export default App;
