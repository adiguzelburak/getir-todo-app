import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoActions,
  deleteTodoActions,
  fetchTodosActions,
  updateNameTodoActions,
  updateStatusTodoActions,
} from "../redux/actions/todos";
import {
  FaPen,
  FaTrashAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaPlus,
} from "react-icons/fa";
import Swal from "sweetalert2";

const TodoPage = () => {
  const { todos } = useSelector((state) => state.todosList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosActions());
  }, []);

  const updateModal = (todoId) => {
    Swal.fire({
      title: "Change your Todo.",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Edit",
      showLoaderOnConfirm: true,
    }).then((response) =>
      dispatch(updateNameTodoActions(todoId, response.value))
    );
  };

  const addTodoModal = () => {
    Swal.fire({
      title: "Add Todo",
      html: `<input type="text" id="todo" class="swal2-input" placeholder="Submit a Todo">
        <input type="text" id="username" class="swal2-input" placeholder="Submit a Username">`,
      confirmButtonText: "Add",
      confirmButtonColor: "green",
      focusConfirm: false,
      preConfirm: () => {
        const todoName = Swal.getPopup().querySelector("#todo").value;
        const userName = Swal.getPopup().querySelector("#username").value;
        if (!todoName || !userName) {
          Swal.showValidationMessage(`Please enter Todo and Username`);
        }
        return { todoName: todoName, userName: userName };
      },
    }).then((result) => {
      dispatch(
        addTodoActions(
          result.value.todoName,
          "In Completed",
          result.value.userName
        )
      );
    });
  };

  return (
    <div className="container">
      <Row xs={1} md={2} className="g-6">
        {todos.map((todo) => (
          <Col key={todo.id}>
            <Card
              className="card"
              style={{
                height: "auto",
                margin: "5px 5px",
                backgroundColor:
                  todo.data.isCompleted === "Completed" ? "#74c69d" : "#FFC107",
                color:
                  todo.data.isCompleted === "Completed" ? "#2d6a4f" : "#ffffff",
                borderRadius: "10px",
              }}
            >
              <Card.Body
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {todo.data.isCompleted !== "Completed" ? (
                  <FaCheckCircle
                    style={{ fontSize: "24px" }}
                    onClick={() =>
                      dispatch(
                        updateStatusTodoActions(todo.id, todo.data.isCompleted)
                      )
                    }
                  />
                ) : (
                  <FaTimesCircle
                    style={{ color: "#ffffff", fontSize: "24px" }}
                    onClick={() =>
                      dispatch(
                        updateStatusTodoActions(todo.id, todo.data.isCompleted)
                      )
                    }
                  />
                )}
                <Card.Text style={{ width: "70%" }}>{todo.data.name}</Card.Text>
                <Badge
                  onClick={() => updateModal(todo.id)}
                  style={{
                    cursor: "pointer",
                    height: "24px",
                    borderRadius: "5px",
                  }}
                  bg="success"
                >
                  <FaPen />
                </Badge>
              </Card.Body>

              <Card.Footer
                style={{
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="asd"> Creator: {todo.data.userName}</div>
                <Badge
                  onClick={() => dispatch(deleteTodoActions(todo.id))}
                  style={{ cursor: "pointer" }}
                  bg="danger"
                >
                  <FaTrashAlt style={{ fontSize: "12px" }} />
                </Badge>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <button className="add-todo-button" onClick={addTodoModal}>
        <FaPlus />
      </button>
    </div>
  );
};

export default TodoPage;
