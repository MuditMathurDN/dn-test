//3rd Party Modules
import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import ScrollTop from '../../ScrollTop';
import { useContext } from 'react';
import FunctionContext from '../../../context/functionContext';


interface Props {
    setActive: any;
    posts: Array<any> | undefined;
}
//Main Component
const OPM: React.FC<Props> = ({ setActive, posts }) => {
    const FunctionContextData = useContext(FunctionContext)
    // console.log(FunctionContextData);

    React.useEffect(() => {

        return () => {
            // FunctionContextData.setActiveTabOPM(0);
        };
    }, [])
    return (
        <div className='bg-black z-[80]'>
            {/* <ScrollTop visible={visible} /> */}
            <div className='px-8 pt-12'>
                <Header setActive={setActive} />
            </div>
            <Content posts={posts} />
        </div>
    )
}

export default OPM;