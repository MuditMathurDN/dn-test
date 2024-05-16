import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image'

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
interface NavbarProps {
    posts: Array<ArticleType> | undefined;
}

const Navbar: React.FC<NavbarProps> = ({ posts }) => {
    const [showDD, setShowDD] = useState<boolean>(false);
    const [showHamburgerDD, setShowHamburgerDD] = useState<boolean>(false);
    const wrapperRef1 = useRef(null);
    const [search, setSearch] = useState<string>("");
    const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
    const [searchResults, setSearchResults] = useState<Array<ArticleType>>([]);
    const [hideSearchResults, setHideSearchResults] = useState<boolean>(false);

    const [showMobileSearch, setShowMobileSearch] = useState<boolean>(false);
    const wrapperRef2 = useRef(null);
    const [mobileSearch, setMobileSearch] = useState<string>("");
    const [showMobileSearchResults, setShowMobileSearchResults] = useState<boolean>(false);
    const [mobileSearchResults, setMobileSearchResults] = useState<Array<ArticleType>>([]);
    const [hideMobileSearchResults, setHideMobileSearchResults] = useState<boolean>(false)

    let articles: Array<ArticleType> = posts || [];

    useEffect(() => {
        const scrollDown = "scroll-down";
        const scrollUp = "scroll-up";

        let lastScroll = 0;
        const scrollHandle = () => {
            const navBar = document.getElementById('navbar');
            const currentScroll = window.pageYOffset;

            if (currentScroll < 500) {
                navBar?.classList.remove(scrollDown);
                navBar?.classList.add(scrollUp);
                setHideSearchResults(false);
                setHideMobileSearchResults(false);
            } else {
                if (currentScroll > lastScroll + 3 && !navBar?.classList.contains(scrollDown)) {
                    navBar?.classList.remove(scrollUp);
                    navBar?.classList.add(scrollDown);
                    setHideSearchResults(true);
                    setHideMobileSearchResults(true);
                } else if (currentScroll < lastScroll - 3 && navBar?.classList.contains(scrollDown)) {
                    navBar?.classList.remove(scrollDown);
                    navBar?.classList.add(scrollUp);
                    setHideSearchResults(false);
                    setHideMobileSearchResults(false);
                }
                lastScroll = currentScroll;
            }
        }
        window.addEventListener("scroll", scrollHandle);

        // cleanup this component
        return () => {
            window.removeEventListener('scroll', scrollHandle);
        };
    }, [])


    const handleClickOutside1 = (event: any) => {
        // @ts-ignore
        if (wrapperRef1.current && !wrapperRef1.current.contains(event.target)) {
            setShowHamburgerDD(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside1, true);
        return () => {
            document.removeEventListener('click', handleClickOutside1, true);
        };
    }, []);

    const handleClickOutside2 = (event: any) => {
        // console.log(event.target)
        // @ts-ignore
        if (wrapperRef2.current && !wrapperRef2.current.contains(event.target)) {
            let mobileSearch = document.getElementById('mobile-search');
            mobileSearch?.classList.remove("slide-down");
            mobileSearch?.classList.add("slide-up");
            setShowMobileSearch(false);
        }
    };
    // useEffect(() => {
    //     document.addEventListener('click', handleClickOutside2, true);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside2, true);
    //     };
    // }, []);

    let openMobileSearch = () => {
        let mobileSearch = document.getElementById('mobile-search');

        if (!showMobileSearch) {
            mobileSearch?.classList.add("slide-down");
            mobileSearch?.classList.remove("slide-up");
        } else {
            mobileSearch?.classList.remove("slide-down");
            mobileSearch?.classList.add("slide-up");
        }

        setShowMobileSearch(!showMobileSearch);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchResults(articles
                .filter((article) => {
                    return article.title.toLowerCase().includes(search.toLowerCase());
                }));
            setShowSearchResults(true);
        }, 700);

        return () => {
            setShowSearchResults(false);
            clearTimeout(timer)
        };
    }, [search])

    useEffect(() => {
        const timer = setTimeout(() => {
            setMobileSearchResults(articles
                .filter((article) => {
                    return article.title.toLowerCase().includes(mobileSearch.toLowerCase());
                }));
            setShowMobileSearchResults(true);
        }, 700);

        return () => {
            setShowMobileSearchResults(false);
            clearTimeout(timer)
        };
    }, [mobileSearch])

    return (
        <>
            <div id='navbar' className='header scroll-up fixed z-[70] lg:w-[78vw] w-screen'>
                <div className='flex w-full h-[80px] border-b-[1px] border-[#999999] bg-white relative z-50'>
                    <div className='md:w-[28%] w-[100%] border-r-[1px] border-[#999999]'>
                        <Link href='/humansofnlp'>
                            <div className='h-full w-full flex items-center justify-center cursor-pointer'>
                                <div className='flex flex-col'>
                                    <div className='md:text-[20px] md:leading-[20px] sm:text-[16px] text-[16px] text-[#11256D]'>
                                        Humans of NLP
                                    </div>
                                    <div className='flex items-center text-[#999999] italic md:text-[16px] text-[14px]'>
                                        By <img src="/logo.svg" alt="logo" className='h-[16px] ml-[8px]' />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='md:block hidden w-[20%] border-r-[1px] border-[#999999] hover:bg-[#FAFCFC]' onMouseOut={() => setShowDD(false)} onMouseOver={() => setShowDD(true)}>
                        <Link href='/humansofnlp/articles'>
                            <div className='h-full w-full flex items-center justify-center cursor-pointer md:text-[14px] text-[12px] text-black'>
                                Articles
                            </div>
                        </Link>
                    </div>
                    {
                        showDD && (
                            <div className='absolute top-[79px] left-[calc(28%-1px)] w-[30%] border-[1px] border-[#999999] bg-white' onMouseOut={() => setShowDD(false)} onMouseOver={() => setShowDD(true)}>
                                <div className='md:block hidden h-[50px] border-b-[1px] border-[#999999] hover:bg-[#FAFCFC]'>
                                    <Link href='/humansofnlp/whitepapers'>
                                        <div className='h-full w-full flex items-center justify-center cursor-pointer md:text-[14px] text-[12px] text-black'>
                                            Whitepapers
                                        </div>
                                    </Link>
                                </div>
                                <div className='md:block hidden h-[50px] border-b-[1px] border-[#999999] hover:bg-[#FAFCFC]'>
                                    <Link href='/humansofnlp/casestudies'>
                                        <div className='h-full w-full flex items-center justify-center cursor-pointer md:text-[14px] text-[12px] text-black'>
                                            Case Studies
                                        </div>
                                    </Link>
                                </div>
                                <div className='md:block hidden h-[50px] hover:bg-[#FAFCFC]'>
                                    <Link href='/humansofnlp/catalogues'>
                                        <div className='h-full w-full flex items-center justify-center cursor-pointer md:text-[14px] text-[12px] text-black'>
                                            Catalogues
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                    <div className='md:block hidden w-[20%] border-r-[1px] border-[#999999] hover:bg-[#FAFCFC]'>
                        <Link href='/humansofnlp/podcasts'>
                            <div className='h-full w-full flex items-center justify-center cursor-pointer md:text-[14px] text-[12px] text-black'>
                                Podcasts
                            </div>
                        </Link>
                    </div>
                    <div className='md:w-[32%] w-[100%] sm:flex hidden md:border-none border-r-[1px] border-[#999999] flex items-center justify-center relative'>
                        <input
                            placeholder='Search'
                            type='search'
                            className='border-[1px] border-[#DADADA] sm:text-[14px] text-[12px] md:pl-[14%] sm:pl-[18%] pl-[20%] pr-[10px] h-[40px] rounded-[20px] focus:outline-none w-[85%]'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <img
                            className='w-[15px] absolute md:left-[12%] left-[14%]'
                            src="/search.svg"
                            alt="search icon"
                        />
                    </div>
                    {
                        search.length > 0 ?
                            <div className={`md:w-[32%] w-[calc(50%-40px)] sm:flex hidden duration-500 absolute z-10 md:right-0 right-[80px] flex items-center justify-center ${hideSearchResults ? 'top-[-300px]' : 'top-[61px]'}`}>
                                <div className='w-[85%] sm:text-[14px] text-[12px] border-[1px] border-[#DADADA] bg-white flex justify-center items-center flex-col'>
                                    {
                                        showSearchResults ?
                                            searchResults.length === 0 ?
                                                <div className='h-[40px] flex justify-center items-center'>
                                                    No Posts Found
                                                </div> :
                                                searchResults
                                                    .slice(0, 5).map((post, index) => {
                                                        return (
                                                            <Link href={`/humansofnlp/${post.slug}`}>
                                                                <div className={`px-3 py-2 border-[#DADADA] hover:bg-[#FAFCFC] cursor-pointer text-black ${index === 0 ? '' : 'border-t-[1px]'}`} onClick={() => setSearch("")}>
                                                                    {
                                                                        post.title.length > 65 ? post.title.slice(0, 65) + '...' : post.title
                                                                    }
                                                                </div>
                                                            </Link>
                                                        )
                                                    })
                                            :
                                            <div className='h-[40px] flex justify-center items-center'>
                                                <img className='w-[30px]' src="/loading_pulse.svg" alt="loader" />
                                            </div>
                                    }
                                </div>
                            </div>
                            : ""
                    }

                    <div className='min-w-[80px] sm:hidden md:border-none border-r-[1px] border-[#999999] flex items-center justify-center cursor-pointer hover:bg-[#FAFCFC]' onClick={openMobileSearch} ref={wrapperRef2}>
                        <img
                            className='h-[22px] w-[100%]'
                            src="/search_gray.svg"
                            alt="search icon"
                        />
                    </div>

                    <div className='md:hidden block min-w-[80px] flex items-center justify-center hover:bg-[#FAFCFC] cursor-pointer' ref={wrapperRef1}>
                        <div className='flex items-center justify-center w-full h-full' onClick={() => setShowHamburgerDD(!showHamburgerDD)}>
                            <img
                                className='w-[30px]'
                                src="/hamburger.svg"
                                alt="hamburger icon"
                            />
                        </div>

                        {
                            showHamburgerDD && (
                                <div className='absolute top-[79px] z-10 right-0 w-[50%] border-[1px] border-[#999999] bg-white'>
                                    <div className='h-[50px] border-b-[1px] border-[#999999] hover:bg-[#FAFCFC]'>
                                        <Link href='/humansofnlp/articles'>
                                            <div className='h-full w-full flex items-center justify-center cursor-pointer md:text-[14px] text-[12px] text-black'>
                                                Articles
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='h-[50px] border-b-[1px] border-[#999999] hover:bg-[#FAFCFC]'>
                                        <Link href='/humansofnlp/whitepapers'>
                                            <div className='h-full w-full flex items-center justify-center cursor-pointer md:text-[14px] text-[12px] text-black'>
                                                Whitepapers
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='h-[50px] border-b-[1px] border-[#999999] hover:bg-[#FAFCFC]'>
                                        <Link href='/humansofnlp/casestudies'>
                                            <div className='h-full w-full flex items-center justify-center cursor-pointer md:text-[14px] text-[12px] text-black'>
                                                Case Studies
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='h-[50px] border-b-[1px] border-[#999999] hover:bg-[#FAFCFC]'>
                                        <Link href='/humansofnlp/catalogues'>
                                            <div className='h-full w-full flex items-center justify-center cursor-pointer md:text-[14px] text-[12px] text-black'>
                                                Catalogues
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='h-[50px] hover:bg-[#FAFCFC]'>
                                        <Link href='/humansofnlp/podcasts'>
                                            <div className='h-full w-full flex items-center justify-center cursor-pointer md:text-[14px] text-[12px] text-black'>
                                                Podcasts
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div id='mobile-search' className={`h-[80px] slide-up relative duration-500`} ref={wrapperRef2}>
                    <div className='w-full h-full bg-white border-b-[1px] border-[#999999] flex items-center justify-center relative'>
                        <input
                            placeholder='Search'
                            type='search'
                            className='border-[1px] border-[#DADADA] text-[14px] pl-[15%] pr-[10px] h-[40px] rounded-[20px] focus:outline-none w-[85%]'
                            value={mobileSearch}
                            onChange={(e) => setMobileSearch(e.target.value)}
                        />
                        <img
                            className='w-[15px] absolute md:left-[12%] left-[14%]'
                            src="/search.svg"
                            alt="search icon"
                        />
                    </div>

                    {
                        mobileSearch.length > 0 ?
                            <div className={`w-full duration-500 absolute z-10 flex items-center justify-center ${hideMobileSearchResults ? 'top-[78px]' : 'top-[78px]'}`}>
                                <div className='w-[100%] text-[14px] border-y-[1px] border-[#999999] bg-white flex justify-center items-center flex-col'>
                                    {
                                        showMobileSearchResults ?
                                            mobileSearchResults.length === 0 ?
                                                <div className='h-[40px] flex justify-center items-center'>
                                                    No Posts Found
                                                </div> :
                                                mobileSearchResults
                                                    .slice(0, 5).map((post, index) => {
                                                        return (
                                                            <Link href={`/humansofnlp/${post.slug}`}>
                                                                <div className={`w-full px-3 py-2 border-[#DADADA] hover:bg-[#FAFCFC] cursor-pointer text-black ${index === 0 ? '' : 'border-t-[1px]'}`} onClick={() => setSearch("")}>
                                                                    {
                                                                        post.title.length > 65 ? post.title.slice(0, 65) + '...' : post.title
                                                                    }
                                                                </div>
                                                            </Link>
                                                        )
                                                    })
                                            :
                                            <div className='h-[40px] flex justify-center items-center'>
                                                <img className='w-[30px]' src="/loading_pulse.svg" alt="loader" />
                                            </div>
                                    }
                                </div>
                            </div>
                            : ""
                    }
                </div>
            </div>


        </>
    )
}


export default Navbar;