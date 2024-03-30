const initialState = {
  list: [],
  editedId: "",
};

const ReducersTodo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
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
        list: filteringList,
      };

    case "REMOVE_ALL_TODO":
      return {
        list: [],
      };

    default:
      return state;
  }
};

export default ReducersTodo;
