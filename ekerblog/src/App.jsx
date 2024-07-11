import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Blog from "./Blog";

function App() {
  const [count, setCount] = useState(0);

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
