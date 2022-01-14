import { useEffect } from "react/cjs/react.development"
import facade from "../apiFacade"


function DeleteAuctions (props) {

    fetch("http://localhost:8080/SP1_war_exploded/api/auction/deleteauction/" + props,
    facade.makeOptions("DELETE", true)
    ).then((response) => response.json())
}

export default DeleteAuctions; 