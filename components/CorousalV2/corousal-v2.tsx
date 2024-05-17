import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimationFrame, useTime } from 'framer-motion';
import useInViewport from '../hooks/useInView';
import { createYield } from 'typescript';

const Title = ({ feature, current, setShouldPlay, isInView, progress, setCurrent }: any) => {
  // console.log("feature",feature);
  // const [duration,setDuration] = useState<number>(0);
  useEffect(() => {
    isInView ? setShouldPlay(true) : setShouldPlay(false);
  }, [current, isInView]);

  return (
    <div className=' md:p-2  select-none 
    space-y-1 lg:space-y-2  
    w-3/4
    md:mx-4 
    border-b border-b-[0.5vh]
    '
      onClick={() => setCurrent(feature.id)}>
      <p
        onMouseEnter={() => setShouldPlay(false)}
        onMouseLeave={() => setShouldPlay(true)}
        className={`${current === feature.id ? "text-primaryBlue " : "text-lightGray"} 
        font-bold duration-500 cursor-pointer 
      text-[16px] md:text-[calc(0.85vw+1px)]   
     text-center lg:text-start`}>{feature.title}</p>
      
      {current === feature.id && isInView && <div className=' relative lg:hidden'>
        <div
          className='absolute bottom-0  left-[1px]
            h-2 origin-left 
            rounded-br-md rounded-bl-md 
            bg-primaryBlue place-self-start'
          style={{
            width: `${progress}%`,
          }}
        >

        </div>
        <motion.div
          onMouseEnter={() => setShouldPlay(false)}
          onMouseLeave={() => setShouldPlay(true)}
          key={feature.id}
          className='w-full flex items-center justify-center 
          mx-auto
          min-h-[200px] sm:min-h-[300px] mt-8 shadow-xl border border-primaryBlue 
          rounded-md p-1 md:p-3'>
          <img
            src={"/featureImages/" + feature.image}
            alt={"/feature-image"}
          />
        </motion.div>
      </div>}

    </div>

  )
}

export default function CourousalV2({ featureList,contain }: {
  featureList: any[],
  contain?:boolean
}) {

  const [current, setCurrent] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const waitTime = 10000;
  const transitionTime = 0.5;
  const ref = useRef(null);
  const [shouldPlay, setShouldPlay] = useState<boolean>();
  const [paused, setPaused] = useState<boolean>(false);
  const isInView = useInViewport(ref);
  let remainingTime = 0;

  useEffect(() => {
    let timer1: NodeJS.Timer
    let timer2: NodeJS.Timer
    if (shouldPlay && !paused && isInView) {

      timer2 = setInterval(() => {

        setProgress(prev => prev + 0.1);
      }, 10);
    }


    return () => {
      window.clearInterval(timer1);
      window.clearInterval(timer2);
    };

  }, [current, shouldPlay, , paused, isInView]);


  useEffect(() => {
    if (progress >= 100) {
      setCurrent(prev => prev >= featureList.length - 1 ? 0 : prev + 1);
    }
  }, [progress]);
  useEffect(() => {
    setProgress(0);
  }, [current])














  return (

    <div className='flex flex-col 
    md:h-[100vh] max-h-[1200px]  lg:max-h-[1600px]
    items-start justify-start relative '>
      
      <div
        className='hidden md:block absolute
      h-[80vh] max-h-[660px] w-full bg-[#EFEFEF]
      top-[10vw]
      rounded-md 
      '
      />

      <div className='  flex flex-col md:flex-row  
                      w-full 
                      md:px-6 mx-auto
                      items-center md:justify-center 
                      relative'
        ref={ref}

      >

        <div className={`hidden lg:flex my-auto 
                        ${contain?"w-[100%]":"w-[70%]"} 
                        h-[50vh] min-h-[500px]
                        flex-col items-center justify-center
                        relative`}>

          <motion.img
            key={current}
            onMouseEnter={() => setShouldPlay(false)}
            onMouseLeave={() => setShouldPlay(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: transitionTime, type: "linear" }}
            className={`-mt-[1vw]  
              z-50 
              ${contain?"w-[60%] h-full":"h-[90%] max-w-[85%]"}
              aspect-video`}
            src={"/featureImages/" + featureList.find((f) => f.id === current)?.image} />
          <div className='absolute 
        h-[90%] w-[65%] 
        -z-2
        rounded-md
        bg-white 
        
        border-b-8 border-4
        
        
        ' >
            <div
              className='absolute -bottom-2 
              -left-[3px]  
            h-2 origin-left z-[50]
            rounded-br-md rounded-bl-md 
            
            bg-primaryBlue place-self-start'
              style={{
                width: `${progress}%`,
              }}
            >


            </div>
          </div>

        </div>

          {/* Sidebar */}
        <div className='items-center lg:items-start 
                  space-y-8 md:space-y-[1vw]
                  pt-[10vw]
                  flex flex-col 
                  w-full 
                  lg:w-[20%]  '>
          {
            featureList.map((feature: any) => <Title
              feature={feature}
              key={feature.id}
              setShouldPlay={setShouldPlay}
              setCurrent={setCurrent}
              progress={progress}
              isInView={isInView}
              current={current}
            />)
          }
          <div
            className='mx-[1.5vw] cursor-pointer'
            onClick={() => setPaused(prev => !prev)}
          >
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6875 9.0625H10.875V19.9375H12.6875V9.0625ZM18.125 9.0625H16.3125V19.9375H18.125V9.0625Z" fill={paused ? "#11256D" : "#888888"} />
              <path d="M14.5 3.625C16.6509 3.625 18.7534 4.26281 20.5418 5.45777C22.3302 6.65273 23.7241 8.35117 24.5472 10.3383C25.3703 12.3255 25.5857 14.5121 25.166 16.6216C24.7464 18.7311 23.7107 20.6689 22.1898 22.1898C20.6689 23.7107 18.7312 24.7464 16.6216 25.166C14.5121 25.5857 12.3255 25.3703 10.3383 24.5472C8.35118 23.7241 6.65273 22.3302 5.45777 20.5418C4.26281 18.7534 3.62501 16.6509 3.62501 14.5C3.62501 11.6158 4.77076 8.84967 6.81022 6.81021C8.84968 4.77076 11.6158 3.625 14.5 3.625ZM14.5 1.8125C11.9907 1.8125 9.53766 2.55661 7.45121 3.95073C5.36476 5.34485 3.73857 7.32637 2.77828 9.6447C1.818 11.963 1.56674 14.5141 2.05629 16.9752C2.54584 19.4363 3.75421 21.697 5.52859 23.4714C7.30297 25.2458 9.56366 26.4542 12.0248 26.9437C14.4859 27.4333 17.037 27.182 19.3553 26.2217C21.6736 25.2614 23.6552 23.6352 25.0493 21.5488C26.4434 19.4623 27.1875 17.0094 27.1875 14.5C27.1875 11.1351 25.8508 7.90795 23.4714 5.52858C21.0921 3.14921 17.8649 1.8125 14.5 1.8125Z" fill={paused ? "#11256D" : "#888888"} />
            </svg>

          </div>

        </div>
        
      </div>

      {/* Bottom Info Box */}
      <div className="w-full 
          z-[40]
           
          md:pl-[12vw]
          md:w-[70%] space-y-4">
        <h2
          className='text-[14px] text-[24px] lg:text-[32px] font-bold text-primaryBlue'
        >{featureList[current].title}</h2>
        <p
          className='
      text-[8px] md:text-[10px] lg:text-[16px]
      h-[195px]
      border border-primaryBlue rounded-md p-4
      text-textGray
      bg-white
      whitespace-pre-wrap
      '
        >
          {typeof featureList[current].footer.text === "string" ?
            featureList[current].footer.text : React.createElement(featureList[current].footer.text)}
        </p>
      </div>
    
    </div>

  )
}
