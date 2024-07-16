import { DARK_MODE_CHANGE, GET_SKILLS } from "../actions";

const initialState = {
  darkMode:
    JSON.parse(localStorage.getItem("darkMode")) === null
      ? true
      : JSON.parse(localStorage.getItem("darkMode")),
  skills: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE_CHANGE:
      return { ...state, darkMode: action.payload };
    case GET_SKILLS:
      return { ...state, skills: action.payload };
    default:
      return state;
  }
};
