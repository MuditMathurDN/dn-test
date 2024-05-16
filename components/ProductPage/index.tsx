import React from 'react';
// import { useRouter } from 'next/router';
// import Header from './OPM/Header';
import Content from './OPM/Content';

interface Posts {
    posts: any;
}

const ProductPage: React.FC<Posts> = ({ posts }) => {
    return (
        <div className=''>
            <div className='bg-black'>
                {/* <div className='px-24 pt-12'>
                    <Header />
                </div> */}
                <Content posts={posts} />
            </div>
        </div>
    )
}

export default ProductPage;