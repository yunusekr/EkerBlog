import { useEffect } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Blog from "./Blog";
import { getSkills, readFromStorage } from "./store/actions";

function App() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
    if (readFromStorage("i18nextLng") === "tr-TR") {
      i18n.changeLanguage("en");
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
