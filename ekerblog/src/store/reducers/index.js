import { DARK_MODE_CHANGE, lANGUAGE_CHANGE } from "../actions";

const initialState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode")),
  language: localStorage.getItem("language"),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE_CHANGE:
      return { ...state, darkMode: action.payload };
    case lANGUAGE_CHANGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
