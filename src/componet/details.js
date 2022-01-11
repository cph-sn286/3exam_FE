import { useEffect, useState } from "react";
import { useParams } from "react-router";
import facade from "../apiFacade";

const Details = () => {
  let { name } = useParams();

  const [boat, setBoat] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:8080/SP1_war_exploded/api/boat/getboatbyharbour/" +
        name,
      facade.makeOptions("GET", true)
    )
      .then((response) => response.json())
      .then((data) => {
        setBoat(data);
      });
  },[name]);

  return (
    <div>
      <div>
        {boat &&
          boat.map((boat) => (
            <div>
              <ul>
                <li>
                  ID: {boat.id} <br />
                  Brand: {boat.brand},
                  Make: {boat.make},
                  Name: {boat.name}. 
                </li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Details;
