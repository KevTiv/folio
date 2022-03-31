import Image from 'next/image'
import styles from '../../../styles/components/project.module.scss'

const BugTracker = ()=>{

    return(
        <>
            <div>
                <div className={styles.titleContainer}>
                    <h2 className={styles.projectTitle}>
                        Bug Tracker
                    </h2>
                    <span className={styles.arrow}></span>
                    {/* <Image className={"projectImg"} src={'/img/bugTracker/bugTracker_1.webp'} alt='Bug Tracker landing page image' width='256' height='256' layout='responsive'/>  */}
                </div>
                <div>
                     <div>
                        <p>
                            <a href="https://bug-tracker-nine.vercel.app" target="_blank" rel="noopener noreferrer">Go to site</a>
                        </p>
                        <p>
                            <a href="https://github.com/KevTiv/bug-tracker" target="_blank" rel="noopener noreferrer">Repository</a>
                        </p>
                    </div>
                    <h3>Description</h3>
                    <p>
                        The is web application project was created to produce an easy online solution for a team to track bugs in their 
                        codebase. The project has reached its MVP (minimum viable product) goal of producing a product that can store bug 
                        information, such as name, description, resolved status, priority status, date of creation, and if available a screenshot 
                        image in a PostgreSQL database. The project was built using Typescript. The front end was built using NextJS, Sass, and TailwindCSS. 
                        The back end was built with PrismaJS as the ORM (Object-relational mapping) tool used to communicate with a PostgreSQL 
                        database hosted on the Supabase platform. For this application, I took advantage of the NextJS getServerSideProps and API 
                        functionality to build the bridge between the client-side and the backend database.
                    </p>
                    <h3>Goal</h3>
                    <p>
                        - Create a product that can store bugs information for a team
                        - Keep track of a bug (bug name, description, resolved status, priority author, images), update or delete bugs if necessary (update and delete action are only allowed to user privileged).
                        - Store and assign new user info and privilege when new successful sign-in has been done through Supabase GitHub Auth.
                    </p>
                </div>
            </div>
        </>
    )
}

export default BugTracker;