import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ( props) => {
  //this fn is responsible for child to parent data passing communication as a first step:
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  //onSaveExpenseData is the event name that I created to accept the method created above
  //to receive the data as a parameter in the method saveExpenseDataHandler
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
