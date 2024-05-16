import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode,
    styles?:string
}

function Container({children,styles}: Props) {
  return (
    <section className={`sm:min-h-[100vh] xl:min-h-[720px] 2xl:min-h-[900px] snap-center  flex flex-col justify-start 
      w-screen  px-4 md:px-12 py-12 max-w-[1600px] mx-auto ${styles} `}>
        {children}
    </section>
  )
}

export default Container