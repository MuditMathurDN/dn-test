//3rd Party Modules
import Link from 'next/link';
import React, { useState } from 'react';

//Main Component
const Cookie: React.FC = () => {
    const [visible, setVisible] = useState(true);
    const handleClick = () => {
        setVisible(false);
    }
    return <> {
        visible &&
        <div
            className={`
            flex items-center
            space-x-6 fixed px-6
            md:bottom-[0.8rem] md:left-[5.7vw]
            bottom-[12.5rem] left-[0.5rem]
            custom-font-LucidaConsole
            cursor-pointer shadow-5xl
           bg-[#fafafa]
            w-[25rem]
            z-[99]
            drop-shadow-[1px_10px_10px_rgba(0,0,0,0.45)]
            bg-white`
            }
          
        >
            <div className=''>
                <img className='w-[12rem]' src="/cookie.svg" alt="cookie" />
            </div>
            <div className='py-4'>
                <div className='font-semibold text-[16px]'>
                    Here’s a Cookie!
                </div>
                <div className='my-2 text-[14px]'>
                    We use cookies to personalize your experience. By continuing to visit this website, you agree to our use of cookies.
                </div>
                <div className='flex items-center gap-x-4 mt-4 text-[14px] justify-between'>
                    <button className='w-[50%] bg-[#1E2EDE] py-1 text-white'
                        onClick={handleClick}
                    >
                        Got It!
                    </button>
                    <Link href="/privacy_policy">
                        <div className='w-[50%]'>
                            <span className='border-b-[0.01rem] leading-[1rem]'>
                                Our Privacy Policy
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    }</>
}

export default Cookie;