import React from 'react'

type Props = {
    content:string,
    styles?:string
}

function Tag({content,styles}: Props) {
  return (
    <div
    className={`w-[180px] md:w-[250px] !text-[14px]  ${styles}`}
    >
      <div  className='bg-[#EAEAEA] 
              rounded-sm md:rounded-s,
              w-full py-1 md:py-[5px] px-1
               flex items-center justify-center
                tracking-[-0.03rem]
                text-[10px] md:text-[12px] 
                text-[#777777] uppercase 
                '>{content}</div>
      </div>
  )
}

export default Tag