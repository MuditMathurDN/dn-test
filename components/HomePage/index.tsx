import React from 'react';
import dynamic from 'next/dynamic';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
// import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import { useRouter } from 'next/router';
import Container from '../../pages/products/Container';
import Expertise from './expertise';

const Page5 = dynamic(() => import('./Page5'), { ssr: false });
interface Posts {
    posts: any;
}
const Home: React.FC<Posts> = ({ posts }) => {
    const router = useRouter();

  
    
    
  
    return <div className='bg-bgGray'>
        
        <div className=''>
            <Page1 />
        </div>
        <div className='-mt-12 md:mt-0'>
            <Expertise />
        </div>
      
    </div>
}

export default Home;