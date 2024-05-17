import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

type Props = {
    heading:string | ReactNode,
    heading2?:string,
    subheading?:string,
    description:string,
    imageUrl:string,
    paraStyles?:string


}


function Header({
    heading,
    heading2,
    subheading,
    description,
    imageUrl,
    paraStyles
}: Props) {
  return (
    
            
         <section className="overflow-x-hidden 
                            w-screen max-w-[1800px] 
                            md:h-[85vh] 
                            text-text-black font-[roboto]
                            md:mx-auto 
                            mt-[20px] md:mt-0
                            ">
            
           
            <div className=" md:h-full md:w-full 
                            gap-4
                            px-6 md:px-24
                            flex flex-col md:flex-row 
                            flex-col-reverse 
                            items-center
                             md:justify-between md:items-between
                            place-items-start md:place-items-center
                            ">

            {/* Heading And SubHeading */}
            <div className=' md:w-1/2 text-center 
                            md:text-start 
                            
                            tracking-tighter '>
                 
                    
                    <div
                    className='flex flex-row md:flex-col  
                    items-center md:items-start 
                    justify-center md:justify-center
                    space-x-2'
                    >

                        <h1
                        className='text-[8vw]  
                        2xl:text-[160px]
                        md:mt-[16px]
                        font-bold leading-tight '>
                            {heading}
                        </h1>
                    {heading2 && <h2
                    className='font-bold 
                    text-center md:text-start 
                    text-[9vw]  md:text-[calc(5vw+1em)]
                    md:-mt-[40px]
                    '
                    >{heading2}</h2>}
                    </div>
                    <h2
                    className='
                    
                    font-bold  text-center md:text-start 
                    text-[calc(2.2vw+1em)] 
                    tracking-tighter 
                    md:-mt-[30px]
                    '
                    >{subheading}</h2>

                    
                    <p 
                    className= {`md:text-left  md:mt-[30px] 
                                    text-[12px] md:text-2xl 
                                    xl:w-[75%] ${paraStyles || ""} `}
                                 >{description}
                    </p>
                 
                
            </div>

            {/* Image */}
            <div className='mx-auto flex justify-center
             md:max-w-[55vw] 2xl:w-[500px]  '>
            <img
                src={imageUrl}
                className='w-1/2 md:w-full  mx-auto '
                />
            </div>
            </div>
        </section>
    
  )
}

export default Header