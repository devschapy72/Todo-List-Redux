import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  editTodo,
  deletedTodo,
  removeAllTodo,
} from "../action/index.js";

const AddList = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const list = useSelector((state) => state.ReducersTodo.list);

  useEffect(() => {
    const findItem = list.find((item) => item.id === selectedId);
    console.log(findItem);
    if (findItem === undefined) return;
    setInputValue(findItem.data);
  }, [selectedId]);

  return (
    <div className="todo-components">
      <div className="todo-items">
        <h1>ToDo List</h1>
        <div className="add-menu">
          <input
            type="text"
            value={inputValue}
            placeholder="Add menu"
            autoComplete="off"
            onChange={(event) => setInputValue(event.target.value)}
          />
          {selectedId ? (
            <Button
              variant="outlined"
              className="add-button"
              onClick={() => {
                dispatch(editTodo(selectedId, inputValue));
                setInputValue("");
                setSelectedId("");
              }}
            >
              Update
            </Button>
          ) : (
            <Button
              variant="outlined"
              className="add-button"
              onClick={() => {
                dispatch(addTodo(inputValue));
                setInputValue("");
              }}
            >
              Add Todo
            </Button>
          )}
        </div>
      </div>
      {list.map((items) => {
        return (
          <div className="deleted-edit-menu" key={items.id}>
            <h2 className="list">{items.data}</h2>
            <div className="deleted-edit">
              <IconButton
                aria-label="delete"
                className="edit"
                onClick={() => {
                  // dispatch(editTodo(items.id));
                  setSelectedId(items.id);
                }}
              >
                {" "}
                <EditNoteIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                className="deleted"
                onClick={() => dispatch(deletedTodo(items.id))}
              >
                {" "}
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        );
      })}

      {/* REMOVE_ALL_BUTTON */}
      <div className="remove-btn">
        <Button
          className="remove-all"
          onClick={() => dispatch(removeAllTodo())}
        >
          Remove All
        </Button>
      </div>
    </div>
  );
};

export default AddList;
