import { useState } from "react";
import facade from "../apiFacade";

const CreateAuction = () => {
  const auctionInfo = { Name: "", date: "", time: "", location: ""};
  const [auction, setAuction] = useState(auctionInfo);

  const createAuction = (evt) => {
    evt.preventDefault();
    fetch(
        "http://164.90.227.175:8081/startcode/api/auction/createauction" ,
        facade.makeOptions("POST", true,auction)
      )
        .then((response) => response.json())
        
  };

  const onChange = (evt) => {
    setAuction({
      ...auction,
      [evt.target.id]: evt.target.value,
    });
  };

  return <div>
<h2>Create Auction</h2>
<form onChange={onChange}>
<input placeholder="name" id="name"/>
<input placeholder="date" id="date"/>
<input placeholder="time" id="time"/>
<input placeholder="location" id="location"/>
<button onClick={createAuction}>create auction</button>



</form>


  </div>;
};

export default CreateAuction;