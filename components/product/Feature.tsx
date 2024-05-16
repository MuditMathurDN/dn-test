import React from 'react'
import Container from '../../pages/products/Container'
import Tag from '../Tags/Tag'
import Head from 'next/head'

type Props = {}

const Paragraph =({children}:any)=>{
   return  <div className='text-md md:text-[16px] 2xl:text-[16px] md:text-justify tracking-[-0.02rem]'>
      {children}
    </div>
}

const UL =({children}:any)=>{
  return  <ul className='list-disc md:ml-[20px]  md:text-justify space-y-[10px] px-[20px] md:px-0'>
     {children}
   </ul>
}


type featureType = {
  title: string,
  para: any,
  imageUrl: string,
  type?: "string" | "list" | "component" | undefined

}

const data: featureType[] = [
  {
    title: "Taxonomy Based Masterlist",
    para: `Machine Learning is not binary so we don’t rely on rules or pre-defined functions, instead we rely on the simpler structure which is the Masterlist where we allow classes to have overlap.

    In contrast to other platforms that require the user to define multiple weak learner labeling functions. If a user lacks the labeling function heuristics, good results will be difficult to achieve.  Masterlist is comparatively easier to define than the labeling function required by existing Weak Supervision platforms. Further DataNeuron supports taxonomy or hierarchical ontologies on the Masterlist.`,
    imageUrl: "/OPM/features/taxonomy.jpg"
  }, {
    title: "Advanced Masterlist & Coverage Metrics",
    para: `Advanced Masterlist features to assist users in creating a more personalized Masterlist that is data specific rather than generic. It will help users define Masterlist that are accurate representations of the dataset.

    We analyze the Masterlist and provide an idea on where the classification could be good or bad. We also give the suggestions to improve the Masterlist.`,
    imageUrl: "/OPM/features/am.jpg"
  }
]

const DNValidation: featureType[] = [
  {
    title: "Multiclass & Multilabel Classification",
    para: () => {
      return <Paragraph>
        DataNeuron accelerates human-in-loop validations for automating data labelling, model creation, and end-to-end lifecycle management of Multiclass and Multilabel Text Classification ML models.
        <br />
        <br />
        DataNeuron provides predictions for Multiclass classification use cases by mapping each paragraph to a single class, whereas for Multilabel classification each paragraph can be mapped to multiple classes (or none at all).
        <br />
        <br />
        To reduce human bias and errors, DataNeuron employs a multi-user voting mechanism. In addition, the active learning approach is used to reduce time and effort by 95% while maintaining the quality of validated data.
      </Paragraph>

    },
    imageUrl: "/OPM/features/classification.jpg",
    type: "component"
  },
  {
    title: "Faster, Better & Easier Validation",
    para: () => {
      return (<Paragraph>
        While the entire data annotation process is automated, validation happens over two stages using an ensemble of unsupervised and semi-supervised models. User validation might be required for 5-10% of the total dataset corpus. DataNeuron uses a recommendation-driven process based on the Recognition vs Recall principle, which simplifies the validation process. This enables rapid programmatic data labelling, reducing validation time by almost 95%.
        <br />
        <br />
        Additionally, the platform can perform Auto-Validation on paragraphs based on the Accuracy/ Confidence in Stage 2 Validation.
      </Paragraph>
      )
    },
    imageUrl: "/OPM/features/validation.jpg",
    type: "component"
  }
]

const DNMT: featureType[] = [
  {
    title: "Model Comparison & Hyperparameter Optimization",
    para: ()=>{
      return (<Paragraph>
        DataNeuron is the ideal combination of a no-code, fully automated platform while still providing enough levers for users to build a customized/desired model for their domain-specific tasks.
        <UL >
          <li>
          The platform enables users to easily compare various machine learning models and select the best algorithms for the task at hand.
          </li>
          <li>
          DataNeuron also allows users to control the ranges and values of hyperparameters of these models to achieve faster convergence within the allowed tolerance level.

          </li>
        </UL>


      </Paragraph>)
    },
    imageUrl: "/OPM/features/hyperParameterTuning.jpg",
    type: "component"
  },
  {
    title: "Model Training",
    para: ()=>{
      return <Paragraph>
        DataNeuron has achieved comparable accuracy (within ~1-2 % margins) to state-of-the-art solutions with only 10% of the labeled data when compared to human-in-loop labeling. DataNeuron is an end-to-end NLP life cycle management platform with Model Training: it provides ready to consume API for the model. 
        <br />
        <br />
DataNeuron’s workflow versioning  helps user to update Masterlist classes even after the model deployment. Additionally iterative training can be performed at any point in time to mitigate the risk of data drift and model drift.  
      </Paragraph>
    },
    type:"component",
    imageUrl: "/OPM/features/training.jpg"
  },
  {
    title: "LLM Fine-Tuning",
    para: ()=>{
      return <Paragraph>
        LLMs have recently been at the center of the NLP universe, and utilizing LLM's full potential for any domain-specific task requires good expertise in fine-tuning/prompt engineering. This entails creating an optimized dataset in order to achieve the goal faster and with fewer-shot learning. DataNeuron's DSEAL efficiently helps users in creating such datasets with 95% less effort. More importantly, strategic data sampling in DataNeuron achieves higher accuracy in a fine-tuned model when compared to a fine-tuned model with a sequentially/ randomly sampled dataset. 
        <br/>
        <br/>
Additionally, DataNeuron provides a no-code interface for personalizing these LLMs for a variety of domain-specific tasks. Using DataNeuron's prediction API, a fine-tuned/ customized model can be easily accessed and integrated into a product.  
      </Paragraph>
    },
    type: "component",
    imageUrl: "/OPM/features/llm-fine-tune.jpg"
  }
]




const ImageContainer = ({ reverse, data, type }: any) => {
  return (<div className={`flex flex-col   md:flex-row w-full md:items-center 
               gap-12 ${reverse ? "lg:flex-row-reverse" : ""}`}>

    <div className=' md:w-[48%] space-y-5 flex flex-col justify-center'>
      <h1
        className=' text-xl md:text-3xl font-semibold'
      >
        {data.title}</h1>

      {(!type || type === "string") && <Paragraph
        
      >{data.para}</Paragraph>}

      {
        type && type === "list" && <UL>
          {

            data.para.map((text: string) => {
              return <li>{text}</li>
            })
          }
        </UL>
      }

      {
        type && type == "component" && <data.para />
      }

    </div>

    <div className='md:w-[52%] py-[20px] '>
      <img
        src={data.imageUrl}
        className='w-full'
      />
    </div>

  </div>)
}

const Heading = ({ title }: any) => {
  return <h1 className='text-3xl my-4 xl:text-5xl font-semibold text-primaryBlue'>
    {title}</h1>
}

const Divider = () => {
  return <div className='md:h-[40px] w-full'>

  </div>
}


function Feature({ }: Props) {
  return (
    <>
      <Container
        styles='bg-[#FAFAFA]'
      >
        <Tag
          content='Define Masterlist'
        />

        <Heading
          title={"DataNeuron Masterlist"} />

        <div className='my-6 md:my-16
            space-y-[40px] md:space-y-48'>

          {
            data.map((d, i) => {
              return <ImageContainer
                reverse={i % 2 !== 0}
                data={d}
              />
            })
          }

        </div>
      </Container>

      <Divider />

      <Container

      >



        <Divider />

        <Tag
          content='AUTOMATED ANNOTATION & VALIDATION'
          styles=' !w-[240px] md:w-[300px] w-[200px] text-xs'
        />
        <Heading title="DataNeuron Validation" />
        <div className='my-6 md:my-24 space-y-6 md:space-y-48'>

          {
            DNValidation.map((d, i) => {
              return <ImageContainer
                reverse={i % 2 !== 0}
                data={d}
                type={d.type}
              />
            })
          }

        </div>




      </Container>

      <Divider />
      <Container
        styles='bg-[#FAFAFA] mb-[40px]'
      >

        <Tag
          styles='!w-[260px] md:w-[400px] w-[200px]'
          content='ADVANCED MODEL TRAINING WORKFLOW'
        />
        <Heading title="DataNeuron Model Training" />
        <div className='my-6 md:my-24 md:space-y-48'>

          {
            DNMT.map((d, i) => {
              return <ImageContainer
                reverse={i % 2 !== 0}
                data={d}
                type={d.type}
              />
            })
          }

        </div>
      </Container>


    </>
  )
}

export default Feature