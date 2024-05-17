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
    text-text-black
    font-[roboto] 
    w-screen
    md:h-[280px]
     py-12
    
    '
    >
        <div
        className=' flex items-center justify-start md:justify-center
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
                            <img className={`h-[27px] px-4 md:px-2`} src="/logo_2.svg" alt="dataneuron logo" />
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
                        Humans of NLP
                    </div>
                    </a>
                </Link>
            </div>

        {/* Contact Us */}
        <div className='text-[14px]'>
                <h2 className='text-[16px]'>Contact Us</h2>
                <Link href="mailto:mail@dataneuron.ai">
                    <div className='my-2 cursor-pointer'>
                        
                    <a className='flex gap-2 ' href="mailto:mail@dataneuron.ai">
                    <img src="/mail_gray.svg" 
              className='w-4 h-4'
              alt="mail_icon" />mail@dataneuron.ai
                    </a>
                    </div>
                </Link>
                <div className='w-3/4'>
                    <div className='flex gap-2 my-2 cursor-pointer'>
                    <img src="/location_gray.svg" 
              className='w-4 h-4'
              alt="dataneuron office location" />
              Office # 16, M-Block, Amity University, Sector 125, Noida - 201301
                    </div>
                </div>
                <div className='w-3/4'>
                    <div className='flex gap-2 my-2 cursor-pointer'>
                    <img src="/location_gray.svg" 
              className='w-4 h-4'
              alt="dataneuron office location" />
              HQ - 355 Bryant Street, Suite # 403, 
San Francisco CA 94107
                    </div>
                </div>
                
            </div>

        </div>
        </div>

        <div className=' border-t border-black
         flex justify-start md:justify-between
         items-center
         space-x-4
         px-4 md:px-12
        h-[40px]
        '>
            <div className='flex justify-center w-full'>
                <p className='place-self-center text-center'>Copyright © 2024 Precily, Inc.</p>
                
                <div className=' flex items-center h-full'> <Link href="/privacy_policy">
                        <div className='
                        
                        cursor-pointer'>
                            Privacy Policy
                        </div>
                    </Link></div>
            </div>
        </div>

    </footer>

}

export default Footer;