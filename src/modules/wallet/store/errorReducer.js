const defaultState = {
  isOpened: false,
  errorMessage: "",
};

export const errorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "THROW_ERROR":
      return { isOpened: true, errorMessage: action.payload };

    case "CLOSE_ERROR":
      return { isOpened: false, errorMessage: action.payload };

    default:
      return state;
  }
};
