import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChnageHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHanlder = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseDate(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={titleChnageHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={enteredAmount}
            onChange={amountChangeHanlder}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">date</label>
          <input
            type="date"
            min={"2019-01-01"}
            max={"2022-12-31"}
            id="date"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" className="">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
