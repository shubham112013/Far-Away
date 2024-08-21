export default function Item({ item, onDelete, onHandleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onHandleToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} : {item.quantity}{" "}
      </span>
      <button onClick={() => onDelete(item.id)}>&times; ❌ </button>
    </li>
  );
}
