import gsap from 'gsap'
import CSSRulePlugin from 'gsap/dist/CSSRulePlugin'

export const revealMenu = (isMenuOpen, navRef)=>{
    gsap.registerPlugin(CSSRulePlugin)
    const mobileMenu = navRef.current.querySelector('ul.nav_menuOption__qnYjP')
    const fullName = navRef.current.querySelectorAll('span.nav_name__S4n8D')
    const menu = navRef.current.querySelector('span.nav_menu__5Hd38')

    const nameBeforeElem = CSSRulePlugin.getRule('.nav_name__S4n8D::before')

    if(!isMenuOpen){
        const tl = gsap.timeline()
        tl
        .fromTo(mobileMenu,{
            display: 'none',
            clipPath: 'circle(0.0% at 100% 0%)'
        },{
            display: 'flex',
            clipPath: 'circle(145% at 50% 0%)',
            duration: 1,
            zIndex: 10,
            ease: 'power2.inOut'
        })
        .to([fullName, menu],{
            color: '#d9d9d9',
            duration: 0.1
        },'-=0.5')
        .to(nameBeforeElem,{
            backgroundColor: '#d9d9d9',
            duration: 0.1,
            ease: 'power2.inOut'
        },'-=0.6')
    }
    if(isMenuOpen){
        //Close
        const tl = gsap.timeline()

        tl
        .fromTo(mobileMenu,{
            display: 'flex',
            zIndex: 10,
            clipPath: 'inset(0 0 0 0)'
        },{
            display: 'none',
            clipPath: 'inset(0 0 100% 0)',
            duration: 1,
            ease: 'power2.inOut'
        })
        .to([fullName, menu],{
            color: '#353535',
            duration: 0.1
        },'-=0.5')
        .to(nameBeforeElem,{
            backgroundColor: 'transparent',
            duration: 0.2,
            ease: 'power2.inOut'
        },'-=0.3')
    }
}