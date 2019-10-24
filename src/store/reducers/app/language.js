const initialState = {
  language: "zhTW"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        language: action.language
      };

    default:
      return state;
  }
};
