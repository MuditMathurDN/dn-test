import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

type Props = {
    heading:string | ReactNode,
    subheading?:string,
    description:string,
    imageUrl:string,
    paraStyles?:string


}


function Header({
    heading,
    subheading,
    description,
    imageUrl,
    paraStyles
}: Props) {
  return (
    
            
         <section className="overflow-x-hidden w-screen max-w-[1800px] 
                            md:h-[85vh] 
                            
                            md:mx-auto 
                            ">
            
           
            <div className=" md:h-full md:w-full 
                
                            px-6 md:px-24
                            flex flex-col md:flex-row gap-8 
                            flex-col-reverse 
                             
                             justify-between items-between
                             
                            place-items-start md:place-items-center
                            ">

            {/* Heading And SubHeading */}
            <div className=' w-full text-center 
                            md:text-start
                            tracking-tighter '>
                 
                    
                    <h1
                    className='text-[32px]  md:text-[100px] 
                    
                    md:mt-[16px]
                    text-textGray
                    font-bold  leading-tight '>
                        {heading}
                    </h1>
                    <h2
                    className='font-bold  md:text-start text-[14px]  md:text-[32px] 
                    text-textGray'
                    >{subheading}</h2>

                    
                    <p 
                    className= {`md:text-left  md:mt-[30px]
                                text-[#8A8A8A] 
                                    text-[16px] md:text-2xl 
                                    xl:w-[75%] ${paraStyles || ""} `}
                                 >{description}
                    </p>
                 
                
            </div>

            {/* Image */}
            <div className='w-full '>
            <motion.img
                src={imageUrl}
                className='w-1/2 md:max-w-[35vw] mx-auto '
                />
            </div>
            </div>
        </section>
    
  )
}

export default Header