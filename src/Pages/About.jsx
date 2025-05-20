import React from "react";

const About = () => {
  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    overflowY: "auto",
    background: "linear-gradient(to right, #a5b4fc, #d8b4fe, #fbcfe8)",
    backgroundSize: "300% 300%",  // Needed for smooth animation
    animation: "gradientMove 6s ease infinite",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  };

  const contentWrapperStyle = {
    position: "relative",
    zIndex: 10,
    maxWidth: "768px",
    margin: "6rem auto 0 auto",
    padding: "2.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "1rem",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.2)",
  };

  const headingStyle = {
    fontSize: "2.25rem",
    fontWeight: "bold",
    color: "#3730a3",
    marginBottom: "1.5rem",
    textAlign: "center",
    textShadow: "0 1px 3px rgba(0,0,0,0.1)",
  };

  const paragraphStyle = {
    fontSize: "1.125rem",
    color: "#374151",
    marginBottom: "1rem",
    lineHeight: "1.7",
  };

  const highlightStyle = {
    fontWeight: "600",
    color: "#4f46e5",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>

      <div style={contentWrapperStyle}>
        <h2 style={headingStyle}>About Us</h2>

        <p style={paragraphStyle}>
          At <span style={highlightStyle}>Better Mortgage</span>, our mission is
          to simplify and streamline the mortgage process for everyone —
          whether you're buying your first home or refinancing...
        </p>

        <p style={paragraphStyle}>
          Our platform offers; an intuitive mortgage calculator, helpful
          resources...
        </p>

        <p style={paragraphStyle}>
          Whether you're exploring loan options or just getting started, Better
          Mortgage is here to help...
        </p>
      </div>
    </div>
  );
};

export default About;
