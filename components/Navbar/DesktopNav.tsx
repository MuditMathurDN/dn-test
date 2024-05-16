import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link'

import ArrowDownSvg from '../assets/arrow-down.svg'
import TryArrow from '../assets/try-icon.svg';
import Image from 'next/image';
// import Image from 'next/image'
import { ProductMenu } from './Menu';




const DesktopNav = ({ posts }: any) => {
    //console.log("posts in desktop navbar", posts);
    const [showHamburgerDD, setShowHamburgerDD] = useState<boolean>(false);
    const wrapperRef = useRef(null);
    const navRef = useRef<HTMLDivElement>(null);
    const [navScrolled, setNavScrolled] = useState<boolean>(false);
    const [subMenu, setSubMenu] = useState<string>("");
    React.useEffect(() => {
        const scrollDown = "scroll-down";
        const scrollUp = "scroll-up";
        const navBar = document.getElementById('navbar');
        let lastScroll = 0;
        const scrollHandle = () => {
            const currentScroll = window.pageYOffset;
            // console.log(currentScroll)
            // if (currentScroll === 0) {
            //     navBar?.classList.remove(scrollUp);
            //     navBar?.classList.remove(scrollDown);
            //     return;
            // }

            if (currentScroll > lastScroll + 10 && !navBar?.classList.contains(scrollDown)) {
                // down
                navBar?.classList.remove(scrollUp);
                navBar?.classList.add(scrollDown);
            } else if (
                currentScroll < lastScroll &&
                navBar?.classList.contains(scrollDown)
            ) {
                // up
                navBar?.classList.remove(scrollDown);
                navBar?.classList.add(scrollUp);
            }
            lastScroll = currentScroll;
        }
        window.addEventListener("scroll", scrollHandle);

        // cleanup this component
        return () => {
            window.removeEventListener('scroll', scrollHandle);
        };
    }, [])


    const handleClickOutside = (event: any) => {
        // @ts-ignore
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setShowHamburgerDD(false);
        }
    };

    const handleClickOutsideNavbar = (event: any) => {

        if (navRef.current && !navRef.current.contains(event.target)) {
            setSubMenu("");
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        document.addEventListener('click', handleClickOutsideNavbar, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
            document.removeEventListener('click', handleClickOutsideNavbar, true);


        };
    }, []);

    useEffect(() => {

        const scrollDown = "scroll-down";
        const scrollUp = "scroll-up";

        let lastScroll = 0;
        const scrollHandle = () => {
            const navBar = document.getElementById('navbar');
            const currentScroll = window.pageYOffset;

            if (currentScroll < 500) {
                navBar?.classList.remove(scrollDown);
                navBar?.classList.add(scrollUp);
                navBar?.classList.remove('backdrop-filter');
                setNavScrolled(false);
                setSubMenu("");
            } else {
                setSubMenu("");
                setNavScrolled(true);
                navBar?.classList.add('backdrop-filter');
                if (currentScroll > lastScroll + 3 && !navBar?.classList.contains(scrollDown)) {
                    navBar?.classList.remove(scrollUp);
                    navBar?.classList.add(scrollDown);
                } else if (currentScroll < lastScroll - 3 && navBar?.classList.contains(scrollDown)) {
                    navBar?.classList.remove(scrollDown);
                    navBar?.classList.add(scrollUp);
                }
                lastScroll = currentScroll;
            }
        }
        window.addEventListener("scroll", scrollHandle);

        // cleanup this component
        return () => {
            window.removeEventListener('scroll', scrollHandle);
        };
    }, [])


    const NavLink = ({ link, target, text }: any) => {

        return <Link
            href={link}
        ><a
            className='text-decorator-none text-[1.3vw]'
            target={target ? target : undefined}>
                {text}</a></Link>

    }

    const NavLinkWithChildren = ({ onClick, text, menuKey }: any) => {
        
        


        return <div className='peer relative h-full flex items-center  '>
            {subMenu === "product" &&<div
             ref={navRef}
            className='absolute bg-[#E7E7E7] 
            w-[17vw] 
            right-0 top-[100%] rounded-md
            py-4 drop-shadow-md
            '
            >
                <ul
                className='space-y-2 px-2'
                >
                    {
                        ProductMenu.map((p)=>{
                            return <li
                            className='py-1'
                            key={p.title}
                            >
                                <Link
                                href={p.link}>
                                <div
                            className='text-center text-[#7A7A7A]
                            text-[13px]
                            border-b-[0.3vh] 
                            border-[#DEDEDE] cursor-pointer
                            '
                            >
                                {p.title}
                            </div>
                                </Link>
                           
                                </li>
                        })
                    }
                </ul>
                
            </div>}
            <p
                className='cursor-pointer select-none'
                onClick={onClick}
            >{text}
            </p>
            <Image
                src={ArrowDownSvg}
                className={`${subMenu === "product" ? "rotate-180" : ""} duration-200`}
            />
        </div>

    }


    return <div

        className='hidden lg:flex 
                        
                            h-full w-full 
                            items-center justify-between
                            px-12 select-none'>
        <div className='w-full flex full
                            justify-center
                            space-x-[1.2vw] 
                             lg:text-base'>

            <div
               
                className='h-full '>
               
                <NavLinkWithChildren
                    text={"Products"}
                    onClick={() => setSubMenu(prev => prev !== "product" ? "product" : "")}

                />

            </div>
            <NavLink
                link={"/humansofnlp"}
                text={"Humans of NLP"}
                target={"_blank"}
            />
            <NavLink
                text={"Why DataNeuron?"}
                link={"/why-dataneuron"}
            />
            <NavLink
                text={"About Us"}
                link={"/about"}
            />
            <NavLink
                text={"Contact Us"}
                link={"/contact"}
            />
        </div>
        <div className='  
                                flex items-center justify-end
                                space-x-8 md:space-x-[20px]
                                lg:mr-12
                                text-sm md:text-sm lg:text-base
                                '>
            <Link
            href="https://portal.dataneuron.ai/signin"
           
            >
                <a  target='_blank'
                className=' w-full flex items-center justify-end'
                >
            <div
                className='border border-primaryBlue h-[42px] w-[195px] rounded-md
                                flex items-center justify-center space-x-2
                                text-primaryBlue font-medium hover:text-white
                                hover:bg-primaryBlue group
                                cursor-pointer 

                                '>
                <p >Try DataNeuron</p>
                <svg 
                className='stroke-primaryBlue fill-primaryBlue
                group-hover:stroke-white group-hover:fill-white
                '
                width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3005_58)">
                        <path d="M8.43374 6.86195C8.41415 6.58566 8.50509 6.3129 8.68657 6.10366C8.86805 5.89441 9.12521 5.76581 9.40149 5.74613L16.0323 5.27492C16.3086 5.25533 16.5814 5.34627 16.7906 5.52775C16.9999 5.70923 17.1285 5.96639 17.1482 6.24267L17.6194 12.8735C17.634 13.147 17.5407 13.4153 17.3594 13.6207C17.1782 13.826 16.9235 13.952 16.6503 13.9714C16.3771 13.9908 16.1072 13.9021 15.8988 13.7245C15.6903 13.5468 15.56 13.2944 15.5358 13.0216L15.1845 8.9739L8.68264 16.4705C8.50113 16.6798 8.24391 16.8084 7.96757 16.8281C7.69123 16.8477 7.41841 16.7567 7.20912 16.5752C6.99983 16.3937 6.87122 16.1365 6.85159 15.8602C6.83195 15.5838 6.92289 15.311 7.10441 15.1017L13.6062 7.60509L9.54956 7.82969C9.27327 7.84929 9.00051 7.75834 8.79127 7.57686C8.58202 7.39538 8.45342 7.13823 8.43374 6.86195Z" fill="current" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3005_58">
                            <rect width="15.6685" height="15.6685" fill="white" transform="translate(0.94873 11.8368) rotate(-49.0648)" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
                </a>
            </Link>

        </div>

    </div>









}


export default DesktopNav;