import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import TipCalculator from "./components/TipCalculator";

afterEach(() => {
  cleanup();
});


describe("TipCalculator", () => {
  test("1. Calculates total amount and tip per person correctly", () => {
    // Test case setup
    render(<TipCalculator />);
    const billAmountInput = screen.getByLabelText("Bill Amount:");
    const tipPercentageSelect = screen.getByLabelText("Tip Percentage:");
    const numPeopleInput = screen.getByLabelText("Number of People:");
    const calculateButton = screen.getByText("Calculate"); // Set input values

    fireEvent.change(billAmountInput, { target: { value: "100" } });
    fireEvent.change(tipPercentageSelect, { target: { value: "15" } });
    fireEvent.change(numPeopleInput, { target: { value: "2" } }); // Perform calculation

    fireEvent.click(calculateButton); // Assert the expected results

    const totalAmount = screen.getByText(/Total Bill Amount with Tip:/i);
    const tipPerPerson = screen.getByText(/Tip Amount per person:/i);
    expect(totalAmount.textContent).toBe("Total Bill Amount with Tip: $115.00");
    expect(tipPerPerson.textContent).toBe("Tip Amount per person: $7.50");
  });

  test("2. Displays error for zero bill amount", () => {
    // Test case setup
    render(<TipCalculator />);
    const billAmountInput = screen.getByLabelText("Bill Amount:");
    const tipPercentageSelect = screen.getByLabelText("Tip Percentage:");
    const numPeopleInput = screen.getByLabelText("Number of People:");
    const calculateButton = screen.getByText("Calculate"); // Set input values with zero bill amount

    fireEvent.change(billAmountInput, { target: { value: "0" } });
    fireEvent.change(tipPercentageSelect, { target: { value: "15" } });
    fireEvent.change(numPeopleInput, { target: { value: "2" } }); // Perform calculation

    fireEvent.click(calculateButton); // Assert the expected error message

    const error = screen.getByText("Bill amount must be greater than zero");
    expect(error.textContent).toBe("Bill amount must be greater than zero");
  });

  test("3. Displays error for negative bill amount", () => {
    // Test case setup
    render(<TipCalculator />);
    const billAmountInput = screen.getByLabelText("Bill Amount:");
    const tipPercentageSelect = screen.getByLabelText("Tip Percentage:");
    const numPeopleInput = screen.getByLabelText("Number of People:");
    const calculateButton = screen.getByText("Calculate"); // Set input values with negative bill amount

    fireEvent.change(billAmountInput, { target: { value: "-100" } });
    fireEvent.change(tipPercentageSelect, { target: { value: "15" } });
    fireEvent.change(numPeopleInput, { target: { value: "2" } }); // Perform calculation

    fireEvent.click(calculateButton); // Assert the expected error message

    const error = screen.getByText("Bill amount must be greater than zero");
    expect(error.textContent).toBe("Bill amount must be greater than zero");
  });

  test("4. Displays error for zero number of people", () => {
    // Test case setup
    render(<TipCalculator />);
    const billAmountInput = screen.getByLabelText("Bill Amount:");
    const tipPercentageSelect = screen.getByLabelText("Tip Percentage:");
    const numPeopleInput = screen.getByLabelText("Number of People:");
    const calculateButton = screen.getByText("Calculate"); // Set input values with zero number of people

    fireEvent.change(billAmountInput, { target: { value: "100" } });
    fireEvent.change(tipPercentageSelect, { target: { value: "15" } });
    fireEvent.change(numPeopleInput, { target: { value: "0" } }); // Perform calculation

    fireEvent.click(calculateButton); // Assert the expected error message

    const error = screen.getByText(
      "Number of people must be a positive integer"
    );
    expect(error.textContent).toBe(
      "Number of people must be a positive integer"
    );
  });

  test("5. Displays error for negative number of people", () => {
    // Test case setup
    render(<TipCalculator />);
    const billAmountInput = screen.getByLabelText("Bill Amount:");
    const tipPercentageSelect = screen.getByLabelText("Tip Percentage:");
    const numPeopleInput = screen.getByLabelText("Number of People:");
    const calculateButton = screen.getByText("Calculate"); // Set input values with negative number of people

    fireEvent.change(billAmountInput, { target: { value: "100" } });
    fireEvent.change(tipPercentageSelect, { target: { value: "15" } });
    fireEvent.change(numPeopleInput, { target: { value: "-2" } }); // Perform calculation

    fireEvent.click(calculateButton); // Assert the expected error message

    const error = screen.getByText(
      "Number of people must be a positive integer"
    );
    expect(error.textContent).toBe(
      "Number of people must be a positive integer"
    );
  });

  test("6. Displays error for non-integer number of people", () => {
    // Test case setup
    render(<TipCalculator />);
    const billAmountInput = screen.getByLabelText("Bill Amount:");
    const tipPercentageSelect = screen.getByLabelText("Tip Percentage:");
    const numPeopleInput = screen.getByLabelText("Number of People:");
    const calculateButton = screen.getByText("Calculate"); // Set input values with non-integer number of people

    fireEvent.change(billAmountInput, { target: { value: "100" } });
    fireEvent.change(tipPercentageSelect, { target: { value: "15" } });
    fireEvent.change(numPeopleInput, { target: { value: "2.5" } }); // Perform calculation

    fireEvent.click(calculateButton); // Assert the expected error message

    const error = screen.getByText(
      "Number of people must be a positive integer"
    );
    expect(error.textContent).toBe(
      "Number of people must be a positive integer"
    );
  });
});
