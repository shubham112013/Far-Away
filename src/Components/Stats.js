export default function Stats({ addItems }) {
  if (addItems.length === 0)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚀.</em>
      </p>
    );
  const lenght = addItems.length;
  const packedItems = addItems.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / lenght) * 100);

  return (
    <footer className="stats">
      {percentage === 100
        ? "You got everything! Ready to go ✈️"
        : `💼 You have ${lenght} items on your list, and you already packed
            ${packedItems} (${percentage}%)`}
    </footer>
  );
}
