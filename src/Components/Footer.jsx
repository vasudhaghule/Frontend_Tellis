import React from "react";

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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(120deg, #f9fafb 70%, #e0e7ff 100%);
          color: #1e3a8a;
          padding: 2.5rem 1rem 1.5rem 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
        }
        .footer-logo {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(to right, #414ac5, #2bcaa5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          cursor: pointer;
          display: inline-block;
          text-decoration: none;
          letter-spacing: -1px;
        }
        .footer-desc {
          margin-top: 1rem;
          color: #334155;
          font-size: 1.04rem;
        }
        .footer-social {
          margin-top: 1.2rem;
          display: flex;
          gap: 1.1rem;
        }
        .footer-social-link {
          color: #1e3a8a;
          transition: color 0.3s;
          display: inline-flex;
          align-items: center;
          font-size: 1.4rem;
          background: #e0e7ff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          justify-content: center;
        }
        .footer-social-link:hover {
          color: #fff;
          background: linear-gradient(90deg, #414ac5 60%, #2bcaa5 100%);
        }
        .footer-social-icon {
          width: 24px;
          height: 24px;
          fill: currentColor;
        }
        .footer-heading {
          font-weight: 700;
          margin-bottom: 1.1rem;
          font-size: 1.15rem;
          color: #1e293b;
          letter-spacing: 0.2px;
        }
        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-list li {
          margin-bottom: 0.7rem;
        }
        .footer-link {
          color: #334155;
          text-decoration: none;
          font-size: 1.01rem;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #2bcaa5;
          text-decoration: underline;
        }
        .footer-news-desc {
          margin-bottom: 1rem;
          color: #64748b;
        }
        .footer-news-form {
          display: flex;
          max-width: 400px;
          gap: 0;
        }
        .footer-news-input {
          flex: 1;
          padding: 0.7rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem 0 0 0.5rem;
          font-size: 1rem;
          outline: none;
          background-color: #fff;
          color: #1f2937;
          transition: border 0.2s;
        }
        .footer-news-input:focus {
          border: 1.5px solid #2bcaa5;
        }
        .footer-news-btn {
          background: linear-gradient(90deg, #414ac5 60%, #2bcaa5 100%);
          color: white;
          padding: 0.7rem 1.1rem;
          border: none;
          border-radius: 0 0.5rem 0.5rem 0;
          font-size: 1rem;
          cursor: pointer;
          font-weight: 500;
          letter-spacing: 0.2px;
          transition: background 0.3s;
        }
        .footer-news-btn:hover {
          background: linear-gradient(90deg, #2bcaa5 0%, #414ac5 100%);
        }
        .footer-bottom {
          margin-top: 3rem;
          border-top: 1px solid #e5e7eb;
          padding-top: 1.5rem;
          font-size: 1rem;
          text-align: center;
          color: #6b7280;
          letter-spacing: 0.1px;
        }
        /* Responsive tweaks */
        @media (max-width: 900px) {
          .footer-container {
            padding: 0 0.5rem;
          }
          .footer-grid {
            gap: 1.5rem;
          }
        }
        @media (max-width: 600px) {
          .footer {
            padding: 1.5rem 0.1rem 1rem 0.1rem;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-news-form {
            flex-direction: column;
            gap: 0.7rem;
            max-width: 100%;
          }
          .footer-news-input,
          .footer-news-btn {
            border-radius: 0.5rem;
          }
          .footer-social {
            gap: 0.7rem;
            justify-content: center; /* Center social icons on mobile */
          }
          .footer-social-link {
            width: 38px;
            height: 38px;
            font-size: 1.15rem;
          }
        }
      `}</style>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            
            <div>
              <a href="/" className="footer-logo">
                Better Mortgage
              </a>
              <p className="footer-desc">
                At Better Mortgage, our mission is to simplify and streamline the mortgage process for everyone.
              </p>
              <div className="footer-social">
                {socialIcons.map((icon, idx) => (
                  <a
                    key={idx}
                    href={icon.href}
                    aria-label={icon.title}
                    className="footer-social-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="footer-social-icon"
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
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                {["About", "Careers", "Press", "News"].map((item, idx) => (
                  <li key={idx}>
                    <a href="/" className="footer-link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-list">
                {["Support Center", "Contact Us", "Instructions", "How It Works"].map((item, idx) => (
                  <li key={idx}>
                    <a href="/" className="footer-link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="footer-heading">Subscribe to our newsletter</h4>
              <p className="footer-news-desc">
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
              <form
                className="footer-news-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="footer-news-input"
                />
                <button type="submit" className="footer-news-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <p className="footer-bottom">© {currentYear} Better Mortgage. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
