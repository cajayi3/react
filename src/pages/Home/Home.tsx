import React from "react";
import './Home.css'
import Background from '../../assets/images/dealership.jpg'



interface HomeProp {
  name : string;
}



const Home =(props: HomeProp) => {
  return(
    <div style={{ backgroundImage: `url(${Background})`}}>
      <h1 className="hello">Hello, {props.name}!</h1>
    </div>
  )
}
export default Home