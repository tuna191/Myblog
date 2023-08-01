import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../style/layout.module.css'
const name = 'Trần Thế Đông'
const Layouts = ({children , bookmark}) => {
  return (
    <div className={styles.layoutContainer}>
        <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        
        <meta name="og:title" content={name} />
        <meta name="facebook:card" content="summary_large_image" />
      </Head>
        <header className={styles.layoutHeader} >
            {
                bookmark ? (
                    <>
                    
                    <Image
                        alt='image-profile'
                        src= '/Image/profile.png'
                        width={170}
                        height={170}
                        className= {styles.layoutImageProfile}

                    />
                    <h1 className={styles.layoutName}>{name}</h1>
                    </>
                ):(
                    <>
                    <Link href='/'>
                    <Image
                        alt='image-profile'
                        src= '/Image/profile.png'
                        width={170}
                        height={170}
                        className= {styles.layoutImageProfile}

                    />
                    </Link>
                    <Link href='/'>
                    <h1 className={styles.layoutChildren}>{name}</h1>
                    </Link>
                    </>
                )
                
            }
        </header>
        <main>
        {children}
        </main>
        {
            !bookmark && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )
        }
    </div>

    
  )
}

export default Layouts