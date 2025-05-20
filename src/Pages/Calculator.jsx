import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateValues, calculatePayment } from "../features/CalculateSlice";
import "./Calculator.css"; // Importing CSS

const MortgageCalculator = () => {
  const dispatch = useDispatch();
  const {
    homePrice,
    downPayment,
    interestRate,
    taxes,
    zipCode,
    monthlyPayment,
    monthlyPrincipalAndInterest,
    monthlyTaxes,
  } = useSelector((state) => state.calculator || {});

  const handleInputChange = (field, value) => {
    dispatch(updateValues({ [field]: value }));
  };

  const handleCalculate = () => {
    dispatch(calculatePayment());
  };

  return (
    <div className="mortgage-container">
      <div className="mortgage-box">
        <h2 className="heading">Mortgage Calculator</h2>

        <div className="input-grid">
          <div>
            <label>Home Price ($)</label>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => handleInputChange("homePrice", Number(e.target.value))}
              placeholder="300000"
            />
          </div>

          <div>
            <label>Down Payment ($)</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => handleInputChange("downPayment", Number(e.target.value))}
              placeholder="60000"
            />
          </div>

          <div>
            <label>Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => handleInputChange("interestRate", Number(e.target.value))}
              placeholder="7.5"
            />
          </div>

          <div>
            <label>Property Taxes ($)</label>
            <input
              type="number"
              value={taxes}
              onChange={(e) => handleInputChange("taxes", Number(e.target.value))}
              placeholder="5000"
            />
          </div>

          <div className="full-width">
            <label>Zip Code</label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              placeholder="302002"
            />
          </div>
        </div>

        <button onClick={handleCalculate} className="calculate-btn">
          Calculate Payment
        </button>

        {monthlyPayment > 0 && (
          <div className="result-box">
            <h3>Estimated Monthly Payment</h3>
            <p className="payment-amount">${monthlyPayment}</p>

            <div className="breakdown">
              <div>
                <span>Principal & Interest:</span>
                <span>${monthlyPrincipalAndInterest}</span>
              </div>
              <div>
                <span>Property Taxes:</span>
                <span>${monthlyTaxes}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
