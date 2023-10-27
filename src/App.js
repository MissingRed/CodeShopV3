import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Log from "./Pages/Log";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import GameView from "./Pages/GameView";

import { AuthProvider } from "./Database/Auth";
import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Log} />
            <PrivateRoute exact path="/Store" component={Home} />
            <PrivateRoute exact path="/Profile" component={Profile} />
            <PrivateRoute exact path="/GameView" component={GameView} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
