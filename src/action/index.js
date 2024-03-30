// CLICK_ADD_TODO
const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: Math.random(),
      data: data,
    },
  };
};

// CLICK_EDIT_BUTTON
const editTodo = (id, data) => {
  return {
    type: "EDIT_TODO",
    payload: {
      id: id,
      data: data,
    },
  };
};

// CLICK_DELETED_BUTTON
const deletedTodo = (id) => {
  return {
    type: "DELETED_TODO",
    id,
  };
};

// CLICK_REMOVE_ALL_BUTTON
const removeAllTodo = () => {
  return {
    type: "REMOVE_ALL_TODO",
  };
};

export { addTodo, editTodo, deletedTodo, removeAllTodo };
