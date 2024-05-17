//3rd Party Modules
import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion';
//Local Modules
import Navbar from './Navbar';
import Footer from './Footer';
// import Sidebar from './Sidebar';
import styles from '../../styles/Layout.module.css';

import CaseStudies from './SidebarComponent/CSR/index'
import ProductAndMission from './SidebarComponent/OPM/index'
import ScrollTop from './ScrollTop';
// import Cookie from './Cookie';
import FunctionContext from '../context/functionContext';

//Interface for Props
interface LayoutProps {
    title: string;
    description: string;
    image: string;
    children: any;
    posts: Array<any>;
    caseStudy: Array<any>;
}


//Main Component
const Layout: React.FC<Partial<LayoutProps>> = ({ children, title, description, image, posts, caseStudy }) => {
    const [visible, setVisible] = useState(false);
    // const [cookieVisible, setCookieVisible] = useState(false);
    const FunctionContextData: any = useContext(FunctionContext);

    // console.log("post in layout",posts);

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
    
    return (
        <section
            className={`${styles.container}  
            max-h-screen scroll-reserve box-border`}>
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
       
            <section className='flex flex-col w-screen max-h-screen bg-[#F5F5F5] '>
             
                <Navbar posts={  posts && posts[0]} />
                <section className='z-1 mt-[8vh] md:mt-[10vh] bg-bgGray'>
                    {children}
                </section>
                <Footer />
            </section>
        </section>
    )
}

export default Layout;