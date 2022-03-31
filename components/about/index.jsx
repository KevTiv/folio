import Image from 'next/image'
import styles from '../../styles/components/about.module.scss'
import {useEffect, useRef} from 'react'
import {kevImgAnimation} from '../../animation'
const About = () => {

  useEffect(()=>{
    kevImgAnimation();
  },[])
  return (
    <>
      <div className={styles.about}>
        <h2>
          Hello, I&apos;m Kevin
        </h2>
        <div className={styles.mainContainer}>
          <div className={styles.kevImg}>
            <div className={styles.kevImgBG1}></div>
            <div className={styles.kevImgBG2}></div>
            <div className={styles.kevImgBG3}></div>
            <Image src={'/703709CA-328A-4ECF-AB6A-FA12DE471B41_1_201.png'} alt='' layout='fill' aria-label='profile picture'/>
          </div>
          <h1 className={`${styles.titleContainer}`}>
            <span className={styles.title}>
              <span>W</span>
              <span>E</span>
              <span>B</span>
            </span>
            <span className={styles.title}>
              <span>D</span>
              <span>E</span>
              <span>V</span>
              <span>E</span>
              <span>L</span>
              <span>O</span>
              <span>P</span>
              <span>E</span>
              <span>R</span>
            </span>
          </h1>
        </div>
        <>
          Really passionated about cool UI, motions, and interactions.
        </>
      </div>
    </>
  )
}

export default About