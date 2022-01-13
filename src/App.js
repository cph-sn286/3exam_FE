import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componet/Header";
import Home from "./componet/Home";
import AddBook from "./componet/AddBook";
import NoMatch from "./componet/NoMatch";
import FindBook from "./componet/FindBook";
import LogIn from "./componet/login/LogIn";
import facade from "./apiFacade";
import LoggedIn from "./componet/login/LoggedIn";
import Owners from "./componet/Owner";
import CreateBoat from "./CreateBoat";
import Auctions from "./componet/Auctions.js";
import Boat from "./componet/Boat";
import UpdateBoat from "./componet/UpdateBoat";
import CreateAuction from "./componet/CreateAuction"; 
import Info from "./componet/Info";
import UpdateAuctions from "./componet/UpdateAuctions";
import UpdateOwner from "./componet/UpdateOwners";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={props.bookFacade} />
        </Route>
        <Route path="/find-book">
          <FindBook bookFacade={props.bookFacade} />
        </Route>
        <Route path="/auctions">
          <Auctions />
        </Route>
        <Route path="/owners">
          <Owners details={props.Details}/>
        </Route>
        <Route path="/info">
          < Info />
        </Route>
        <Route path="/boats">
          < Boat />
        </Route>
        <Route path="/update-boats">
          < UpdateBoat />
        </Route>
        <Route path="/update-Auctions">
          < UpdateAuctions />
        </Route>
        <Route path="/update-Owners">
          < UpdateOwner />
        </Route>
        <Route path="/create-boat">
          <CreateBoat CreateBoat={props.LogIn}/>
        </Route>
        <Route path="/create-auction">
          <CreateAuction CreateAuction={props.LogIn}/>
        </Route>
        <route path="/login">
          <div>
            {!loggedIn ? (
              <LogIn login={login} />
            ) : (
              <div>
                <LoggedIn facade={facade} />
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        </route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
