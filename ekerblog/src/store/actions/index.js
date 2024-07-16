export const DARK_MODE_CHANGE = "DARK_MODE_CHANGE";
export const GET_SKILLS = "GET_SKILLS";

import axios from "axios";

export const getSkills = () => (dispatch) => {
  axios
    .get("https://66925fea346eeafcf46cb56d.mockapi.io/api/v1/data")
    .then((res) => {
      dispatch({ type: GET_SKILLS, payload: res.data });
    });
};

export const darkModeChange = (lclstr) => {
  return { type: DARK_MODE_CHANGE, payload: lclstr };
};

/*
export const ilkVerileriAl = () => (dispatch) => {
  axios.get("https://reqres.in/api/users?page=1").then((res) => {
    dispatch({ type: VERILER_AL, payload: res.data.data });
  });
};
*/
