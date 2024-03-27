
function Avatar(props){

  return(
<div>
<img src={props.image}></img>
<h1>{props.firstName} {props.lastName}</h1>
</div>
)
}






  export default Avatar