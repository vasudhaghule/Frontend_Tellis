import React from "react";
import Simg from "../assets/betty1.webp";

const Start = () => {
  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #c7d2fe, #e9d5ff, #fbcfe8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
  };

  const boxStyle = {
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(14px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    borderRadius: "20px",
    padding: "40px 30px",
    width: "100%",
    maxWidth: "420px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    transition: "transform 0.3s ease",
  };

  const imgStyle = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    display: "block",
    margin: "0 auto 24px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    border: "4px solid white",
    objectFit: "cover",
  };

  const headingStyle = {
    fontSize: "26px",
    fontWeight: "700",
    color: "#4338ca",
    textAlign: "center",
    marginBottom: "16px",
    letterSpacing: "0.5px",
  };

  const descStyle = {
    textAlign: "center",
    color: "#4b5563",
    fontSize: "15px",
    marginBottom: "32px",
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    color: "#374151",
    marginBottom: "6px",
    fontWeight: "500",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    border: "1px solid #d1d5db",
    borderRadius: "10px",
    outline: "none",
    marginBottom: "20px",
    transition: "box-shadow 0.2s ease, border 0.2s ease",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  const inputFocusStyle = {
    ...inputStyle,
    border: "1px solid #6366f1",
    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.2)",
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#4f46e5",
    color: "white",
    fontWeight: "600",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    letterSpacing: "0.5px",
    transition: "transform 0.2s ease, background 0.2s ease",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#4338ca",
    transform: "scale(1.02)",
  };

  const [inputFocus, setInputFocus] = React.useState(null);
  const [hovered, setHovered] = React.useState(false);

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <img src={Simg} alt="Betty" style={imgStyle} />

        <h2 style={headingStyle}>Start Your Mortgage Application</h2>

        <p style={descStyle}>
          Fill in a few basic details to begin your journey.
        </p>

        <form>
          <div>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              style={inputFocus === "name" ? inputFocusStyle : inputStyle}
              onFocus={() => setInputFocus("name")}
              onBlur={() => setInputFocus(null)}
            />
          </div>

          <div>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              placeholder="vasudhaghule33@gmail.com"
              style={inputFocus === "email" ? inputFocusStyle : inputStyle}
              onFocus={() => setInputFocus("email")}
              onBlur={() => setInputFocus(null)}
            />
          </div>

          <div>
            <label style={labelStyle}>Property Type</label>
            <select
              style={inputFocus === "select" ? inputFocusStyle : inputStyle}
              onFocus={() => setInputFocus("select")}
              onBlur={() => setInputFocus(null)}
            >
              <option>Home Purchase</option>
              <option>Refinance</option>
              <option>Investment</option>
            </select>
          </div>

          <button
            type="submit"
            style={hovered ? buttonHoverStyle : buttonStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Start Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Start;
