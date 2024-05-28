import React from "react";

const Sign = () => {
    return (
        <div> 
        <>
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-400 to-blue-100 p-12">
        <div className="w-full max-w-xl rounded-xl bg-gray-50 shadow-lg">
            <form>
                <div className="flex flex-col items-center justify-center p-8">
                    <h1 className="text-2xl font-bold text-gray-900">Sign Up</h1>
                    <div className="mt-4 w-full">
                        <label className="block text-sm font-medium text-gray-700">
                            Name 
                        </label>
                        <input className="mt-1 w-full rounded-md border border-black-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mt-4 w-full">
                        <label className="block text-sm font medium text-gray-700">
                            Email
                          </label>
                          <input 
                            type="email"
                            className="mt-1 w-full rounded-md border border-black-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mt-4 w-full">
                        <label className="block text-sm font medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            className="mt-1 w-full rounded-md border border-black-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mt-4 w-full">
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
