import type { NextPage } from 'next'
import Game from '../components/game'
import Layout from '../components/Layout/Layout'
import { motion, useAnimationControls } from 'framer-motion';
import { getAllCaseStudies, getAllGhostPosts, getAllPosts } from "../lib/graphcms";
import useInViewport from '../components/hooks/useInView';
import { useEffect, useRef } from 'react';
import Tag from '../components/Tags/Tag';
import Container from './products/Container';

interface Posts {
  posts: any;
  caseStudy: Array<any>;
}

interface TeamProps {
  id: number,
  name: string;
  des:string[],
  content: string[];
  href: string;
}


const About= ({ posts }:any) => {
  return (
    <Layout
      title='DataNeuron - About Us'
      description='Advanced platform for complex data annotations, model training, prediction & lifecycle management.'
      image='/img/dataneuron.jpg'
      posts={posts}
    >
      <Container
      styles='bg-bgGray'
      >
        <div
        className='space-y-12 md:space-y-20 md:mt-10'
        >
          <h1
          className='text-[16px] md:text-[32px] 
          text-text-black font-bold
          w-[80%] md:w-[60%]
          '
          >
          DataNeuron streamlines LLM/NLP workflows with AI automation, simplifying labeling, training/fine-tuning, and deployment.

          </h1>

          <div className='flex justify-between items-start'>
            <div
            className='text-[14px] md:text-[20px] w-[40%] text-text-black
            font-bold
            '
            >Mission . Vision
            </div>
            <div
            className='w-[60%]'
            > 
              <h2
              className='text-text=black 
              text-[14px] md:text-[24px] font-bold
              w-[90%]
              '
              >Simplifying LLM/NLP workflows for global transformation with innovative AI.</h2>
              <p
              className='text-[12px] md:text-[18px] text-text-black
              text-start tracking-[0.05px]'
              >Our mission at DataNeuron is to empower businesses and data scientists with advanced AI automation tools that optimize the entire NLP lifecycle. We are committed to delivering 
              high-quality training data, accelerating model development, and facilitating seamless deployment, ultimately helping our clients unlock the full potential of NLP technology.</p>
            </div>
          </div>

          <div
          className=''
          >
          <h1
          className='text-[14px] md:text-[32px] 
          text-text-black font-bold
          w-[60%]
          '
          >
          Meet the awesome minds behind the innovation

          </h1>
          </div>

          <div>
            <h2
            className='py-2 text-textLightGray 
            text-[14px] md:text-[24px]
            border-b border-b-2 border-textMediumGray
            font-medium 
            '
            >Team</h2>
            <Page2 />
          </div>
        </div>
      </Container>
    </Layout >
  )
}

const Page2: React.FC = () => {

  const team: Array<TeamProps> = [
    {
      id: 0,
      name: 'Bharath Rao',
      des:["Founder/CEO"],
      href: "https://www.linkedin.com/in/bharrao/",
      content: ["Forbes 30 Under 30"]
    },
    {
      id: 1,
      name: 'Rohit Adlakha',
      des:['Executive Advisor'],
      href: "https://www.linkedin.com/in/rohit-adlakha/",
      content: ["Executive Advisor, Ex CIO, CDO & Global, Head of AI at Wipro"]
    },
    {
      id: 2,
      name: 'Anita Ganti',
      des:["Executive Advisor"],
      href: "https://www.linkedin.com/in/rohit-adlakha/",
      content:[ "Executive Advisor, Ex CIO, CDO & Global, Head of AI at Wipro"]
    },
    {
      id: 3,
      name: 'Sanjay Srivastava',
      href: "",
      des:["Executive Advisor"],
      content: ["Chief Digital officer Board member at Genpact"]
    },
    {
      id: 4,
      name: 'Other Members',
      des:["NLP Scientists", "Engineering", "GTM"],
      href: "Executive Advisor",
      content: []
    },
  ]

  const Wrapper: React.FC<{ link: string; children: any; }> = ({ link, children }) => {
    return link.length > 0 ? <a href={link} target={'_blank'}>{children}</a> : <div>{children}</div>
  }
  const Team: React.FC<TeamProps> = ({ id, name, content, href,des }) => {
  
    return <motion.div
     
      className={`flex justify-start w-full`}
    >
      <Wrapper
        link={href}
      >
        <div
          className='flex flex-col
          justify-start items-start space-y-2 
          text-left
          md:h-[15rem] 
          text-[12px] md:text-2xl
         
           duration-300'
           >
          <p 
          className='text-[12px] md:text-[32px] font-semibold 
          text-primaryBlue
          '>
            {name}
          </p>
          {
            des.map((d)=>  <p 
            className='text-[10px] md:text-[24px] font-medium text-text-black
            '>
              {d}
            </p>)
          }
        
          {/* <div
            className='flex flex-col 
            justify-center items-start 
            text-text-black 
             text-[12px] md:text-[16px]
              pr-4
            '
          >
                <p className=''>
                  {content}
                </p>
             
          </div> */}
        </div>
      </Wrapper>
    </motion.div>
  }
  interface SponsorProps {
    src: string;
    id: number;
  }
  const sponsorImages: Array<string> = ["/windrose.png","/bright-phoenix.png", "/inventus.png", "/others.png"];
  const Sponsors: React.FC<SponsorProps> = ({ src, id }) => {
  
    return <motion.img
       
      src={src}
      alt={`${src}__image`}
      className='full mix-blend-darken'
    />
  }
  return <div className=' flex-col flex-reverse 
  justify-center items-start
  py-16 
  space-y-12 bg-bgGray' >
    <div className='space-y-10 '>
      <div className='grid 
      overflow-x-hidden
           grid-cols-3 md:grid-cols-3 lg:grid-cols-3 
          justify-items-center
           xl:gap-8 gap-8 
          lg:w-[60rem] xl:w-[68rem] md:w-[41rem]'
      >
        {
          team.map((element: TeamProps) => {
            return <Team
              key={element.id}
              id={element.id}
              content={element.content}
              href={element.href}
              des={element.des}
              name={element.name}
            />
          })
        }

      </div>
    </div>
    <div >
      <h2 className='text-start text-textLightGray
       text-start 
       
       text-[14px] md:text-[24px] py-2  font-medium'>
        Investors</h2>

    <div className='
    border-t border-b border-t-2 border-b-2
    grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-0 justify-center items-center flex-wrap  '>
      {
        sponsorImages.map((src: any, index: number) => {
          return <Sponsors
            id={index}
            src={src}
          />

        })
      }
    </div>
    </div>
  </div>
}
export default About;
