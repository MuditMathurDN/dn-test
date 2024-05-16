import GhostContentAPI from '@tryghost/content-api';
import https from 'https';
import moment from 'moment';

const httpsAgent = new https.Agent({
  rejectUnauthorized:false
});

async function fetchAPI(query, {
  variables,
  preview
} = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${preview
        ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
        : process.env.GRAPHCMS_PROD_AUTH_TOKEN
        }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    // console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID);
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllPosts() {
  let arr = {
    posts: []
  }
  return arr;
  // const data = await fetchAPI(
  //   ` {
  //             posts {
  //                 id
  //                 title
  //                 slug
  //                 coverImage {
  //                     id
  //                     fileName
  //                     mimeType
  //                     width
  //                     height
  //                     size
  //                     url
  //                 },
  //                 postType
  //             }
  //         }
  //     `,
  //   {
  //     preview: false,
  //     variables: {
  //       stage: "PUBLISHED",
  //     },
  //   }
  // );

  // console.log(data);


  // const api = new GhostContentAPI({
  //   url: 'https://official-website-test-docker-ghost-cms.azurewebsites.net',
  //   key: '2f3860be1ed15cb79212de4b17',
  //   version: 'v5'
  // });

  // // fetch 5 posts, including related tags and authors
  // api.posts.browse()
  // .then((posts) => {
  //     posts.forEach((post) => {
  //         console.log(post.title);
  //     });
  // })
  // .catch((err) => {
  //     console.error(err);
  // });

  // return data;
}

export async function getAllCaseStudies() {
  let arr = {
    posts: []
  }
  return arr;
  // const data = await fetchAPI(
  //   ` {
  //             posts {
  //                 id
  //                 title
  //                 slug
  //                 postType
  //                 reductionInTime
  //                 reductionInCost
  //                 reductionInParagraphs
  //                 roi
  //                 overview
  //               }
  //         }
  //     `,
  //   {
  //     preview: false,
  //     variables: {
  //       stage: "PUBLISHED",
  //     },
  //   }
  // );

  // return data;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
        {
          posts {
            slug
          }
        }
      `);
  return data.posts;
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
        query PostBySlug($slug: String!, $stage: Stage!) {
          post(stage: $stage, where: {slug: $slug}) {
            title
            slug
            content {
              html,
              text,
              raw
            }
            date
            ogImage: coverImage {
              url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}}),
            }
            coverImage {
              url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
            }
            author {
              name
              picture {
                url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
              }
            }
          }
          morePosts: posts(orderBy: date_DESC, first: 2, where: {slug_not_in: [$slug]}) {
            title
            slug
            excerpt
            date
            coverImage {
              url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
            }
            author {
              name
              picture {
                url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
              }
            }
          }
        }
      `, {
      preview,
      variables: {
        stage: preview ? "DRAFT" : "PUBLISHED",
        slug,
      },
    }
  );
  return data;
}

export async function createContact(name, email, organisation, msg) {
  const data = await fetchAPI(
    `mutation {
              createContact(data : {name : "Jay" , emailId : "test@test.com" , organisation : "test org" , message : "thisi is a tst msg"}){
                id,
                name,
                emailId
              }
            }`
  );
  return data;
}

export async function getAllGhostPosts() {
  const api = new GhostContentAPI({
    url: process.env.GHOST_CMS_URL,
    key: process.env.GHOST_CMS_KEY,
    version: "v5.0"
  });

  let allPosts = await api.posts.browse({
    include: 'tags',
    fields:`id,title,feature_image,slug,published_at,featured,updated_at`
  });
  console.log("=== all posts ===",allPosts[0]);

  let filteredPosts = allPosts.map(post => {
    return {
      id: post.id,
      title: post.title,
      image: post.feature_image,
      slug: post.slug,
      date: moment(post.published_at).format("DD MMMM, YYYY"),
      type: post.tags.map(tag => {
        return tag.name
      }).filter(tag => {
        return tag === "Whitepaper" || tag === "Case Study" || tag === "Catalogue"
      }).toString(),
      tags: post.tags.map(tag => {
        return tag.name
      }).filter(tag => {
        return tag !== "Whitepaper" && tag !== "Case Study" && tag !== "Catalogue"
      }),
      featured: post.featured,
      // content: post.html,
      // writtenBy: post.primary_author.name || "DataNeuron Team",
      // readingTime: post.reading_time,
      // metaDescription: post.meta_description,
      // metaTitle: post.meta_title,
      // og_image:post.og_image
    }
  });

  return filteredPosts;
}

export async function getAllGhostTags() {
  const api = new GhostContentAPI({
    url: process.env.GHOST_CMS_URL,
    key: process.env.GHOST_CMS_KEY,
    version: "v5.0"
  });
  
  let allTags = await api.tags.browse({ include: 'count.posts', order: 'count.posts desc' });

  let filteredTags = allTags
  .map(tag => {
    return {
      id: tag.id,
      name: tag.name,
      count: tag.count.posts
    }
  })
  .filter(tag => {
    return tag.name !== "Whitepaper" && tag.name !== "Case Study" && tag.name !== "Catalogue"
  });

  // console.log(filteredTags);

  return filteredTags;
}

export async function getGhostPostWithSlug(slug) {
  const api = new GhostContentAPI({
    url: process.env.GHOST_CMS_URL,
    key: process.env.GHOST_CMS_KEY,
    version: "v5.0"
  });

  let post = await api.posts.read({
    slug: slug,
    include: 'tags,authors',
    fields:`id,title,feature_image,slug,published_at,primary_author,
    featured,html,
    meta_description,meta_title,og_image`
  })

  // console.log("=== single post ===",post)
  
  let filteredPost = {
    id: post.id,
    title: post.title,
    image: post.feature_image,
    slug: post.slug,
    date: moment(post.published_at).format("DD MMMM, YYYY"),
    type: post.tags.map(tag => {
      return tag.name
    }).filter(tag => {
      return tag === "Whitepaper" || tag === "Case Study" || tag === "Catalogue"
    }).toString(),
    tags: post.tags.map(tag => {
      return tag.name
    }).filter(tag => {
      return tag !== "Whitepaper" && tag !== "Case Study" && tag !== "Catalogue"
    }),
    featured: post.featured,
    content: post.html,
    writtenBy: post.primary_author.name || "DataNeuron Team",
    // readingTime: post.reading_time,
    metaDescription: post.meta_description,
    metaTitle: post.meta_title,
    og_image:post.og_image
  }


  return filteredPost;
}