import { AnimatePresence, motion } from "framer-motion";
import { setMaxListeners } from "process";
import { useEffect, useState } from "react";

interface Props{
    images:string[];
}

const Gallery = ({images}:Props)=>{

    const [current,setCurrent] = useState<number>(0);

    useEffect(()=>{

        
        const timer = setInterval(()=>{
            setCurrent(prev=>images.length>1 && prev===0?1:0);    
        },5000);
        return ()=>clearInterval(timer);

    },[]);

    return <div className="w-full 
    md:h-[440px] p-2  md:p-10 
   overflow-hidden
   flex flex-col justify-center items-center 
   flex-col-reverse
    relative
    ">
      
        <AnimatePresence
        exitBeforeEnter
        
        
        
        >
            <motion.img 
             key={images[current]}
             src={'/whycomp/'+images[current]}
             initial={{ opacity: 0, x: 200 }}
             animate={{ opacity: 1,x:0 }}
             exit={{ opacity: 0,x:-200 }}
             
             transition={{
                x: { type: "tween",ease:"easeInOut" },
                
               
              }}
             className=" max-h-[200px] md:max-h-[20vh] lg:max-h-[300px] 
              mx-auto object-cover"
            
            />
        </AnimatePresence>
       
      
    </div>


}

export default Gallery;