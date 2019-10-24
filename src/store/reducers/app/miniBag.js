const initialState = {
  active: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MINI_BAG":
      return {
        ...state,
        active: action.bool
      };

    default:
      return state;
  }
};
