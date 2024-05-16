import React from 'react'

export default function ({label,onChange,value,name,min,max,disabled,required}:any) {
  return (
    <div  className='relative w-full InputBox  '>
        <input
        type="number"
        min={min}
        max={max}
        name={name}
        className='
        inputField w-full py-2 px-2 peer text-lg  
        border-2 border-[#FAFAFA] rounded-md 
        outline-none bg-[#2a2a2a] z-2 text-white'
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        />
        <span className='InputLabel absolute text-sm md:text-md text-white text-red-400
                        left-2 px-2
                        duration-500 peer-focus:opacity-100  -translate-y-2   bg-[#2a2a2a]
                        peer-invalid:bg-[#fc3503] z-0
                        '>{label}</span>        
    </div>
  )
}
