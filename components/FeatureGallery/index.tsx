import React, { useEffect, useState ,useRef} from 'react';
import {motion} from 'framer-motion';
import useInViewport from '../hooks/useInView';
import Image from 'next/image';

export default function index() {
  
  const [current,setCurrent] = useState<any>(0);
  const waitTime:number = 10000;


  const transitionTime = 0.5;
  const ref = useRef(null);
  const isInView  = useInViewport(ref);
  let remainingTime =0;

  const MiniCarousal = ({feature}:any)=>{

    const [currentImage,setCurrentImage]= useState<number>(0);

    useEffect(()=>{

      const timer = setTimeout(()=>{

          setCurrentImage(currentImage===1?0:1);

      },waitTime-1000);

      
      return ()=>{
        window.clearTimeout(timer);
       }

    },[currentImage]);


    return(<div className='flex flex-col  '>
    
        
      <motion.div
        onContextMenu={()=>false}
        key={feature.id+currentImage}
        initial={{opacity:0,}}
        animate={{opacity:1,}}
        exit={{opacity:0}}
        transition={{duration:1,type:"linear"}}
        className={` w-full md:w-[70%] md:mx-auto my-4 shadow-xl`}>
          <Image
            src={"/featureImages/"+feature.image[currentImage]}
            alt="feature-image"
            height={600}
            width={781}
            layout='responsive'
          />
      </motion.div>
      
            <div className="flex  justify-center space-x-8 cursor-pointer">
              <div className={`h-3 w-3 ${currentImage===0?"bg-primaryBlue scale-125":"bg-[#d9d9d9] inset-2"} rounded-full duration-500`} onClick={()=>setCurrentImage(0)} ></div>
              <div className={`h-3 w-3 ${currentImage===1?"bg-primaryBlue scale-125":"bg-[#d9d9d9] inset-2"} rounded-full duration-500`} onClick={()=>setCurrentImage(1)}></div>
            </div>
    </div>);
  }





  const Title = ({feature}:any)=>{
    // console.log("feature",feature)
    const [shouldPlay,setShouldPlay] = useState<boolean>();
    
     const [width,setWidth] = useState(0);
     const [duration,setDuration] = useState<number>(waitTime);
    // const [duration,setDuration] = useState<number>(0);
    useEffect(()=>{
     
         isInView ? setShouldPlay(true) : setShouldPlay(false);


  },[current,isInView]);

  useEffect(()=>{
     
   //play the animation 
   let timer:any = null;
   if(shouldPlay)
   {
      console.log("---- playing animation ----");
      setWidth(100);
      timer = setInterval(()=>{
     if(remainingTime<=waitTime)
     {
       remainingTime+=10;
       
     }
     else{
       setCurrent((prev:number)=>current>=5?0:current+1);
     }
     
   },10);
   
   }
   else{
    //pause the animation
    console.log("Remaining Time",remainingTime);
  
    //calculate the percent width required
    let temp =(remainingTime/waitTime)*100
    
    setDuration(waitTime-remainingTime);
    setWidth(parseInt(temp.toFixed(0)));
   }
  

  return ()=>
{
   window.clearInterval(timer);
}

},[shouldPlay]);


    return (
      <div className=' p-0 md:p-4 
      space-y-2 lg:space-y-4 xl:space-y-6  
        mx-4 min-h-[70vh] md:text-justify flex flex-col justify-start  md:justify-center'>
       {/* <p className={`${current===feature.id?"text-black font-medium":"text-lightGray"} duration-500 cursor-pointer 
       text-sm md:text-md lg:text-md xl:text-xl sm:text-x  text-center lg:text-start`}>{feature.title}</p> */}
        <div className='mb-4 ' >
        <p className='text-xl 2xl:text-2xl text-center md:text-start mb-4  text-lightBlack'>{feature?.heading}</p>
        {current===feature.id && isInView && <motion.div
        
        initial={{width:"0%"}}
        animate={{width:width+"%"}}
        transition={{duration:duration/1000,ease:"linear"   }}
        className='h-1 bg-gradient-to-l to-[#2575FC]  from-[#6A11CB] w-full  z-[10] '>
        </motion.div>
        }
      
          <div className='w-full bg-lightGray opacity-40 h-1 -my-1  z-[9]'></div>
        </div>

        
      {current===feature.id &&  <div className='lg:hidden'>
            {
             current!==2?  <motion.div
            onContextMenu={()=>false}
            key={feature.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:transitionTime,type:"linear"}}
            className='w-full my-4 shadow-xl'>
              <Image
                src={"/featureImages/"+feature?.image}
                alt="feature-image"
                height={1036}
                width={781}
                layout='responsive'
              />
            </motion.div>
          :<MiniCarousal feature={feature} />
          }
          </div>
          }

          <p className='text-[16px]' onMouseEnter={()=>setShouldPlay(false)} onMouseLeave={()=>setShouldPlay(true)} >{feature.text}</p>
        
      </div>
      
    )
  }

  const featureList= [
    {
        id:0,
        heading: "Taxonomy Based Masterlist",
        text: `Machine Learning is not binary so we don’t rely on rules or pre-defined functions, instead we rely on the simpler structure which is the Masterlist where we allow classes to have overlap.

        In contrast to other platforms that require the user to define multiple weak learner labeling functions. If a user lacks the labeling function heuristics, good results will be difficult to achieve.  Masterlist is comparatively easier to define than the labeling function required by existing Weak Supervision platforms. 
        
        Further DataNeuron supports taxonomy or hierarchical ontologies on the Masterlist.`,
        next: 1,
        prev: -1,
        image: "Taxanomy Based Masterlist.webp"
    },
    {
        id:1,
        heading: "Advanced Masterlist",
        text: `Advanced Masterlist features to assist users in creating a more personalized Masterlist that is data specific rather than generic. It will help users define Masterlist that are accurate representations of the dataset.

        We analyze the Masterlist and provide an idea on where the classification could be good or bad. We also give the suggestions to improve the Masterlist.`,
        next: 2,
        prev: 0,
        image: "Advanced Masterlist.webp"
    },
    {
        id:2,
        heading: "Strategic Auto Annotation",
        text: `Since we are asking user validations on diverse groups of different paragraphs for same class, we cover maximum possible variation in information with only a limited subset of paragraphs. This is called strategic selective validation in DataNeuron Platform.`,
        next: 3,
        prev: 1,
        image: ["Auto Annotation-1.webp","Auto Annotation-2.webp"]
    },
    {
        id:3,
        heading: "Validation: Recognition vs Recall, Auto Validation",
        text: `While the entire data annotation is automated, validation happens in 2 stages using a combination of unsupervised and semi-supervised models. User validation might be required for 9-10% of the total corpus.

        DataNeuron employs a recommendation-driven process built on the Recognition vs Recall Principle makes validation easier.
        
        This enables rapid programmatic data labeling reducing the time required to perform validations by almost 97%.
        
        DataNeuron can perform Auto-Validation on the paragraphs based on the Accuracy / Confidence in Stage 2 Validation. This further reduces the HITL annotation when performing the validations. `,
        next: 4,
        prev: 2,
        image: "Validation.webp"
    },
    {
        id:4,
        heading: "Model Training",
        text: `DataNeuron has achieved comparable accuracy (within ~1-2 % margins) to state-of-the-art solutions with only 10% of the labeled data when compared to human-in-loop labeling.

        DataNeuron is an end-to-end NLP lifecycle management platform with Model Training: we provide ready to consume API for the model. 
        
        Efficiently build machine learning models and use them to make highly accurate context-based predictions in minutes without writing any code!
        
        Other deployment options:
        Export Dataset/ Masterlist
        Prediction on Ingested Data`,
        next: 5,
        prev: 3,
        image: "Model Training.webp"
    },
    {
        id:5,
        heading: "Iterate",
        text: `DataNeuron allows users to create new versions of the model/project, enabling users to identify the problematic classes and additional validation could be done to improve the overall accuracy of the model.

        Further, with incremental learning, DataNeuron allows users to scale the models to newer classes on the taxonomy without having to relabel the entire dataset.`,
        next: -1,
        prev: 4,
        image: "Iterate.webp"
    }
]

  

  return (
    <div 
    ref={ref}
    className=' bg-white 
    min-h-[100vh] p-4 md:p-10 space-y-10 
    flex flex-col items-center justify-start md:justify-center '>
        <p className='self-start ml-8 text-xl font-[poppins] text-lightGray '>DataNeuron’s Competitve Edge</p>
      <div className=' h-full flex flex-col md:flex-row content-center align-center '>
          
          
          <div className=' lg:space-y-10 xl:space-y-[2vw]  flex flex-col justify-center   items-between
                    lg:w-[40%] justify-self-start  '>
            <Title feature={featureList[current]} />
          </div>
          <div>
            
          </div>
          
          <div className='lg:block hidden my-auto w-[60%] '>
         {current!==2?    <motion.img
             key={current}
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{duration:transitionTime,type:"tween"}}
            className='w-[80%]  mx-auto shadow-xl'
            src={"/featureImages/"+featureList.find((f)=>f.id===current)?.image} />
          :<MiniCarousal feature={featureList.find((f)=>f.id===current)} />  
          }
          </div>

          
       
      </div>
    <div className='flex  items-center justify-between w-full px-6'>
   
   <div>
   {featureList[current].prev!==-1 && <div onClick={()=>setCurrent(featureList[current]?.prev)}  
   className='flex text-sm xl:text-md 2xl:text-xl items-center space-x-4 cursor-pointer text-lightGray'>
     <img src="/left.svg" className='w-6' />
     <span className='hidden md:block'>{ featureList[featureList[current]?.prev]?.heading }</span></div>}
   
   
    </div>
   {featureList[current].next!==-1 &&<div  onClick={()=>setCurrent(featureList[current]?.next)} 
   className='flex items-center text-sm xl:text-md 2xl:text-xl text-lightGray space-x-4 cursor-pointer self-end'>
    <span className='hidden md:block'>{ featureList[featureList[current]?.next]?.heading }</span >
     <img src="/right.svg" className='w-6' /></div>}
  </div>    
    </div>
  )}