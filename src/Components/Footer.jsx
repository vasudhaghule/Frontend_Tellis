"use client"

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    {
      href: "/",
      title: "Facebook",
      svgPath:
        "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    },
    {
      href: "/",
      title: "Instagram",
      svgPath:
        "M12 2.2c3.2 0 3.6 0 4.8.1 1.3.1 2.2.3 2.7.6a4.8 4.8 0 0 1 1.8 1.8c.3.5.5 1.4.6 2.7.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.3-.3 2.2-.6 2.7a4.8 4.8 0 0 1-1.8 1.8c-.5.3-1.4.5-2.7.6-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.3-.1-2.2-.3-2.7-.6a4.8 4.8 0 0 1-1.8-1.8c-.3-.5-.5-1.4-.6-2.7C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.3.3-2.2.6-2.7a4.8 4.8 0 0 1 1.8-1.8c.5-.3 1.4-.5 2.7-.6 1.2-.1 1.6-.1 4.8-.1zm0 1.8c-3.1 0-3.5 0-4.7.1-.9.1-1.4.2-1.7.4-.4.2-.7.5-.9.9-.2.3-.4.8-.4 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1.9.2 1.4.4 1.7.2.4.5.7.9.9.3.2.8.4 1.7.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9-.1 1.4-.2 1.7-.4.4-.2.7-.5.9-.9.2-.3.4-.8.4-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-.9-.2-1.4-.4-1.7a2.2 2.2 0 0 0-.9-.9c-.3-.2-.8-.4-1.7-.4-1.2-.1-1.6-.1-4.7-.1zM12 6.4a5.6 5.6 0 1 0 0 11.2 5.6 5.6 0 0 0 0-11.2zm0 9.2a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2zm5.8-9.4a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6z",
    },
    {
      href: "/",
      title: "Twitter",
      svgPath:
        "M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.2 9.2 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.69 4.13A12.94 12.94 0 0 1 3.15 2.16a4.52 4.52 0 0 0 1.4 6.04A4.48 4.48 0 0 1 2.8 7.14v.06a4.52 4.52 0 0 0 3.63 4.43 4.52 4.52 0 0 1-2.04.08 4.52 4.52 0 0 0 4.22 3.14A9.06 9.06 0 0 1 2 19.54a12.94 12.94 0 0 0 7 2.05c8.4 0 13-7 13-13v-.59A9.23 9.23 0 0 0 23 3z",
    },
  ];

  // Styles
  const footerStyle = {
    backgroundColor: "#f9fafb", // light gray (#f9fafb)
    color: "#1e3a8a", // blue-950 equivalent (dark blue)
    padding: "2.5rem 1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const darkFooterStyle = {
    backgroundColor: "#111827", // dark gray-900
    color: "#9ca3af", // gray-400
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1.5rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "2rem",
  };

  // Media query for md grid cols = 4
  // Since inline styles don't support media queries, you'll want to handle this with CSS or a library like styled-components or emotion.
  // For simplicity, keep 1 column or you can use CSS for responsiveness.

  const headingStyle = {
    fontWeight: "600",
    marginBottom: "0.75rem",
  };

  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
    cursor: "pointer",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
  };

  const textGradientStyle = {
    fontSize: "1.5rem",
    fontWeight: "700",
    background: "linear-gradient(to right, #414ac5, #2bcaa5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    cursor: "pointer",
    display: "inline-block",
  };

  const socialIconStyle = {
    width: "20px",
    height: "20px",
    fill: "currentColor",
    cursor: "pointer",
  };

  const socialIconLinkStyle = {
    marginRight: "1rem",
    color: "#1e3a8a",
    transition: "color 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
  };

  const socialIconHoverColor = "#2563eb"; // blue-600

  const subscribeInputStyle = {
    flex: 1,
    padding: "0.5rem 0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem 0 0 0.375rem",
    fontSize: "0.875rem",
    outline: "none",
    backgroundColor: "white",
    color: "#1f2937",
  };

  const subscribeButtonStyle = {
    backgroundColor: "#2563eb", // blue-600
    color: "white",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0 0.375rem 0.375rem 0",
    fontSize: "0.875rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const bottomTextStyle = {
    marginTop: "2.5rem",
    borderTop: "1px solid #e5e7eb",
    paddingTop: "1.5rem",
    fontSize: "0.875rem",
    textAlign: "center",
    color: "#6b7280",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          <div>
            <a href="/" style={textGradientStyle}>
              Better Mortgage
            </a>
            <p style={{ marginTop: "1rem" }}>
              At Better Mortgage, our mission is to simplify and streamline the mortgage process for everyone.
            </p>
            <div style={{ marginTop: "1rem", display: "flex" }}>
              {socialIcons.map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.href}
                  aria-label={icon.title}
                  style={socialIconLinkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = socialIconHoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#1e3a8a")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={socialIconStyle}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={icon.svgPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={headingStyle}>Company</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 


0 }}>
{["About", "Careers", "Press", "News"].map((item, idx) => (
<li key={idx} style={{ marginBottom: "0.5rem" }}>
<a
href="/"
style={linkStyle}
onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
>
{item}
</a>
</li>
))}
</ul>
</div>

php-template
Copy
Edit
      <div>
        <h4 style={headingStyle}>Resources</h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {[
            "Support Center",
            "Contact Us",
            "Instructions",
            "How It Works",
          ].map((item, idx) => (
            <li key={idx} style={{ marginBottom: "0.5rem" }}>
              <a
                href="/"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 style={headingStyle}>Subscribe to our newsletter</h4>
        <p style={{ marginBottom: "1rem" }}>
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
        <form
          style={{ display: "flex", maxWidth: "400px" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            style={subscribeInputStyle}
          />
          <button
            type="submit"
            style={subscribeButtonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <p style={bottomTextStyle}>© {currentYear} Better Mortgage. All rights reserved.</p>
  </div>
</footer>
);
}

export default Footer;