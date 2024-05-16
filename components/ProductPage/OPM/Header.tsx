//3rd Party Modules
import React, { useContext } from 'react';
import FunctionContext from '../../context/functionContext';


//Main Component
const Header: React.FC = () => {
    const FunctionContextData = useContext(FunctionContext)

    return (
        <div className='flex justify-between items-center font-[poppins] bg-black text-white'>
            <div className='text-xl'>
                Our Mission & Product
            </div>
        </div>
    )
}

export default Header;