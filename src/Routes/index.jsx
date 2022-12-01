import React, {useState} from "react";
import AllPages from "./AllPages";
import HomePage from "./HomePage";

export default function Routes(){
    const [shoHome, setShowHome] = useState("false");
    return(
        <>
            {shoHome === "true" ? <HomePage/> : <AllPages/>}
        </>
    )
}