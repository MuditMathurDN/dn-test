//3rd Party Modules
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Container from '../../pages/products/Container';
import Page2 from './Page2';
import Page3 from './Page3';
import Expertise from './expertise';

//Main Component
const Page1: React.FC = () => {
    const text = [
        "Labeled",
        "Curated",

    ];
    const [activeText, setActiveText] = useState<number>(0);
    const [currentY, setCurrentY] = useState<number>(0);
    const offset = 10;

    const frames=[
        "0.png",
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png",
        "10.png",
        "11.png",

    ]


    useEffect(()=>{
        const timer = setInterval(()=>{
            setActiveText(prev=>prev===text.length-1?0:prev+1);
        },3000);

        return ()=>clearInterval(timer);

    },[]);



    



    return (
            <Container
            styles=''
            >
            <div className='w-full h-full space-y-12 md:space-y-24' >
              
                {/* <Typewriter typeSpeed={70} words={["Power your Data for AI_"]} /> */}

                <div className=' '>
                    <div className='
                                    md:h-[calc(100vh-70px)] 
                                    flex flex-col items-start 
                                    md:justify-center 
                                    z-[10]   
                                    text-start 
                                    md:ml-[30px]
                                    !text-[roboto]
                                    '>
                        <div className=' text-[6vw] text-black w-full gap-3
                                    font-bold  leading-tight space-y-8
                                    '>
                            <h1 className='text-text-black
                            text-[26px] md:text-[4vw]
                            text-[roboto]
                            2xl:text-[74px]
                            '>
                            Automate LLM data-curation, <br /> fine-tuning with 
                            <span className='text-primaryBlue'> DataNeuron</span>
                               
                            </h1>
                            <p
                            className='text-[14px] lg:text-[30px] 2xl:text-[50px]
                            text-primaryGray
                            font-[roboto] '
                            >
                                The fastest/no-code platform to <br /> build enterprise-grade LLMs.
                            </p>
                            <div className='mt-[8vh] 
                             text-[18px] md:text-[3.5vw]
                            font-medium flex space-x-1 items-center'>
                                <span className='text-text-black'>Data</span>
                                <div
                                    className='
                                        
                                        overflow-y-hidden text-primaryBlue'
                                        >
                                    <AnimatePresence exitBeforeEnter >
                                        <motion.div
                                        key={text[activeText]}
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={{ opacity: 1,y:0 }}
                                        exit={{ opacity: 0,y:-100 }}
             
                                        transition={{
                                        x: { type: "tween",ease:"easeInOut" },
                                        duration:1
                
               
                                        }}
                                        >{text[activeText]}</motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                        </div>
                      
                        <div className='mt-[8vh] w-full flex   md:flex-row gap-[30px]'>
                            <Link
                                href={"/contact"}
                                target="_blank">
                                <div className=' text-primaryBlue 
                                        px-6  rounded-lg
                                        flex items-center
                                        h-10
                                        cursor-pointer border border-primaryBlue
                                        duration-200
                                        text-san-serif

                                        '>
                                    Book demo
                                </div>
                            </Link>

                            <Link
                                href={"/why-dataneuron"}
                            >
                                <div className='border border-primaryBlue rounded-md 
                                        text-center 
                                        flex items-center
                                        bg-primaryBlue text-white
                                        h-10
                                        px-10 
                                        cursor-pointer
                                        hover:bg-black hover:text-white hover:border-black
                                        duration-200
                                        '>
                                    Lets go
                                </div>
                            </Link>
                        </div>
                        
                    </div>

                </div>
                <Page2 />
                <Page3 />
                <div className=''>
            <Expertise />
        </div>
            </div>
            

            </Container>



       /* </section> */
    )
}

export default Page1;