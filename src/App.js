import React from "react";
import { Switch, Route ,BrowserRouter} from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/quiz";

export default function App() { 
	 return (
    <div>
		<BrowserRouter>

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route component={NoMatchPage} />
      </Switch>
	  </BrowserRouter>

    </div>
  );
};

const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};
