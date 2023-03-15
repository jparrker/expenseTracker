import ExpenseList from "./Components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./Components/ExpenseFilter";
import categories from "./Components/Categories";
import ExpenseForm from "./Components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Electric bill", amount: 80, category: "Utilities" },
    { id: 2, description: "Internet", amount: 32, category: "Utilities" },
    { id: 3, description: "Eggs", amount: 2.5, category: "Grocery" },
    { id: 4, description: "Water", amount: 25, category: "Utilities" },
    { id: 5, description: "Movies", amount: 50, category: "Entertainment" },
  ]);

  const visibleExpensess = selectedCategory
    ? expenses.filter((item) => item.category === selectedCategory)
    : expenses;
  return (
    <div className="container mx-auto pt-3">
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpensess}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
}

export default App;
