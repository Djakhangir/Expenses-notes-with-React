import Expenses from "./Components/Expenses/Expenses";
import "./App.css";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "55.98",
      date: new Date(2020, 7, 12),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: "297.78",
      date: new Date(2020, 3, 1),
    },
    {
      id: "e3",
      title: "New TV",
      amount: "799.99",
      date: new Date(2020, 5, 30),
    },
    { id: "e4", title: "New Desk", amount: "250", date: new Date(2020, 7, 23) },
  ];

  //this method is the last step on receiving the data from the child component (ExpenseForm) and adding new data to the existing data object
  const addExpenseHandler = (expense) => {
    console.log(expense)
    console.log(expenses)};

  return (
    <div>
      <NewExpense onAddExpense ={addExpenseHandler}/>
      <Expenses expenseItems={expenses} />
    </div>
  );
}

export default App;
