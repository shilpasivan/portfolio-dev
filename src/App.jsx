import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/Home';
import About from './pages/About';
// In App.js or index.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/footer/Footer';
import Experience from './pages/Experiance';
import Projects from './pages/Project';
import Contact from './pages/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* <Header /> */}
      <main style={{ flex: 1 }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />       {/* Home page */}
          </Routes>
        </Router>
        {/* <Home /> */}
      </main>
      <Footer />
    </div>

  )
}

export default App
