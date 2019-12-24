import getCookie from "../../function/getCookie";
import writeCookie from "../../function/writeCookie";

// 基本型
export const setApp = () => {
  return {
    type: "SET_APP",
  };
};

// 呼叫其他 action 型
export const selectLv1Option = index => async dispatch => {
  await dispatch(setApp(index));
};

// 執行多件 function 型
export const fetchProduct = cbu => async dispatch => {
  fetch(`/shopping/v1/compositions/productDetails/info/${cbu}`, {
    credentials: "include",
    headers: { "content-type": "application/json" },
    mode: "cors",
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
};

const primaryTheme = {
  background: "#FFFFFF",
  textColor: "#000000",
  button: "red",
};

const darkTheme = {
  background: "#2F2F2F",
  textColor: "#CCCCCC",
  button: "darkred",
};

export const readThemeCookie = () => dispatch => {
  // 更換網站介面顏色
  const theme_cookie = getCookie("theme");
  if (!theme_cookie) {
    // 1. 預設主題顏色為亮色
    writeCookie("theme", "primary");
    const themeName = "primary";
    const themeColors = primaryTheme;
    dispatch(updateTheme(themeName, themeColors));
  } else {
    // 1. 抓取目前的主題顏色
    const themeName = getCookie("theme");
    const themeColors = themeName === "primary" ? primaryTheme : darkTheme;
    dispatch(updateTheme(themeName, themeColors));
  }
};

export const changeTheme = themeName => dispatch => {
  if (themeName === "primary") {
    const themeColors = primaryTheme;
    writeCookie("theme", themeName);
    dispatch(updateTheme(themeName, themeColors));
  } else {
    const themeColors = darkTheme;
    writeCookie("theme", themeName);
    dispatch(updateTheme(themeName, themeColors));
  }
};

export const updateTheme = (themeName, themeColors) => {
  return {
    type: "UPDATE_THEME",
    themeName,
    themeColors,
  };
};

export const login = bool => {
  return { type: "LOGIN", bool };
};

export const updateMemberInfo = data => async dispatch => {
  // 1.登入成功
  dispatch(login(true));
  // 2.儲存會員資料
  dispatch(saveMemberInfo(data));
};

export const saveMemberInfo = data => {
  return { type: "SAVE_MEMBER_INFO", data };
};

export const fetchMember = memberID => async dispatch => {
  const url = `https://spreadsheets.google.com/feeds/list/1frbwI55o0vd9Sj5kROoG_Wagntqjc_gy7kNZFL2buKo/1/public/values?alt=json&sq=id=${memberID}`;
  try {
    await fetch(url)
      .then(respone => respone.json())
      .then(data => {
        if (data.feed.entry) {
          const memberInfo = data.feed.entry[0];
          dispatch(updateMemberInfo(memberInfo));
        } else {
          throw new Error("無此會員資料");
        }
      });
  } catch (error) {
    console.log(error);
  }
};

export const changeLanguage = language => {
  return { type: "CHANGE_LANGUAGE", language };
};

export const showLoading = bool => {
  return { type: "SHOW_LOADING", bool };
};

export const showMiniBag = bool => {
  return { type: "SHOW_MINI_BAG", bool };
};

export const startPlayingVideo = bool => {
  return { type: "START_PLAYING_VIDEO", bool };
};
