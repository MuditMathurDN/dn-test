import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link'

import  ArrowDownSvg from '../assets/arrow-down.svg'
import Image from 'next/image';
import DesktopNav from '../Navbar/DesktopNav';
import MobileNav from '../Navbar/MobileNav';
import Container from '../../pages/products/Container';
// import Image from 'next/image'



const Navbar = ({posts}:any) => {
   
    const [navScrolled, setNavScrolled] = useState<boolean>(false);
    // console.log("posts",posts);



    return <nav id="navbar "
        className={`main-navbar scroll-up z-[70] fixed top-0 
                    w-full
                     left-0
                    bg-[#F5F5F5] text-black
                    `}>
            <div className='h-[70px] md:h-[90px]  max-w-[1600px]    
             flex items-center justify-between  md:justify-center  md:mx-auto md:pl-20
             '>
                <div className={` h-full `}>
                    <Link href='/'>
                        <div className=' h-full w-full flex items-center justify-center space-x-[0.2rem] cursor-pointer sm:pl-0 pl-5 sm:pr-0 pr-5'>
                            <img className={`h-[32%]`} src="/logo2.png" alt="dataneuron logo" />
                        </div>
                    </Link>
                </div>

                <DesktopNav posts={posts} />
                <MobileNav />
            </div>
        </nav>

}


export default Navbar;