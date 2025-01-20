import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

function App() {
  const [toDoInput, setToDoInput] = useState("");
  const [toDos, setToDos] = useState([]);

  const addTodo = () => {
    event.preventDefault();
    setToDos([...toDos, toDoInput]);
    console.log(toDos);
    setToDoInput("");
  };

  const Wrapper = styled.div`
    cursor: pointer;
  `;

  const deleteTodo = (value) => {
    setToDos(() => {
      return toDos.filter((todo) => todo !== value)
    })
  }

  return (
    <>
      <Container>
        <Form className="text-center">
          <Form.Group className="mb-3">
            <Form.Label className="fs-1">HEDEF</Form.Label>
            <div className="d-flex justify-content-center">
              <Form.Control
                className="w-50 mx-3"
                type="text"
                placeholder="Hedef"
                value={toDoInput}
                onChange={(e) => setToDoInput(e.target.value)}
              />
              <Button
                type="submit"
                onClick={addTodo}
                variant="secondary"
                size="lg"
              >
                Ekle
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Container>
      <div className="d-flex justify-content-center text-center">
        <Wrapper>
          {toDos.map((todo, index) => (
            <div key={index}>
              <Card onClick={() => deleteTodo(todo)} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{todo}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Wrapper>
      </div>
    </>
  );
}

export default App;
