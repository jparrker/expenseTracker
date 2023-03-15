interface Props {
  onSelectCategory: (category: string) => void;
}

function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Grocery">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
}

export default ExpenseFilter;
