import React from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';

interface ArticleCardProps {
    article: {
        date: string,
        tags: Array<string>,
        type: string,
        title: string,
        desc: string,
        image: string,
        slug: string
    },
    first: boolean
}

const ArticleCard: React.FC<ArticleCardProps> = ({ first, article }) => {
    const router = useRouter();

    return (
        <div className={`grid grid-cols-12 py-10 ${first ? 'pt-4' : 'border-t-[1px] border-[#EFEFEF]'}`}>
            <div className='sm:pr-[20px] lg:col-span-9 md:col-span-8 sm:col-span-6 col-span-12'>
                <div className="flex items-center flex-wrap">
                    <div className="text-[14px] text-[#232E52] uppercase pr-[10px] mr-[10px] mb-[10px] border-r-[2px] border-[#eee]">{article.date}</div>

                    <div
                        className={`text-[14px] rounded-[6px] px-[10px] py-[4px] mr-[10px] mb-[10px]
                        ${article.type === "Whitepaper" ? "text-[#232E52] bg-[#EBF2FE]" :
                                article.type === "Case Study" ? "text-[#F71735] bg-[#F717350D]" :
                                    "text-[#4DAA57] bg-[#4DAA571A]"
                            }`
                        }>
                        {article.type}
                    </div>

                    {
                        article.tags.map((tag: string, index: number) => {
                            return <div key={index} className="text-[14px] text-[#232E52] bg-[#F2F2F2] rounded-[6px] px-[10px] py-[4px] mr-[10px] mb-[10px]">{tag}</div>
                        })
                    }
                </div>

                <div className="cursor-pointer" onClick={() => router.push(`/humansofnlp/${article.slug}`)}>
                    <h2 className="text-[18px] text-[#222222]">{article.title}</h2>
                    <p className="text-[16px] text-[#232E52] mt-[10px] mb-0">{article.desc}</p>
                </div>
            </div>

            <div className='overflow-hidden cursor-pointer lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 sm:row-auto row-start-1 sm:pb-0 pb-6 sm:shadow-[0_0_10px_0_rgba(0,0,0,0.1)] lg:h-[160px] md:h-[200px] h-full rounded-[8px]' onClick={() => router.push(`/humansofnlp/${article.slug}`)}>
                <Image
                    src={article.image}
                    alt="placeholder"
                    height={160}
                    width={226}
                    layout='responsive'
                    className="object-cover !h-full"
                />
                {/* <img
                    src={article.image}
                    alt="placeholder"
                    className="object-cover w-full h-full rounded-[8px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)]"
                /> */}
            </div>
        </div>
    )
}

export default ArticleCard