import React from 'react'

import Layout from '../../components/Layout/Layout';
import Header from '../../components/product/Header';
import Feature from '../../components/product/Feature';
import WhyComp from '../../components/product/WhyComp';
import GifComp from '../../components/product/GifComp';
import Container from './Container';
import { getAllGhostPosts } from '../../lib/graphcms';
import Image from 'next/image';
import CourousalV2 from '../../components/CorousalV2/corousal-v2';
import { Divider } from 'antd';

const featureList = [
  {
    id: 0,
    title: "Custom entities",
    image: "ner/ner_01.svg",
    footer:{
      text:"DataNeuron supports creating domain specific entities for targeted Information Extraction. It also provides support to modify default model predictions for pre-defined entities."
    }
  },
  {
    id: 1,
    title: "Validation on predicted entities",
    image: "ner/ner_02.svg",
    footer:{
      text:"Effortlessly validate predicted entities with DataNeuron's intuitive UI. Simply select or reject highlighted text, aided by contrasting colors for easy mapping. With an Active Learning approach, achieve state-of-the-art accuracy with less than 10% data validation."
    }
  },
  
  {
    id: 2,
    title: "Model training & deployment",
    image: "ner/ner_03.svg",
    footer:{
      text:"DataNeuron streamlines the entire NLP model lifecycle, from preprocessing to deployment. It offers detailed training accuracy reports, real-time context-based predictions, and Masterlist suggestions for enhanced data preparation. Continuously manage and update the Masterlist for improved model performance and integrate prediction services seamlessly with APIs."
    }
  },

];

const cardData:any[] = [
  {
      icon:"/cards/NER.gif",
      styles:"w-[120px] h-[120px] xl:w-[80px] xl:h-[80px] 2xl:w-[100px] 2xl:h-[100px]",
      title:"Custom Entities",
      description:'DataNeuron supports creating domain specific entities for targeted Information Extraction. It also provides support to modify default model predictions for pre-defined entities.',
  },
  {
      icon:"/cards/NER (1).gif",
      styles:"w-[100px] h-[100px] xl:w-[80px] xl:h-[80px] 2xl:w-[100px] 2xl:h-[100px]",
      title:"Validation on Predicted Entities",
      description:"Effortlessly validate predicted entities with DataNeuron's intuitive UI. Simply select or reject highlighted text, aided by contrasting colors for easy mapping. With an Active Learning approach, achieve state-of-the-art accuracy with less than 10% data validation."
  },
  {
      icon:"/cards/NER (2).gif",
      styles:"w-[100px] h-[100px] xl:w-[75px] xl:h-[75px] 2xl:w-[90px] 2xl:h-[90px]",
      title:"Model Training & Deployment",
      description:"DataNeuron streamlines the entire NLP model lifecycle, from preprocessing to deployment. It offers detailed training accuracy reports, real-time context-based predictions, and Masterlist suggestions for enhanced data preparation. Continuously manage and update the Masterlist for improved model performance and integrate prediction services seamlessly with APIs."
  },
  
]





export default function classification() {
  return (
    <Layout
    posts={[]}
    title="DataNeuron - NER"
    image={"/logo.png"}
    description='Build classification models with advanced workflows for automated data annotation and model training using DataNeuron.'
    >
        <div className=' snap-y bg-bgGray'>
            <Header
            subheading='(Named Entity Recognition)'
            heading={"NER"}
            description='Improve accuracy in identifying entities 
            with precision.'

            imageUrl='/covers/ner_cover.svg'
            paraStyles=''

            />
            <div className='snap-center'>

            <WhyComp
            data={cardData}
            title='Perform Accurate Multilabel 
            & Multiclass Classification using DataNeuron Flow'
            subHeading='Why use DataNeuron Classification Flow?'
            image={"/ner_main.svg"}
            />
            </div>
            <Container>

            <CourousalV2 
            footerHeight='120px'
            featureList={featureList}
            />
            <div
            className='md:h-[15vh]'
            />
            </Container>
         
           
           
            {/* <GifComp />
            <Feature /> */}

            
        </div>
    </Layout>
  )
}
