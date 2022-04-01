import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import Navbar from '../components/navbar'
import About from '../components/about'
import Project from '../components/project'
import Contact from '../components/contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Tivert Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <About />
        <Project />
      </main>
      <Contact />
      <footer className={styles.footer}>
        <h1>
          FOOTER
        </h1>
      </footer>
    </div>
  )
}
