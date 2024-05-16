import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import FunctionContext from '../context/functionContext';

const Footer: React.FC = () => {
    const FunctionContextData = useContext(FunctionContext)
    let url;
    useEffect(() => {
        url = window.location;
    }, [])

    return <footer
    className=' bg-[#D9D9D9]
    text-textGray
    font-[roboto] 
    flex items-center justify-start md:justify-center
    
    md:h-[282px]
     py-12
    
    '
    >
        <div
        className=' w-full flex-col 
        md:flex-row flex items-start 
        justify-start md:justify-between
        space-y-4 space-x-4
        px-4 md:px-12
        '
        
        >
        {/* Logo */}
        <Link 
        href='/'
        className='h-full'
        >
                        <div className=' max-w-[200px] cursor-pointer '>
                            <img className={`h-[32%]`} src="/logo2.png" alt="dataneuron logo" />
                        </div>
                    </Link>

        {/* Explore */}
        <div className='text-[14px]  '>
                <h2 className='text-[16px]'>Explore</h2>
                <Link href="/products/classification">
                    <div className='my-2 cursor-pointer'>
                        Text Classification
                    </div>
                </Link>
                <Link href="/products/ner">
                    <div className='my-2 cursor-pointer'>
                        Named Entity Recognition
                    </div>
                </Link>
                <Link href="/products/llm-customization">
                    <div className='my-2 cursor-pointer'>
                        LLM Customization
                    </div>
                </Link>
            </div>

        {/* Information */}
        <div className='text-[14px] '>
                <h2 className='text-[16px]'>Information</h2>
                <Link href="/about">
                    <div className='my-2 cursor-pointer'>
                        About Us
                    </div>
                </Link>
                <Link href="/why-dataneuron">
                    <div className='my-2 cursor-pointer'>
                        Why DataNeuron
                    </div>
                </Link>
                <Link href="/humansofnlp">
                    <a target='_blank'>
                    <div className='my-2 cursor-pointer'>
                        Humans Of NLP
                    </div>
                    </a>
                </Link>
            </div>

        {/* Contact Us */}
        <div className='text-[14px]'>
                <h2 className='text-[16px]'>Contact Us</h2>
                <Link href="/products/classification">
                    <div className='my-2 cursor-pointer'>
                        
                    <a className='flex gap-2 ' href="mailto:mail@dataneuron.ai">
                    <img src="mail_gray.svg" 
              className='w-4 h-4'
              alt="mail_icon" />mail@dataneuron.ai
                    </a>
                    </div>
                </Link>
                <div className='w-3/4'>
                    <div className='flex gap-2 my-2 cursor-pointer'>
                    <img src="location_gray.svg" 
              className='w-4 h-4'
              alt="dataneuron office location" />
              Office # 16, M-Block, Amity University, Sector 125, Noida - 201301
                    </div>
                </div>
                
            </div>

        </div>

    </footer>
    
    return <footer
        className='grid grid-cols-1 md:grid-cols-[30%_70%] 
        py-6 px-8 
        border-t-[0.1rem] border-[#777777] break-words
        font-[roboto] 
        bg-[#D9D9D9]'
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
                 <Link href='/'>
                        <div className=' h-full w-3/4 max-w-[200px] flex items-center justify-center space-x-[0.2rem] cursor-pointer sm:pl-0 pl-5 sm:pr-0 pr-5'>
                            <img className={`h-[32%]`} src="/logo2.png" alt="dataneuron logo" />
                        </div>
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
            className='grid md:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto_auto] 
            text-sm text-lightGray gap-[20px] md:gap-0'
        >   
            <div className='text-[14px] font-[roboto] '>
                <h2 className='text-[16px]'>Explore</h2>
                <Link href="/products/classification">
                    <div className='my-2 cursor-pointer'>
                        Text Classification
                    </div>
                </Link>
                <Link href="/products/ner">
                    <div className='my-2 cursor-pointer'>
                        Named Entity Recognition
                    </div>
                </Link>
                <Link href="/products/llm-customization">
                    <div className='my-2 cursor-pointer'>
                        LLM Customization
                    </div>
                </Link>
              
                
            

              
                <h2 className='text-[16px] font-[roboto]'>Contact Us</h2>                  
                <Link href={'/about'}>

                    <div className='my-2 lg:hidden cursor-pointer' 
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

                    <div className='my-2 lg:hidden cursor-pointer'
                        >
                        Contact Us
                    </div>
                </Link>
                <div className='my-2 underline lg:hidden break-words  cursor-pointer'>
                    <a className='text-[#777] hover:text-[#777]' href="mailto:mail@dataneuron.ai">
                    <img src="mail_icon.svg" 
              className='w-6 h-6'
              alt="mail_icon" />mail@dataneuron.ai
                    </a>
                </div>
                <div className='my-2 lg:hidden cursor-pointer'>
                    <a className='text-[#777] hover:text-[#777]' href="https://www.linkedin.com/company/dataneuron" target={'_blank'}>
                        LinkedIn
                    </a>
                </div>

                <Link href={'/privacy_policy'}>
                    <div className='my-2 lg:hidden cursor-pointer ' 
                    // onClick={() => {
                    //     FunctionContextData.setActiveTabOPM(0);
                    //     FunctionContextData.setActiveTabCSR(0);
                    //     FunctionContextData.setActiveSidebar(-1);
                    // }}
                    >
                        Privacy Policy
                    </div>
                </Link>


                <h2 className='text-[16px] font-[roboto]'>Information</h2>    
                <Link href="/about">
                    <div className='my-2 cursor-pointer'>
                        About Us
                    </div>
                </Link>
                <Link href="/why-dataneuron">
                    <div className='my-2 cursor-pointer'>
                        Why DataNeuron?
                    </div>
                </Link>
                <Link href="/why-dataneuron">
                    <div className='my-2 cursor-pointer'>
                        Humans of NLP
                    </div>
                </Link>
                <Link href={'/privacy_policy'}>
                    <div className='hidden lg:block cursor-pointer mt-[6.49rem]'
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
                    <div className=' my-2 cursor-pointer' 
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

                    <div className='my-2  cursor-pointer' 
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
                    <a className='text-[#777] hover:text-[#777] space-x-1' href="mailto:mail@dataneuron.ai">
                    <img src="mail_gray.svg" 
              className='w-4 h-4 inline'
              alt="mail_icon" /><span>mail@dataneuron.ai</span> 
                    </a>
                </div>
                <div className='my-2  cursor-pointer'>
                    <p className='text-[#777] hover:text-[#777]'>
                    Office # 16, M-Block, Amity University, Sector 125, Noida - 201301
                    </p>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;