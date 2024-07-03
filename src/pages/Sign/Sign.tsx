import React from "react";
import './Sign.css';
import Background from '../../assets/images/cars.jpg'

const Sign = () => {
    return (
        <div> 
        <>
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-400 to-blue-100 p-12">
        <div className="full-container" style={{ backgroundImage: `url(${Background})`}}>
            <form>
                <div className="container">
                    <h1 className="Sign">Sign Up</h1>
                    <div className="username1">
                        <label className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input className="mt-1 w-full rounded-md border border-black-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></input>
                    </div>
                    <div className="name1">
                        <label className="block text-sm font-medium text-gray-700">
                            Name 
                        </label>
                        <input type='name1' className="mt-1 w-full rounded-md border border-black-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </div>
                    <div className="email1">
                        <label className="block text-sm font medium text-gray-700">
                            Email
                          </label>
                          <input 
                            type="email"
                            className="mt-1 w-full rounded-md border border-black-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            className="mt-1 w-full rounded-md border border-black-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </div>
                    <div className="submit1">
                        <button 
                            type="submit" 
                            className="w-full rounded-md bg-blue-500 px-3 py-4 text-white focus:bg-blue-600 focus:outline-none"
                        >
                            Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    </>
    </div>
    );
};

export default Sign
