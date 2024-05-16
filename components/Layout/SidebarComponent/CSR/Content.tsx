//3rd Party Modules
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { jsPDF } from 'jspdf';
import { getPostAndMorePosts } from '../../../../lib/graphcms';
import FunctionContext from '../../../context/functionContext';
const case_study = [
    {
        title: "How well does the DataNeuron ALP handle the Finance Use Case?",
        overview: "During an in-house project, the SMEs have to go through all the paragraphs present in the dataset in order to figure out which paragraphs actually belong to the 8 classes mentioned above.This would usually take a tremendous amount of time and effort.",
        reductionInTime: "96.8",
        reductionInCost: "94.5",
        reductionInParagraphs: "584.5",
        roi: "98.2",
        slug: "tax-and-legal",
        html: '<div style="display:flex;background-color:red"><h1>First Tag</h1><h1>Second Tag</h2></div>'
    },
    {
        title: "How well does the DataNeuron ALP handle the Finance Use Case?",
        overview: "During an in-house project, the SMEs have to go through all the paragraphs present in the dataset in order to figure out which paragraphs actually belong to the 8 classes mentioned above.This would usually take a tremendous amount of time and effort.",
        reductionInTime: "96.8",
        reductionInCost: "94.5",
        reductionInParagraphs: "484.5",
        roi: "98.2",
        slug: "tax-and-legal"
    },
    {
        title: "How well does the DataNeuron ALP handle the Finance Use Case?",
        overview: "During an in-house project, the SMEs have to go through all the paragraphs present in the dataset in order to figure out which paragraphs actually belong to the 8 classes mentioned above.This would usually take a tremendous amount of time and effort.",
        reductionInTime: "96.8",
        reductionInCost: "94.5",
        reductionInParagraphs: "484.5",
        roi: "98.2",
        slug: "tax-and-legal"
    },
    {
        title: "How well does the DataNeuron ALP handle the Finance Use Case?",
        overview: "During an in-house project, the SMEs have to go through all the paragraphs present in the dataset in order to figure out which paragraphs actually belong to the 8 classes mentioned above.This would usually take a tremendous amount of time and effort.",
        reductionInTime: "96.8",
        reductionInCost: "94.5",
        reductionInParagraphs: "484.5",
        roi: "98.2",
        slug: "tax-and-legal"
    }
]

interface Props {
    caseStudy: Array<any> | undefined;
}
interface CardProps {
    title: string;
    overview: string;
    reductionInTime: string;
    reductionInCost: string;
    reductionInParagraphs: string;
    roi: string;
    slug: string;
    doc: any;
    html: any;
    index: number;
    total: number;
}


const Card: React.FC<CardProps> = ({ html, doc, overview, title, reductionInTime, reductionInCost, reductionInParagraphs, roi, slug, index, total }) => {
    const router = useRouter();
    // console.log(index);
    const FunctionContextData = useContext(FunctionContext);

    return <div className={` md:sticky  bg-[#fafafa] drop-shadow-[4px_10px_10px_rgba(0,0,0,0.45)] px-8 pt-12 pb-8 my-12`}
        style={{
            top: `${index * 0 + 40}px`
        }}

    >
        <div className=''>
            <div className='text-[#444444] text-2xl'>
                {title}
            </div>
            <br />
            <br />
            <div className='my-4 text-[#444444]'>
                {overview}
            </div>


            <div className='my-12 grid grid-cols-1 gap-y-12 gap-x-8 md:grid-cols-2 lg:grid-cols-4'>
                <div className='py-12 px-4 text-center space-y-4 rounded-lg border-transparent shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                    <div className='text-primaryYellow font-semibold text-4xl'>
                        {reductionInTime}%
                    </div>
                    <div className='text-lightGray text-lg'>
                        Reduction in Time
                    </div>
                </div>
                <div className='py-12 px-4 text-center space-y-4 rounded-lg border-transparent shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                    <div className='text-primaryYellow font-semibold text-4xl'>
                        {reductionInParagraphs}%
                    </div>
                    <div className='text-lightGray text-lg'>
                        Reduction in Paragraphs Annotated
                    </div>
                </div>
                <div className='py-12 px-4 text-center space-y-4 rounded-lg border-transparent shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                    <div className='text-primaryYellow font-semibold text-4xl'>
                        {reductionInCost}%
                    </div>
                    <div className='text-lightGray text-lg'>
                        Reduction in Cost
                    </div>
                </div>
                <div className='py-12 px-4 text-center space-y-4 rounded-lg border-transparent shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                    <div className='text-primaryYellow font-semibold text-4xl'>
                        {roi}%
                    </div>
                    <div className='text-lightGray text-lg'>
                        ROI
                    </div>
                </div>
            </div>


            <div className='flex items-center space-x-8 text-primaryBlue text-lg'>
                <div className='border-b-[2px] leading-5 cursor-pointer' onClick={() => { FunctionContextData.setActiveSidebar(-1); router.push(`/posts/${slug}`); }}>
                    Read More
                </div>
                {/* <div className='flex space-x-2'>

                    <img className='w-6' src="/download.svg" alt="download" />
                    <div onClick={() => doc.html(`<html><body>${html}</body></html>`, {
                        callback: () => doc.save()
                    })}>
                        Download
                    </div>
                </div> */}
            </div>
        </div>
    </div>
}

//Main Component
const Content: React.FC<Props> = ({ caseStudy }) => {
    const [doc, setDoc] = useState<any>();
    const FunctionContextData = useContext(FunctionContext);
    // console.log(caseStudy);

    useEffect(() => {
        // const getPosts = async () => await getPostAndMorePosts("tax-and-legal");
        // console.log("=== posts ===",getPosts());
        setDoc(new jsPDF);
        return () => {
            setDoc(null);
        }
    }, []);


    return (<div className='font-[poppins] mt-72'>
        <div className='bg-black px-8'>

            <div className='text-white text-4xl'>
                Case Studies
            </div>
            <div className='text-[#c4c4c4] mt-5  mb-20 text-xl'>

                Learn more about how our solutions work in real life scenarios.
            </div>

            <div className='grid mb-24 grid-cols-1 text-xl gap-y-8 gap-x-8 md:grid-cols-2 noselect'>
                <div className={`cursor-pointer 
                ${FunctionContextData.activeTabCSR === 0 ? 'text-black bg-primaryYellow border-primaryYellow' : 'text-white border-white'} 
                hover:bg-primaryYellow hover:border-primaryYellow hover:text-black
                border-2 py-6 text-center duration-300`}
                    onClick={() => { FunctionContextData.setActiveTabCSR(0) }}>
                    Documentation
                </div>
                <div className={`cursor-pointer 
                 ${FunctionContextData.activeTabCSR === 1 ? 'text-black bg-primaryYellow border-primaryYellow' : 'text-white border-white'} 
                 hover:bg-primaryYellow hover:border-primaryYellow hover:text-black
                 border-2 py-6 text-center duration-300`}
                    onClick={() => { FunctionContextData.setActiveTabCSR(1) }}>
                    Podcasts
                </div>
            </div>
        </div>
        {
            FunctionContextData.activeTabCSR === 0 ?
                <div className='flex flex-col bg-black'>
                    {

                        caseStudy?.filter((element => { return element.postType === 'case_study' })).map((element: any, index: number) => {
                            return <Card
                                html={element.html}
                                title={element.title}
                                overview={element.overview}
                                reductionInTime={element.reductionInTime}
                                reductionInCost={element.reductionInCost}
                                reductionInParagraphs={element.reductionInParagraphs}
                                roi={element.roi}
                                slug={element.slug}
                                doc={doc}
                                index={index}
                                total={caseStudy.length}
                            />
                        })

                    }
                </div>

                :

                <div className='grid gap-y-4 w-full bg-black text-white text-center text-3xl px-8 pb-24 mx-auto'>
                    <div className='w-full gap-4 grid grid-cols-1 md:grid-cols-2 justify-items-center'>
                        <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="175" className='podcast flex items-center' sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/in/podcast/dataneuron-the-ai-t%C3%AAte-%C3%A0-t%C3%AAte-nitin-aggarwal-x-rohit-adlakha/id1606702161?i=1000557694380"></iframe>
                        <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="175" className='podcast overflow-y-hidden' sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/in/podcast/dataneuron-the-ai-t%C3%AAte-%C3%A0-t%C3%AAte-bharath-x-rohit-adlakha/id1606702161?i=1000548796291"></iframe>
                    </div>
                    <div className='w-full'>
                        <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="450" className='podcast' sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/in/podcast/dataneuron-the-ai-t%C3%AAte-%C3%A0-t%C3%AAte/id1606702161"></iframe>
                    </div>


                    {/* <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1202541265&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                    </iframe>
                    <div className='podcast2'>
                        <a href="https://soundcloud.com/dataneuron" title="DataNeuron: The AI tête-à-tête" target="_blank" className='anchor-podcast'>DataNeuron: The AI tête-à-tête</a>.
                        <a href="https://soundcloud.com/dataneuron/dataneuron-the-ai-tete-a-tete-bharath-x-rohit-adlakha" title="DataNeuron: The AI tête-à-tête (Bharath x Rohit Adlakha)" target="_blank" className='anchor-podcast'>DataNeuron: The AI tête-à-tête (Bharath x Rohit Adlakha)</a>
                    </div> */}
                </div>
        }
    </div>
    )
}

export default Content;