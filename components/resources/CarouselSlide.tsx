import React from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';

interface CarouselSlideProps {
    slide: {
        date: string,
        tags: Array<string>,
        type: string,
        title: string,
        desc: string,
        image: string,
        slug: string
    }
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ slide }) => {
    const router = useRouter();

    return (
        <div className='px-4'>
            <div className="flex items-center flex-wrap">
                <div className="text-[14px] text-[#232E52] uppercase pr-[10px] mr-[10px] mb-[10px] border-r-[2px] border-[#eee]">{slide.date}</div>
                <div
                    className={`text-[14px] rounded-[6px] px-[10px] py-[4px] mr-[10px] mb-[10px]
                        ${slide.type === "Whitepaper" ? "text-[#232E52] bg-[#EBF2FE]" :
                            slide.type === "Case Study" ? "text-[#F71735] bg-[#F717350D]" :
                                "text-[#4DAA57] bg-[#4DAA571A]"
                        }`
                    }>
                    {slide.type}
                </div>
                {
                    slide.tags.map((tag: string, index: number) => {
                        return <div key={index} className="text-[14px] text-[#232E52] bg-[#F2F2F2] rounded-[6px] px-[10px] py-[4px] mr-[10px] mb-[10px]">{tag}</div>
                    })
                }
            </div>
            <div className="mt-[15px] rounded-[8px] shadow-[0_0_12px_0_rgba(0,0,0,0.1)] overflow-hidden md:h-[350px] cursor-pointer" onClick={() => router.push(`/humansofnlp/${slide.slug}`)}>
                <Image
                    src={slide.image}
                    alt="placeholder"
                    height={465}
                    width={828}
                    layout='responsive'
                    className='rounded-[8px]'
                />
            </div>

            <div className="mt-[20px] cursor-pointer" onClick={() => router.push(`/humansofnlp/${slide.slug}`)}>
                <h2 className="text-[20px] text-[#222222] mb-[6px]">{slide.title}</h2>
                <p className="text-[16px] text-[#232E52]">{slide.desc}</p>
            </div>
        </div>
    )
}

export default CarouselSlide