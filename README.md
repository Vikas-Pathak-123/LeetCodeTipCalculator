# Question 3: 🧮 Tip Calculator

# 📝 Problem Description:

>You are tasked with creating a Tip Calculator component for a restaurant application. The component should allow the user to enter the bill amount, select a tip percentage, and specify the number of people to split the bill with. Upon submitting the form, the component should calculate the total amount including the tip and the tip amount per person.

## 🔧 The Tip Calculator component should have the following functionality:

>1. Input fields for the bill amount, tip percentage, and number of people.
>2. Error messages should be displayed if any of the following conditions are not met:
	- The bill amount is empty, zero, or a negative value.
	- The tip percentage is not selected.
	- The number of people is empty, zero, a negative value, or a non-integer.
>3. The form should be submitted when the "Calculate" button is clicked.
>4. After submission, the component should display the total bill amount with the tip and the tip amount per person.


# 🎯Sample Test Cases

## 1. Calculate Total Amount and Tip Per Person
>## 📥Input:
>Bill Amount: $100
>Tip Percentage: 15%
>Number of People: 2


>## 📥Expected Output:
>✔️Total Bill Amount with Tip: $115.00
>✔️Tip Amount per person: $7.50

>## 🧿Explanation:
>The bill amount is $100. With a tip percentage of 15%, the tip amount is calculated as $100 * (15 / 100) = $15. The total bill amount is $100 + $15 = $115. The tip amount per person is $15 / 2 = $7.50.
---
## 2. Display Error for Zero Bill Amount

>## 📥Input:
>Bill Amount: $0
>Tip Percentage: 15%
>Number of People: 2


>## 📥Expected Output:
> **⚠️Error Message:** "Bill amount must be greater than zero"

>## 🧿Explanation:
> The bill amount is zero, which is not allowed. An error message should be displayed.

---

## 🔍 Context:
> The Tip Calculator is a common feature in many restaurant applications or websites. It provides a convenient way for users to calculate the total bill amount including the tip and the tip amount per person when dining out with friends or family. By allowing users to input the bill amount, select a tip percentage, and specify the number of people, the Tip Calculator simplifies the process of splitting the bill and ensures accuracy in calculating the tip.

## 📚 Background:
> When dining at a restaurant, it is customary to leave a tip for the service provided. The tip is usually calculated as a percentage of the total bill amount and can vary based on factors such as service quality, location, or personal preferences. The Tip Calculator automates this calculation process, eliminating the need for manual calculations and reducing the chances of errors.

## ❗️ Importance of the Question:
> The Tip Calculator question is important as it tests the candidate's ability to build a functional component with validation logic and calculations based on user inputs. It assesses the candidate's understanding of React and state management using hooks like useState. It also evaluates their proficiency in handling form submissions, displaying error messages, and performing calculations accurately.

>By completing this question, the candidate demonstrates their skills in building user-friendly interfaces, handling input validation, and implementing business logic. These are essential abilities for front-end developers who work on building interactive web applications. Additionally, the question provides an opportunity to showcase the candidate's problem-solving skills and attention to detail.

>Overall, the Tip Calculator question serves as a practical test case for assessing a candidate's knowledge and expertise in React development and form handling.
