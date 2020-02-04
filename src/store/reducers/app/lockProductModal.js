const initialState = {
  active: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOCK_PRODUCT_MODAL":
      return {
        ...state,
        active: action.bool
      };

    default:
      return state;
  }
};
