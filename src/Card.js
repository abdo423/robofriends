
import React from "react";

const Card =({name,email,id})=>
{
return(
    <div className="tc  bg-light-green dib grow br3 ma2 Pa3">
        <img src={`https://robohash.org/${id}`} alt=""></img>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
)
}
export default Card