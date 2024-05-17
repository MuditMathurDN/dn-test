//3rd Party Modules
import React from 'react';

import PipelineCard from './PipelineCard';
import Tag from '../Tags/Tag';
import Link from 'next/link';

const pipelineCards:cardType[] = [
    {
        text: "Multiclass Classification",
        src: "/pipelinecards/multiclass.svg",
        link:"/products/classification"

    },
    {
        text: "Multilabel Classification",
        src: "/pipelinecards/multilabel.svg",
        link:"/products/classification"
    },
    {
        text: "Named Entity Recognition",
        src: "/pipelinecards/ner.svg",
        link:"/products/ner",
        styles:"w-[25%]"
    },
    {
        text: "Summarization",
        src: "/pipelinecards/summarization.svg",
        link:"/products/summarization"
    },
    {
        text: "Translation",
        src: "/pipelinecards/translation.svg",
        link:""
    },
]

interface cardType {
    text: string;
    src: string;
    link:string;
    styles?:string
}

//Main Component
const Page3: React.FC = () => {
    return (
        // custom-font-IBMPlexMono
        <section className=' '>
           <h2 
           className='text-[14px] md:text-[35px] font-bold
           text-text-black
           '>
           90% less effort, <br/>more focus on what matters!
           </h2>
        </section>
    )
}

export default Page3;