import type { NextPage } from 'next'
import Layout from '../components/Layout/Layout'
import { useState } from 'react';
import { useFormik } from "formik";
interface Values {
  email: string;
  name: string;
  organisation: string;
  message: string;
}





import { getAllCaseStudies, getAllPosts, getAllGhostPosts } from "../lib/graphcms";
// import InputField from '../components/Controls/InputField';



interface Posts {
  posts: any;
  caseStudy: Array<any>;
}

interface InputProps{
  placeholder?:string;
  type?:string,
  value:string,
  onChange:any,
  onBlur:any,
  name:string,
  required?:boolean

}

const Input = ({
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  required=true,
  name
}:InputProps)=>{

  return (<input 
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={onChange}
    onBlur ={onBlur}
    name={name}
    required
    className='focus:outline-none py-4 
    border-b border-black blur:invalid:border-red
    bg-bgGray '
  
  />)

}


const Contact: NextPage<Posts> = ({ posts }) => {

  const Form = () => {
    const [showCard, setshowCard] = useState(false);
    const [sending, setSending] = useState(false);

    let handleSubmit = async (values: Values) => {
      try {
        setSending(true);
        let data = await fetch("/api/createContact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            organisation: values.organisation,
            emailId: values.email,
            messsage: values.message,
            seen_status: "UNREAD"
          }),
        });
        // console.log(data);
        setSending(false);
        setshowCard(true);
      } catch (err) {
        console.error(err);
        setSending(false);
      }
    };

    let validate = (values: Values) => {
      let regEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      let errors: Partial<Values> = {};

      if (!values.email) {
        errors.email = "Required";
      }
      else if (!regEmail.test(values.email)) {
        errors.email = "Please enter a valid Email Id";
      }

      if (!values.organisation) {
        errors.organisation = "Required";
      }

      if (!values.message) {
        errors.message = "Required";
      }
      if (!values.name) {
        errors.name = "Required";
      }
      return errors;
    };

    let formik = useFormik<Values>({
      initialValues: {
        email: "",
        name: "",
        organisation: "",
        message: "",
      },
      validate,
      onSubmit: handleSubmit,
    });
    return <>
      {
      

          <form
            className=' flex-col flex justify-center
                      md:px-8      
                      py-12
                      rounded-xl 
                      md:h-[35rem]
                      text-sm text-[#292C33]  
                      space-y-4
                      w-full md:w-3/4
                      '>
            <h1
            className='font-bold 
            h-full
            leading-[8vh]
            text-[40px] md:text-[5vw] lg:text-[64px] 
            text-start
            md:my-12 w-full
            '
            >Contact Us</h1>
            <p
            className='
            text-[16px] md:text-[20px] text-start'
            >Reach out to us today and discover how DataNeuron can transform your LLM data curation and fine-tuning workflows.</p>

            <Input 
            placeholder='Name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name={"name"}

            />
           
            <Input 
            placeholder='Email Address'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            name={"email"}
            />

            <Input 
            placeholder='Organisation Name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name={"organisation"}
            />
            
 

            <button
              className={`self-center lg:self-start 
        text-center mt-4
        py-2
        rounded-md
        bg-primaryBlue

        text-white
        w-full
        border-2 border-primaryBlue text-primaryBlue
        ${formik.isSubmitting ? "cursor-default" : " cursor-pointer hover:bg-primaryBlue  hover:text-white "}
        duration-300
        flex justify-center items-center
        `}
              disabled={formik.isSubmitting}
              onClick={() => {
                formik.submitForm();
              }}
            >
              {formik.isSubmitting ?
                <img className='mx-auto w-6   text-primaryBlue' src='/loading_white.svg' alt='loading' /> : <div className='my-auto  '>Send Message</div>
              }
            </button>
          </form>
      }
    </>
  }

  return (
    <Layout
      title='DataNeuron'
      description='Advanced platform for complex data annotations, model training, prediction & lifecycle management.'
      image='/img/dataneuron.jpg'
      posts={posts}
    >
      

        <div className='flex 
        flex-col md:flex-row
        justify-between items-center 
        md:py-12 gap-12'>

          <div className='
          w-3/4
          md:w-1/2
          flex justify-center'>
            <Form />
          </div>

          <div
            className='flex flex-col 
            justify-center items-start
            space-y-7 
            py-12 md:py-2
            px-12 md:px-32
            h-full md:h-[70vh] 
            text-start text-white  md:text-lg 
            bg-primaryBlue
            
            '
          >
            <div
              className='flex flex-col w-1/2
              '>
              <img src="mail_icon.svg" 
              className='w-6 h-6'
              alt="mail_icon" />
              <div>
              mail@dataneuron.ai
              </div>
            </div>
            <div
              className='flex flex-col items-start
              '>
              <img src="location_icon.svg" 
              alt="location_icon"
              className='w-6 h-6' />
              <div>
              Office # 16, M-Block,<br /> Amity University, Sector 125,
              Noida - 201301
              </div>
            </div>
            <div
              className='flex flex-col
               
              '
            >
              <img src="/location_icon.svg" 
              alt="location_icon"
              className='w-6 h-6' />
              <div>
                HQ - 355 Bryant Street,<br /> Suite # 403, San Francisco CA 94107
              </div>
            </div>
          </div>
        </div>

     
      
    </Layout>
  )
}

export default Contact;