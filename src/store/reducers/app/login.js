const initialState = {
  isLogin: false,
  getLoginSuccessfully: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: action.bool,
        getLoginSuccessfully: true
      };

    default:
      return state;
  }
};
