import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const deleteTodo = async (id) => {
  try {
    await deleteDoc(doc(db, "todo", id));
    window.location.reload(true);
    console.log("Document deleted with ID: ", id);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};

export default function Todo({ todo }) {
  return (
    <>
      <div className="flex items-center">
        <li>{todo.todo}</li>
        <TrashIcon
          className="w-6 h-6 ml-auto hover:scale-125 transition-all duration-200 ease-out"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        />
      </div>
    </>
  );
}
