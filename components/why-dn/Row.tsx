import { ReactNode } from "react"
import Gallery from "./gallery"

interface Content {
    id?:string,
    images: string[],
    heading: string,
    content: string
}
interface Props {
    children:ReactNode
    height?:"sm" | "lg"
}



export const RowItem = ({content,reverse}:{content:Content,reverse:boolean})=>{

    return (  <div 
      id={content.id}  
        className={`flex
    flex-col md:flex-row
    items-center justify-between 
    
    
     ${reverse && "md:flex-row-reverse"}
    `}>

    <ImageContainer
    images={content.images}
    />

    <div className={`w-full md:w-[40%] space-y-4 mt-10 px-2 
    ${reverse?"md:ml-24":"md:mr-20"}`}>
        <h2 className="text-primaryBlue 
        text-[18px] md:text-[2.2vw] lg:text-[24px] font-bold">
            {content.heading}
        </h2>
        <p
            className="text-textGray whitespace-pre-wrap
             text-sm md:text-[1.4vw] 
              lg:text-[16px]"
        >
            {content.content}
        </p>
    </div>
</div>)

} 

export const ImageContainer = ({images}:{images:string[]}) => {
    return (<div
        className="w-full md:w-1/2 h-[30vh] md:h-[50vh] max-h-[426px] 
        bg-white border-4
        flex justify-center items-center 
        rounded-md
        "
    >
        <Gallery images={images} />
    </div>)
}
const Row = ({children,height="lg"}:Props) => {

    return (<div
    
        className={`bg-bgGray my-4
    flex items-center justify-center
    ${height=="lg"?"h-[100vh] max-h-[880px]":"h-[70vh] max-h-[540px]"} 
    w-full relative`}
    >
        <div className="hidden md:block absolute h-[90%] w-[100%]
                bg-[#EFEFEF] rounded-md z-[1]  "
        />

        <div className="md:place-self-start w-full z-2 absolute z-[2] space-y-4">
          {children}
        </div>

    </div>)

}

export default Row;