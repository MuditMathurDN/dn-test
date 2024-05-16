//3rd Party Modules

//Animation Related Modules
import React, { useContext, useRef, useEffect, useState } from 'react';
import useInViewport from '../../hooks/useInView';
import { motion, useAnimationControls } from 'framer-motion';

import FeatureGallery from '../../FeatureGallery';
import FunctionContext from '../../context/functionContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import Image from 'next/image';

interface CardProps {
    heading: string;
    text: string;
    icon: string;
    gif: string;
    index: number
}


interface UseCase {
    title: string;
    image: string;
    id: number;
}

const UseCase: React.FC<UseCase> = ({ title, image, id }) => {

    const timeline = useAnimationControls();
    const useCaseRef = useRef(null);
    const isInView = useInViewport(useCaseRef);

    console.log(useCaseRef);

    useEffect(() => {

        if (isInView) {
            console.log("In VIew");

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
            transition: { duration: 0.5, delay: id / 10 }
        }
    }

    return <motion.div
        ref={useCaseRef}
        variants={variant}
        initial={"hidden"}
        animate={timeline}
        className='flex items-center justify-center '>
        <div
            className='hover:shadow-md p-2 
                        w-[20rem] lg:w-[14rem] xl:w-[16rem] 2xl:w-[21rem]
                        h-[13rem]
                         2xl:px-[1rem] md:text-lg  lg:text-md xl:text-xl
                        flex flex-col space-y-3 items-center justify-center border-3 border-primaryBlue border rounded-xl'>
            <img className={`${id == 8 ? 'w-[8rem]' : 'w-[3.5rem]'}`} src={`/usecases/${image}`} />
            <p className='text-primaryBlue text-center'>{title}</p>
        </div>
    </motion.div>
}
// const featuresArray: Array<FeatureProps> = [
//     {
//         heading: "Taxonomy Based Masterlist",
//         text: `Machine Learning is not binary so we don’t rely on rules or pre-defined functions, instead we rely on the simpler structure which is the Masterlist where we allow classes to have overlap.

//         In contrast to other platforms that require the user to define multiple weak learner labeling functions. If a user lacks the labeling function heuristics, good results will be difficult to achieve.  Masterlist is comparatively easier to define than the labeling function required by existing Weak Supervision platforms. 
        
//         Further DataNeuron supports taxonomy or hierarchical ontologies on the Masterlist.`,
//         next: "Advanced Masterlist",
//         prev: null,
//         image: "taxonomy"
//     },
//     {
//         heading: "Advanced Masterlist",
//         text: `Advanced Masterlist features to assist users in creating a more personalized Masterlist that is data specific rather than generic. It will help users define Masterlist that are accurate representations of the dataset.

//         We analyze the Masterlist and provide an idea on where the classification could be good or bad. We also give the suggestions to improve the Masterlist.`,
//         next: "Strategic Auto Annotation",
//         prev: "Taxonomy Based Masterlist",
//         image: "taxonomy"
//     },
//     {
//         heading: "Strategic Auto Annotation",
//         text: `Since we are asking user validations on diverse groups of different paragraphs for same class, we cover maximum possible variation in information with only a limited subset of paragraphs. This is called strategic selective validation in DataNeuron Platform.`,
//         next: "Validation: Recognition vs Recall, Auto Validation",
//         prev: "Advanced Masterlist",
//         image: "taxonomy"
//     },
//     {
//         heading: "Validation: Recognition vs Recall, Auto Validation",
//         text: `While the entire data annotation is automated, validation happens in 2 stages using a combination of unsupervised and semi-supervised models. User validation might be required for 9-10% of the total corpus.

//         DataNeuron employs a recommendation-driven process built on the Recognition vs Recall Principle makes validation easier.
        
//         This enables rapid programmatic data labeling reducing the time required to perform validations by almost 97%.
        
//         DataNeuron can perform Auto-Validation on the paragraphs based on the Accuracy / Confidence in Stage 2 Validation. This further reduces the HITL annotation when performing the validations. `,
//         next: "Model Training",
//         prev: "Strategic Auto Annotation",
//         image: "taxonomy"
//     },
//     {
//         heading: "Model Training",
//         text: `DataNeuron has achieved comparable accuracy (within ~1-2 % margins) to state-of-the-art solutions with only 10% of the labeled data when compared to human-in-loop labeling.

//         DataNeuron is an end-to-end NLP lifecycle management platform with Model Training: we provide ready to consume API for the model. 
        
//         Efficiently build machine learning models and use them to make highly accurate context-based predictions in minutes without writing any code!
        
//         Other deployment options:
//         Export Dataset/ Masterlist
//         Prediction on Ingested Data`,
//         next: "Iterate",
//         prev: "Validation: Recognition vs Recall, Auto Validation",
//         image: "taxonomy"
//     },
//     {
//         heading: "Iterate",
//         text: `DataNeuron allows users to create new versions of the model/project, enabling users to identify the problematic classes and additional validation could be done to improve the overall accuracy of the model.

//         Further, with incremental learning, DataNeuron allows users to scale the models to newer classes on the taxonomy without having to relabel the entire dataset.`,
//         next: null,
//         prev: "Model Training",
//         image: "taxonomy"
//     }
// ]

const Card: React.FC<CardProps> = ({ index, text, heading, icon, gif }) => {

    //Animation Related 
    const ref = useRef(null);
    const isInView = useInViewport(ref);
    const timeline = useAnimationControls();
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
            transition: { duration: 0.5 }
        }
    }
    return <div ref={ref} className='bg-[#fafafa]   drop-shadow-[0px_-1px_4px_rgba(0,0,0,0.35)]  md:sticky top-0 py-24 px-10 grid grid-cols-1 md:grid-cols-[20%_50%_30%] gap-x-4 gap-y-6'>

        <motion.div
            variants={variant}
            initial={"hidden"}
            animate={timeline}
            className='flex flex-col justify-center items-center space-y-4'>
            <div className='text-lg font-semibold'>
                {heading}
            </div>
            <Image
                src={`${icon}`}
                alt={`${icon}_image`}
                width={80}
                height={80}
            />
            {/* <img src={`${icon}`} alt={`${icon}_image`} /> */}
        </motion.div>
        <motion.div
            variants={variant}
            initial={"hidden"}
            animate={timeline}
            className='my-auto md:text-justify px-6'>
            {text}
        </motion.div>
        <motion.div
            variants={variant}
            initial={"hidden"}
            animate={timeline}
            className='m-auto'>
            <Image
                src={`${gif}`}
                alt={`${gif}_gif`}
                width={1065}
                height={690}
                className='w-full'
            />
            {/* <img src={gif} alt="Images Carosol" /> */}
        </motion.div>
    </div>
}



interface FeatureProps {
    heading: string;
    text: string;
    next: string | null;
    prev: string | null;
    image: any;
}

const Feature: React.FC<FeatureProps> = ({ text, heading, image }) => {
    return <div className='px-8 bg-white py-24 md:sticky md:top-0'>
        <div className='grid gap-x-8 grid-cols-1 lg:grid-cols-[45%_55%] '>
            <div className='lg:hidden'>
                <div className='text-lg font-semibold text-center'>
                    {heading}
                </div>
                <div
                    className='h-1 bg-gradient-to-l to-[#2575FC] from-[#6A11CB] w-full  z-[10] '>

                </div>
            </div>
            <div className='sm:order-2'>
                <div className='hidden lg:block my-4'>
                    <div className='my-4 text-xl font-semibold text-left'>
                        {heading}
                    </div>
                    <div
                        className='h-1 bg-gradient-to-l to-[#2575FC] from-[#6A11CB] w-full  z-[10] '>

                    </div>
                </div>
                <div className='my-8 whitespace-pre-line'>
                    {text}
                </div>
            </div>

            <div className='m-auto sm:order-1'>
                <img src={`/${image}.svg`} alt={`${image}_image`} />
            </div>

        </div>
    </div>
}

const usecases = [
    {
        id: 1,
        image: "document_classification.svg",
        title: "Document & Classification"
    },
    {
        id: 2,
        image: "bfsi.svg",
        title: "BFSI"
    },
    {
        id: 3,
        image: "conversation.svg",
        title: "Conversational & Intent Dataset"
    },
    {
        id: 4,
        image: "health.svg",
        title: "Health Care / Life Sciences"
    },
    {
        id: 5,
        image: "insurance.svg",
        title: "Insurance"
    },
    {
        id: 6,
        image: "sentiment.svg",
        title: "Sentiment Analysis"
    },
    {
        id: 7,
        image: "text_document.svg",
        title: "Text Documents / PDFs"
    },
    {
        id: 8,
        image: "infinity.svg",
        title: ""
    }

]


interface Props {
    posts: Array<any> | undefined;
}

const Complete = [
    {
        heading: '1 - Ingest',
        text: 'Users can upload the data without any pre-processing. ALP has an in-built feature that can handle out-of- scope paragraphs and separate them from the classification data. This functionality is optional and can be toggled on/off anytime during the process.',
        icon: '/OPM/upload.svg',
        gif: '/OPM/upload.gif'
    },
    {
        heading: '2 - Structure',
        text: `On the masterlist, attributes can be defined and structured in a multi-level (hierarchical) structure so that the data can be grouped into domains and subdomains.

        Masterlist Suggestions to prepare better training data. Masterlist can be continuously managed and tweaked based on new attributes in the same dataset.`,
        icon: '/OPM/structure.svg',
        gif: '/OPM/structure.gif'
    },
    {
        heading: '3 - Validate',
        text: `The ALP performs guided and automated annotation. The platform then provides the users with a list of annotated/labelled paragraphs that are most likely to belong to the same class by using context-based filtering and analysing the masterlist.

        Strategic Annotation - to achieve the target with higher accuracy while capturing multiple data points in every attribute with lesser annotation.`,
        icon: '/OPM/validate.svg',
        gif: '/OPM/validate.gif'
    },
    {
        heading: '4 - Train',
        text: `DataNeuron automates pre-processing, model creation, validation of the accuracy check and confidence level.

        Additionally, the platform efficiently generates a Summary Report on the training accuracy for every single attribute on the master-list.`,
        icon: '/OPM/train.svg',
        gif: '/OPM/train.gif'
    },
    {
        heading: '5 - Deploy',
        text: `DataNeuron’s prediction service provides highly accurate context-based predictions on the ingested data in near real time without writing any code.

        Use Masterlist Suggestions to prepare better training data. Masterlist can be continuously managed and tweaked based on new attributes in the same dataset.
        
        Prediction Service can be integrated with various applications through the supporting APIs.`,
        icon: '/OPM/deploy.svg',
        gif: '/OPM/deploy.gif'
    },


]
const Annotation = [
    {
        heading: '1 - Ingest',
        text: 'Users can upload the data without any pre-processing. ALP has an in-built feature that can handle out-of- scope paragraphs and separate them from the classification data. This functionality is optional and can be toggled on/off anytime during the process.',
        icon: '/OPM/upload.svg',
        gif: '/OPM/upload.gif'

    },
    {
        heading: '2 - Structure',
        text: `On the masterlist, attributes can be defined and structured in a multi-level (hierarchical) structure so that the data can be grouped into domains and subdomains.

        Masterlist Suggestions to prepare better training data. Masterlist can be continuously managed and tweaked based on new attributes in the same dataset.`,
        icon: '/OPM/structure.svg',
        gif: '/OPM/structure.gif'
    },
    {
        heading: '3 - Validate',
        text: `The ALP performs guided and automated annotation. The platform then provides the users with a list of annotated/labelled paragraphs that are most likely to belong to the same class by using context-based filtering and analysing the masterlist.

        Strategic Annotation - to achieve the target with higher accuracy while capturing multiple data points in every attribute with lesser annotation.`,
        icon: '/OPM/validate.svg',
        gif: '/OPM/validate.gif'
    },

    {
        heading: '4 - Export',
        text: `Export annotated data and masterlist
        directly after Stage2 turns to completion.
        Masterlist: Download the masterlist in an
        excel format which can be used for further
        experimentation and reiteration.
        
        Training dataset: Download the dataset in
        excel format on which the ML models were
        trained. This data can be used to train
        custom models or perform research analysis`,
        icon: '/OPM/export.svg',
        gif: '/OPM/export-image.svg'
    },


]

//Main Component
const Content: React.FC<Props> = ({ posts }) => {
    const [workflow, setWorkflow] = useState<any>(Complete);
    const FunctionContextData = useContext(FunctionContext);

    const featureRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        let timeout: any;
        if (featureRef && FunctionContextData.featuresScroll) {
            console.log(featureRef.current, "featureRef");
            console.log(FunctionContextData.featuresScroll, "Feature Scroll");

            timeout = setTimeout(() => {
                featureRef?.current?.scrollIntoView({ behavior: 'smooth', block: "center" });
                FunctionContextData.setFeaturesScroll(false)
            }, 300)
        }
        return () => { clearTimeout(timeout); };
    }, [featureRef])


    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true
    };

    return (<div className='font-[poppins]'>

        <div className='product-slider overflow-hidden text-center pt-[70px] bg-black'>
            <Slider {...settings}>
                <div>
                    <div className='lg:h-[600px] h-[500px] overflow-hidden flex items-center justify-center'>
                        {/* <img className='h-full w-full object-cover brightness-[0.80]' src="/OPM/product1.webp" alt="banner-1" /> */}
                        <Image
                            src='/OPM/product1.webp'
                            alt='banner-1'
                            className='brightness-[0.80] object-cover'
                            objectFit="cover"
                            layout="fill"
                        />
                        <h1 className='absolute lg:text-[70px] md:text-[60px] text-[30px] font-medium text-white'>Advanced Masterlist Support</h1>
                    </div>
                </div>
                <div>
                    <div className='lg:h-[600px] h-[500px] overflow-hidden flex items-center justify-center'>
                        {/* <img className='h-full w-full object-cover brightness-[0.80]' src="/OPM/product2.webp" alt="banner-2" /> */}
                        <Image
                            src='/OPM/product2.webp'
                            alt='banner-2'
                            className='brightness-[0.80] object-cover'
                            objectFit="cover"
                            layout="fill"
                        />
                        <h1 className='absolute lg:text-[90px] md:text-[60px] text-[30px] font-medium text-white'>Complete NLP Lifecycle</h1>
                    </div>
                </div>
                <div>
                    <div className='lg:h-[600px] h-[500px] overflow-hidden flex items-center justify-center'>
                        {/* <img className='h-full w-full object-cover brightness-[0.80]' src="/OPM/product3.webp" alt="banner-3" /> */}
                        <Image
                            src='/OPM/product3.webp'
                            alt='banner-3'
                            className='brightness-[0.80] object-cover'
                            objectFit="cover"
                            layout="fill"
                        />
                        <h1 className='absolute lg:text-[90px] md:text-[60px] text-[30px] font-medium text-white'>Minimal Validations</h1>
                    </div>
                </div>
            </Slider>
        </div>

        <div id="mission" className='bg-[#fafafa] md:py-24 py-20 md:px-24 px-12'>
            <div className='text-black text-4xl'>
                The DataNeuron Mission & Product
            </div>
            <div className='text-md my-6 text-black'>
                Our research for the last ~18 months is focused in the area of Artificial General Intelligence and a combination of unsupervised, semi-supervised models; while we are yet to achieve a breakthrough with Artificial General Intelligence (AGI), we have achieved success with our proprietary unsupervised and semi-supervised model and launching a full-functional and scalable platform to automate data labeling and eliminate human-in-loop effort at the annotation / labeling stage.
            </div>
            <div className='text-[#777] my-10 text-2xl'>
                Two Powerful Workflows, Two Distinct Uses
            </div>
            <div className='noselect custom-font-IBMPlexMono grid mb-16 grid-cols-1 text-xl gap-y-8 gap-x-8 md:grid-cols-2'>
                <div className={`cursor-pointer 
                 ${FunctionContextData.activeTabOPM === 0 ? 'text-white bg-black border-black' : 'text-[#999] border-[#999]'}
                 border-2 py-6 px-4 
                 hover:bg-black hover:border-black hover:text-white
                 duration-300`}
                    onClick={() => { FunctionContextData.setActiveTabOPM(0); setWorkflow(Complete) }}>
                    <div className='font-semibold text-2xl mb-4 '>
                        Complete end-to-end Flow

                    </div>

                    <div className='text-lg ' style={{ fontFamily: "Ibm plex Mono" }}>
                        The Complete end-to-end flow includes the entire NLP lifecycle, including Auto Data Labeling, Model Creation, No-Code Prediction, and Incremental Learning.
                    </div>
                </div>
                <div className={`cursor-pointer 
                 ${FunctionContextData.activeTabOPM === 1 ? 'text-white bg-black border-black' : 'text-[#999] border-[#999]'}
                    border-2 py-6 px-4 
                    hover:bg-black hover:border-black hover:text-white
                    duration-300`}
                    onClick={() => { FunctionContextData.setActiveTabOPM(1); setWorkflow(Annotation) }}>
                    <div className='font-semibold text-2xl mb-4 '>
                        Annotation Flow
                    </div>
                    <div className='text-lg' style={{ fontFamily: "Ibm plex Mono" }}>
                        Using only a Masterlist (Taxonomy), we automate data labeling on complex domain-specific datasets without any pre-training, allowing for faster supervised NLP development.
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-black space-y-8'>
            {
                workflow.map((stage: any, index: number) =>
                    <Card key={index} index={index}
                        heading={stage?.heading} text={stage?.text} icon={stage?.icon} gif={stage.gif} />
                )
            }

        </div>
        <div ref={featureRef} id="features" className='bg-black mt-16 space-y-8'>
            <FeatureGallery />
        </div>

        <div className=''>
            <Image
                src='/workflow.svg'
                alt='how do two powerful wf work'
                width='390'
                height='200'
                layout='responsive'
                objectFit='contain'
            />
            {/* <img className='w-full' src="/workflow.svg" alt="" /> */}
        </div>
        <div className='px-8 py-12 bg-white '>
            <div className='text-xl text-[#777777]'>
                One Platform, Infinite Use Cases
            </div>

            <div className='mt-[3rem] mx-auto bg-white grid 
            grid-cols-1 md:grid-cols-2  lg:grid-cols-4
            md:w-[41rem]
            lg:w-[57rem]
            xl:w-[70rem]
            2xl:w-[87rem]
gap-8 xl:gap-y-5 md:justify-items-center'>

                {
                    usecases.map((uc: any) => {
                        return <UseCase
                            key={uc.id}
                            title={uc.title}
                            image={uc.image}
                            id={uc.id}
                        />
                    })
                }


            </div>
        </div>
    </div>
    )
}

export default Content;