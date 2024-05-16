import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';

const Home: React.FC = () => {
    return <div className='break-words bg-[#FAFAFA] font-[poppins] py-6 px-1'>
        <div className='mt-6'>
            <Page1 />
        </div>
        <div className=''>
            <Page2 />
        </div>
        <div className=''>
            <Page3 />
        </div>
        <div className=''>
            <Page4 />
        </div>
        <div className=''>
            <Page5 />
        </div>
        <div className=''>
            <Page6 />
        </div>
        <div className=''>
            <Page7 />
        </div> 
        <div className=''>
            <Page8 />
        </div> 
        <div className=''>
            <Page9 />
        </div>

    </div>
}

export default Home;