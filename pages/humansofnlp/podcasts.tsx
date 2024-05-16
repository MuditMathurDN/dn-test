import React from "react";
import Layout from "../../components/ResourcesLayout/Layout";
import { getAllGhostPosts, getAllGhostTags } from "../../lib/graphcms";
import PodcastCard from "../../components/resources/PodcastCard";

const podcasts = ({ posts, tags }: any) => {
    let podcasts = ["https://embed.podcasts.apple.com/in/podcast/dataneuron-the-ai-t%C3%AAte-%C3%A0-t%C3%AAte-nitin-aggarwal-x-rohit-adlakha/id1606702161?i=1000557694380", "https://embed.podcasts.apple.com/in/podcast/dataneuron-the-ai-t%C3%AAte-%C3%A0-t%C3%AAte-bharath-x-rohit-adlakha/id1606702161?i=1000548796291"]

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
                        <h1 className="font-medium text-[#11256D] md:text-[18px] text-[22px]">All Podcasts</h1>

                        <div className="">
                            {
                                podcasts.map((podcast: string, idx: number) => {
                                    return <PodcastCard first={idx === 0} link={podcast} />
                                })
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

export default podcasts;