import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link'

import ArrowDownSvg from '../assets/arrow-down.svg'
import Image from 'next/image';
import DesktopNav from '../Navbar/DesktopNav';
// import Image from 'next/image'
import { ProductMenu } from './Menu';
import { AnimatePresence, motion } from 'framer-motion';



const MobileNav: React.FC = () => {
    const [showHamburgerDD, setShowHamburgerDD] = useState<boolean>(false);
    const wrapperRef = useRef(null);
    const [navScrolled, setNavScrolled] = useState<boolean>(false);
    const [subMenu, setSubMenu] = useState<string>("");

    return <div className={`lg:hidden ml-auto block w-[70px] h-full ${!navScrolled ? 'border-[#999999]' : 'border-[#EAEAEA40]'}`} ref={wrapperRef}>
        <div className={`flex items-center justify-center w-full h-full cursor-pointer`} onClick={() => setShowHamburgerDD(!showHamburgerDD)}>
            <img
                className={`w-[30px] brightness-200 ${!navScrolled ? 'svg-white' : ''}`}
                src="/hamburger.svg"
                alt="hamburger icon"
            />
        </div>
        {
            true && (
                <div className={`fixed  px-8   top-0 ${showHamburgerDD ? "left-0" : "left-[100%]"} 
                                        w-screen h-screen  border-[1px] duration-200
                                        border-[#EAEAEA] bg-white text-black`}>
                    <div className='py-2 text-end text-lg' onClick={() => setShowHamburgerDD(false)}>Close</div>
                    <div className='border-b-[1px] border-[#EAEAEA] hover:bg-[#FAFCFC]'>
                        <div className='select-none text-md '>
                            <div
                                onClick={() => setSubMenu(prev => prev === "product" ? "" : "product")}
                                className={`h-[50px] w-full 
                                            flex items-center justify-between
                                            cursor-pointer 
                                            
                                            
                                            `}>
                                <p
                                    className={`${subMenu === "product" ? "text-primaryBlue font-medium" : "text-black"}`}
                                >Products</p>
                                <img src="/OPM/right_arrow.svg"
                                    className={`w-[18px] ${subMenu === "product" ? "-rotate-90" : "rotate-90"} duration-200`} />
                            </div>

                            <div>
                                {subMenu === "product" &&
                                    <AnimatePresence>
                                        <motion.div
                                            initial={{
                                                scaleY: 0.7,
                                                opacity: 0.7
                                            }}
                                            animate={{
                                                scaleY: 1,
                                                opacity: 1
                                            }}
                                            exit={{
                                                scaleY: 0.7,
                                                opacity: 0.7
                                            }}
                                            className=' py-6 origin-top '>

                                            <ul className='space-y-6 py-2 text-start w-full '>
                                                {ProductMenu.map((p) => {
                                                    return (<li
                                                        key={p.link}
                                                        className='space-y-2'>
                                                        <Link href={p.link}>
                                                            <a>
                                                                <h3 className=' text-black text-md w-full  
                                                                    font-normal cursor-pointer
                                                                    select-none'>{p.title}</h3>
                                                                {/* <p className='text-neutral-500 text-sm font-normal'>{p.text}</p> */}
                                                            </a>
                                                        </Link>
                                                    </li>)

                                                })}
                                            </ul>



                                        </motion.div>

                                    </AnimatePresence>
                                }
                            </div>
                        </div>
                    </div>


                    <div className=' block h-[50px] border-b-[1px] border-[#EAEAEA] hover:bg-[#FAFCFC]'>



                        <Link
                            href="/why-dataneuron"
                        ><a

                            className='h-full w-full flex items-center justify-start cursor-pointer'>
                                Why DataNeuron?</a></Link>
                    </div>
                    <div className='block h-[50px] border-b-[1px] border-[#EAEAEA] hover:bg-[#FAFCFC]'>



                        <Link
                            href="/humansofnlp"
                        ><a
                            target='_blank'
                            className='h-full w-full flex items-center justify-start cursor-pointer'>
                                Humans of NLP</a></Link>
                    </div>
                    <div className=' block h-[50px] border-b-[1px] border-[#EAEAEA] hover:bg-[#FAFCFC]'>



                        <Link
                            href="/about"
                        ><a

                            className='h-full w-full flex items-center justify-start cursor-pointer'>
                                About Us</a></Link>
                    </div>
                    <div className=' block h-[50px] border-b-[1px] border-[#EAEAEA] hover:bg-[#FAFCFC]'>


                        <Link href='/contact'>
                            <div className='h-full w-full flex items-center justify-start cursor-pointer'>
                                Contact DataNeuron
                            </div>
                        </Link>
                    </div>

                    <div className=' block h-[50px] hover:bg-[#FAFCFC]'>
                        <a href='https://portal.dataneuron.ai/signin'>
                            <div className='h-full w-full flex items-center justify-start cursor-pointer'>
                                Sign Up / Sign In
                            </div>
                        </a>
                    </div>
                </div>
            )
        }
    </div>


}


export default MobileNav;