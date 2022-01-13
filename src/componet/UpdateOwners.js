import { useState } from "react";
import facade from "../apiFacade";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

const UpdateOwner = () => {
    const id = useParams();
  const ownerInfo = { name: "", phone: "", email: "" };
  const [owner, setOwner] = useState(ownerInfo);

  const updateOwner = (evt) => {
    evt.preventDefault();
    fetch(
        "http://localhost:8080/SP1_war_exploded/api/owner/" +id.id,
        facade.makeOptions("PUT", true,owner)

      )
        .then((response) => response.json())
        .then(console.log(id))
    };
  
  
  const onChange = (evt) => {
    setOwner({
      ...owner,
      [evt.target.id]: evt.target.value,
    });
  };

  return <div>
<h2>Update Owner</h2>
<form onChange={onChange}>
<input placeholder="name" id="name"/>
<input placeholder="phone" id="phone"/>
<input placeholder="email" id="email"/>
<button onClick={updateOwner}>update Owner</button>



</form>


  </div>;
};

export default UpdateOwner;