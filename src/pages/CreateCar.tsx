import { useForm } from "react-hook-form"
import  Button from "../../src/assets/components/Button";
import React from "react";
import '../createcar.css'
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseEngine, chooseGas, chooseMPH, chooseModel, chooseName, choosePrice, chooseType } from "../redux/slices/RootSlice";

interface IFormInput {
  id?: string[]
  Name?: string[]
  Model?: string[]
  Gas?: string[]
  Price?: string[]
  MPH?: Number
  Type?: string[]
  Engine?: string[]
}

const FormInput = ( props:IFormInput) => {
  const { onBackBtnClickHnd } = props
  const { register, handleSubmit} = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseGas(data.gas));
      dispatch(choosePrice(data.price));
      dispatch(chooseModel(data.model));
      dispatch(chooseMPH(data.mph));
      dispatch(chooseType(data.type));
      dispatch(chooseEngine(data.engine));

      server_calls.create(store.getState())
    }
  }



type Props = {
    onBackBtnClickHnd : () => void
}



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input {...register("Name", { required: true, maxLength: 20 })} />
      <label htmlFor="gas">Gas</label>
      <input {...register("Gas", { required: true, maxLength: 30})} />
      <label htmlFor="price">Price</label>
      <input {...register("Price", { required: true, maxLength: 20})} />
      <label htmlFor="model">Model</label>
      <input {...register("Model", { required: true, maxLength: 50 })} />
      <label htmlFor="mph">MPH</label>
      <input {...register("MPH", { pattern: /^[A-Za-z]+$/i })} />
      <label htmlFor="type">Type</label>
      <input {...register("Type", { required: true, maxLength: 20})} />
      <label htmlFor="engine">Engine</label>
      <input {...register("Engine", { required: true, maxLength: 20})} />
      <input type="button" value="Back" onClick={ onBackBtnClickHnd }/>
      <Button className="submitCar" 
      >
        Submit
        </Button>
    </form>
  )
};


export default FormInput;