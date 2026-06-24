import { useReducer, useRef } from "react";

const initialState = {
    tasks: []
};


function reducer(state, action) {
    switch (action.type) {
        // TODO: 5. Add the action types
        default:
            return state;
    }
}

export default function TaskManager() {

    // TODO: 3. initialise a new reducer with useReducer


    // TODO: 3. create a ref for the input element

    function handleAddTask(e) {
        e.preventDefault();
        // TODO: 6. In the handleTask function use the inputRef to grab the value of the addTask field 
        // then dispatch an event with type: “ADD_TASK” and payload:value


        // TODO: 7. clear the input

        // TODO: 8. focus the input again
    }

    return (
        <div style={{ maxWidth: 400, margin: "2rem auto" }}>
            <h2>Task Manager</h2>
            {/* 10. Add the handleAddTask function as the onSubmit for the form */}
            <form>
                <input
                    name="addTask"
                    type="text"
                    placeholder="Add a task..."
                    ref={taskRef}
                />
                <button>Add</button>
            </form>

            <ul>
                {state.tasks.map(task => (
                    // 12. Call dispatch from the onClick of the li with type: “TOGGLE_TASK” and payload: task.id
                    <li
                        key={task.id}
                        onClick={ }
                        style={{
                            cursor: "pointer",
                            textDecoration: task.done ? "line-through" : "none"
                        }}
                    >
                        {task.text}
                    </li>
                ))}
            </ul>

            {/* 14. Call dispatch from the onClick of the clear button with type: “CLEAR_COMPLETED */}
            <button id="clear" onClick={ }>
                Clear Completed
            </button>
        </div>
    );
}
