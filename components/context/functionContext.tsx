import { createContext } from "react";
interface ContextState {
    activeSidebar: number;
    setActiveSidebar: any;
    activeTabOPM: number;
    setActiveTabOPM: any;
    activeTabCSR: number;
    setActiveTabCSR: any;
    featuresScroll: boolean;
    setFeaturesScroll: any;
    activeTags: Set<string>;
    setActiveTags: any;
    tagFlag: boolean;
    setTagFlag: any;
}


const FunctionContext = createContext({
    activeSidebar: -1,
    setActiveSidebar: () => { },
    activeTabOPM: 0,
    setActiveTabOPM: () => { },
    activeTabCSR: 0,
    setActiveTabCSR: () => { },
    activeTags: new Set(),
    setActiveTags: () => { },
    tagFlag: false,
    setTagFlag: () => { },
} as ContextState);


export default FunctionContext;