//3rd Party Modules
import React from 'react';
import Corousal from '../Corousal'
import Tag from '../Tags/Tag';


//Main Component
const Page6: React.FC = () => {

    
   

    return (
        <section id="features" className=' md:py-24 py-16 md:px-24 px-4 md:px-12 bg-white'>
           <Tag content='Features that set us apart'
           styles=''
           />
            <Corousal />
            
        </section>
    )
}

export default Page6;