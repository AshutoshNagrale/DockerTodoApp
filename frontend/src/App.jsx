import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("/api")
        .then((res) => {
          setTodo(res.data.data);
        })
        .catch((err) => console.log("Error : ", err));
    };

    getData();
  }, []);

  const handleAddTodo = (value) => {
    axios
      .post("/api/todos", { text: value })
      .then(() => {
        this.setState({
          todos: [...this.state.todos, { text: value }],
        });
      })
      .catch((e) => console.log("Error : ", e));
  };

  return (
    <>
      <div className="App container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
              <h1>Todos</h1>
              <div className="todo-app">
                <AddTodo handleAddTodo={handleAddTodo} />
                <TodoList todos={todos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
