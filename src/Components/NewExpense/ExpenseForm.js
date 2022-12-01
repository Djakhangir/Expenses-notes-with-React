import {useState} from 'react';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    //separately managing state
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
            //---------managing state all together 
    // const[userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });


 const titleChangeHandler = (event) => {
                        //-----------manage state separately
    setEnteredTitle(event.target.value);



                    //------------manage state all together
    // setUserInput({
        //if we update only one portion of the state of multiple state other 2 state will be lost, 
        //it is needed to update them too everytime;
        // or use spread operator to copy other state variable all together and update only one like in example below ;
            //...userInput,
        // enteredTitle:event.target.value,
    // })
 };

 const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
 };

 const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
 };

const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
    }
    //this props method (onSaveExpenseData) is to pass data from here (child) to newExpense (parent) component as a parameter;
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('');
    setEnteredTitle('');
    setEnteredTitle('');
 }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value ={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value ={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value ={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
