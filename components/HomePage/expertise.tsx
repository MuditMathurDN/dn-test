import Link from "next/link";
import Container from "../../pages/products/Container";


const data = [{
    text: 'We match the accuracy of pre-trained LLMs or HITL methods. ',
    href: "#accuracy"
}, {
    text: 'Effortless model training, fine-tuning & deployment with DataNeuron. ',
    href: "#model-training"
},
{
    text: 'Save time, boost accuracy, and cut costs all in one platform.',
    href: "#save-time"
}, {
    text: 'Introducing DataNeuron DSEAL: Precision annotation.',
    href: "#dseal"
}

]



const Expertise = () => {

    return (
            <>
            <div
                className="text-text- font-bold 
            flex items-start justify-between
            border-b border-b-3 border-[#DEDEDE]
            pb-8 md:pb-14
            "
            >
                <h1
                    className="text-[12px] md:text-[35px]"
                >
                    These are our Expertise
                    <span className="ml-1 w-[10px] hidden md:inline md:w-[20px] my-1 inline-block h-1 bg-[#555555]"></span>

                </h1>
                <h2 className="text-[12px] md:text-[32px]">
                    Discover why we excel!
                </h2>
            </div>
            <div className="flex flex-col 
            ">
                {
                    data.map(d => {
                        return (<Link
                        href={"/why-dataneuron"+d.href}
                        >
                        <div
                            key={d.text}
                            className="md:h-40
                        p-4
                        hover:bg-primaryBlue hover:text-white
                        border-b border-b-2 border-[#DEDEDE]
                        flex justify-between
                        cursor-pointer
                        duration-500
                        ">
                            <p
                            className="text-sm md:text-lg w-[50%]  md:w-[35%]"
                            >{d.text}</p>
                            <div className="bg-primaryBlue 
                            w-5 h-5 md:w-10 md:h-10 rounded-full
                            mr-10 
                            ">
                                <svg className="w-full h-full" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_859_178)">
                                        <path d="M12.4925 10.7871C12.4639 10.3851 12.5965 9.98813 12.8612 9.68362C13.1259 9.37911 13.5009 9.19196 13.9038 9.16332L23.5738 8.47758C23.9767 8.44907 24.3745 8.58142 24.6796 8.84552C24.9848 9.10962 25.1723 9.48385 25.201 9.88592L25.8882 19.5356C25.9096 19.9336 25.7734 20.3241 25.5091 20.6229C25.2448 20.9218 24.8734 21.105 24.475 21.1333C24.0766 21.1615 23.683 21.0325 23.379 20.774C23.075 20.5155 22.8849 20.1481 22.8497 19.7511L22.3373 13.8606L12.8555 24.7702C12.5908 25.0748 12.2156 25.262 11.8126 25.2905C11.4097 25.3191 11.0118 25.1868 10.7066 24.9226C10.4014 24.6585 10.2138 24.2841 10.1852 23.882C10.1565 23.4798 10.2892 23.0828 10.5539 22.7782L20.0357 11.8686L14.1197 12.1955C13.7168 12.224 13.319 12.0916 13.0139 11.8275C12.7087 11.5634 12.5212 11.1892 12.4925 10.7871Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_859_178">
                                            <rect width="22.8225" height="22.8293" fill="white" transform="matrix(0.65599 -0.754769 0.756132 0.654419 0.460938 17.683)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                        </Link>)
                    })
                }
            </div>
            </>
        
    )

}

export default Expertise;