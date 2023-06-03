import "../App.css";
import React, { useState } from "react";

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(15);
  const [numPeople, setNumPeople] = useState("");
  const [errors, setErrors] = useState({});
  const [totalAmount, setTotalAmount] = useState(null);
  const [tipPerPerson, setTipPerPerson] = useState(null);

  const validateForm = () => {
    const errors = {};

    if (!billAmount || parseFloat(billAmount) <= 0) {
      errors.billAmount = "Bill amount must be greater than zero";
    }

    if (!tipPercentage) {
      errors.tipPercentage = "Tip percentage is required";
    }

    if (
      !numPeople ||
      Number(numPeople) <= 0 ||
      !Number.isInteger(parseFloat(numPeople))
    ) {
      errors.numPeople = "Number of people must be a positive integer";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const amount = parseFloat(billAmount);
      const tip = amount * (parseFloat(tipPercentage) / 100);
      const total = amount + tip;
      const tipPerPerson = tip / Number(numPeople);

      setTotalAmount(total.toFixed(2));
      setTipPerPerson(tipPerPerson.toFixed(2));
    }
  };

  const handleTipPercentageChange = (e) => {
    setTipPercentage(e.target.value);
  };

  return (
    <div className="tip-calculator">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/200px-LeetCode_Logo_black_with_text.svg.png?20200122084501"
          alt="logo"
        />
      </div>
      <h2>Tip Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label htmlFor="billAmount">Bill Amount:</label>
          <input
            style={{ width: "95%" }}
            type="number"
            id="billAmount"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
          {errors.billAmount && (
            <span className="error">
              {errors.billAmount}
            </span>
          )}
        </div>
        <div className="inputField">
          <label htmlFor="tipPercentage">Tip Percentage:</label>
          <select
            id="tipPercentage"
            value={tipPercentage}
            onChange={handleTipPercentageChange}
          >
            <option value={5}>Bad 5%</option>
            <option value={10}>Not Bad 10%</option>
            <option value={15}>Good 15%</option>
            <option value={20}>Very Good 20%</option>
            <option value={25}>Awesome 25%</option>
          </select>
          {errors.tipPercentage && (
            <span className="error">{errors.tipPercentage}</span>
          )}
        </div>
        <div className="inputField">
          <label htmlFor="numPeople">Number of People:</label>
          <input
            style={{ width: "95%" }}
            type="number"
            id="numPeople"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
          />
          {errors.numPeople && (
            <span className="error">{errors.numPeople}</span>
          )}
        </div>
        <div className="inputField">
          <button type="submit">Calculate</button>
        </div>
      </form>
      {totalAmount && tipPerPerson && (
        <div className="results">
          <p>Total Bill Amount with Tip: ${totalAmount}</p>
          <p>Tip Amount per person: ${tipPerPerson}</p>
        </div>
      )}
    </div>
  );
};

export default TipCalculator;
