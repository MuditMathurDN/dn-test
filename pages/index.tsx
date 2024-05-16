import type { NextPage } from 'next'
import Layout from '../components/Layout/Layout'
import HomePage from '../components/HomePage/index'
import { getAllCaseStudies, getAllGhostPosts } from "../lib/graphcms";

// // @ts-ignore
// export async function getStaticProps({ params, preview = false }) {
//   let appPosts = await getAllGhostPosts();
//   let caseStudyPosts = await getAllCaseStudies();

//   return {
//     props: {
//       posts: appPosts || [],
//       caseStudy: caseStudyPosts.posts || []
//     },
//   };
// }

interface Posts {
  posts: any;
  caseStudy: Array<any>;
}
const Home: NextPage<Posts> = ({ posts, caseStudy }) => {
  // console.log(caseStudy);

  return (
    <Layout
      title='DataNeuron'
      description='Platform for complex data annotations, model creation & customizations, fine-tuning and AI lifecycle management.'
      image='/logo.png'
      posts={posts}
      caseStudy={caseStudy}
    >
      <HomePage posts={posts} />
    </Layout>
  )
}


export default Home;