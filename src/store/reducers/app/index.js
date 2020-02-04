import { combineReducers } from "redux";
import updateTheme from "./updateTheme";
import login from "./login";
import memberInfo from "./memberInfo";
import language from "./language";
import loading from "./loading";
import miniBag from "./miniBag";
import video from "./video";
import lockProductModal from "./lockProductModal";

const initialState = {
  active: true
};

const index = (state = initialState, action) => {
  switch (action.type) {
    case "SET_APP":
      return {
        ...state,
        active: false
      };

    default:
      return state;
  }
};

const reducers = combineReducers({
  index,
  updateTheme,
  login,
  memberInfo,
  language,
  loading,
  miniBag,
  video,
  lockProductModal
});

export default reducers;
