import { useState } from "react";
import facade from "./apiFacade";

const CreateBoat = () => {
  const boatInfo = { brand: "", make: "", name: "" };
  const [boat, setBoat] = useState(boatInfo);

  const createBoat = (evt) => {
    evt.preventDefault();
    fetch(
        "http://localhost:8080/SP1_war_exploded/api/boat/createboat" ,
        facade.makeOptions("POST", true,boat)
      )
        .then((response) => response.json())
        
  };

  const onChange = (evt) => {
    setBoat({
      ...boat,
      [evt.target.id]: evt.target.value,
    });
  };

  return <div>
<h2>Create Boat</h2>
<form onChange={onChange}>
<input placeholder="brand" id="brand"/>
<input placeholder="make" id="make"/>
<input placeholder="name" id="name"/>
<button onClick={createBoat}>create boat</button>



</form>


  </div>;
};

export default CreateBoat;
