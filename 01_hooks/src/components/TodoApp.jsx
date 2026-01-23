"use client";

import { useActionState, useOptimistic } from "react";
import { addTodo, toggleTodo, deleteTodo } from "./actions";

export default function TodoApp({ initialTodos }) {
    // TODO: 1. Add optimistic state
    const [optimisticTodos, updateOptimisticTodos] = useOptimistic(
        initialTodos,
        (current, action) => {
            switch (action.type) {
                case "add":
                    return [...current, action.todo];
                case "toggle":
                    return current.map(t =>
                        t.id === action.id ? { ...t, completed: !t.completed } : t
                    );
                case "delete":
                    return current.filter(t => t.id !== action.id);
                default:
                    return current;
            }
        }
    );

    // TODO: 4. useActionState for addTodo
    const [state, formAction] = useActionState(async (prev, formData) => {
        const todo = await addTodo(formData);
        updateOptimisticTodos({ type: "add", todo });
        return todo;
    }, null);

    return (
        <div style={{ maxWidth: 400, margin: "2rem auto" }}>
            <h2>Todo List</h2>
            {/* TODO 13. Add the formAction to the AddTodoForm via the action prop  */}
            <AddTodoForm action={formAction} />

            <ul>
                {optimisticTodos.map(todo => (
                    <li key={todo.id} style={{ marginTop: "0.5rem" }}>
                        <span
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                                marginRight: "1rem"
                            }}
                        >
                            {todo.text}
                        </span>
                        {/* TODO 14. Add the formActions to toggle and delete todos */}
                        <button
                            formAction={async () => {
                                updateOptimisticTodos({ type: "toggle", id: todo.id });
                                await toggleTodo(todo.id);
                            }}
                        >
                            Toggle
                        </button>

                        <button
                            formAction={async () => {
                                updateOptimisticTodos({ type: "delete", id: todo.id });
                                await deleteTodo(todo.id);
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function AddTodoForm({ action }) {
    return (
        <form action={action} style={{ marginBottom: "1rem" }}>
            <input name="text" placeholder="New todo..." required />
            <SubmitButton />
        </form>
    );
}

function SubmitButton() {
    // TODO: add useFormStatus to SubmitButton
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending}>
            {pending ? "Adding..." : "Add"}
        </button>
    );
}
