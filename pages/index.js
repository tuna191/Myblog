import Image from 'next/image'
import Layouts from '../components/Layouts'
import Link from 'next/link'
import styles from '../style/home.module.css'
import  {getSortedPostData}  from '../lib/posts'

const introductionEn = "Ladies and Gentlemen, My name is Đông(Tuna). I'm a student at the Industrial University of Ho Chi Minh City. My wish is to become a smart developer.You can contact me on";
const description = "In my blog contains my projects and experiences that I collect"
export default function Home({allPostData}) {
  return (
  
   
    <Layouts bookmark>
      <h3 className={styles.introdution} >{`${introductionEn} `}<a className={styles.introdutionLink} href='https://www.facebook.com/profile.php?id=100009605222356' target='_blank'>Facebook</a></h3>
      <h3 className={styles.description}>{description}</h3>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>My Project</h2>
        <span>(Project that I learned)</span>
        <ul>
          <li className={styles.sectionContent}>
           <span>--{'>'} <a href='https://web-space-eosin.vercel.app/' target="_blank" className='text-2xl pb-1 text-[#0070f3]'>Web Space</a></span>
            <h4 className="text-[19px] ">Technology:</h4>
            <ul className='list-disc'>
              <li className='text-sm text-black'>React</li>
              <li className='text-sm text-black'>React router</li>
            </ul>
          </li>
          <li className={styles.sectionContent}>
           <span>--{'>'} <a href='https://show-room-cars.vercel.app/' target="_blank" className='text-2xl pb-1 text-[#0070f3]'>Showroom Car</a></span>
            <h4 className="text-[19px] ">Technology:</h4>
            <ul className='list-disc'>
              <li className='text-sm text-black'>Next Js</li>
              <li className='text-sm text-black'>Headless Ui</li>
              <li className='text-sm text-black'>TailWind Css</li>

            </ul>
          </li>
          <li className={styles.sectionContent}>
           <span>--{'>'} <a href='https://ecommerce-appc-store-mazw2ob5x-tuna191.vercel.app/ ' target="_blank" className='text-2xl pb-1 text-[#0070f3]'>Ecommerce Store(<span className='text-xs ml-1 text-black'>Website fullstack</span>)</a></span>
            <h4 className="text-[19px] ">Technology:</h4>
            <ul className='list-disc'>
              <li className='text-sm text-black'>Next Js</li>
              <li className='text-sm text-black'>Headless Ui</li>
              <li className='text-sm text-black'>TailWind Css</li>
              <li className='text-sm text-black'>Prisma</li>
              <li className='text-sm text-black'>Planetscale DB</li>
              <li className='text-sm text-black'>Shadcn Ui </li>
              <li className='text-sm text-black'> Stripe</li>
              <span>....</span>



            </ul>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>My Blog</h2>
        <ul>
            {
              allPostData.map(({id,title,date}) =>(
                <li className={styles.sectionContent} key={id}>
                  <Link href={`/posts/${id}`} className={styles.sectionText}>{title}</Link>
                  <small className={styles.sectionDate}>{date}</small>
          </li>
              ))
            }
        </ul>
      </section>
    </Layouts> 

    
  )
}

//static generation functions

export async function getStaticProps(){
  const allPostData = getSortedPostData();

  return {
    props:{
      allPostData
    }
  }
}





