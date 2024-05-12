import React from 'react';
import Management from './img/crypto.png'

const Finance = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Management} alt="/"/>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#575ba1] font-extrabold'> FINANCE DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Manage Your Cryptocurrency</h1>
                    <p>A finance dashboard designed to empower you in navigating the intricate world of cryptocurrency. Seamlessly integrated, it provides a comprehensive overview of your crypto assets, offering real-time insights into their performance and market trends.</p>
                    <button className=' w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#575ba1] bg-black hover:scale-105  hover:opacity-95 duration-300'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Finance