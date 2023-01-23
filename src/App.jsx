import React, { useState, useEffect } from "react";
import "./App.css";
import {
  PlusCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Todos from "./components/Todos";
import Toggle from "./components/Switcher";

export default function Todo() {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);
  const [darktheme, setDarkTheme] = useState(true);

  useEffect(() => {
    fetchTodo();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "todo"), {
        todo,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    window.location.reload(true);
  };

  const fetchTodo = async () => {
    await getDocs(collection(db, "todo")).then((data) => {
      const newData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
    });
  };

  return (
    <>
      <nav className="absolute w-screen flex justify-end top-3 right-2 gap-2 h-20 items-center">
        <button className="button mt-2" onClick={addTodo}>
          <span className="button_top flex items-center font-press-start">
            Sign in
            <ArrowLeftOnRectangleIcon className="h-7 w-7 text-black ml-2" />
          </span>
        </button>

        <Toggle value={darktheme} handleChange={setDarkTheme} />
      </nav>
      <div className="bg-neutral-900 h-screen flex justify-center items-center flex-col font-press-start text-slate-300">
        <h1 className="text-6xl">Todo App</h1>
        <div className="mt-7 flex flex-col justify-center items-center gap-3">
          <input
            type="text"
            placeholder="Walk the dog..."
            className="rounded-md bg-gray-50 pl-3 sm:text-sm border-gray-300 focus:border-black focus:ring-black text-black"
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />

          <div className="mt-2 relative">
            <button className="button" onClick={addTodo}>
              <span className="button_top flex items-center">
                Add
                <PlusCircleIcon className="h-7 w-7 text-black ml-2" />
              </span>
            </button>
          </div>
        </div>

        <Todos todos={todos} />
      </div>
    </>
  );
}
