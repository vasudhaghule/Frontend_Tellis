import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Styles as JS objects
  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "all 0.3s",
    backgroundColor: isScrolled ? "rgba(255,255,255,0.9)" : "transparent",
    backdropFilter: isScrolled ? "blur(10px)" : "none",
    boxShadow: isScrolled
      ? "0 4px 6px rgba(0,0,0,0.1)"
      : "none",
  };

  const containerStyle = {
    maxWidth: "112rem", // max-w-7xl approx 112rem (1792px)
    margin: "0 auto",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    // sm:px-6 lg:px-8 = 1.5rem, 2rem
  };

  const containerResponsivePadding = {
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    "@media (min-width: 1024px)": {
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
  };

  // Since inline styles don't support media queries well, we'll keep basic padding for demo

  const flexStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "4rem", // h-16
  };

  const brandStyle = {
    fontSize: "1.5rem", // text-2xl
    fontWeight: "bold",
    background: "linear-gradient(to top right, #414ac5, #06352a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    cursor: "pointer",
    textDecoration: "none",
  };

  const navLinksContainerStyle = {
    display: "none",
    gap: "2.5rem", // space-x-10 = 2.5rem
    color: "#4a5568", // gray-700
    fontWeight: "600",
    letterSpacing: "0.05em", // tracking-wide
  };

  // Show nav links on md+ (768px)
  // For demo, we'll toggle via a state or simple window width check in render (but limited in inline styles)
  // So we'll create a simple custom hook to get window width

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showNavLinks = windowWidth >= 768;

  // Individual link style with hover underline effect

  // Since inline styles don't handle pseudo-classes, we'll handle hover effect with React state

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const linkBaseStyle = {
    position: "relative",
    padding: "0.25rem 0.25rem", // px-1 py-2 (rough)
    color: "#4a5568",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  const linkHoverStyle = {
    color: "#5a67d8", // indigo-600
  };

  const underlineStyle = {
    position: "absolute",
    left: 0,
    bottom: "-4px",
    height: "2px",
    backgroundColor: "#5a67d8",
    transition: "width 0.3s",
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    borderRadius: "0.375rem", // rounded-md
    cursor: "pointer",
    color: "#4a5568",
    background: "transparent",
    border: "none",
    outline: "none",
    transition: "color 0.2s",
  };

  const buttonHoverStyle = {
    color: "#5a67d8",
  };

  // Mobile menu container style
  const mobileMenuStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    padding: "1rem 1.5rem",
    borderTop: "1px solid #e5e7eb", // gray-200
    gap: "0.75rem",
  };

  const mobileLinkStyle = {
    color: "#4a5568",
    fontWeight: "600",
    fontSize: "1.125rem", // text-lg
    cursor: "pointer",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  const mobileLinkHoverStyle = {
    color: "#5a67d8",
  };

  // For toggle icons, we can keep your SVGs as is.

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={flexStyle}>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            style={brandStyle}
          >
            Better Mortgage
          </Link>

          {showNavLinks && (
            <div style={{ ...navLinksContainerStyle, display: "flex" }}>
              {["Home", "About", "Calculator", "Start"].map((item, idx) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  style={{
                    ...linkBaseStyle,
                    ...(hoveredIndex === idx ? linkHoverStyle : {}),
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item}
                  <span
                    style={{
                      ...underlineStyle,
                      width: hoveredIndex === idx ? "100%" : "0",
                    }}
                  />
                </Link>
              ))}
            </div>
          )}

          {/* Hamburger menu button */}
          {windowWidth < 768 && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              style={{
                ...buttonStyle,
                ...(isOpen ? buttonHoverStyle : {}),
              }}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            >
              {isOpen ? (
                <svg
                  style={{ height: "2rem", width: "2rem" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  style={{ height: "2rem", width: "2rem" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && windowWidth < 768 && (
        <div style={mobileMenuStyle}>
          {["Home", "About", "Calculator", "Start"].map((item, idx) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              style={{
                ...mobileLinkStyle,
                ...(hoveredIndex === idx ? mobileLinkHoverStyle : {}),
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
