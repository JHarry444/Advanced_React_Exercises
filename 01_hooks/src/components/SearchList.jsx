import { useState, useMemo, useCallback } from "react";

const ITEMS = Array.from({ length: 2000 }).map((_, i) => ({
  id: i,
  name: `Item ${i}`
}));

function ItemRow({ item, onSelect }) {
  console.log("Rendered:", item.name);

  return (
    <div style={{ padding: "4px 0" }}>
      {item.name}
      <button onClick={() => onSelect(item)}>Select</button>
    </div>
  );
}

export default function SearchList() {
  const [query, setQuery] = useState("");

  // TODO: 4. memoize this expensive filtering + sorting
  const filteredItems = () => {
    console.log("Running expensive filter/sort...");

    // simulate heavy work
    for (let i = 0; i < 30000000; i++) {}

    return ITEMS
      .filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  // TODO: 3. memoize this callback so ItemRow doesn't re-render unnecessarily
  const handleSelect = (item) => {
    alert(`You selected ${item.name}`);
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Searchable List</h2>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <div style={{ marginTop: "1rem" }}>
        {filteredItems.map(item => (
          <ItemRow
            key={item.id}
            item={item}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}
