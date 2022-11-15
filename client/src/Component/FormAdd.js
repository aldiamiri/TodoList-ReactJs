import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

function FormAdd({ addData }) {
  const [initialTodo, setInitialTodo] = useState({ todo: "" });
  function handlerChange(e) {
    // console.log(e.target.value);
    setInitialTodo({ todo: e.target.value });
  }

  function handlerSubmit(e) {
    e.preventDefault();
    // console.log(initialTodo);
    if (initialTodo.todo !== "") {
      addData(initialTodo);
      setInitialTodo({ todo: "" });
    }
  }

  return (
    <Row>
      <Col lg={12} xs={12}>
        <Form onSubmit={handlerSubmit}>
          <InputGroup className="mb-3">
            <Form.Control onChange={handlerChange} value={initialTodo.todo} placeholder="Insert Todo....." aria-describedby="basic-addon2" />
            <Button type="submit" variant="outline-primary" id="button-addon2">
              Add
            </Button>
          </InputGroup>
        </Form>
      </Col>
    </Row>
  );
}

export default FormAdd;
