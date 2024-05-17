//3rd Party Modules
import React from 'react';


const cards  =[{
    image:'landingpagegif/Data curation.gif',
    title:"Data curation",
    text:"Curate your data with automated pipelines for LLM customization."
},{
    image:'/landingpagegif/LLM fine-tuning.gif',
    title:"LLM fine-tuning",
    text:"Train/fine-tune LLMs with your private data."
},{
    image:'/landingpagegif/Model management  (1).gif',
    title:"Model management",
    text:"Streamline model management for LLM and classical NLP models."
},{
    image:"/landingpagegif/Classical NLP Workflows (1).gif",
    title:"Classical NLP Workflows",
    text:"Automate end-to-end NLP lifecycle with Multiclass, Multilabel and NER workflows. "
}]

//Main Component
const Page2: React.FC = () => {
    return (

           <section className='font-[roboto]  
          
           text-justify md:text-left
           max-w-[1800px] mx-auto
           '>
         
            <div className='my-[5vh] md:my-[20px]
                            md:text-justify
                            font-[##777777] text-[24px] md:text-[25px]
                            w-full xl:max-w-[1440px]
                            
                            grid grid-cols-2 md:grid-cols-4
                            gap-8 
                            '>
           {
                cards.map((c)=>{
                    return (<div 
                    key={c.title}
                    className='flex-1 space-y-4'>
                        {/* Image */}
                        <div 
                        style={{
                            backgroundImage:"/landingpagegif/Ellipse 364.svg"
                        }}
                        className='rounded-full overflow-hidden 
                        p-1 md:p-2
                        relative
                        h-[60px] w-[60px]
                        md:h-[80px] md:w-[80px]
                       
                        
                        '>
                            <img 
                            className='absolute h-full w-full 
                            top-0 left-0'
                            src="/landingpagegif/Ellipse 364.svg"
                            />  
                      
                            <img src={c.image}
                            className='absolute rounded-full 
                            top-[5px] left-[5px] md:top-[8px] md:left-[8px]
                            h-[50px] w-[50px] md:h-[65px] md:w-[65px]
                            
                            '
                            />
                       
                        </div>

                        {/* Title */}
                        <div
                        className='md:border-l-2
                        md:px-6 border-[#EAEAEA]
                        h-[120px]
                        '
                        >
                        
                        <h2
                        className='text-primaryBlue font-bold 
                           text-[14px] h-[5vh] md:text-[20px]
                           text-start
                           '
                        >{c.title}</h2>
                        {/* Text */}
                        <p
                        className='text-[#7A7A7A] 
                        
                        text-[14px] md:text-[16px] md:w-[78%]  text-start'
                        >{c.text}</p>
                        </div>
                    </div>)
                })
           }
                
            </div>
            
        </section>
        
    )}

export default Page2;