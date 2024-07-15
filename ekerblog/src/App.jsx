import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Blog from "./Blog";
import { getSkills } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSkills());
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
    </>
  );
}

export default App;
