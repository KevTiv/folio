import styles from '../../styles/components/nav.module.scss'

import {useRef, useState} from 'react'
import {revealMenu} from '../../animation'

const Navbar = () => {
    let navRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
        <nav ref={navRef} className={styles.nav}>
            <div className={`${styles.nameContainer} ${isMenuOpen ? styles.beforeElemBg : null}`}>
                <span className={styles.name}>
                    <span>K</span>
                    <span>E</span>
                    <span>V</span>
                    <span>I</span>
                    <span>N</span>
                </span>
                <span className={styles.name}>
                    <span>T</span>
                    <span>I</span>
                    <span>V</span>
                    <span>E</span>
                    <span>R</span>
                    <span>T</span>
                </span>
            </div>
            <div>
                <span className={`${styles.menu} ${styles.menuPseudoElem}`}
                    onClick={()=>{
                        setIsMenuOpen(!isMenuOpen);
                        revealMenu(isMenuOpen, navRef);
                    }}
                >
                    <>
                        {isMenuOpen ? 
                            <span>CLOSE</span> : <span>MENU</span>
                        }
                    </>
                </span>
                <ul className={styles.menuOption}>
                    <li>ABOUT</li>
                    <li>PORTFOLIO</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar