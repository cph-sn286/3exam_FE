import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import facade from "../apiFacade";
import URL from "../apiFacade";

const Owners = () => {
  const [owner, setOwner] = useState([]);

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

  return (
    <div>
      {owner &&
        owner.map((owner) => (
          <div>
            <ul>
              <li>
                Id {owner.id}, name: {owner.name}, phone: {owner.phone}, address: {owner.address},
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};


export default Owners;