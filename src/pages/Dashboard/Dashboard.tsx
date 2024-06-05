import * as React from 'react';
import Child from './Child';
import './Dashboard.css';
import { useForm } from "react-hook-form";

const Dashboard = () => {

  const form = useForm()

    return(
      <form>
        <div><h2 className='data'>Dealership Data</h2>
      <div className='Dash'>
        <button className='Button'>Create</button>
        <button className='Button'>Update</button>
        <button className='Button'>Delete</button>  
      </div>
      <Child /></div>
      </form>
      
    )
}

export default Dashboard