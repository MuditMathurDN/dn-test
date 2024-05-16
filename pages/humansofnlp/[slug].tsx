import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import Layout from '../../components/ResourcesLayout/Layout'
import { getAllGhostPosts, getAllGhostTags, getGhostPostWithSlug } from "../../lib/graphcms";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import Link from "next/link";
import Image from 'next/image';

interface PostDetailsProps {
    post: any;
    posts: Array<ArticleType>;
    tags: Array<any>
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
    readingTime: number
}

const PostDetails: React.FC<PostDetailsProps> = ({ post, posts, tags }) => {
    let router = useRouter();
    const [copyLinkShow, setCopyLinkShow] = useState<boolean>(false);
    const [sharedLink, setSharedLink] = useState<string>("");

    let posttest = {
        date: "Sep 1, 2022",
        tags: ["Conversational AI", "Data Labeling"],
        type: "Case Study",
        title: "",
        desc: "",
        img: "",
        slug: ""
    }



    useEffect(() => {
        setSharedLink(window.location.href);
    }, []);

    let LinkCopied = () => {
        navigator.clipboard.writeText(sharedLink);
        setCopyLinkShow(true);
        setTimeout(() => {
            setCopyLinkShow(false);
        }, 2000);
    }

    return (
        <Layout
            title={post ? post.metaTitle : "Post | Dataneuron"}
            description={post ? post.metaDescription : 'Advanced platform for complex data annotations, model training, prediction & lifecycle management.'}
            image={post?.og_image}
            posts={posts}
            tags={tags}
        // caseStudy={caseStudy}
        >
            {router.isFallback ? (
                <div className="text-xl">Loading ...</div>
            ) : (
                <div className={"flex flex-col"}>
                    <section className={"w-full p-10 lg:px-[20px] flex flex-col space-y-6 bg-white"}>
                        <div className="lg:text-[40px] md:text-[30px] sm:text-[24px] text-[20px] md:font-normal font-medium">{post?.title}</div>

                        <div className="flex sm:flex-row flex-col sm:items-center justify-between">
                            <div className={"md:text-[16px] text-[14px] text-[#333]"}>
                                Written by{" "}
                                <span className="text-primaryBlue">{post?.writtenBy}</span>
                            </div>
                            <div className="flex relative md:top-0 top-[10px]">
                                <LinkedinShareButton url={sharedLink} className="mr-2">
                                    <img src="/linkedin-icon.svg" alt="linkedin" />
                                </LinkedinShareButton>
                                <FacebookShareButton url={sharedLink} className="mr-2">
                                    <img src="/facebook-icon.svg" alt="facebook" />
                                </FacebookShareButton>
                                <TwitterShareButton url={sharedLink} className="mr-2">
                                    <img src="/twitter-icon.svg" alt="twitter" />
                                </TwitterShareButton>
                                <div className="cursor-pointer" onClick={LinkCopied}>
                                    <img src="/link-icon.svg" alt="link" />
                                </div>
                                <div className={`absolute right-[-30px] top-[-20px] px-[10px] py-[6px] bg-black text-white text-[12px] rounded-[15px] hidden
                                ${copyLinkShow ? 'copy-link' : ''}`}>Link Copied!</div>
                            </div>

                        </div>

                        <div className="flex flex-wrap items-center">
                            <div className="text-[14px] uppercase pr-[10px] mr-[10px] mb-[10px] border-r-[2px] border-[#eee]">{post?.date}</div>

                            <div
                                className={`text-[14px] rounded-[6px] px-[10px] py-[4px] mr-[10px] mb-[10px]
                                ${post?.type === "Whitepaper" ? "text-[#232E52] bg-[#EBF2FE]" :
                                        post?.type === "Case Study" ? "text-[#F71735] bg-[#F717350D]" :
                                            "text-[#4DAA57] bg-[#4DAA571A]"
                                    }`
                                }>
                                {post?.type}
                            </div>

                            {
                                post?.tags.map((tag: string, index: number) => {
                                    return <div key={index} className="text-[14px] text-[#232E52] bg-[#F2F2F2] rounded-[6px] px-[10px] py-[4px] mr-[10px] mb-[10px]">{tag}</div>
                                })
                            }
                        </div>
                        <hr />
                        <br />

                        <div className=" min-h-[200px] w-full md:w-[80%] mx-auto overflow-hidden mb-8 md:rounded-[20px]">
                            {/* <img className="w-full object-cover w-full" src={post.image} /> */}
                            <Image
                                src={post.image}
                                alt=""
                                height={280}
                                width={440}
                                className="object-cover "
                                layout="responsive"

                            />
                        </div>

                        <div className="blog-section break-words md:w-[80%] md:mx-auto web_content" dangerouslySetInnerHTML={{ __html: post.content }}>
                        </div>
                    </section>

                    <div className="relative px-[20px] bg-[#11256D] h-[300px] w-full mt-6 flex flex-col justify-center items-center">
                        <img className="w-[50px] mb-8" src="/logo-circle.svg" alt="logo" />
                        <h1 className="text-center md:text-[28px] text-[18px] text-white mb-8">Power your Data for AI Using DataNeuron</h1>
                        <div className="flex">
                            <Link href="/">
                                <button className="md:w-[200px] md:h-[50px] w-[100px] h-[35px] border-[#fff] border-[1px] flex items-center justify-center cursor-pointer group">
                                    <div className="text-[#fff] md:text-[14px] text-[12px]">Learn More</div>
                                    <img className="md:w-auto w-[15px] svg-white pl-[5px] duration-200 group-hover:translate-x-[3px]" src="/view_all.svg" alt="view all" />
                                </button>
                            </Link>
                            <a href="https://portal.dataneuron.ai/">
                                <button className="ml-[20px] md:w-[200px] md:h-[50px] w-[100px] h-[35px] border-[#fff] border-[1px] flex items-center justify-center cursor-pointer group">
                                    <div className="text-[#fff] md:text-[14px] text-[12px]">Sign Up</div>
                                    <img className="md:w-auto w-[15px] svg-white pl-[5px] duration-200 group-hover:translate-x-[3px]" src="/view_all.svg" alt="view all" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};


export async function getStaticProps({ params }: any) {
    let appPosts = await getAllGhostPosts();
    let allTags = await getAllGhostTags();
    let post = await getGhostPostWithSlug(params.slug);

    return {
      props: {
        posts: appPosts || [],
        post: post || {},
        tags: allTags || []
      },
      revalidate: 14400, // In seconds (4 Hours)
    };
}

export async function getStaticPaths() {
    let appPosts = await getAllGhostPosts();

    const paths = appPosts.map((post: ArticleType) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: 'blocking' }
}

export default PostDetails;