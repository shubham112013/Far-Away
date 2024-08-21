import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItem] = useState([]);

  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItem([]);
  }

  function handleAddItem(item) {
    setItem((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form addItem={handleAddItem} />
      <PackingList
        addItems={items}
        onDeleteItem={deleteItem}
        onHandleToggleItem={handleToggleItem}
        onHandleClear={handleClear}
      />
      <Stats addItems={items} />
    </div>
  );
}
