import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function ListTodo({ todo, id }) {
  return (
    <Row className="mt-2">
      <Col lg={10} md={8} xs={6}>
        <Form>
          <Form.Control disabled className="border-0" type="text" value={todo} />
        </Form>
      </Col>
      <Col lg={2} md={4} xs={6}>
        <Button variant="warning">Edit</Button> <Button variant="danger">Hapus</Button>
      </Col>
    </Row>
  );
}

export default ListTodo;
