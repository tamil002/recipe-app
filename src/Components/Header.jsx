import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'


const Header = () => {

    const [toggleMenu, settoggleMenu] = useState(false);
    return (

        <div className="flex w-[300%] md:w-full justify-between px-4 py-2  text-black bg-white">
            <a className="font-bold md:text-xl text-2xl font-serif">SJ Foods</a>
            <nav className='hidden md:block font-serif'>

                <ul className=" flex gap-10 text-xl justify-between">
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#food'>Foods</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact us</a></li>

                </ul>

            </nav>
            {toggleMenu && <nav className='block md:hidden  '>

                <ul onClick={() => settoggleMenu(!toggleMenu)} className=" fixed w-1/2 h-10 top-12 text-xl -left-[-530px] font-serif ">
                    <li className='w-full h-full text-center mb-1 mt-1 rounded-lg pt-2 bg-white'><a href='#home'>Home</a></li>
                    <li className='w-full h-full text-center mb-1 mt-1 rounded-lg pt-2 bg-white'><a href='#food'>Foods</a></li>
                    <li className='w-full h-full text-center mb-1 mt-1 rounded-lg pt-1 bg-white'><a href='#about'>About</a></li>
                    <li className='w-full h-full text-center mb-1 mt-1 rounded-lg pt-2 bg-white'><a href='#contact'>Contact us</a></li>

                </ul>

            </nav>}
            <button onClick={() => settoggleMenu(!toggleMenu)} className='block md:hidden mr-3'><Bars3Icon className='text-black h-5 size-5 mr-[-30px] ' /></button>

        </div>

    )
}

export default Header
