import React, { useEffect, useState,useRef } from 'react';
import {motion, useAnimationFrame, useTime} from 'framer-motion';
import useInViewport from '../hooks/useInView';
import Image from 'next/image';
import Link from 'next/link';

const Title = ({feature,current,setShouldPlay,isInView,progress,setCurrent}:any)=>{
  // console.log("feature",feature);
  // const [duration,setDuration] = useState<number>(0);
  useEffect(()=>{
    isInView ? setShouldPlay(true) : setShouldPlay(false);
    },[current,isInView]);

  return (
    <div className=' p-2  select-none 
    space-y-1 lg:space-y-2  
     w-full mx-4 ' onClick={()=>setCurrent(feature.id)}>
     <p 
      onMouseEnter={()=>setShouldPlay(false)}
      onMouseLeave={()=>setShouldPlay(true)}
     className={`${current===feature.id?"text-primaryBlue font-medium":"text-lightGray"} duration-500 cursor-pointer 
     text-sm md:text-md lg:text-sm xl:text-[16px]  text-center lg:text-start`}>{feature.title}</p>
      <div>

      {current===feature.id && isInView && <div
      style={{
        width:progress<100?progress+"%":"100%"
      }}
      className='h-1 bg-primaryBlue w-full  z-[10] '>
      </div>
      }
        <div className='w-full bg-lightGray opacity-40 h-1 -my-1  z-[9]'></div>
      </div>
    {current===feature.id && isInView &&  <div className='lg:hidden'>
          <motion.div
          onMouseEnter={()=>setShouldPlay(false)}
          onMouseLeave={()=>setShouldPlay(true)}
          key={feature.id}
          className='w-full flex items-center justify-center min-h-[300px] mt-8 shadow-xl border border-primaryBlue rounded-md p-3'>
            <img
              src={"/featureImages/"+feature.image}
              alt={"/feature-image"}
            />
          </motion.div>
        </div>}
      
    </div>
    
  )
}

export default function index() {
  
  const [current,setCurrent] = useState<number>(0);
  const [progress,setProgress] = useState<number>(0);
  const waitTime = 10000;
  const transitionTime = 0.5;
  const ref = useRef(null);
  const [shouldPlay,setShouldPlay] = useState<boolean>();
  const isInView  = useInViewport(ref);
  let remainingTime =0;

  useEffect(()=>{
    let timer1:NodeJS.Timer
    let timer2:NodeJS.Timer
    if(shouldPlay && isInView){

      // timer1 = setInterval(()=>{
      //     setCurrent(prev=>prev>=featureList.length-1?0:prev+1);
      // },waitTime);
  
      timer2 = setInterval(()=>{
        
        setProgress(prev=>prev+0.1);
      },10);
    }


    return ()=>{
      window.clearInterval(timer1);
      window.clearInterval(timer2);
    };

  },[current,shouldPlay,isInView]);


  useEffect(()=>{
    if(progress>=100){
      setCurrent(prev=>prev>=featureList.length-1?0:prev+1);
    }
  },[progress]);
  useEffect(()=>{
    setProgress(0);
  },[current])
  









  const featureList =[
    {
      id:0,
      title:"LLM Fine-Tuning Workflow",
      image:"llm-finetune.jpg",
    },
    {
      id:1,
      title:"Divisive Sampling and Ensemble Active Learning (DSEAL)",
      image:"Auto Annotation-1.webp",
    },
    {
      id:2,
      title:"DataNeuron vs Pre-Trained LLM for Data Labeling",
      image:"llm_graph.png",
    },
    {
      id:3,
      title:"DataNeuron vs Human-In-The-Loop",
      image:"dataneuronvshitl.jpg",
    },
    {
      id:4,
      title:"HITL ROI Calculator",
      image:"roi.jpg",
    }
  ]

  

  return (


      <div className='  flex flex-col md:flex-row  bg-white 
                      items-center md:justify-between my-12'
      ref={ref}
      
      >
          <div className='hidden lg:flex my-auto 
                        w-[55%] 
                        h-[380px] 2xl:h-[500px]
                        border-2 rounded-md 
                        items-center justify-center
                        px-2 py-4 border-primaryBlue'>
            <motion.img
             key={current}
             onMouseEnter={()=>setShouldPlay(false)}
             onMouseLeave={()=>setShouldPlay(true)}
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{duration:transitionTime,type:"linear"}}
            className='h-full object-contain m-auto bg-cover'
            src={"/featureImages/"+featureList.find((f)=>f.id===current)?.image} />
          </div>
          <div className='space-y-8 lg:space-y-[2vw] xl:space-y-[1.7vw] md:pl-12
                  flex flex-col 
                  w-full items-center
                  lg:ml-10 lg:w-[40%]  '>
            {
              featureList.map((feature:any)=><Title 
              feature={feature} 
              key={feature.id}
              setShouldPlay={setShouldPlay}
              setCurrent={setCurrent}
              progress={progress}
              isInView={isInView}
              current={current}
               />)
            }
            <Link
            href="/why-dataneuron"
            >
            <div className='flex  w-full cursor-pointer  '>
                <div className='bg-primaryBlue text-white 
                                w-[200px] h-[50px] 2xl:w-[170px]
                                mx-auto md:mx-0 md:mr-auto
                                rounded-md
                                flex items-center justify-center
                                 text-sm text-center
                                '>
                  Why DataNeuron
                </div>
            </div>
            </Link>
          </div>
      </div>
    
  )}
