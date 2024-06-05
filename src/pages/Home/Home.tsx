import React from "react";
import './Home.css'


interface HomeProp {
  name : string;
}



const Home =(props: HomeProp) => {
  return(
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  )
}
export default Home