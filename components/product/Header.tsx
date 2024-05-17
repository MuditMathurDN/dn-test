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
                            text-text-black 
                            md:mx-auto 
                            mt-[20px] md:mt-0
                            ">
            
           
            <div className=" md:h-full md:w-full 
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
                            tracking-tighter
                            '>
                 
                    <div
                    className='flex flex-row md:flex-col  
                    items-center md:items-start 
                    justify-center md:justify-center
                    space-x-2
                    '
                    >

                        <h1
                        className='text-[7vw]  
                        2xl:text-[140px]
                        leading-none
                        md:mt-[16px]
                        
                        font-semibold '>
                            {heading}
                        </h1>
                    {heading2 && <h2
                    className='font-semibold 
                    
                    text-center md:text-start 
                    text-[9vw]  md:text-[calc(5vw+1em)]
                    md:-mt-[20px]
                    '
                    >{heading2}</h2>}
                    </div>
                    <h2
                    className='
                    
                    font-medium  text-center md:text-start 
                    text-[calc(2.2vw+1em)] 
                    md:mt-[10px]
                    '
                    >{subheading}</h2>

                    
                    <p 
                    className= {`md:text-left 
                    md:mt-[70px] 
                    font-medium
                    text-[12px] md:text-2xl 
                    xl:w-[75%] 
                    
                    ${paraStyles || ""} `}
                                 >{description}
                    </p>
                 
                
            </div>

            {/* Image */}
            <div className=' flex justify-end
             md:max-w-[70vw] 2xl:w-[600px]
             
             
             '>
            <img
                src={imageUrl}
                className='w-3/4 md:w-full  mx-auto '
                />
            </div>
            </div>
        </section>
    
  )
}

export default Header