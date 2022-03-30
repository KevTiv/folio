import styles from '../../styles/components/nav.module.scss'

import {useRef, useState} from 'react'
import {revealMenu} from '../../animation'

const Navbar = () => {
    let navRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
        <nav ref={navRef} className={`${styles.nav} relative z-50 h-12 w-full`}>
            <div className="fixed z-50 top-0 left-4 my-4 font-bold text-2xl">
                <span className={`mx-1 ${styles.name}`}>
                    <span>K</span>
                    <span>E</span>
                    <span>V</span>
                    <span>I</span>
                    <span>N</span>
                </span>
                <span className={`mx-1 ${styles.name}`}>
                    <span>T</span>
                    <span>I</span>
                    <span>V</span>
                    <span>E</span>
                    <span>R</span>
                    <span>T</span>
                </span>
            </div>
            <div>
                <span className={`${styles.menu} fixed top-0 right-4 text-lg py-5 z-50 cursor-pointer`}
                    onClick={()=>{
                        setIsMenuOpen(!isMenuOpen);
                        revealMenu(isMenuOpen, navRef);
                    }}
                >
                    <>
                        {isMenuOpen ? 
                            <span className="font-medium">CLOSE</span> : <span>MENU</span>
                        }
                    </>
                </span>
                <ul className={`hidden absolute top-0 left-0 w-full h-[100vh] z-10 text-4xl ${styles.menuOption}`}>
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