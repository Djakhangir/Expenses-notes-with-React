import './Expenses.css';
import ExpenseItems  from "../ExpenseItem/ExpenseItems";
import Card from "../Card/Card";

export const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItems
        title={props.expenseItems[0].title}
        amount={props.expenseItems[0].amount}
        date={props.expenseItems[0].date}
      />
      <ExpenseItems
        title={props.expenseItems[1].title}
        amount={props.expenseItems[1].amount}
        date={props.expenseItems[1].date}
      />
      <ExpenseItems
        title={props.expenseItems[2].title}
        amount={props.expenseItems[2].amount}
        date={props.expenseItems[2].date}
      />
      <ExpenseItems
        title={props.expenseItems[3].title}
        amount={props.expenseItems[3].amount}
        date={props.expenseItems[3].date}
      />
    </Card>
  );
};

export default Expenses;
