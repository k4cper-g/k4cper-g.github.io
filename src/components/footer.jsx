import React from "react";
import {
    FaLinkedin,
    FaInstagramSquare,
    FaTwitterSquare,
    FaGithubSquare,
    FaFacebookSquare

} from 'react-icons/fa'
import Logo from './img/VolansLogoWhiteNoBgr.png';

const Footer = () => {
    return (
        <div className="max-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <img  src={Logo} className='w-[30%]' alt="/"/>
                {/* <h1 className="w-full text-3xl font-bold text-[#575ba1]"> Volans.</h1> */}
                <p className="py-4">Where technology fuels finance and talent drives success.</p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <a href="https://github.com/k4cper-g">
                    <FaGithubSquare size={45} />
                    </a>
                    <a href="https://www.instagram.com/volans.tech/">
                    <FaInstagramSquare size={45} />
                    </a>
                    <a href="https://www.linkedin.com/company/volanstechnology">
                    <FaLinkedin size={45} />
                    </a>
                    <a href='https://twitter.com/volansfintech'>
                    <FaTwitterSquare size={45} />
                    </a>
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between mt-6">
                <div>
                    <h6 className="font-medium text-gray-400"> Solutions </h6>
                    <ul>
                        <li className="py-2 text-sm"> Analytics </li>
                        <li className="py-2 text-sm"> Marketing </li> 
                        <li className="py-2 text-sm"> Commerce </li>
                        <li className="py-2 text-sm"> Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400"> Support </h6>
                    <ul>
                        <li className="py-2 text-sm"> Pricing</li>
                        <li className="py-2 text-sm"> Documentation </li>
                        <li className="py-2 text-sm"> Guides </li>
                        <li className="py-2 text-sm"> API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400"> Company </h6>
                    <ul>
                        <li className="py-2 text-sm"> About </li>
                        <li className="py-2 text-sm"> Blog </li> 
                        <li className="py-2 text-sm"> Jobs </li>
                        <li className="py-2 text-sm"> Press </li>
                        <li className="py-2 text-sm"> Careers </li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400 mr-12"> Legal </h6>
                    <ul>
                        <li className="py-2 text-sm"> Claim </li>
                        <li className="py-2 text-sm"> Policy </li> 
                        <li className="py-2 text-sm"> Terms </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer