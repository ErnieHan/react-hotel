const initialState = {
  memberInfo: null,
  getMemberInfoSuccessfully: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_MEMBER_INFO":
      return {
        ...state,
        memberInfo: action.data,
        getMemberInfoSuccessfully: true
      };

    default:
      return state;
  }
};
