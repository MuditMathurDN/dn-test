import React, { ReactNode } from 'react'

import Layout from '../components/Layout/Layout';
import WhyComp from '../components/product/WhyComp';
import Container from './products/Container';
import Tag from '../components/Tags/Tag';
import { motion } from 'framer-motion';

import Marquee from 'react-fast-marquee';
import { getAllGhostPosts } from '../lib/graphcms';
import WhyDnComp from '../components/why-dn/WhyDnCards';
import Row, { ImageContainer, RowItem } from '../components/why-dn/Row';
import Gallery from '../components/why-dn/gallery';

const data = [
  {
    id:"llm",
    heading: "DataNeuron LLM Workflow",
    content: `DataNeuron allows you to effortlessly maximise LLM performance. It automates fine-tuning and prompt engineering, enhancing datasets for faster, more precise results with minimal effort. 

DSEAL automates 95% of dataset creation, and strategic sampling improves model accuracy. Fine-tuned models can be easily accessed and integrated using DataNeuron's prediction API.
    
    `,
    images: ["why-00.svg", "why-01.svg"]
  }, {
    id:"dseal",
    heading: "DataNeuron DSEAL",
    content: `Divisive Sampling and Ensemble Active Learning (DSEAL) is a proprietary algorithm developed by DataNeuron scientists to achieve state-of-the-art accuracy (SOTA) with the smallest data sample size possible while utilizing the full potential of active-learning methods. DSEAL integrated seamlessly with traditional ML models and LLMs. DSEAL has achieved SOTA accuracy within a 1-2% margin across multiple experiments in various domains with less than 4-5% of total dataset.
    `,
    images: ["why-10.svg", "why-11.svg"]
  },
  {
    id:"model-training",
    heading: "DataNeuron vs LLM for Data Labeling",
    content: `As per the internal benchmarking across multiple datasets, DataNeuron Stage 1 performs better than many pre-trained LLMs for Classification tasks.

DataNeuron Stage 1 model does not require any sample paragraphs to train on implying that Stage 1 models can automatically annotate with high accuracy without any prior domain knowledge.
    
Since DataNeuron models are light-weight, it scales much better for the large data annotation workflows when compared to LLMs. At the same time DataNeuron is able to achieve comparable/better accuracies with the proprietary unsupervised models and DSEAL algorithms when compared pre-trained LLMs at lesser cost/time.`,
    images: ["why-20.svg", "why-21.svg"]

  },
  {
    id:"accuracy",
    heading: "DataNeuron vs human-in-the-loop",
    content: "",
    images: ["why-30.svg", "why-31.svg"]
  },
  {
    id:"save-time",
    heading: "HITL ROI Calculator",
    content: `There are several reasons to prefer DataNeuron's annotation capability over Human-in-the-Loop annotations.
These are some examples:
    
HITL requires nearly 100% of the data to be annotated to start matching the accuracy achieved by DataNeuron with only 5% of the data annotated.
HITL annotation quality is generally inferior to DataNeuron due to a lack of SME expertise and human bias. DataNeuron mitigates these issues to a large extent with its "Recall vs Recognise" and "Multi User voting" mechanisms.
Cost of annotation and validation in DataNeuron is 95% less than the cost in the HITL approach.
    `,
    images: ["why-40.svg"]
  }
]
type HeaderProps = {
  heading:string | ReactNode,
  subheading?:string,
  description:string,
  imageUrl:string,
  paraStyles?:string


}
function Header({
  heading,
  subheading,
  description,
  imageUrl,
  paraStyles
}: HeaderProps) {
return (
  
          
       <section className="overflow-x-hidden w-screen max-w-[1800px] 
                          md:h-[85vh] 
                          
                          md:mx-auto 
                          ">
          
         
          <div className=" md:h-full md:w-full 
              
                          px-6 md:px-24
                          grid md:grid-cols-2 
                          
                       
                          justify-items-start
                          content-center
                          
                          ">

          {/* Heading And SubHeading */}
          <div className=' w-full text-center 
                          md:text-start
                          tracking-tighter
                          col-span-2
                          md:w-3/4
                          
                          '>
               
                  
                  <h1
               
                 
                  className='text-[14px]  md:text-[100px] 
                  mt-[24px] 
                  md:mt-[16px]
                  text-[#292C33]
                  lg:font-bold  leading-tight '>
                      {heading}
                  </h1>
                  <h2
                  className='font-bold  text-start 
                  px-2 md:px-0 text-[14x]  md:text-[3vw]
                  2xl:text-[48px] 
                  text-textGray font-[roboto]'
                  >{subheading}</h2>

                  
                  <p 
                  className= {`text-left  mt-[30px] !font-roboto
                                  text-[16px] md:text-2xl 
                                  xl:w-[75%] ${paraStyles || ""} `}
                               >{description}
                  </p>
               
              
          </div>

          {/* Image */}
          <div className='w-full  -mt-20 md:mt-0'>
          <motion.img
              src={imageUrl}
              className='w-full md:max-w-[35vw] mx-auto '
              />
          </div>
          </div>
      </section>
  
)
}


const Divider = () => {
  return <div
    className='h-[40px] w-full'
  ></div>
}

export default function WhyDN({ posts }: any) {
  return (
    <Layout
      posts={posts}
      title='Why DataNeuron?'
      description='DataNeuron is the only platform that excels both in data curation and model personalization.'
      image='/headers/why-dataneuron-header.jpg'
    >
      <Header
        heading=""
        subheading="Explore DataNeuron's distinctive advantage: Customizing data and models to suit your requirements effortlessly."
        description=''
        imageUrl=''
        paraStyles=''
      />


      <Container

        styles='bg-bgGray space-y-12'>
        <h2
          className='text-[#292C33] 
           md:text-[24px] 
          md:-mt-12 md:mb-12'>
          Wonder why we are better than the rest?
        </h2>
        <WhyDnComp />
        <Divider />
        <div className='sm:hidden'>
          <Divider />
        </div>
        <div className=' ' >
          <Row>
            <RowItem
              content={data[0]}
              reverse={false}
            />
           
            <RowItem
              content={data[1]}
              reverse
            />
          </Row>
        </div>
        <div className='md:hidden'>
        <Divider />
        <Divider />
        <Divider />
        </div>
        <div className=' ' >
          <Row>
            <RowItem
              content={data[2]}
              reverse={false}
            />
            {/* Visible on mobiles */}
            <div className='md:hidden'>
              <RowItem
              content={data[3]}
              reverse={false}
            />
            </div>
            {/* Visible on big screen */}
            <div className='hidden md:block space-y-8'>
              <h2 className="text-primaryBlue md:ml-24 mt-8 
              text-[18px] md:text-[24px]  font-bold">
                {data[3].heading}
              </h2>
              <div
                className='flex justify-center items-center gap-6'
              >
                <div
                  className=" w-1/2 md:h-[50vh] max-h-[426px] bg-white border-4
                  md:flex justify-center items-center 
                  rounded-md"
                >
                  <img src={`whycomp/${data[3].images[0]}`}
                    className='w-[90%] h-[90%]'
                  />

                </div>

                <div
                  className="md:w-1/2 h-[50vh] max-h-[426px] bg-white border-4
                   md:flex justify-center items-center 
                  rounded-md
        "
                >
                  <img src={`whycomp/${data[3].images[1]}`}
                    className='w-[90%] h-[90%]'
                  />

                </div>
              </div>
            </div>
          </Row>
        </div>

        <div className='md:hidden'>       
        <Row>
          <RowItem 
          content={data[4]}
          reverse={false}

          />
        </Row>
        </div>
       
        
        <div className='hidden md:block !mt-[100px]'
        id={data[4].id}
        
        >
          <Row
          height='sm'
          >
            <div className='mt-14 ml-[5vw]'>
            </div>
            <div className='flex items-center justify-between gap-8 ml-24'>
              <div className='w-1/2  space-y-4'>
              <h1
              className='text-[18px] md:text-[2.2vw] lg:text-[24px] text-primaryBlue font-bold'
              >{data[4].heading}</h1>
              <p className=' text-[12px] md:text-[1.2vw] lg:text-[16px] 
              text-textGray
              whitespace-pre-wrap'>{data[4].content}</p>
              </div>
              <div
                className="w-1/2 h-[50vh] max-h-[426px]  bg-white border-4
                    flex justify-center items-center 
                    rounded-md max-h-[426px]
                    "
              >
                <img src={`whycomp/${data[4].images[0]}`}
                  className='w-[90%] h-[90%]'
                />

              </div>
            </div>
          </Row>
        </div>



      </Container>
     

      

    </Layout>
  )
}
