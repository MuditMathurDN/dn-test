//3rd Party Modules
import { useRouter } from 'next/router';
import React, { useContext, useRef, useEffect } from 'react';
import useInViewport from '../hooks/useInView';
import { motion, useAnimationControls } from 'framer-motion';
import FunctionContext from '../context/functionContext';
// import Link from 'next/link';
import Image from 'next/image';
import Tag from '../Tags/Tag';

interface ResourcesCardProps {
    coverImage: string;
    title: string;
    slug: string;
    index: number;
    content:any

}

interface ArticleType {
    id: string,
    title: string,
    image: string,
    slug: string,
    date: string,
    type: string,
    tags: Array<string>,
    featured: boolean,
    content: any,
    writtenBy: string,
    readingTime: number,
    updated_at:string
  }

const ResourcesCard: React.FC<ResourcesCardProps> = ({ index, content,title, coverImage, slug }) => {
    const router = useRouter();

    //Animation Related
    const ref = useRef(null);
    const isInView = useInViewport(ref);
    const timeline = useAnimationControls();
    useEffect(() => {

        if (isInView) {

            timeline.start("show");
        }
        else {

            timeline.start("hidden");
        }



    }, [isInView])

    const variant = {
        "hidden": {
            opacity: 0,
            y: 100,
            transition: { duration: 0.5 }
        },
        "show": {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }



    return (
    <motion.div
        // ref={ref}
        // variants={variant}
        // initial={"hidden"}
        // animate={timeline}
        className='bg-white rounded-lg 
        w-full md:h-[350px] 
        flex flex-col md:flex-row md:flex-row-reverse 
        items-center justify-start md:items-start md:justify-between
        '
    >
        <div className='md:w-[40%] md:h-full'>
            <Image 
                src={coverImage} 
                alt={`${coverImage}_image`}
                width={"600"}
                height={'350'} 
                className="object-cover my-auto"
            />
        </div>

        <div className='my-0
        md:my-8 md:w-[80%] md:px-12
        '>
            <div className='mb-3 text-md md:text-xl'>
                {
                    title
                }
                <p>{content}</p>
            </div>
            <div className='flex space-x-2 justify-start items-center cursor-pointer' onClick={() => router.push(`/humansofnlp/${slug}`)}>
                <span className='text-lightGray' >
                    Read More
                </span>
                <img src="/left_arrow_gray.svg" alt="left_arrow_icon" />
            </div>


        </div>
    </motion.div>
    )

}
export { ResourcesCard };
interface Posts {
    posts: any;
}
//Main Component
const Page6: React.FC<Posts> = ({ posts }) => {
    const FunctionContextData = useContext(FunctionContext);
    // console.log(posts);

    let articles: Array<ArticleType> = posts;

    return (
        <section className='font-[poppins] md:py-24 py-20 md:px-24 px-6 bg-[#FAFAFA]'>
            <Tag
            content='Our Resources'
            />

            <div className='mt-6 flex flex-col flex-wrap justify-center items-center gap-[40px] md:gap-5 '>
                {
                   
                    articles && articles
                        .filter((article:any)=>article.featured)
                        .slice(0, 3)
                        .sort((p1,p2)=>p1.updated_at>p2.updated_at?1:-1)
                        .map((article: ArticleType, index: number) => {
                        return <ResourcesCard
                                    index={index}
                                    key={index}
                                    title={article.title}
                                    slug={article.slug}
                                    coverImage={article.image}
                                    content={article.content}
                                />
                    })
                }
            </div>
            <div className='flex justify-center mt-10'>
                <span
                    className='hover:bg-primaryBlue border-2 border-primaryBlue duration-300 text-primaryBlue hover:text-white rounded-full px-8 py-2 cursor-pointer'
                    onClick={() => { window.open('/humansofnlp', '_blank'); }}
                >

                    View All
                </span>
            </div>
        </section>
    )
}



export default Page6;