import React from 'react';
import {useInView} from 'framer-motion';


const useInViewport = (ref:any)=>{
    const inView = useInView(ref);
    return inView;
}

export default useInViewport;