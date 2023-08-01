import React from 'react'
import { getAllPostsIds ,getPostData } from '../../lib/posts'
import Layouts from '../../components/Layouts'
import Head from 'next/head'
import styles from '../../style/id.module.css'
const firstPost = ({postData}) => {
  return (
    <Layouts >
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={styles.title}>{postData.title}</h1>
        <div >
          {/* <Date dateString={postData.date} /> */}
          {postData.date}
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layouts>
  )
}

export default firstPost

export  async function getStaticPaths(){
  const paths = getAllPostsIds();

  return {
    paths,
    fallback:false,
  }
}



export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}