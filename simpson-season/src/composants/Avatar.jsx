import { useState } from "react";
function Avatar(props){
const [Donut , setDonut] =useState(props.Donut?props.Donut : 0)
const increaseCount = () => {
  setDonut(Donut +1)
}
  return(

<div>

<img src={props.img}></img>

<h1>{props.firstName} {props.lastName} {props.devise}</h1>
<button onClick={ increaseCount}>🍩{Donut} {(Donut === 0 ? "j'ai la dalle" : "J'ai bien mangé")}</button>
</div>

);

  }






  export default Avatar