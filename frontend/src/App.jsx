import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("http://localhost:3000/api")
        .then((res) => {
          setTodo(res.data.data);
        })
        .catch((err) => console.log("Error : ", err));
    };

    getData();
  }, []);

  const handleAddTodo = (value) => {
    axios
      .post("http://localhost:3000/api/todos", { text: value })
      .then(() => {
        setTodo((prev) => [...prev, { text: value }]);
      })
      .catch((e) => console.log("Error : ", e));
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1>Todos</h1>
          <div>
            <AddTodo handleAddTodo={handleAddTodo} />
            <TodoList todos={todos} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
