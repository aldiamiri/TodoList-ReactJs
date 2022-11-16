import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function ListTodo({ todo, id, deleteData, updateData }) {
  const [isEdit, setIsEdit] = useState(false);
  const [initialTodo, setInitialTodo] = useState({ todo: todo });

  function handlerEdit() {
    setIsEdit(!isEdit);
  }

  function handlerChange(e) {
    setInitialTodo({ todo: e.target.value });
    // console.log(initialTodo);
  }

  function handlerSubmit(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
    updateData(id, initialTodo);
  }

  return (
    <Row className="mt-2">
      <Col lg={10} md={8} xs={6}>
        <Form onSubmit={handlerSubmit}>{!isEdit ? <Form.Control disabled className="border-0" type="text" value={todo} /> : <Form.Control className="border-2" type="text" onChange={handlerChange} value={initialTodo.todo} />}</Form>
      </Col>
      <Col lg={2} md={4} xs={6}>
        {!isEdit ? (
          <>
            <Button variant="warning" onClick={handlerEdit}>
              Edit
            </Button>{" "}
            <Button variant="danger" onClick={() => deleteData(id)}>
              Hapus
            </Button>
          </>
        ) : (
          <>
            <Button variant="success" onClick={handlerSubmit}>
              Simpan
            </Button>{" "}
            <Button variant="secondary" onClick={handlerEdit}>
              Batal
            </Button>
          </>
        )}
      </Col>
    </Row>
  );
}

export default ListTodo;
