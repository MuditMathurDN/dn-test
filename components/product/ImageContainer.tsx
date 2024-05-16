
export type featureType ={
    title:string,
    para:string,
    imageUrl:string
  }

const ImageContainer = ({reverse,data}:any)=>{
    return (<div className={`flex flex-col  lg:flex-row w-full py-[40px]
                 gap-12 md:gap-24 lg:px-12 
                 ${reverse?"lg:flex-row-reverse ":""}`}>
  
      <div className='w-full md:w-[48%] space-y-5 flex flex-col justify-center'>
        <h1
        className='text-2xl md:text-[28px] font-semibold 
                   '
        >
          {data.title}</h1>
  
        <p
        className='text-lg md:text-lg lg:text-[18px]  md:text-justify tracking-[-0.055rem] text-black'
        >{data.para}</p>
      </div>
  
      <div className='md:w-[45%]'>
        <img 
        src={data.imageUrl}
        className='w-full max-h-[70vh]'
        />
      </div>
  
    </div>)
  }

  export default ImageContainer;