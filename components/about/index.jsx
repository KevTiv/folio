import React from 'react'
import styles from '../../styles/components/about.module.scss'

const About = () => {
  return (
    <>
      <div className={`${styles.about} flex flex-col justify-center items-start w-full h-[60vh] mx-4`}>
        <h2 className="text-2xl">
          Hello, I&apos;m Kevin
        </h2>
        <h1 className={`${styles.title} text-4xl`}>
          <span className="mr-2 my-2">
            <span>W</span>
            <span>E</span>
            <span>B</span>
          </span>
          <span className="ml-2">
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
        <p className="text-xl">
          Really passionated about cool UI, motions,<br/> and interactions.
        </p>
      </div>
    </>
  )
}

const Title=()=>{
  return(
    <>
      <h1 className={`${styles.title} w-full mt-8`}>
          <span className="mx-1">
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
          </span>
          <span className="mx-1">
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
          </span>
          <span className="mx-1">
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
          </span>
        </h1>
    </>
  )
}
export default About