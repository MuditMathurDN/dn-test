//3rd Party Modules
import React,{useEffect,useRef,useState} from 'react';
import useInViewport from '../hooks/useInView';
import {motion,useAnimationControls} from 'framer-motion';
import CalculateROI from '../../lib/ROICalculator';
import dynamic from 'next/dynamic';
import InputField from '../Controls/InputField';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

//Main Component
const Page5: React.FC = () => {

    const [numberOfClasses, setNumberOfClasses] = useState(10);
    const [numberOfParagraphs, setNumberOfParagraphs] = useState(100000);
    const [numberOfPredictionAPICalls, setNumberOfPredictionAPICalls] = useState(10000);
    const [isValidInput,setIsValidInput] = useState(true);
    const [roi, setRoi] = useState<any>({});

    const minPara=10000;
    const minPredicted=1000;

    const maxPara = 1000000;
    const maxPredicted = 1000000
    
    // 
    // paragraphs to  10000 - 1M
    // prediction call to min 5000
    
    //Animation Related
    const ref= useRef(null);
    const isInView = useInViewport(ref);
    const timeline = useAnimationControls();
    useEffect(()=>{

        if(isInView)
        {
            // console.log("in view");
            timeline.start("show");
        }
        else{
            // console.log("out of view");
            timeline.start("hidden");
        }



    },[isInView])
  
    const variant ={
        "hidden":{
            opacity:0,
            y:100,
            transition:{duration:0.5}
        },
        "show":{
            opacity:1,
            y:0,
            transition:{duration:0.5}
        }
    }

    useEffect(() => {
        Calculate();
    }, [])


    useEffect(()=>{
        if(Number.isNaN(numberOfParagraphs) || Number.isNaN(numberOfPredictionAPICalls))
        {
            setIsValidInput(false);
            return;
        }
        if(numberOfClasses<2 || numberOfClasses>100)
        {
            setIsValidInput(false);
        }
        else if(numberOfParagraphs<minPara|| numberOfParagraphs>maxPara)
        {
            setIsValidInput(false);
        }
        else if(numberOfPredictionAPICalls<minPredicted || numberOfPredictionAPICalls>maxPredicted)
        {
            setIsValidInput(false);
        }
        else{
            setIsValidInput(true);
        }
    },[numberOfClasses,numberOfParagraphs,numberOfPredictionAPICalls]);



    const options = {
        plotOptions: {
            bar: {
                horizontal: false,
                dataLabels: {
                    enabled: true,
                    formatter: (val: string, opts: any) => {
                        return val + " hours"
                    },
                    position: "top",

                },
            },
        },
        dataLabels: {
            offsetY: -16.5,
            style: {
                colors: ["#ddd"]
            }
        },
        labels: ["Time lost in DataNeuron", "Time lost In House"],
        /* previous color #777777 */
        /* another option #11256D*/
        colors: ['#11256D'],
        yaxis: {
            title: {
                text: "Hours lost in annotation",
                style: {
                    color: "#ddd",
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    fontSize: "1.8vh",
                }
            },
            labels: {
                style: {
                    colors: ['#bbb']
                },
            }
         
        },
        xaxis:{
            position:"top",
            tickPlacement:"between",
            labels:{
                style: {
                    colors: ["#ddd", "#ddd"],
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    fontSize: "1.8vh",
                }
            }
        },
        responsive:[
            {
                breakpoint:500,
                options:{
                    chart:{

                        width:"350px"
                    },
                    xaxis:{
                        labels:{
                            style:{
                                fontSize:"7px"
                            }
                        }
                    }
                }
            },
            {
                breakpoint:700,
                options:{
                    chart:{

                        width:"450px"
                    },
                    xaxis:{
                        labels:{
                            style:{

                                fontSize:"7px"
                            }
                        }
                    }
                }
            },
            {
                breakpoint:1200,
                options:{
                    chart:{

                        width:"500px"
                    },
                    xaxis:{
                        style:{

                            fontSize:"25px"
                        }
                    }
                }
            },
            {
                breakpoint:1600,
                options:{
                    chart:{

                        width:"500px"
                    },
                    xaxis:{
                        style:{

                            fontSize:"25px"
                        }
                    }
                }
            },
            {
                breakpoint:2600,
                options:{
                    chart:{

                        width:"650px"
                    },
                    xaxis:{
                        style:{

                            fontSize:"25px"
                        }
                    }
                }
            }
        ]

    }

    const series = [{
        name: "hours",
    
            data:[
                {
                    x:"Time taken in DataNeuron",
                    y:roi?.total_time_data_neuron_tool?.toFixed(1) *-1 || 0
                },
                {
                    x:"Time taken In House",
                    y:roi?.total_time_in_house?.toFixed(1) *-1 || 0
                }]
    },

    ]
    const Calculate = () => {

        let roi = CalculateROI(numberOfClasses,
            1,
            numberOfPredictionAPICalls || 0,
            numberOfParagraphs || 0,
            numberOfClasses <= 2 ? 0.5 : 0.3);
        // console.log("=== ROI===", roi);


        //-------------- Scale ROI to a realistic value -------------

        const mn = 110
        const mx = 400
        const data_mn = 0
        const data_mx = 20000
        const scaled_roi = ((roi.ROI - data_mn) / (data_mx - data_mn)) * (mx - mn) + mn;
        // let scaled_roi  = (roi.ROI - data_mn) / (data_mx-data_mn)
         console.log("===== ROI =====", roi.ROI);
        roi.ROI = scaled_roi;
        setRoi(roi);
    }

    return (
        <section className='font-[poppins] md:py-24 py-20 md:px-24 px-12 bg-[#2a2a2a]'>
            <div className='mb-8 text-xl text-[#c4c4c4]'>
                Build vs Buy
            </div>

                <form onSubmit={(e)=>{
                    e.preventDefault();
                    console.log("=== is input valid",isValidInput)
                    isValidInput && Calculate()} }>
            <div className="mt-10 text-xs sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-xl grid  grid-cols-1 lg:grid-cols-4  gap-y-6 gap-x-6">

                <InputField
                label="Number of classes"
                onChange={(e: any) => { setNumberOfClasses(parseInt(e.target.value) || 0) }}
                value={numberOfClasses}
                name="classes"
                min={2}
                max={100}
                disabled={true}
                required={true}
                />
                  <InputField
                label="Number of paragraphs"
                value={numberOfParagraphs} 
                onChange={(e: any) => { setNumberOfParagraphs(parseInt(e.target.value)) }} 
                name="paragraphs"
                min={minPara}
                max={maxPara}
                required={true}
                />
                  <InputField
                label="Number of prediction api calls"
                value={numberOfPredictionAPICalls} 
                onChange={(e: any) => { setNumberOfPredictionAPICalls(parseInt(e.target.value)) }}
                name="predictionCalls"
                min={minPredicted}
                max={maxPredicted}
                required={true}
                />
                {/* <input className='border-2 text-xs rounded-md outline-none py-2 px-3 bg-primaryYellow text-black  placeholder-styles' placeholder='Total Number of Classes' value={numberOfClasses} onChange={(e: any) => { setNumberOfClasses(parseInt(e.target.value) || 0) }} />


                <input className='border-2 text-xs rounded-md outline-none py-2 px-3 bg-primaryYellow text-black  placeholder-styles' placeholder='Total Number of Paragraphs' value={numberOfParagraphs} onChange={(e: any) => { setNumberOfParagraphs(parseInt(e.target.value) || 0) }} />
                <input className='border-2 text-xs rounded-md outline-none py-2 px-3 bg-primaryYellow text-black  placeholder-styles' placeholder='Prediction API Calls' value={numberOfPredictionAPICalls} onChange={(e: any) => { setNumberOfPredictionAPICalls(parseInt(e.target.value) || 0) }} /> */}

                <button  className={` rounded-full text-center duration-500
                ${isValidInput?" hover:bg-white border-white border-2  cursor-pointer hover:text-black text-white ":"bg-lightGray border-black opacity-70 text-white cursor-not-allowed"} py-2 `} 
                //onClick={()=>isValidInput && Calculate()}
                >
                    Calculate
                </button>
            </div>
                </form>



            <div className='mt-16 text-lg text-white'>
                Results
            </div>
            <motion.div 
            ref={ref}
             variants={variant}
             initial={"hidden"}
             animate={timeline}
            className='mt-4 mb-[6rem] gap-y-12 grid grid-cols-1 lg:grid-cols-2 gap-x-12'>
                <div className='text-5xl leading-[4rem] font-[PlayfairDisplay] text-white'>
                    You get a <span className='border-b-2'>{roi.time_reduction ? roi.time_reduction.toFixed(2) : 'X'}%</span> Time Reduction by using <b>DataNeuron</b>  and you get a <span className='border-b-2'>{roi.ROI ? roi.ROI.toFixed(2) : 'Y'}%</span> ROI.
                </div>

                <div
               
                className=' h-64 flex flex-col justify-center items-center '>
                    {/* Graph will Appear Here */}
                    <Chart type="bar" className="mt-[5%] mr-5 "  series={series} options={options} />
                    {/* <p>Lower is better</p> */}
                </div>
            </motion.div>
        </section>
    )
}

export default Page5;