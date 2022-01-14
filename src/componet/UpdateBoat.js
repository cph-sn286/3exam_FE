import { useState } from "react";
import facade from "../apiFacade";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

const UpdateBoat = () => {
    const id = useParams();
  const boatInfo = { brand: "", make: "", name: "", year: "" };
  const [boat, setBoat] = useState(boatInfo);

  const updateBoat = (evt) => {
    evt.preventDefault();
    fetch(
        "http://164.90.227.175:8081/startcode/api/boat/" + id.id ,
        facade.makeOptions("PUT", true, boat)

      )
        .then((response) => response.json())
        .then(console.log(id))
    };
  
  
  const onChange = (evt) => {
    setBoat({
      ...boat,
      [evt.target.id]: evt.target.value,
    });
  };

  return <div>
<h2>Update Boat</h2>
<form onChange={onChange}>
<input placeholder="name" id="name"/>
<input placeholder="brand" id="brand"/>
<input placeholder="make" id="make"/>
<input placeholder="year" id="year"/>
<button onClick={updateBoat}>update boat</button>



</form>


  </div>;
};

export default UpdateBoat;