import { useState } from "react";
import facade from "../apiFacade";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

const UpdateAuctions = () => {
    const id = useParams();
  const auctionInfo = { name: "", date: "", time: "", location: "" };
  const [auction, setAuction] = useState(auctionInfo);

  const updateAuction = (evt) => {
    evt.preventDefault();
    fetch(
        "http://localhost:8080/SP1_war_exploded/api/auction/" + id.id ,
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