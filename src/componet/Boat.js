import { Link, Switch, Route } from "react-router-dom";
import Details from "./details";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import facade from "../apiFacade";
import React from "react";
import UpdateBoat from "./UpdateBoat";

const Boat = () => {
  const [boat, setBoat] = useState([]);

  useEffect(() => {
    fetch(
      "http://164.90.227.175:8081/startcode/api/boat/all",
      facade.makeOptions("GET", true)
    )
      .then((response) => response.json())
      .then((data) => {
        setBoat(data);
      });
  }, []);
  return (
    <div>
      {boat &&
        boat.map((boat) => (
          <div>
            <ul>
              <li>
                Id: {boat.id}, name: {boat.name}, brand:{" "}
                {boat.brand}, year: {boat.year}, make: {boat.make}
                <Link to={`/Boats/${boat.id}`}>update</Link>{" "}
              </li> 
            </ul>
          </div>
        ))}
      <hr />
      <Switch>
        <Route path={"/Boats/:id"}>
          <UpdateBoat />
        </Route>
      </Switch>
    </div>
  );
};

export default Boat;
