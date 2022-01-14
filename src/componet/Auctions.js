import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import facade from "../apiFacade";
import URL from "../apiFacade";
import React from "react";
import UpdateAuctions from "./UpdateAuctions";
import { Link, Switch, Route } from "react-router-dom";
import DeleteAuctions from "./DeleteAuctions";

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    
      
        fetch(
          "http://164.90.227.175:8081/startcode/api/auction/all/" ,
          facade.makeOptions("GET", true)
        )
          .then((response) => response.json())
          .then((data) => {
            setAuctions(data);
          })
      
    
  }, []);

  const click = (evt) => {
    const target = evt.target; 
    auctions[target.id] = target.value;

    DeleteAuctions(target.value);
  }

  return (
    <div>
      {auctions &&
        auctions.map((auctions) => (
          <div>
            <ul>
              <li>
                Id {auctions.id}, name: {auctions.name}, Date: {auctions.date}, time: {auctions.time}, location: {auctions.location}
              </li> <Link to={`/delete-Auctions/${auctions.id}`}></Link>{" "}
              <button id ="id" value={auctions.id} onClick={click}>
                Delete Auction
              </button>
            </ul>
          </div>
        ))}
        <Switch>
        <Route path={"/delete-Auctions/:id"}>
          <DeleteAuctions auctionsId = {auctions.id} />
        </Route>
      </Switch>
    </div>
  );
};


export default Auctions;