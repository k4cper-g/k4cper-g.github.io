import React from "react";



const Newsletter = () => {
    return (
        <div className="w-full py-16 text-white px-4">
          <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2 my-4s">
               <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want to follow our progress?</h1>
               <p>Sign up for our newsletter and stay in touch.</p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email"/>
                    <button className='bg-[#575ba1] text-black w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 hover:scale-105  hover:opacity-70 duration-300'> Notify Me</button>
                </div>
                <p> We care about the protection of your data. Please read our <span className="text-[#575ba1]"><u>Privacy Policy.</u></span></p>
            </div>
            </div>
        </div>
    )
}

export default Newsletter