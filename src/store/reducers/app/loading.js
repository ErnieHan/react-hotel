const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOADING":
      return {
        ...state,
        isLoading: action.bool
      };

    default:
      return state;
  }
};
