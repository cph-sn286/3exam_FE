import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import facade from "../apiFacade";
import URL from "../apiFacade";
import React from "react";
import UpdateBoat from "./UpdateBoat";
import { Link, Switch, Route } from "react-router-dom";
import UpdateAuctions from "./UpdateAuctions";
import UpdateOwners from "./UpdateOwners";

const Info = () => {
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

  const[owner, setOwner] = useState([]);
  useEffect(() => {  
    fetch(
      "http://164.90.227.175:8081/startcode/api/owner/all/" ,
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
    "http://164.90.227.175:8081/startcode/api/boat/all/" ,
    facade.makeOptions("GET", true)
  )
    .then((response) => response.json())
    .then((data) => {
      setBoat(data);
    })
}, []);


return (
  <div><div>
    {auctions &&
      auctions.map((auctions) => (
        <div>
          <ul>
            <li> Auctions {"\n"}
              Id {auctions.id}, name: {auctions.name}, Date: {auctions.date}, time: {auctions.time}, location: {auctions.location}
              <Link to={{ pathname: '/update-Auctions', state: { id: auctions.id } }}>
                <button id="id">update Auctions</button>
              </Link>
            </li>
          </ul>
        </div>
      ))}
</div>
<div>
      {owner &&
        owner.map((owner) => (
          <div>
            <ul>
              <li>
                Owners {"\n"}
                Id {owner.id}, name: {owner.name}, Phone: {owner.phone}, Email: {owner.email}
                <Link to={{ pathname: '/update-Owners', state: { id: owner.id } }}>
                  <button id="id">update owner</button>
                </Link>
              </li>
            </ul>
          </div>
        ))}
</div> <div>
      <div>
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
          </div>
        <hr /> 
        <Switch>
          <Route path={"/Boats/:id"}>
            <UpdateBoat />
          </Route>
          <Route path={"/update-Owners/:id"}>
            <UpdateOwners />
          </Route>
          <Route path={"/update-Auctions/:id"}>
            <UpdateAuctions />
          </Route>
        </Switch>
        </div> </div>
      );
  };
      
      export default Info;