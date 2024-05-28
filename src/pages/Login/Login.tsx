import React from 'react';
import Button from "../../assets/components/Button";
import Input from "../Input";
import { useSubmit } from "react-router-dom";
import { useForm } from "react-hook-form";


const onSubmit = (e) => {
    e.preventDefault();
    console.log();
}

const Login = () => {
    const {register, handleSubmit } = useForm({})


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='Email'>Email</label>
                    <Input {...register('email')} name='email' placeholder='Email' />
                </div>
                <div>
                    <label htmlFor='Password'>Password</label>
                    <Input {...register('password')} name='password'placeholder='Password' />
                </div>
                <div className='flex p-1'>
                    <Button className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}
export default Login