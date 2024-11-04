import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addTask, deleteTask, setInput, updateTask } from "./todoSlice";
import { useRef } from "react";

export const ProjectNineteen = () => {
  const dispatch = useDispatch();
  const input = useSelector((state: RootState) => {
    return state.todoReducer.input;
  });
  const todos = useSelector((state: RootState) => {
    return state.todoReducer.todos;
  });
  const mode = useSelector((state: RootState) => {
    return state.todoReducer.mode;
  });
  const inputElement = useRef<HTMLInputElement>(null);
  return (
    <div className="todo-container border">
      <div className="todo">
        <input
          type="text"
          className="todo__input"
          placeholder="  Add some tasks"
          value={input.task}
          ref={inputElement}
          onChange={(e) => {
            dispatch(setInput(e.currentTarget.value));
          }}
        />

        <button
          className="todo__button"
          onClick={() => {
            dispatch(addTask(input));
          }}
        >
          {mode}
        </button>
      </div>
      <div className="todo-list">
        <ul className="todo-list-items">
          {todos.map((todo) => {
            return (
              <li className="todo-list-items__item border" key={todo.id}>
                <div className="list-item-container">
                  <p>{todo.task}</p>
                  <div>
                    <button
                      onClick={() => {
                        dispatch(updateTask(todo)),
                          inputElement.current?.focus();
                      }}
                    >
                      Update
                    </button>
                    <button onClick={() => dispatch(deleteTask(todo.id))}>
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
