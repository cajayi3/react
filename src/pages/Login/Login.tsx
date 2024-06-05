import React from 'react';
import Button from "../../assets/components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import './Login.css';


const onSubmit = (e) => {
    e.preventDefault();
    console.log();
}

const Login = () => {
    const {register, handleSubmit } = useForm({})


    return (
        <div className='login'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='email'>
                    <label htmlFor='Email'>Email</label>
                    <Input {...register('email')} name='email' placeholder='Email' />
                </div>
                <div className='name'>
                <label htmlFor='Name'>Name</label>
                    <Input {...register('name')} name='name' placeholder='Name' />
                </div>
                <div className='password'>
                    <label htmlFor='Password'>Password</label>
                    <Input {...register('password')} name='password'placeholder='Password' />
                </div>
                <div className='flex'>
                    <Button className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}
export default Login;