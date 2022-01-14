import { useState } from "react";
import facade from "../apiFacade";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

const UpdateAuctions = () => {
  const [auction, setAuction] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
  });
  const location = useLocation()
  const {id} = location.state

  console.log(id)

  const updateAuction = (evt) => {
    evt.preventDefault();
    fetch(
        "http://164.90.227.175:8081/startcode/api/auction/" + id,
        facade.makeOptions("PUT", true,auction)

      )
        .then((response) => response.json())
        .then(console.log(id))
    };
  
  const onChange = (evt) => {
    setAuction({
      ...auction,
      [evt.target.id]: evt.target.value,
    });
  };

  return <div>
<h2>Update Auction</h2>
<form onChange={onChange}>
<input placeholder="name" id="name"/>
<input placeholder="date" id="date"/>
<input placeholder="time" id="time"/>
<input placeholder="location" id="location"/>
<button onClick={updateAuction}>update auction</button>



</form>


  </div>;
};

export default UpdateAuctions;