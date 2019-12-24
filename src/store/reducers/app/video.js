const initialState = {
  playing: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "START_PLAYING_VIDEO":
      return {
        ...state,
        playing: action.bool,
      };

    default:
      return state;
  }
};
