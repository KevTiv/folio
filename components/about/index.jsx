import Image from 'next/image'
import styles from '../../styles/components/about.module.scss'
import {useEffect, useRef} from 'react'
import {sunBurstAnimation} from '../../animation'
const About = () => {

  useEffect(()=>{
    sunBurstAnimation();
  },[])
  return (
    <>
      <div className={styles.about}>
        <h2>
          Hello, I&apos;m Kevin
        </h2>
        <div className={styles.mainContainer}>
          <div className={styles.kevImg}>
            {/* <Image src={'/703709CA-328A-4ECF-AB6A-FA12DE471B41_1_201.png'} alt='' layout='fill' aria-label='profile picture'/> */}
          </div>
          <div>
            <h1 className={`${styles.titleContainer}`}>
              <div className={styles.titleAnimationBox1}></div>
              <div className={styles.titleAnimationBox2}></div>
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
          
        </div>
        <p>
          I&apos;m really passionated about cool UI, motions, and web technologies.
          I love working at the intersection of creativity and user friendly interfaces.
          <br/>
          I focus on frontend development but I can also do backend development.
          <br/>
          What I love the most about web development is that there is always something new to learn.
          <br/>
          When I&apos;m not building or exploring new web experiences, I&apos; probably watching F1, football, or walking my dogs.
        </p>
      </div>
    </>
  )
}

export default About