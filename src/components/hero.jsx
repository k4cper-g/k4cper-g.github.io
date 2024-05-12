import React from 'react';
import { ReactTyped } from 'react-typed';


const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#575ba1] font-bold p-2'> SEIZE YOUR FINANCIAL FREEDOM </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold'> Volans e-wallet</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-2xl sm:text-xl text-xl font-bold py-6'> Easy, Instant transfer for </p>
                    <ReactTyped className='md:text-2xl sm:text-xl text-xl font-bold pl-2 text-[#575ba1]' strings={['BTC', 'ETH', 'SOL']} typeSpeed={120} backSpeed={140} loop/>
                </div>
                <p className='md:text-xl text-xl font-bold text-gray-500'> With our e-wallet, you not only gain complete autonomy over your digital assets but also wield the power to manage, monitor, and transact with them seamlessly.</p>
                <button className='bg-[#575ba1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105  hover:opacity-70 duration-300'> Get Started </button>
           </div>
        </div>
    )
}

export default Hero;