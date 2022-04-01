import Image from 'next/image'
import styles from '../../../styles/components/project.module.scss'
import {useState, useRef} from 'react'
import {revealProject, animateSpanClick} from '../../../animation'

const WeatherTracker = ()=>{
    const [isProjectBodyOpen, setIsProjectBodyOpen] = useState(false);
    let projectRef = useRef(null);
    let projectImgRef = useRef(null);
    return(
        <>
            <div className={styles.projectContainer} 
                onClick={()=>{
                    setIsProjectBodyOpen(!isProjectBodyOpen)
                    revealProject(projectRef, projectImgRef, isProjectBodyOpen)
                    animateSpanClick(isProjectBodyOpen, '.project_weatherTrackerClick__KeIe_:before')
                }}
            >
                <div className={styles.titleContainer}>
                    <h2 className={styles.projectTitle}>
                        Nasa Weather Tracker
                    </h2>
                    <span className={styles.weatherTrackerClick}></span>
                </div>
                <div className={styles.img} ref={projectImgRef}>
                    <Image src={'/img/nasaWeatherTracker/nasaWeatherTracker_1.webp'} alt='Weather tracker img' width='256' height='256' layout='responsive'/> 
                </div>
                <div ref={projectRef} className={styles.projectContent}>
                     <div className={styles.links}>
                        <p>
                            <a href=" https://kevtiv.github.io/weather_events_tracker/" target="_blank" rel="noopener noreferrer">Go to site</a>
                            
                        </p>
                        <p>
                          <a href="https://github.com/KevTiv/weather_events_tracker" target="_blank" rel="noopener noreferrer">Repository</a>
                            
                        </p>
                    </div>
                    <h3>Description</h3>
                    <p>
                        Web app built to take advantage of the public Nasa API that tracks weather 
                        events such as wildfire, marine storms, and active volcanoes across the globe.
                    </p>
                    <h3>Goal</h3>
                    <ul>
                        <li>
                            Create an application that could update an end-user with locations of severe 
                            weather events such as wildfire, maritime storms, and active volcanoes.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )

}

export default WeatherTracker;