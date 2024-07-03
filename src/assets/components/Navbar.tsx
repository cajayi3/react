import React from "react";
import { Link } from "react-router-dom";
import '../../index.css'

const Navbar:React.FC<{}> = () =>{
    return (
        <nav className='relative container mx-auto p-6'>
        <div className='flex items-center justify-between'>
                <div className='flex'>
                    <Link to="/">
                        Home
                    </Link>
                <div className='flex'>
                    <Link to="/About/About">
                        About
                    </Link>
                <div className="flex">
                    <Link to="/Sign/Sign"
                    type="button"
                    className="btn btn-warning">
                        Sign Up
                    </Link>
                </div>
                <div className='flex'>
                    <Link to="/Login/Login" type="button" className="btn btn-outline-light me-2">
                        Login
                    </Link>
                        <div className='hidden font-bold lg:flex'>
                            <Link to='/Dashboard/Dashboard' className='text-black hover:text-darkBlue'>
                                Dashboard
                            </Link>
                            <div className='flex'>
                                <Link to="/">
                                    Sign Out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar