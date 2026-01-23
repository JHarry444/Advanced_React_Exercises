import { useSelector, useDispatch } from "react-redux";
import { addBook, removeBook, toggleRead, setFilter } from "./store";
import { useState } from "react";

export default function App() {
  // TODO 8. Fetch dispatch function from the store

  const [title, setTitle] = useState("");

  // TODO 9. Fetch items and filter from the store

  // TODO 10. Filter items


  function handleSubmit(e) {
    e.preventDefault();
    // TODO 13. Update the handleSubmit function

  }

  return (
    <div style={{ maxWidth: 450, margin: "2rem auto" }}>
      <h2>Book Library</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Book title..."
        />
        <button>Add</button>
      </form>

      <div style={{ marginTop: "1rem" }}>
        {/* TODO 11. Use dispatch to update the filter value when the corresponding button is clicked */}
        <button>All</button>
        <button>Read</button>
        <button>Unread</button>
      </div>

      <ul style={{ marginTop: "1rem" }}>
        {filteredBooks.map(book => (
          <li key={book.id} style={{ marginBottom: "0.5rem" }}>
            <span
              style={{
                textDecoration: book.read ? "line-through" : "none",
                marginRight: "1rem"
              }}
            >
              {book.title}
            </span>
            {/* TODO 12. use dispatch to toggle and remove books */}
            <button>
              {book.read ? "Mark Unread" : "Mark Read"}
            </button>

            <button>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
