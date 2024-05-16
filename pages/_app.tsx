import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import NextProgress from "next-progress";
import NextNProgress from "nextjs-progressbar";
import Cookie from '../components/Layout/Cookie';
import { useState } from 'react';
import FunctionContext from '../components/context/functionContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [activeSidebar, setActiveSidebar] = useState<number>(-1);
  const [activeTabOPM, setActiveTabOPM] = useState<number>(0);
  const [activeTabCSR, setActiveTabCSR] = useState<number>(0);
  const [featuresScroll, setFeaturesScroll] = useState<boolean>(false);
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [tagFlag, setTagFlag] = useState<boolean>(false);

  return <>
    <NextNProgress
      color="#11256D"
      startPosition={0.1}
      stopDelayMs={0}
      height={3}
      showOnShallow={false}
      options={{ showSpinner: false, delay: 300 }}
    />
    {/* <Cookie /> */}
    <FunctionContext.Provider value={{ activeSidebar: activeSidebar, setActiveSidebar: setActiveSidebar, activeTabOPM: activeTabOPM, setActiveTabOPM: setActiveTabOPM, activeTabCSR: activeTabCSR, setActiveTabCSR: setActiveTabCSR, featuresScroll:featuresScroll, setFeaturesScroll:setFeaturesScroll, activeTags: activeTags, setActiveTags: setActiveTags, tagFlag: tagFlag, setTagFlag: setTagFlag }}>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Component {...pageProps} />
    </FunctionContext.Provider>
  </>
}

export default MyApp
