import React from "react";
import Todo from "./Todo";

function Todos({ todos }) {
  return (
    <>
      {todos.length ? (
        <div className="card mt-20">
          <ol>
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </ol>
        </div>
      ) : (
        <div className=" card mt-20 flex items-center justify-center">
          <p className="text-center">Add todos to view them here</p>
        </div>
      )}
    </>
  );
}

export default Todos;
