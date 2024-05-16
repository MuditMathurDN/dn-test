import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import FunctionContext from '../context/functionContext';

const Footer: React.FC = () => {
    const FunctionContextData = useContext(FunctionContext)
    let url;
    useEffect(() => {
        url = window.location;

    }, [])
    return (
        <div className='w-screen z-[90]'>
            <footer
                className='grid grid-cols-1 md:grid-cols-[30%_70%] py-6 px-8 mb-[0] border-t-[0.1rem] border-[#777777] break-words font-[poppins] bg-[#FFFEFE]'
            >
                <div
                    className='
            order-2 md:order-none 
            md:mt-0 mt-16'
                >
                    <div
                        className='flex items-center
                mt-2 ml-1 md:ml-0'
                    >
                        <Link href={'/'}>
                            <img
                                className='w-8 cursor-pointer'
                                src="/logo_gray.svg"
                                alt="dataneuron logo"
                            // onClick={() => {
                            //     FunctionContextData.setActiveTabOPM(0);
                            //     FunctionContextData.setActiveTabCSR(0);
                            //     FunctionContextData.setActiveSidebar(-1);
                            // }}
                            />
                        </Link>
                        <div
                            className='w-full
                    text-sm text-center text-lightGray 
                    md:hidden'
                        >
                            Copyright © {new Date().getFullYear()} Precily, Inc.
                        </div>

                    </div>
                </div>
                <div
                    className='grid grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto_auto] 
            text-sm text-lightGray'
                >
                    <div className=''>
                        <Link href="/products/classification">
                            <div className='my-2 cursor-pointer text-[#777] hover:text-[#777]'>
                                Text Classification
                            </div>
                        </Link>
                        <Link href="/products/ner">
                            <div className='my-2 cursor-pointer text-[#777] hover:text-[#777]' onClick={() => { FunctionContextData.setActiveTabOPM(0); }}>
                                Name Entity Recognition
                            </div>
                        </Link>
                        <Link href="/products/summarization">
                            <div className='my-2 cursor-pointer text-[#777] hover:text-[#777]' onClick={() => { FunctionContextData.setActiveTabOPM(1); }}>
                                Summarization
                            </div>
                        </Link>
                        <Link href="/product/#features">
                            <div className='my-2 cursor-pointer text-[#777] hover:text-[#777]'>
                                Why DataNeuron?
                            </div>
                        </Link>

                        <div className='my-2 lg:hidden cursor-pointer'>
                            <Link className='text-[#777] hover:text-[#777]' href="/humansofnlp">
                                <span className='text-[#777] hover:text-[#777]'>Humans of NLP</span>
                            </Link>
                        </div>
                        <div className='my-2 lg:hidden cursor-pointer'>
                            <Link className='text-[#777] hover:text-[#777]' href="/humansofnlp/podcasts">
                                <span className='text-[#777] hover:text-[#777]'>Podcasts</span>
                            </Link>
                        </div>
                        <Link href={'/about'}>

                            <div className='my-2 lg:hidden cursor-pointer text-[#777] hover:text-[#777]' 
                            // onClick={() => {
                            //     FunctionContextData.setActiveTabOPM(0);
                            //     FunctionContextData.setActiveTabCSR(0);
                            //     FunctionContextData.setActiveSidebar(-1);
                            // }}
                            >
                                About Us
                            </div>
                        </Link>
                        <div className='my-2 lg:hidden cursor-pointer'>
                            <a className='text-[#777] hover:text-[#777]' href="https://www.linkedin.com/company/precily/jobs/" target={'_blank'}>
                                Careers
                            </a>
                        </div>

                        {/* For Above Small Screens Only  */}
                        <div className='hidden md:block mt-[3rem]'>
                            Copyright © {new Date().getFullYear()} Precily, Inc.
                        </div>
                    </div>
                    <div className=''>
                        <Link href={'/contact'}>

                            <div className='my-2 lg:hidden cursor-pointer text-[#777] hover:text-[#777]'
                                // onClick={() => {
                                //     FunctionContextData.setActiveTabOPM(0);
                                //     FunctionContextData.setActiveTabCSR(0);
                                //     FunctionContextData.setActiveSidebar(-1);
                                // }}
                                >
                                Contact Us
                            </div>
                        </Link>
                        <div className='my-2 underline lg:hidden break-words cursor-pointer'>
                            <a className='text-[#777] hover:text-[#777]' href="mailto:mail@dataneuron.ai">
                                mail@dataneuron.ai
                            </a>
                        </div>
                        <div className='my-2 lg:hidden cursor-pointer'>
                            <a className='text-[#777] hover:text-[#777]' href="https://www.linkedin.com/company/dataneuron">
                                LinkedIn
                            </a>
                        </div>

                        <Link href={'/privacy_policy'}>
                            <div className='my-2 lg:hidden cursor-pointer text-[#777] hover:text-[#777]' 
                            // onClick={() => {
                            //     FunctionContextData.setActiveTabOPM(0);
                            //     FunctionContextData.setActiveTabCSR(0);
                            //     FunctionContextData.setActiveSidebar(-1);
                            // }}
                            >
                                Privacy Policy
                            </div>
                        </Link>

                        <div className='my-2 hidden lg:block  cursor-pointer'>
                            <Link href="/humansofnlp">
                                <span className='text-[#777] hover:text-[#777]'>Case Studies & Resources</span>
                            </Link>
                        </div>
                        <div className='my-2 hidden lg:block  cursor-pointer'>
                            <Link className='text-[#777] hover:text-[#777]' href="/humansofnlp/podcasts">
                                <span className='text-[#777] hover:text-[#777]'>Podcasts</span>
                            </Link>
                        </div>
                        <Link href={'/privacy_policy'}>
                            <div className='hidden lg:block cursor-pointer mt-[6.49rem] text-[#777] hover:text-[#777]'
                                // onClick={() => {
                                //     FunctionContextData.setActiveTabOPM(0);
                                //     FunctionContextData.setActiveTabCSR(0);
                                //     FunctionContextData.setActiveSidebar(-1);
                                // }}
                                >Privacy Policy
                            </div>
                        </Link>
                    </div>

                    {/* For Large Screens Only */}
                    <div className='hidden lg:block'>
                        <Link href={'/about'}>
                            <div className=' my-2 cursor-pointer text-[#777] hover:text-[#777]' 
                            // onClick={() => {
                            //     FunctionContextData.setActiveTabOPM(0);
                            //     FunctionContextData.setActiveTabCSR(0);
                            //     FunctionContextData.setActiveSidebar(-1);
                            // }}
                            >
                                About Us
                            </div>
                        </Link>
                        <div className='my-2 cursor-pointer'>
                            <a className='text-[#777] hover:text-[#777]' href="https://www.linkedin.com/company/precily/jobs/" target={'_blank'}>
                                Careers
                            </a>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <Link href={'/contact'}>

                            <div className='my-2 cursor-pointer text-[#777] hover:text-[#777]' 
                            // onClick={() => {
                            //     FunctionContextData.setActiveTabOPM(0);
                            //     FunctionContextData.setActiveTabCSR(0);
                            //     FunctionContextData.setActiveSidebar(-1);
                            // }}
                            >
                                Contact Us
                            </div>
                        </Link>
                        <div className='my-2 underline break-words  '>
                            <a className='text-[#777] hover:text-[#777]' href="mailto:mail@dataneuron.ai">
                                mail@dataneuron.ai
                            </a>
                        </div>
                        <div className='my-2  cursor-pointer'>
                            <a className='text-[#777] hover:text-[#777]' href="https://www.linkedin.com/company/dataneuron" target={'_blank'}>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;