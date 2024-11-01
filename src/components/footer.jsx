import React from 'react';
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { RiInstagramFill } from 'react-icons/ri';

function Footer() {
  return (
    <footer className=' w-full gradient-bg h-1/6 text-white py-4 flex flex-col gap-8 custom-rounded-tl'>

        <div className='flex justify-around items-center'>
            <div className='flex gap-4'>
                <img src="councillogo.png" alt="logo" className='h-20 w-20 hover:scale-105 transition-transform duration-200 ease-in-out hover:cursor-pointer' />
                <h1 className='text-2xl font-bold hover:text-indigo-100 transition-colors duration-200 ease-in-out hover:cursor-pointer tracking-wide leading-tight'>Cultural <br></br> Council</h1>
                <div className="h-16 w-px bg-gray-400"></div>
                <img src="collegelogo.png" alt="collegelogo" className='h-14 w-14 hover:scale-105 transition-transform duration-200 ease-in-out' />
            </div>
            <div>
                <ul className='flex gap-16 font-semibold text-lg'>
                    <li className='hover:text-gray-300 hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'>Home</li>
                    <li className='hover:text-gray-300 hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'>Events</li>
                    <li className='hover:text-gray-300 hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'>Clubs</li>
                    <li className='hover:text-gray-300 hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'>Teams</li>
                </ul>
            </div>
        </div>
        <div className='flex justify-around'>
            <div className='flex items-center gap-1 text-lg'><IoLocationSharp /> Gymkhana Building, IIT BHU</div>
            <div>
                <ul className='flex gap-4'>
                    <li className='flex items-center gap-1'><IoMail />culturalcouncil.iitbhu.in</li>
                    <li className='flex items-center'><RiInstagramFill /></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </footer>
  );
}

export default Footer;