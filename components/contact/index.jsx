import Image from 'next/image'
import styles from '../../styles/components/contact.module.scss'

const Contact = () => {
  return (
    <>
        <div className={styles.contact}>
            <h2 className={styles.titleSection}>
                Contact
            </h2>
            <div className={styles.kevImg}>
                <div className={styles.imgBg}></div>
                <Image src={'/image.png'} alt='' layout='fill' aria-label='profile picture'/>
            </div>
            <p>
                I&apos;m actively looking for new opportunities, let&apos;s talk!
            </p>
            <div className={styles.socials}>
                <a className={styles.socialLink} href="mailto:tivertc.kevin@outlook.com" target="_blank" rel="noopener noreferrer">Email</a>
                <a className={styles.socialLink} href="https://linkedin.com/in/kevin-tivert/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className={styles.socialLink} href="https://github.com/KevTiv" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    </>
  )
}

export default Contact