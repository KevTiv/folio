import Image from 'next/image'
import styles from '../../../styles/components/project.module.scss'
import {useState, useRef} from 'react'
import {revealProject, animateSpanClick} from '../../../animation'

const Railway = ()=>{
    const [isProjectBodyOpen, setIsProjectBodyOpen] = useState(false);
    let projectRef = useRef(null);
    let projectImgRef = useRef(null);

    return(
        <>
            <div className={styles.projectContainer} 
                onClick={()=>{
                    setIsProjectBodyOpen(!isProjectBodyOpen)
                    revealProject(projectRef, projectImgRef, isProjectBodyOpen)
                    animateSpanClick(isProjectBodyOpen, '.project_railwayClick__dG3zw::before')
                }}
            >
                <div className={styles.titleContainer}>
                    <h2 className={styles.projectTitle}>
                        Railway
                    </h2>
                    <span className={styles.railwayClick}></span>
                </div>
                <div className={styles.img} ref={projectImgRef}>
                    <Image className={"projectImg"} src={'/img/railway/railway_1.webp'} alt='railway img' width='256' height='256' layout='responsive'/> 
                </div>
                <div ref={projectRef} className={styles.projectContent}>
                    <div className={styles.links}>
                        <p>
                            <a href="https://railway-copy.vercel.app" target="_blank" rel="noopener noreferrer">Go to site</a>
                        </p>
                        <p >
                            <a href="https://github.com/KevTiv/railway" target="_blank" rel="noopener noreferrer">Repository</a>
                            
                        </p>
                    </div>
                    <h3>Description</h3>
                    <p>
                        Copy of the railway website found on awwwards within a set timeline.
                    </p>
                    <h3>Goal</h3>
                    <ul>
                        <li>
                            Recreate the railway website layout and animation within a day.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Railway;