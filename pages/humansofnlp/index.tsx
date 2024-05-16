import React from "react";
import Link from 'next/link';
import Layout from "../../components/ResourcesLayout/Layout";
import { getAllGhostPosts, getAllGhostTags } from "../../lib/graphcms";
import CarouselSlide from "../../components/resources/CarouselSlide";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import ArticleCard from "../../components/resources/ArticleCard";
import PodcastCard from "../../components/resources/PodcastCard";

export const PostTypes = {
  WHITEPAPERS: "whitepapers",
  FEATURE_CAT: "feature_cat",
  CASE_STUDY: "case_study",
};

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

const Resources = ({ posts, tags }: any) => {
  const carouselRef: any = React.createRef();

  let carousel: Array<ArticleType> = posts;
  let articles: Array<ArticleType> = posts;

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

          <section className="mx-4">
            <h1 className="mb-5 md:text-[40px] text-[30px]">Resource Centre </h1>
            <p className="mb-4 text-gray-400 md:text-[20px] text-[18px]" >Find Resources for DataNeuron - Case Studies, Whitepapers and Feature Catalogues</p>
          </section>

          <section className="py-6">
            <h1 className="mx-4 font-medium text-[#11256D] md:text-[18px] text-[22px]">Featured Articles</h1>

            <div className="mt-[20px] relative">

              <button className="h-[100px] border-none absolute left-4 top-[35%] z-10 md:block hidden" onClick={() => { carouselRef.current.prev() }}>
                <img className="w-[30px]" src="/left-chevron.svg" alt="left" />
              </button>
              <button className="h-[100px] border-none absolute right-4 top-[35%] z-10 md:block hidden" onClick={() => { carouselRef.current.next() }}>
                <img className="w-[30px]" src="/right-chevron.svg" alt="right" />
              </button>

              <Carousel autoplay ref={carouselRef} dots={false} autoplaySpeed={5000}>
                {
                  carousel.map((slide: any) => {
                    return slide.featured && <CarouselSlide key={slide.id} slide={slide} />
                  })
                }
              </Carousel>

            </div>
          </section>

          <div className="mx-4 w-full border-b-[1px] border-[#E7E7E7]"></div>

          <section className="py-10 mx-4">
            <div className="flex justify-between mb-[0.5rem]">
              <h1 className="font-medium text-[#11256D] md:text-[18px] text-[22px] mb-0">Latest Articles</h1>
              <Link href="/humansofnlp/articles">
                <div className="items-center cursor-pointer sm:flex hidden">
                  <div className="font-medium text-[#11256D] md:text-[14px] text-[18px]">View All Articles</div>
                  <img className="pl-[4px]" src="/view_all.svg" alt="view all" />
                </div>
              </Link>
            </div>

            <div className="">
              {
                articles.slice(0, 3).map((article: any, idx: number) => {
                  return <ArticleCard key={article.id} first={idx === 0} article={article} />
                })
              }
            </div>
          </section>

          <div className="mx-4 w-full border-b-[1px] border-[#E7E7E7]"></div>

          <section className="py-10 mx-4">
            <div className="flex justify-between mb-[0.5rem]">
              <h1 className="font-medium text-[#11256D] md:text-[18px] text-[22px] mb-0">Latest Podcasts</h1>
              <Link href="/humansofnlp/podcasts">
                <div className="items-center cursor-pointer sm:flex hidden">
                  <div className="font-medium text-[#11256D] md:text-[14px] text-[18px]">View All Podcasts</div>
                  <img className="pl-[4px]" src="/view_all.svg" alt="view all" />
                </div>
              </Link>
            </div>

            <div className="">
              {
                podcasts.slice(0, 3).map((podcast: string, idx: number) => {
                  return <PodcastCard key={idx} first={idx === 0} link={podcast} />
                })
              }
            </div>
          </section>

          {/* <div className="flex justify-center ">
            <div className="w-full md:max-w-7xl mt-14 flex flex-wrap justify-center md:justify-center">
              {currentPostType !== null
                ? posts
                  .filter((details: any) => details.postType === currentPostType)
                  .map((post: any) => {
                    return (
                      <div
                        key={post.id}
                        onClick={() => router.push(`/humansofnlp/${post.slug}`)}
                        style={{
                          width: 330,
                          margin: "20px 26px",
                        }}
                        className="transform hover:scale-105 duration-300 cursor-pointer flex flex-col justify-between border-t border-b border-gray-300"
                      >
                        <div>
                          <p className="text-gray-400">
                            {post.postType === PostTypes.CASE_STUDY
                              ? "CASE STUDY"
                              : post.postType === PostTypes.WHITEPAPERS
                                ? "WHITEPAPER"
                                : "FEATURE CATALOG"}
                          </p>
                          <ImageCard
                            title={post.title}
                            imageUrl={post?.coverImage?.url}
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div className="flex justify-between">
                            <div className="text-sm text-gray-400">
                              2021
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : posts.map((post: any) => {
                  return (
                    <div
                      key={post.id}
                      onClick={() => router.push(`/humansofnlp/${post.slug}`)}
                      style={{
                        width: 330,
                        margin: "20px 26px",
                      }}
                      className="cursor-pointer transform hover:scale-105 duration-300 flex flex-col justify-between border-t border-b border-gray-300"
                    >
                      <div>
                        <p className="text-gray-400">
                          {post.postType === PostTypes.CASE_STUDY
                            ? "CASE STUDY"
                            : post.postType === PostTypes.WHITEPAPERS
                              ? "WHITEPAPER"
                              : "FEATURE CATALOG"}
                        </p>
                        <ImageCard
                          title={post.title}
                          imageUrl={post.coverImage.url}
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div className="flex justify-between">
                          <div className="text-sm text-gray-400">2021</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div> */}
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
      tags: [...allTags] || []
    },
    revalidate: 14400, // In seconds (4 Hours)
  }
}

export default Resources;
