//3rd Party Modules
import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head'

//Local Modules
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import styles from '../../styles/Layout.module.css';

import ScrollTop from './ScrollTop';
import FunctionContext from '../context/functionContext';

//Interface for Props
interface LayoutProps {
    title: string;
    description: string;
    image: string;
    children: any;
    posts: Array<ArticleType>;
    tags: Array<any>;
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

//Main Component
const Layout: React.FC<Partial<LayoutProps>> = ({ children, title, description, image, posts, tags }) => {
    const [visible, setVisible] = useState(false);
    // const [cookieVisible, setCookieVisible] = useState(false);
    const FunctionContextData: any = useContext(FunctionContext);

    // console.log(FunctionContextData);

    const animateBT = {
        initial: { opacity: 0, y: "100vh", x: 0 },
        animate: { opacity: 1, y: "0vh", x: 0 },
        exit: { opacity: 0, y: "100vh", x: 0 }
    }
    const animateLR = {
        initial: { opacity: 0, x: "-100%", y: 0 },
        animate: { opacity: 1, x: "0%", y: 0 },
        exit: { opacity: 0, x: "-100%", y: 0 }
    }
    const [currentAnimate, setCurrentAnimate] = useState<any>(animateLR);

    const handleResize = () => {

        window.innerWidth > 800 ? setCurrentAnimate(animateLR) : setCurrentAnimate(animateBT);
    }


    const toggleVisiblity = () => {
        if (window.pageYOffset > 500) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }
    React.useEffect(() => {

        window.addEventListener("scroll", toggleVisiblity);

        // cleanup this component
        return () => {
            window.removeEventListener('scroll', toggleVisiblity);
        };
    }, [])



    useEffect(() => {
        if (window) {
            handleResize();
            window.addEventListener('resize', handleResize)
        }
        return () => { window.removeEventListener('resize', handleResize) };

    }, []);

    // useEffect(() => {

    //     const scrollDown = "scroll-down";
    //     const scrollUp = "scroll-up";

    //     let lastScroll = 0;
    //     const scrollHandle = () => {
    //         const navBar = document.getElementById('navbar');
    //         const currentScroll = window.pageYOffset;

    //         // console.log(currentScroll)
    //         // if (currentScroll === 0) {
    //         //     navBar?.classList.remove(scrollUp);

    //         //     navBar?.classList.remove(scrollDown);
    //         //     return;
    //         // }

    //         if (currentScroll > lastScroll + 3 && !navBar?.classList.contains(scrollDown)) {
    //             // down
    //             // console.log("Down: ", currentScroll, lastScroll);
    //             // console.log(navBar)
    //             navBar?.classList.remove(scrollUp);
    //             navBar?.classList.add(scrollDown);
    //         } else if (
    //             currentScroll < lastScroll - 3 &&
    //             navBar?.classList.contains(scrollDown)
    //         ) {
    //             // up
    //             // console.log("Up: ", currentScroll, lastScroll);
    //             // console.log(navBar)
    //             navBar?.classList.remove(scrollDown);
    //             navBar?.classList.add(scrollUp);
    //         }
    //         lastScroll = currentScroll;
    //     }
    //     window.addEventListener("scroll", scrollHandle);

    //     // cleanup this component
    //     return () => {
    //         window.removeEventListener('scroll', scrollHandle);
    //     };
    // }, [])
    return (
        <section
            className={`${styles.container} max-h-screen scroll-reserve box-border font-[poppins]`}>
            <Head>
                <title>{title ? title : "DataNeuron"}</title>
                <link rel="icon" type="image/png" href="/favicon.png" />
                <meta name="twitter:card" content="summary" />
                <meta
                    property="og:image"
                    content={image ? image : "/img/dataneuron.jpg"}
                />
                <meta
                    name="description"
                    content={
                        description
                            ? description
                            : "Advanced platform for complex data annotations, model training, prediction & lifecycle management."
                    }
                />
                <meta
                    property="og:title"
                    content={
                        title
                            ? title
                            : "DataNeuron | Advanced platform for complex data annotations, model training, prediction & lifecycle management."
                    }
                />
                <meta
                    property="og:description"
                    content={
                        description
                            ? description
                            : "Advanced platform for complex data annotations, model training, prediction & lifecycle management."
                    }
                />
                <meta property="og:type" content="website" />
                <script
                    async
                    src={"https://www.googletagmanager.com/gtag/js?id=G-DLKMD4E44H"}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-DLKMD4E44H', {
                        page_path: window.location.pathname,
                        });
                    `,
                    }}
                />
            </Head>

            {/* <ScrollTop visible={visible} /> */}

            <div className='flex flex-col'>
                <div className='flex'>
                    <div className='flex flex-col lg:w-[78vw] w-screen z-[60]'>
                        <Navbar posts={posts}/>
                        <section className='z-1 lg:w-[78vw] w-screen pt-[90px]'>
                            {children}
                        </section>
                    </div>

                    <Sidebar allTags={tags} />
                </div>
                
                <Footer />
            </div>

            {/* <Footer /> */}

            {/* <section className='flex flex-col lg:w-[78vw] w-screen max-h-screen relative z-[60]'>


            </section> */}

        </section>
    )
}

export default Layout;