//3rd Party Modules
import React from 'react';


const cards  =[{
    image:'whycomp/WDN1.gif',
    title:"Auto annotation and auto validation:",
    text:"DataNeuron's active learning approach reduces the time required for validation by 95%, enhancing efficiency."
},{
    image:'whycomp/WDN2.gif',
    title:"Automated workflows:",
    text:"Fully automated end-to-end workflows, with automatic prompts and response generation."
},{
    image:'whycomp/WDN3.gif',
    title:"Advanced model fine-tuning & training:",
    text:"Optimize your AI models effortlessly with our platform's advanced features for model fine-tuning and model training."
},{
    image:'whycomp/WDN4.gif',
    title:"Auto model deployment & inferencing:",
    text:"Deploy your trained/fine-tuned models automatically for making predictions or integrate with your use case."
}]

//Main Component
const WhyDnComp: React.FC = () => {
    return (

           <section className='  
          
           text-justify md:text-left
           max-w-[1800px] mx-auto
            relative
           '>
            <div 
            className="hidden md:block w-[80%] h-[2px] bg-textLightGray 
            absolute top-14"
            />
         
            <div className='md:my-[20px]
                            md:text-justify
                            font-[##777777] text-[14px] md:text-[25px]
                            w-full xl:max-w-[1440px]
                            gap-4
                            grid grid-cols-2 md:grid-cols-4
                            '>
           {
                cards.map((c,i)=>{
                    return (<div 
                    key={c.title}
                    className='flex-1'>
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
                        mb-6
                        
                        '>
                            <img 
                            className='absolute h-full w-full 
                            top-0 left-0'
                            src="/landingpagegif/Ellipse 364.svg"
                            />  
                      
                            <img src={c.image}
                            className='absolute rounded-full 
                            top-[5px] left-[5px] md:top-[8px] md:left-[8px]
                            h-[50px] w-[50px] md:h-[65px] md:w-[65px]'
                            />
                       
                        </div>

                        {/* Title */}
                        <h2
                        className='text-primaryBlue 
                        w-full md:w-3/4 font-bold  text-start 
                        text-[12px] md:text-[1.8vw] lg:text-[18px]
                        
                        leading-tight md:leading-normal
                        h-[60px] md:h-[75px]

                        '
                        >{c.title}</h2>
                        {/* Text */}
                        <p
                        className='text-[#7A7A7A] 
                        tracking-tight md:tracking-
                        text-[12px] md:text-[1.4vw] lg:text-[16px] 
                        md:w-[78%]  text-start'
                        >{c.text}</p>
                        
                    </div>)
                })
           }
                
            </div>
            
        </section>
        
    )}

export default WhyDnComp;