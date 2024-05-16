import React, { useState, useContext, useEffect } from 'react';
import FunctionContext from '../context/functionContext';
import {useRouter} from 'next/router';

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
    readingTime: number
}

interface SidebarProps {
    allTags: Array<any> | undefined;
}

const Sidebar: React.FC<SidebarProps> = ({ allTags }) => {
    const TagsContextData: any = useContext(FunctionContext);
    const router = useRouter();

    const [tags, setTags] = useState<Array<any>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let tagsSet: Set<string> = TagsContextData.activeTags;
        let set = new Set<string>;

        set.add("All")
        allTags && allTags.forEach((tag) => {
            set.add(tag.name);
        })

        let finalTags: Array<any> = [];

        set.forEach((tag) => {
            if (tagsSet.has(tag)) {
                finalTags.push({
                    name: tag,
                    active: true
                })
            } else {
                finalTags.push({
                    name: tag,
                    active: false
                })
            }
        })

        setTags(finalTags);
        setLoading(false);
        
        let path = router.pathname;
        if (!path.match("/humansofnlp/articles") && !path.match("/humansofnlp/whitepapers") && !path.match("/humansofnlp/casestudies") && !path.match("/humansofnlp/catalogues")) {
            let finalTags: Array<any> = [];
            set.forEach((tag) => {
                finalTags.push({
                    name: tag,
                    active: false
                })
            })

            setTags(finalTags);
            TagsContextData.setActiveTags(new Set());
        }
            
    }, [TagsContextData.tagFlag])

    const tagClick  = (tag: string) => {
        let tagsSet: Set<string> = TagsContextData.activeTags;


        if (tagsSet.has(tag)){
            if(tag !== "All"){
                tagsSet.delete("All");
            }

            tagsSet.delete(tag);
        }
        else{

            if(tag === "All"){
                tagsSet.clear();
            }else{
                if(tagsSet.has("All")){
                    tagsSet.delete("All");
                }
            }
            tagsSet.add(tag);
        }
        
        TagsContextData.setActiveTags(tagsSet);

        let path = router.pathname;
        if (!path.match("/humansofnlp/articles") && !path.match("/humansofnlp/whitepapers") && !path.match("/humansofnlp/casestudies") && !path.match("/humansofnlp/catalogues")) {
            router.push("/humansofnlp/articles");
        } else {
            TagsContextData.setTagFlag(!TagsContextData.tagFlag);
        }

    }
    
    return (
        <div className='bg-white z-[50] w-[22vw] h-full lg:block hidden border-l-[1px] border-[#999999]'>
            <div className='w-[20vw] mx-[1vw] mt-[90px] mb-[40px] fixed top-[3vh]'>
                {/* <button className='mt-[100px] w-full h-[40px] bg-[#11256D] rounded-[20px] text-[#fff] text-[14px]'>Subscribe to our Mailing List</button> */}

                    <h6 className='font-medium text-[17px] '>Recommended Topics</h6>

                    <div className='mt-[10px] flex flex-wrap'>
                        {
                            !loading && tags && tags.map((tag: any) => {
                                return (
                                <button 
                                    className={`h-[35px] px-[15px] mr-[10px] mb-[10px] bg-[#F2F2F2] hover:bg-[#EBF2FE] rounded-[18px] text-[14px] transition duration-200
                                    ${tag.active ? 'bg-[#11256D] hover:bg-[#11256D] text-white' : ''}`}
                                    onClick={() => tagClick(tag.name)}
                                >
                                    {tag.name}
                                </button>)
                            })
                        }
                        {
                            loading && (
                                <div className='flex items-center justify-center h-[100px] w-full'>
                                    <img className='w-[50px]' src="/loading_white.svg" alt="loader" />
                                </div>
                            )
                        }
                    </div>
            </div>

            
        </div>
    )
}
export default Sidebar;