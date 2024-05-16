import type { NextPage } from 'next'
import Layout from '../components/Layout/Layout'
import PrivacyPage from '../components/PrivacyPage/index'

import { getAllCaseStudies, getAllPosts } from "../lib/graphcms";


// @ts-ignore
export async function getStaticProps({ params, preview = false }) {
  let appPosts = await getAllPosts();
  let caseStudyPosts = await getAllCaseStudies();

  return {
    props: {
      posts: appPosts.posts || [],
      caseStudy: caseStudyPosts.posts || []
    },
  };
}
interface Posts {
  posts: any;
  caseStudy: Array<any>;
}
const Privacy: NextPage<Posts> = ({ posts, caseStudy }) => {
  return (
    <Layout
      title='DataNeuron'
      description='Advanced platform for complex data annotations, model training, prediction & lifecycle management.'
      image='/img/dataneuron.jpg'
      posts={posts}
      caseStudy={caseStudy}
    >
      <PrivacyPage />
    </Layout>
  )
}

export default Privacy
