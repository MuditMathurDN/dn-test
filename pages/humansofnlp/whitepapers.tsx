import React from "react";
import Layout from "../../components/ResourcesLayout/Layout";
import { getAllGhostPosts, getAllGhostTags } from "../../lib/graphcms";
import { useState, useEffect, useContext } from "react";
import ArticleCard from "../../components/resources/ArticleCard";
import FunctionContext from '../../components/context/functionContext';

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

const whitepapers = ({ posts, tags }: any) => {
    const TagsContextData: any = useContext(FunctionContext);

    let articles: Array<ArticleType> = posts;

    let ogPosts = articles.filter((article: ArticleType) => {
        return article.type === "Whitepaper";
    })

    let [filterPosts, setFilterPosts] = useState<Array<ArticleType>>(ogPosts);

    useEffect(() => {
        let set:Set<string> = TagsContextData.activeTags;

        if (set.size === 0) {
            setFilterPosts(ogPosts);
        } else {
            let filteredArray = ogPosts.filter((article: ArticleType) => {
                let c = 0;
                set.forEach((key) => {
                    if (article.tags.includes(key))
                        c++;
                })

                if (c === set.size)
                    return true;
            });

            setFilterPosts(filteredArray);
        }

    }, [TagsContextData.tagFlag]);

    return (
        <div>
            <Layout
                title='DataNeuron'
                description='Advanced platform for complex data annotations, model training, prediction & lifecycle management.'
                image='/img/dataneuron.jpg'
                posts={posts}
                tags={tags}
                // caseStudy={caseStudy}
            >
                <div className="w-full p-6 lg:px-16">
                    <section className="py-4 mx-4">
                        <h1 className="font-medium text-[#11256D] md:text-[18px] text-[22px]">All Whitepapers</h1>

                        <div className="">
                            {
                                filterPosts && filterPosts.map((article: any, idx: number) => {
                                    return <ArticleCard first={idx === 0} article={article} />
                                })
                            }
                            {
                                filterPosts.length === 0 && 
                                <div className="h-[200px] w-full flex items-center justify-center flex-col">
                                    <img src="/not_found.svg" alt="Not found" />
                                    <h1 className="text-[20px] uppercase text-[#555] font-medium">No posts found</h1>
                                </div>
                            }
                        </div>
                    </section>
                </div>
            </Layout>
        </div>
    );
};

export async function getStaticProps() {
    let appPosts = await getAllGhostPosts();
    let allTags = await getAllGhostTags();
  
    return {
      props: {
        posts: appPosts || [],
        tags: allTags || []
      },
      revalidate: 14400, // In seconds (4 Hours)
    }
  }

export default whitepapers;