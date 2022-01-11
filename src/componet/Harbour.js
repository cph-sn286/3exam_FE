import { Link, Switch, Route } from "react-router-dom";
import Details from "./details";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import facade from "../apiFacade";

const Harbour = () => {
  const [harbour, setHarbour] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:8080/SP1_war_exploded/api/harbour/all",
      facade.makeOptions("GET", true)
    )
      .then((response) => response.json())
      .then((data) => {
        setHarbour(data);
      });
  }, []);
  return (
    <div>
      {harbour &&
        harbour.map((harbour) => (
          <div>
            <ul>
              <li>
                Id: {harbour.id}, name: {harbour.name}, capacity:{" "}
                {harbour.capacity}, address {harbour.address},
                <Link to={`/harbours/${harbour.name}`}>Boats</Link>{" "}
              </li>
            </ul>
          </div>
        ))}
      <hr />
      <Switch>
        <Route path={"/harbours/:name"}>
          <Details />
        </Route>
      </Switch>
    </div>
  );
};

export default Harbour;
