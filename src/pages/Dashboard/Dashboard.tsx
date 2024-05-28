import * as React from 'react';
import Child from './Child';
import './Dashboard.css';
import { useForm } from "react-hook-form";

const Dashboard = () => {

  const form = useForm()

    return(
      <div><h2 className='data'>Dealership Data</h2>
      <div>
        <label htmlFor='create'>Create</label>
        <input type='text' id='create' name='create' />

        <label htmlFor='update'>Update</label>
        <input type='text' id='update' name='update' />  
      </div>
      <Child /></div>
    )
}

export default Dashboard