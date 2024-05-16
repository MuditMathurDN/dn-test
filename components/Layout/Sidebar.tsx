import React, { useState, useContext } from 'react';
import FunctionContext from '../context/functionContext';
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
    const FunctionContextData: any = useContext(FunctionContext);
    const router = useRouter();

    const handleClick0 = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        FunctionContextData.setActiveSidebar(0);
        FunctionContextData.setActiveTabCSR(0);
    }
    const handleClick1 = () => {
        // window.scrollTo({
        //     top: 0,
        //     behavior: "smooth"
        // });
        // FunctionContextData.setActiveSidebar(1)
        // FunctionContextData.setActiveTabOPM(0);
        window.open('/humansofnlp', '_blank');
    }
    return <div
        className='flex flex-col 
        max-h-full min-h-full
        custom-font-LucidaConsole 
        text-lightGray'
    >
        <div
            onClick={handleClick0}
            className={`flex flex-1 
            md:items-end items-center justify-center 
            md:pb-6 
            w-full h-full  
            border-x-[0.1rem] border-t-[0.1rem]
            noselect cursor-pointer duration-300
           
            ${FunctionContextData.activeSidebar === -1 ? 'border-[#777777] hover:border-black hover:bg-black hover:text-white' :
                    (FunctionContextData.activeSidebar === 0 && ' bg-primaryYellow text-black border-primaryYellow')
                    || (FunctionContextData.activeSidebar === 1 && 'bg-black text-white border-white hover:bg-primaryYellow hover:border-primaryYellow hover:text-black')} 
                    `}
        >
            <p
                className='text-center 
                md:rotate-180 md:[writing-mode:vertical-lr]'
            >
                Our Product & Mission
            </p>
        </div>
        <div
            onClick={handleClick1}
            className={`flex flex-1 
            md:pb-6 
            w-full h-full  
            items-center md:items-end justify-center 
            border-[0.1rem]
            cursor-pointer noselect duration-300 
            border-[#777777] hover:border-black hover:bg-black hover:text-white
            ${FunctionContextData.activeSidebar === -1 ? '' :
                    (FunctionContextData.activeSidebar === 1 && ' bg-primaryYellow text-black border-primaryYellow ')
                    || (FunctionContextData.activeSidebar === 0 && 'bg-black text-white border-white border-t-0 hover:bg-primaryYellow hover:border-primaryYellow hover:text-black')} 
                    `}
        >
            <p
                className='text-center 
                md:rotate-180 md:[writing-mode:vertical-lr]'
            >
                Case Studies & Resources
            </p>
        </div>
    </div>
}
export default Sidebar;