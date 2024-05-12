import React from "react";
import Doge from "./img/doge.png"
import Ether from "./img/ether.png"
import Bitcoin from "./img/btc.png"

const Cards = () => {
    return (
        <div className="w-full pt-[7rem] pb-[10rem] px-4 bg-white">
            <h1 className="text-center mx-auto font-bold text-5xl pb-[7rem]">Support us! </h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Doge} alt="/" />
                <h2 className="text-2xl font-bold text-center py-8"> Tier 1 </h2>
                <p className="text-center text-4xl font-bold"> $10 </p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8"> Early access </p>
                    <p className="py-2 border-b mx-8"> Private discord entry </p>
                    <p className="py-2 border-b mx-8"> Mentioned in our contributors list </p>
                </div>
                <button className="bg-[#575ba1] text-black w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 hover:bg-[#494d80] duration-300"> Buy </button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Ether} alt="/" />
                <h2 className="text-2xl font-bold text-center py-8"> Tier 2 </h2>
                <p className="text-center text-4xl font-bold"> $30 </p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8"> Early access </p>
                    <p className="py-2 border-b mx-8"> Private discord entry </p>
                    <p className="py-2 border-b mx-8"> Volans leather wallet  </p>
                    <p className="py-2 border-b mx-8"> Mentioned in our contributors list </p>
                </div>
                <button className="bg-[#575ba1] text-black w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 hover:bg-[#494d80] duration-300"> Buy </button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Bitcoin} alt="/" />
                <h2 className="text-2xl font-bold text-center py-8"> Tier 3 </h2>
                <p className="text-center text-4xl font-bold"> $50 </p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8"> Early access </p>
                    <p className="py-2 border-b mx-8"> Private discord entry </p>
                    <p className="py-2 border-b mx-8"> Volans leather wallet  </p>
                    <p className="py-2 border-b mx-8"> Fee-less transactions *Must be less than 5$*  </p>
                </div>
                <button className="bg-[#575ba1] text-black w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 hover:bg-[#494d80] duration-300"> Buy </button>
            </div>
            </div>
        </div>
    )
}

export default Cards