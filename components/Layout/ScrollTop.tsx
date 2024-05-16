//3rd Party Modules
import React from 'react';

interface Props {
    visible: any;
}

//Main Component
const scrollTop: React.FC<Props> = ({ visible }) => {
    return <div
        className={`
            flex items-center
            space-x-3 fixed
            md:bottom-6
            bottom-8 right-6
            
            font-medium
            cursor-pointer
            z-[99]
            blend-mode-difference
            duration-300
            ${visible ? 'opacity-1' : 'opacity-0'}`
        }
        onClick={() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }}
    >
        <div>Back to Top</div>
        <img className='w-6 blend-mode-difference' src="/scrollTopBlack.svg" alt="Up Arrow" />
    </div>
}

export default scrollTop;