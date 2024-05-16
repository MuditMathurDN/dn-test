//3rd Party Modules
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';
import ScrollTop from '../../ScrollTop';


import { useContext } from 'react';
import FunctionContext from '../../../context/functionContext';

interface Props {
    setActive: any;
    caseStudy: Array<any> | undefined;
}

//Main Component
const CSR: React.FC<Props> = ({ setActive, caseStudy }) => {

    const FunctionContextData = useContext(FunctionContext)

    React.useEffect(() => {
        return () => {
            // FunctionContextData.setActiveTabCSR(0);
        };
    }, [])
    return (
        <div className='bg-black z-[80]'>
            <div className='px-8 pt-12'>
                <Header setActive={setActive} />
            </div>
            <Content caseStudy={caseStudy} />

        </div>
    )
}

export default CSR;