import React, { useState } from "react";

const TodoList = ({ todos }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActive = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      {todos.length > 0 ? (
        <div>
          <ul className="list">
            {todos.map((todo, i) => (
              <li
                className={
                  "listitem" +
                  (i === activeIndex ? "active" : "")
                }
                key={i}
                onClick={() => {
                  handleActive(i);
                }}
              >
                {todo.text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No Todos to Display</div>
      )}
    </>
  );
};

export default TodoList;
