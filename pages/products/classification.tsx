import React from 'react'

import Layout from '../../components/Layout/Layout';
import Header from '../../components/product/Header';
import Feature from '../../components/product/Feature';
import WhyComp from '../../components/product/WhyComp';
import GifComp from '../../components/product/GifComp';
import Container from './Container';

import CourousalV2 from '../../components/CorousalV2/corousal-v2';

const featureList = [
  {
    id: 0,
    title: "Taxonomy based masterlist",
    image: "classification/c_01.svg",
    footer:{
      text:"DataNeuron's Taxonomy Based Masterlist offers a simplified approach to machine learning, allowing for class overlap and eliminating the need for complex labeling functions. Advanced Masterlist feature assists in creating personalized, accurate Masterlists, with analysis and suggestions for improvement."
    }
  },
  {
    id: 1,
    title: "Multiclass and Multilabel ",
    image: "classification/c_02.svg",
    footer:{
      text:"DataNeuron streamlines multiclass and multilabel text classification, automating data labeling and model management. It employs a multi-user voting system and active learning to minimize bias and errors, reducing validation time by up to 95% along with auto-validation based on accuracy to further reduce human effort."
    }
  },
  {
    id: 2,
    title: "Model comparison & model training",
    image: "classification/c_03.svg",
    footer:{
      text:"DataNeuron offers a no-code, automated platform with customizable model building capabilities. Users can compare ML models easily, adjust hyperparameters, and achieve rapid convergence. With workflow versioning and iterative training, it ensures accuracy and mitigates data and model drift. Once the model deployment is complete the model API's will be available for inferencing."
    }
  },
  {
    id: 3,
    title: "LLM fine-tuning",
    image: "classification/c_04.svg",
    footer:{
      text:"DataNeuron utilizes leading industrial methods like PEFT and DPO for fine-tuning LLMs with minimal data and resources. Additionally, multiple LLMs are onboarded on the platform for quick comparison and fine-tuning with a no-code workflow."
    }
  },

]
const cardData:any[] = [
  {
      icon:"/cards/MLMC.gif",
      styles:"w-[120px] h-[120px] xl:w-[80px] xl:h-[80px] 2xl:w-[100px] 2xl:h-[100px]",
      title:"Automated data labeling: 5-10% validation effort",
      description:'DataNeuron simplifies validation with its "recognize vs recall" approach, reducing HITL(Human-in-the-loop) paragraphs by 90% while maintaining state-of-the-art-accuracy.',
  },
  {
      icon:"/cards/MLMC (1).gif",
      styles:"w-[100px] h-[100px] xl:w-[80px] xl:h-[80px] 2xl:w-[100px] 2xl:h-[100px]",
      title:"Enhanced support for Multi-class and Multi-label workflows",
      description:"Supporting multi-class and multi-label workflows, our platform scales LLMs, ML, and Generative AI. Achieve high accuracies with DataNeuron's lightweight models and DSEAL annotation."
  },
  {
      icon:"/cards/MLMC (2).gif",
      styles:"w-[100px] h-[100px] xl:w-[75px] xl:h-[75px] 2xl:w-[90px] 2xl:h-[90px]",
      title:"Maximize annotation accuracy with DSEAL",
      description:"Achieve state-of-the-art accuracy faster by capturing more information from limited data, keeping validators engaged."
  },
  
]


export default function classification({posts}:any) {
  return (
    <Layout
    posts={[]}
    title="DataNeuron Text Classification"
    image={"/logo.png"}
    description='Build classification models with advanced workflows for automated data annotation and model training using DataNeuron.'
    >
        <div className=' snap-y bg-bgGray'>
            <Header
            subheading=''
            heading='Multiclass/ Multilabel '
            description='AI-Automated Data labeling platform.'

            imageUrl='/covers/classification_cover.svg'
            paraStyles=''

            />
            <div className='snap-center'>

            <WhyComp
            data={cardData}
            title='Perform Accurate Multilabel 
            & Multiclass Classification using DataNeuron Flow'
            subHeading='Why use DataNeuron Classification Flow?'
            image={"/product_main.png"}
            />
            </div>
            <Container>

            <CourousalV2 
            featureList={featureList}
            footerHeight='120px'
            />
            <div 
            className='w-full h-[100px]'
            />
            </Container>
            
         
           
           
            {/* <GifComp />
            <Feature /> */}

            
        </div>
    </Layout>
  )
}
