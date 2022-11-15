import React, { useEffect, useState } from "react";
import FormAdd from "./FormAdd";
import axios from "axios";
import ListTodo from "./ListTodo";

function TodoList() {
  const url = "http://localhost:5000/data";

  // GET DATA TODOS

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      try {
        // console.log(res.data);
        setTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    });
  });

  // ADD TODO
  function addTodo(todo) {
    return axios.post("http://localhost:5000/data", todo);
  }

  function deleteTodo(id) {
    return axios.delete(`${url}/${id}`);
  }

  return (
    <div>
      <FormAdd addData={addTodo} />
      {todos.map((todo) => <ListTodo deleteData={deleteTodo} todo={todo.todo} key={todo.id} id={todo.id} />).reverse()}
    </div>
  );
}

export default TodoList;
