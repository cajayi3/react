import { useForm, SubmitHandler } from "react-hook-form"
import React from "react";


interface IFormInput {
  Name: string
  Model: string
  Gas: string
  Price: string
  MPH: Number
  Type: string
  Engine: string
}

const CreateCar = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name", { required: true, maxLength: 20 })} />
      <input {...register("Gas", { required: true, maxLength: 30})} />
      <input {...register("Price", { required: true, maxLength: 20})} />
      <input {...register("Model", { required: true, maxLength: 50 })} />
      <input {...register("MPH", { pattern: /^[A-Za-z]+$/i })} />
      <input {...register("Type", { required: true, maxLength: 20})} />
      <input {...register("Engine", { required: true, maxLength: 20})} />
      <input type="submit" />
    </form>
  )
};

export default CreateCar;