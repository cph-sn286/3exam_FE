import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import facade from "../apiFacade";
import URL from "../apiFacade";
import React from "react";
import UpdateAuctions from "./UpdateAuctions";
import { Link, Switch, Route } from "react-router-dom";

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    
      
        fetch(
          "http://localhost:8080/SP1_war_exploded/api/auction/all/" ,
          facade.makeOptions("GET", true)
        )
          .then((response) => response.json())
          .then((data) => {
            setAuctions(data);
          })
      
    
  }, []);

  return (
    <div>
      {auctions &&
        auctions.map((auctions) => (
          <div>
            <ul>
              <li>
                Id {auctions.id}, name: {auctions.name}, Date: {auctions.date}, time: {auctions.time}, location: {auctions.location}
              </li> <Link to={`/update-Auctions/${auctions.id}`}>update</Link>{" "}
            </ul>
          </div>
        ))}
        <Switch>
        <Route path={"/update-Auctions/:id"}>
          <UpdateAuctions />
        </Route>
      </Switch>
    </div>
  );
};


export default Auctions;