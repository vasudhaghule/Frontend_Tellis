import React, { useState } from "react";
import Simg from "../assets/betty1.webp";

const Start = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    propertyType: "Home Purchase",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert("Application started!");
     
    }
  };

  return (
    <>
      <style>{`
        .start-bg {
          min-height: 100vh;
          background: linear-gradient(120deg, #e0e7ff 0%, #f0abfc 100%);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 60px 10px 40px 10px;
        }
        .start-card {
          background: #fff;
          box-shadow: 0 8px 32px rgba(31,41,55,0.12);
          border-radius: 18px;
          padding: 40px 36px 32px 36px;
          width: 100%;
          max-width: 410px;
          border: 1px solid #ede9fe;
          transition: box-shadow 0.2s;
          margin-top: 0;
        }
        .start-card:hover {
          box-shadow: 0 12px 40px rgba(99,102,241,0.18);
        }
        .start-img {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          margin: 0 auto 16px auto;
          display: block;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          border: 3px solid #fff;
          object-fit: cover;
        }
        .start-title {
          font-size: 1.7rem;
          font-weight: 700;
          text-align: center;
          color: #4f46e5;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }
        .start-desc {
          text-align: center;
          color: #6b7280;
          margin-bottom: 28px;
          font-size: 1.05rem;
        }
        .start-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .start-form-group {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .start-label {
          font-size: 1rem;
          color: #374151;
          margin-bottom: 7px;
          font-weight: 500;
          text-align: left;
          letter-spacing: 0.2px;
          display: block;
        }
        .start-input, .start-select {
          width: 100%;
          padding: 12px 14px;
          border: 1.5px solid #d1d5db;
          border-radius: 7px;
          font-size: 1rem;
          background: #f9fafb;
          color: #1e293b;
          outline: none;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .start-input:focus, .start-select:focus {
          border: 1.5px solid #6366f1;
          box-shadow: 0 0 0 2px #a5b4fc55;
          background: #fff;
        }
        .start-btn {
          width: 100%;
          padding: 13px 0;
          background: linear-gradient(90deg, #6366f1 60%, #a21caf 100%);
          color: #fff;
          font-weight: 600;
          border: none;
          border-radius: 7px;
          font-size: 1.08rem;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(99,102,241,0.09);
          letter-spacing: 0.2px;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .start-btn:hover {
          background: linear-gradient(90deg, #4338ca 60%, #a21caf 100%);
          box-shadow: 0 4px 16px rgba(99,102,241,0.15);
        }
        .start-error {
          color: #dc2626;
          font-size: 0.92rem;
          margin-top: 3px;
          font-weight: 500;
        }
        @media (max-width: 600px) {
          .start-bg {
            padding-top: 100px;
            padding-bottom: 24px;
          }
          .start-card {
            padding: 28px 8px 22px 8px;
            margin-top: 0;
          }
        }
      `}</style>
      <div className="start-bg">
        <div className="start-card">
          <img
            src={Simg}
            alt="Betty"
            className="start-img"
          />
          <h2 className="start-title">
            Start Your Mortgage Application
          </h2>
          <p className="start-desc">
            Fill in a few basic details to begin your journey.
          </p>
          <form className="start-form" onSubmit={handleSubmit} noValidate>
            <div className="start-form-group">
              <label className="start-label" htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="start-input"
                autoComplete="off"
              />
              {errors.name && <div className="start-error">{errors.name}</div>}
            </div>
            <div className="start-form-group">
              <label className="start-label" htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="vasudhaghule33@gmail.com"
                className="start-input"
                autoComplete="off"
              />
              {errors.email && <div className="start-error">{errors.email}</div>}
            </div>
            <div className="start-form-group">
              <label className="start-label" htmlFor="propertyType">Property Type</label>
              <select
                id="propertyType"
                name="propertyType"
                value={form.propertyType}
                onChange={handleChange}
                className="start-select"
              >
                <option>Home Purchase</option>
                <option>Refinance</option>
                <option>Investment</option>
              </select>
            </div>
            <button
              type="submit"
              className="start-btn"
            >
              Start Application
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Start;
