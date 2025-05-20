import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 20px",
    background: "linear-gradient(to top right, #68b6eb, #9faeec, #43f0c7)",
  };

  const iconStyle = {
    fontSize: "72px",
    color: "#4f46e5", // indigo-600
    marginBottom: "32px",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: 800,
    color: "#1f2937", // gray-800
    marginBottom: "16px",
    lineHeight: "1.2",
    textShadow: "0 1px 1px rgba(0,0,0,0.1)",
  };

  const highlightStyle = {
    color: "#4f46e5", // indigo-600
  };

  const paragraphStyle = {
    fontSize: "1rem",
    color: "#4b5563", // gray-600
    maxWidth: "600px",
    marginBottom: "32px",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    backgroundColor: "#4f46e5",
    color: "white",
    fontSize: "1rem",
    fontWeight: 500,
    padding: "14px 32px",
    borderRadius: "9999px",
    textDecoration: "none",
    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease",
    display: "inline-block",
  };

  const buttonHoverStyle = {
    transform: "scale(1.05)",
    backgroundColor: "#4338ca",
  };

  return (
    <motion.section
      style={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <FaHome style={iconStyle} />

      <motion.h1
        style={headingStyle}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Own Your <span style={highlightStyle}>Dream Home</span> Today
      </motion.h1>

      <motion.p
        style={paragraphStyle}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Use our smart tools and insights to simplify your mortgage journey and
        take the first confident step toward your future home.
      </motion.p>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <Link
          to="/start"
          style={buttonStyle}
          onMouseOver={(e) =>
            Object.assign(e.target.style, buttonHoverStyle)
          }
          onMouseOut={(e) =>
            Object.assign(e.target.style, buttonStyle)
          }
        >
          Start Now
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Home;
