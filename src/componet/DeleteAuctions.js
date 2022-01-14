import { useEffect } from "react/cjs/react.development"
import facade from "../apiFacade"


function DeleteAuctions (props) {

    fetch("http://164.90.227.175:8081/startcode/api/auction/deleteauction/" + props,
    facade.makeOptions("DELETE", true)
    ).then((response) => response.json())
}

export default DeleteAuctions; 