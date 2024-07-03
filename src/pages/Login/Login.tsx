import React from 'react';
import Button from "../../assets/components/Button";
import Input from "../../assets/components/Input";
import { useForm } from "react-hook-form";
import './Login.css';
import Background from '../../assets/images/rarri.jpg'


const onSubmit = (e) => {
    e.preventDefault();
    console.log();
}

const Login = () => {
    const {register, handleSubmit } = useForm({})


    return (
        <div className='login' style={{ backgroundImage: `url(${Background})`}}>
            <h1 className='head'>Login</h1>
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
                <div>
                    <Button className='flex-1'
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}
export default Login;