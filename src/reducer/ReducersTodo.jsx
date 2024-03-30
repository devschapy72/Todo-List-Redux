const initialState = {
  list: [],
  editedId: "",
};

const ReducersTodo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        // ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "EDIT_TODO":
      const updatedList = state.list.filter(
        (items) => items.id !== action.payload.id
      );
      const selectedItem = state.list.find(
        (items) => items.id === action.payload.id
      );

      return {
        // ...state,
        list: [
          ...updatedList,
          {
            ...selectedItem,
            data: action.payload.data,
          },
        ],
      };

    case "DELETED_TODO":
      const filteringList = state.list.filter(
        (items) => items.id !== action.id
      );
      return {
        // ...state,
        list: filteringList,
      };

    case "REMOVE_ALL_TODO":
      return {
        // ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default ReducersTodo;
