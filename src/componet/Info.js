import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import facade from "../apiFacade";
import URL from "../apiFacade";
import React from "react";
import UpdateBoat from "./UpdateBoat";
import { Link, Switch, Route } from "react-router-dom";
import UpdateAuctions from "./UpdateAuctions";
import UpdateOwner from "./UpdateOwners";

const Info = () => {
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

  const[owner, setOwner] = useState([]);
  useEffect(() => {  
    fetch(
      "http://localhost:8080/SP1_war_exploded/api/owner/all/" ,
      facade.makeOptions("GET", true)
    )
      .then((response) => response.json())
      .then((data) => {
        setOwner(data);
      })
}, []);

const[boat, setBoat] = useState([]);
useEffect(() => {  
  fetch(
    "http://localhost:8080/SP1_war_exploded/api/boat/all/" ,
    facade.makeOptions("GET", true)
  )
    .then((response) => response.json())
    .then((data) => {
      setBoat(data);
    })
}, []);


return (
    <><><div>
        {auctions &&
            auctions.map((auctions) => (
                <div>
                    <ul>
                        <li> Auctions {"\n"}
                            Id {auctions.id}, name: {auctions.name}, Date: {auctions.date}, time: {auctions.time}, location: {auctions.location}
                        </li> <Link to={`/update-Auctions/${auctions.id}`}>update</Link>{" "}
                    </ul>
                </div>
            ))}
              <hr />
            
    </div><div>
            {owner &&
                owner.map((owner) => (
                    <div>
                        <ul>
                            <li> Owners {"\n"}
                                Id {owner.id}, name: {owner.name}, Phone: {owner.phone}, Email: {owner.email}
                            </li> <Link to={`/update-Owners/${owner.id}`}>update</Link>{" "}
                        </ul>
                    </div>
                ))}
                  <hr />
        </div></><div>
            {boat &&
                boat.map((boat) => (
                    <div>
                        <ul>
                            <li> Boats {"\n"}
                                Id {boat.id}, name: {boat.name}, Brand: {boat.brand}, Make: {owner.make}, Year: {boat.year}
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
        <Route path={"/update-Owners/:id"}>
          <UpdateOwner />
        </Route>
        <Route path={"/update-Auctions/:id"}>
          <UpdateAuctions />
        </Route>
      </Switch>
        </div></>
  );
};


export default Info;