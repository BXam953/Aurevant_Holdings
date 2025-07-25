"use client"
import Logo from '../media/AUREVANT_LOGO.svg'
import Image from "next/image"
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";


import { useState } from 'react'

;

export default function Navbar(){

    const [isclick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isclick);
    }
    
    return(
        <div className="flex justify-between h-[3.5rem] items-center z-50">
            <Link href="#home">
            <Image width={200} src={Logo} alt='logo'/></Link>

            <div className='hidden md:flex list-none gap-10 underline-offset-4'>
                <li className='hover:underline'><Link href="#home">Home</Link></li>
                <li className='hover:underline'><Link href="#about">About</Link></li>
                <li className='hover:underline'><Link href="#services">Services</Link></li>
                <li className='hover:underline'><Link href="#contact">Contact</Link></li>
            </div>

            <div className='md:hidden flex flex-col gap-10'>
            <button onClick={toggleNavbar} className='md:hidden z-50'>
                {isclick ? (<FaXmark size={40} />) : (<GiHamburgerMenu size={40} />)}
            </button>

            {isclick && (
                <div className='absolute left-0 right-0 top-0 mt-28 flex flex-col md:none p-20 text-2xl bg-[black] text-white list-none z-50'>
                <li className='hover:underline z-100'><Link href="#home">Home</Link></li>
                <li className='hover:underline z-100'><Link href="#about">About</Link></li>
                <li className='hover:underline z-100'><Link href="#services">Services</Link></li>
                <li className='hover:underline z-100'><Link href="#contact">Contact</Link></li>
                </div>
            )}
            </div>   
        </div>
    )
}