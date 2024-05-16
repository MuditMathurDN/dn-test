import React, { useRef, useEffect, useId } from 'react';
import useInViewport from '../hooks/useInView';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
interface PipelineCardProps {
    src: string;
    text: string;
    index: number;
    styles?:string
}
const PipelineCard: React.FC<PipelineCardProps> = ({ src, text, index,styles }) => {




    const timeline = useAnimationControls();
    const ref = useRef(null);
    const isInView = useInViewport(ref);
    useEffect(() => {

        if (isInView) {

            timeline.start("show");
        }
        else {

            timeline.start("hidden");
        }



    }, [isInView])

    const variant = {
        "hidden": {
            opacity: 0,
            y: 100,
            transition: { duration: 0.5 }
        },
        "show": {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index / 10 }
        }
    }

    return <motion.div

        // ref={ref}
        // variants={variant}
        // initial={"hidden"}
        // animate={timeline}
        className=' flex flex-col
        w-[320px] md:w-[250px] lg:w-[240px] xl:w-[16vw] max-w-[280px] 
        h-[180px] md:h-[150px] lg:h-[150px] xl:h-[140px] 2xl:h-[173px]  
        
     
         justify-center items-center  bg-[#1A1A1A]  
         rounded-lg py-10 space-y-7 text-white' >
        <div className='text-center 
        text-lg md:text-xl md:text-[13px] lg:text-[14px] 2xl:text-[16px]
        '>
            {text}
        </div>
        {/* <Image 
        className={`mx-auto w-[30%] ${styles}`}
        src={src} 
        alt={`${text}_image`}
        width={86}
        height={40}
        /> */}
        <img className={`mx-auto w-[30%] ${styles}`} src={src} alt={`${text}_image`} />
    </motion.div >
}

export default PipelineCard;