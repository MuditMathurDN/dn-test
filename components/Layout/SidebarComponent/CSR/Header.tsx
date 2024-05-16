//3rd Party Modules
import React, { useContext } from 'react';
import FunctionContext from '../../../context/functionContext';
interface HeaderProps {
    setActive: any;
}



//Main Component
const Header: React.FC<HeaderProps> = ({ setActive }) => {

    const FunctionContextData = useContext(FunctionContext)

    return (
        <div className='flex justify-between items-center font-[poppins] bg-black text-white'>
            <div className='text-xl'>
                Case Studies & Resources
            </div>
            <img className='w-7 cursor-pointer' src="/cross.svg" alt="crossIcon" onClick={() => {
                FunctionContextData.setActiveSidebar(-1)
                FunctionContextData.setActiveTabCSR(0);
            }} />
        </div>
    )
}

export default Header;