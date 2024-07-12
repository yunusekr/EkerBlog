export const DARK_MODE_CHANGE = "DARK_MODE_CHANGE";
export const lANGUAGE_CHANGE = "lANGUAGE_CHANGE";

export const darkModeChange = (lclstr) => {
  return { type: DARK_MODE_CHANGE, payload: lclstr };
};

export const languageChange = (lclstrlng) => {
  return { type: lANGUAGE_CHANGE, payload: lclstrlng };
};

/*
export const ilkVerileriAl = () => (dispatch) => {
  axios.get("https://reqres.in/api/users?page=1").then((res) => {
    dispatch({ type: VERILER_AL, payload: res.data.data });
  });
};
*/
