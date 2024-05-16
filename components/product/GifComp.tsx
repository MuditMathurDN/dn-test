import React, { useEffect, useRef, useState } from 'react'
import Container from '../../pages/products/Container'
import useInViewport from '../hooks/useInView'
import Image from 'next/image';


type Props = {}

const Arrow = () => {
    return (<div className=' flex items-center justify-center w-[180px] rotate-90 lg:rotate-0 '>
        <img src="/OPM/right_arrow.svg" />
    </div>)
}

const UL = ({ data }: any) => {


    return (<ul className='py-4
                 px-4 md:px-4  text-[12px] xl:text-[12px] 2xl:text-[13px] 
                  md:w-full 
                 mx-auto md:mx-0
                 space-y-[5px] md:space-y-[10px] 2xl:space-y-[8px]
                 list-disc
                 '>
        {
            data.map((d: string) => {
                return <li className='text-black tracking-[-0.05rem]'>{d}</li>
            })
        }
    </ul>);
}

const Box =({title,color,list,imageUrl,borderColor,showArrow=true,range,progress}:any)=>{

    const [bgColor,setBgColor] = useState<string>(color);

    // if(progress>=range[0] && progress<range[1]){
    //     alert(title+" has started");
    // }

    return (<div className='relative  bg-white rounded-[40px] flex flex-col items-center lg:flex-row h-full '>
    <div className={`h-full z-[10]  rounded-[40px]
        bg-white 
        flex flex-col items-center gap-4
        px-4 py-6
        max-w-[280px]
        w-full  md:h-[500px] md:w-[250px] 
        
        xl:w-[240px] xl:h-[470px]
        2xl:w-[280px] 2xl:h-[490px] 
        relative
        `}
        >

        <Heading
            text={title}
        />

       
        <div className='h-[70%] z-2 pl-[3%]  flex items-start  bg-white w-full
                        '>
            <UL data={list} />
        </div>

        



        <div className='flex-[1] bg-white w-full z-[2]
                rounded-md
                '>
            <img
                width={248}
                height={161}
                src={progress>=range[0]?
                        progress<range[1]?imageUrl[1]
                                        :imageUrl[2]
                                :imageUrl[0]}
                className='w-full'
            />
        </div>


    </div>
     {/* BG Box */}
     <div className={`absolute h-[50%] md:h-[45%] -bottom-[5%]  
                    rounded-[40px] 
                    z-[0] -left-[5%] w-[110%] 
                    ${color}`}>

</div>
    

</div>)
}


const Heading = ({ text }: any) => {
    return (<div
        className=' w-full p-2 text-center text-black font-semibold 
                        text-[18px]
'
    >{text}</div>);
}


function GifComp({ }: Props) {

    const [progress,setProgress] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInViewport(ref);
    

    useEffect(() => {
        let timer1:any;

       

            timer1 = setInterval(()=>{
     
             
             setProgress(prev=>prev>22
                                     ?0
                                     :prev+0.5);
     
         
                 //alert("Going to next gif");
            },500);
        
    
      return () => {
        setProgress(0);
        clearInterval(timer1);
      }
    }, [isInView]);
    



    return (
        <Container
            styles={"bg-[#FAFAFA] my-12 bg-no-repeat bg-cover bg-center  "}
        >
            <div
            ref={ref}
                className=' '
                
            >

                <div className=' select-none h-full'>

                    <h1 className='text-center text-xl lg:text-xl 2xl:text-[32px] text-black  font-semibold lg:w-[50%] mx-auto'>
                        The process “under the hood” in DataNeuron’s Text Classification Flow. </h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
                                    gap-[80px] md:gap-y-[60px] xl:gap-x-[20px]
                                    px-10 md:px-12  mt-12 
                                     place-items-center justify-center mx-auto
                                     max-w-[1440px]
                                     
                        '>
                        
                        <Box 
                        title={"Ingest"}
                        color={"bg-[#11256D]"}
                        borderColor={"border-[#48CAE4]"}
                        imageUrl={[
                            "/OPM/upload/upload_still.gif",
                            "/OPM/upload/upload.gif",
                            "/OPM/upload/upload_final.gif"
                        ]}
                        range={[1,4.5]}
                        progress={progress}
                        list={[
                           " Multiple file format support",
                           "Auto Parsing",
                           "Auto Pre-Processing",
                           "Seed paragraph support",
                           "Cloud Integration"
                        ]}
                        
                        />
                        {/* <Arrow /> */}
                      



                        
                        <Box 
                        color={"bg-[#008037]"}
                        borderColor={"border-[#0077B6]"}
                        title={"Define Masterlist"}
                        imageUrl={["/OPM/masterlist/structure_still.gif",
                        "/OPM/masterlist/structure.gif",
                        "/OPM/masterlist/structure_final.gif"]}
                        range={[4.5,9]}
                        progress={progress}
                        list={[
                            "Hierarchical Taxonomy",
                            "Data Coverage Metrics",
                            "Advanced Masterlist Suggestions",
                            "No Tag Class",
                            "Masterlist Summary "
                        ]}
                        />
                        {/* <Arrow /> */}

                       
                        <Box 
                        color={"bg-[#000000]"}
                        borderColor={"border-[#3F37C9]"}
                        title={"Validate Predictions"}
                        imageUrl={["/OPM/validate/validate_still.gif",
                        "/OPM/validate/validate.gif",
                        "/OPM/validate/validate_final.gif"]}
                        range={[8,13]}
                        progress={progress}
                        list={[
                            "Fully Automated Annotation",
                            "Support for Multi-Label / Multi-Class",
                            "Proprietary DSEAL Approach",
                            "5-10% data requires Validation",
                            "Auto Validation"
                        ]}
                        />
                        {/* <Arrow /> */}

                        <Box 
                        title={"Train Model & Deploy"}
                        color={"bg-[#0077B6]"}
                        borderColor={"border-[#7209B7]"}
                        imageUrl={["/OPM/deploy/deploy_still.gif",
                        "/OPM/deploy/deploy.gif",
                        "/OPM/deploy/deploy_final.gif"]}
                        range={[13,18]}
                        progress={progress}
                        list={[
                            "Auto Model Training/ Deployment & APIs",
                            "Model Comparison",
                            "Control Hyperparameters",
                            "Support for Custom ML Models",
                            "Fine-Tune Multiple Task-Specific LLMs"
                        ]}
                        showArrow={false}
                        />
                        

                    </div>
                    {/* <img 
                    src='/features/workflow_flow.gif'
                    className='max-h-[700px] mx-auto '
                    /> */}
                </div>

            </div>




        </Container>
    )
}

export default GifComp