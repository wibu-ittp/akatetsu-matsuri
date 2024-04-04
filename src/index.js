// React
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Styles
import "./styles/index.css";

// Pages
import App from "./pages/App";
import Recruitment from "./pages/Recruitment";
import Position from "./pages/Position";
import Loading from "./pages/Loading";

// ScrollToTop
import ScrollToTop from "./components/ScrollToTop";

// Utils
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const RootComponent = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulasi proses loading data dengan timeout
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 2000); // misalnya 2 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        {contentLoaded ? (
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/position/:slug" element={<Position />} />
          </Routes>
        ) : (
          <Loading />
        )}
      </Router>
    </React.StrictMode>
  );
};

root.render(<RootComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
