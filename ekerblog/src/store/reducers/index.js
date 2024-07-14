import { DARK_MODE_CHANGE, GET_SKILLS, lANGUAGE_CHANGE } from "../actions";

const initialState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode")),
  language: localStorage.getItem("language"),
  skills: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE_CHANGE:
      return { ...state, darkMode: action.payload };
    case lANGUAGE_CHANGE:
      return { ...state, language: action.payload };
    case GET_SKILLS:
      return { ...state, skills: action.payload };
    default:
      return state;
  }
};
