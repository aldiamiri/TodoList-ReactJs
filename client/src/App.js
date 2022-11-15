import Card from "react-bootstrap/Card";
import "./App.css";
import TodoList from "./Component/TodoList";

function WithHeaderExample() {
  return (
    <div className="container mt-5 justify-content-center">
      <Card>
        <Card.Header>
          <h1 className="text-center"> TodoList </h1>
        </Card.Header>
        <Card.Body>
          <TodoList />
        </Card.Body>
      </Card>
    </div>
  );
}

export default WithHeaderExample;
