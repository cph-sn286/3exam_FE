import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import facade from "../apiFacade";
import URL from "../apiFacade";
import { Link, Switch, Route } from "react-router-dom";
import Details from "./details";

const Owner = () => {
  const [owner, setOwner] = useState([]);

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

  return (
    <div>
      {owner &&
        owner.map((owner) => (
          <div>
            <ul>
              <li>
                Id {owner.id}, name: {owner.name}, phone: {owner.phone}, email: {owner.email},
              </li>
              <Link to={`/owners/${owner.name}`}>Boats</Link>{" "}
            </ul>
          </div>
        ))}
         <hr />
      <Switch>
        <Route path={"/owners/:name"}>
          <Details />
        </Route>
      </Switch>
    </div>
  );
};


export default Owner;