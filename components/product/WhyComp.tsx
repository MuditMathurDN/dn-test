import React from 'react'
import Container from '../../pages/products/Container'
import Image from 'next/image'

type Props = {
    subHeading:string,
    title:string,
    data:any[],
    image:string
}
type featureType={
    icon:string,
    title:string,
    styles?:string,
    description:string
}





function WhyComp({subHeading,title,data,image}: Props) {
  return (
    <Container>
        <div className=' space-y-24  '>
           
            <div className='
                             grid gap-5 md:gap-10 place-items-start md:px-6
                            grid-cols-2 xl:grid-cols-3 min-h-[285px]
                            auto-cols-auto '>
                    {
                        data.map((d:any,i:number)=>{
                            return <div 
                            key={d.icon}
                            className={` md:px-[20px]
                                        flex flex-col items-end justify-start
                                        bg-white 
                                        p-4 space-y-4 
                                        rounded-md
                                        h-full
                                        ${i ===2 && "col-span-2 md:col-span-1"}
                                        `} >
                            <div className={`w-full
                            flex items-center justify-between
                            gap-2 h-12 
                            
                            `}>
                                 <h3
                                className='md:hidden text-[10px] w-[70%]
                                            text-start font-semibold tracking-tighter
                                             text-primaryBlue text-[mentserrat]
                                             border-b border-[#EDEDED]'
                                >{d.title}</h3>
                                <div className='hidden md:block h-[70px] flex-1
                                border-b border-b-2 border-bgGray
                                px-4 
                                '>
                                    
                                </div>
                                <div className='
                                h-[30px] w-[30px] md:h-[65px] md:w-[65px]
                                overflow-hidden
                                p-[5px]
                                flex item-center justify-center
                                bg-primaryBlue rounded-full
                                
                                '>
                                <img 
                                src={d.icon}
                                className={`object-contain w-full h-full`}
                                />
                                </div>
                            </div>
                            <div className='space-y-4
                            md:px-8'>

                                <h3
                                className='text-[16px] hidden md:block
                                            
                                text-start font-semibold tracking-tighter
                                             text-primaryBlue text-[mentserrat]
                                             
                                             '
                                >{d.title}</h3>
                                <p className=' 
                                text-[10px] md:text-[14px]
                                    text-start font-medium text-textGray 
                                                 font-[roboto]'>
                                    {d.description}
                                </p>
                            </div>

                            </div>
                        })
                    }
            </div>
           
            <div className=' mx-auto md:w-[80%] px-6 md:px-12'>
            <img
               src={image}
               className='max-h-[80vh] mx-auto w-auto'
               
               

               />
            </div>
        </div>
    </Container>
  )
}

export default WhyComp