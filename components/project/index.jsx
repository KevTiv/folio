import styles from '../../styles/components/project.module.scss'

import BugTracker from './projectsSelection/bugTracker'
import WeatherTracker from './projectsSelection/nasaWeatherTracker'
import Railway from './projectsSelection/railway'
import WineGrader from './projectsSelection/wineTracker'

const Project = () => {
  return (
    <>
        <div className={styles.project}>
            <h2 className={styles.titleSection}>
                Projects
            </h2>
            <div>
                <BugTracker/> 
                <Railway/>
                <WeatherTracker/>
                <WineGrader/> 
            </div>
        </div>
    </>
  )
}

export default Project