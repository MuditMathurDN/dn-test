//3rd Party Modules
import React, { useEffect, useRef } from 'react';
import useInViewport from '../hooks/useInView';
import { motion, useAnimationControls } from 'framer-motion';

interface FeatureProps {
    heading: string;
    text1: string;
    text2: string;
    image: string;

    delay: number;
}
const Feature: React.FC<FeatureProps> = ({ delay, heading, text1, text2, image }) => {
    const ref = useRef(null);
    const isInView = useInViewport(ref);
    const timeline = useAnimationControls();
    useEffect(() => {

        if (isInView) {
            // console.log("in view");
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
            transition: { duration: 0.5, delay: delay }
        }
    }


    return <motion.div
        // ref={ref}
        // variants={variant}
        // initial={"hidden"}
        // animate={timeline}
        className='border mx-auto lg:mx-0 border-[#2D7DD2]  px-6 text-center 
         w-full md:w-[380px] h-full'>
        <div className='lg:block flex items-center flex-col '>
            <img className='my-6 w-18 mx-auto' src={image} alt={`${image}_image`} />
            <div className='text-[22px] md:text-[22px] text-center'>
                {heading}
            </div>
        </div>
        <div className='mb-8  text-sm md:text-[17px] font-normal mt-8'>
            {text1}
            <br />
            <br />
            {text2}
        </div>
    </motion.div>
}


//Main Component
const Page4: React.FC = () => {








    return (
        <section className='min-h-[900px] flex flex-col justify-center md:py-24 py-20 md:px-24 px-6 text-white bg-primaryBlue font-[poppins]'>
            <div className='mb-8 text-white text-center text-2xl md:text-[32px] text-semibold lg:w-[60%] 2xl:w-[40%] mx-auto'>
            Streamline Data and Model Lifecycle with Automation 
            </div>
          
            <motion.div

                className='lg:grid-cols-3 max-w-[1400px] mx-auto place-items-center 	grid  gap-8'>
                <Feature
                    delay={0}

                    heading={'Annotation as accurate as pre-trained LLMs or HITL'}
                    text1={'DataNeuron augments human expertise through various approaches like recognize vs recall with the proprietary ensemble models (unsupervised, semi-supervised and supervised) to achieve comparable/ better accuracies to HITL and pre-trained LLMs.'}
                    text2={''}
                    image={'/features/llmvshitl.svg'}
                />
                <Feature
                    delay={0.2}

                    heading={'DataNeuron DSEAL: Strategic Annotation'}
                    text1={'DSEAL is a proprietary algorithm developed by DataNeuron scientists to achieve state-of-the-art accuracy with the smallest data sample size possible while utilizing the full potential of active-learning methods. DSEAL integrates seamlessly with Traditional ML models and LLMs.'}
                    text2={''}
                    image={'/features/tabler_hierarchy-3.svg'}
                />
                <Feature
                    delay={0.4}

                    heading={'Automated Model Training / Fine-Tuning & Deployment'}
                    text1={'Once the Data Labeling is complete using DataNeuron automate the model training/ fine-tuning pipeline with a no-code workflow. Platform also provides ready-to-use API for prediction and integration with AI products. It further captures the feedback for model improvements / versioning.'}
                    text2={''}
                    image={'/features/nlp.svg'}
                />
            </motion.div>
        </section>
    )
}

export default Page4;