import gsap from 'gsap'
import CSSRulePlugin from 'gsap/dist/CSSRulePlugin'

export const revealMenu = (isMenuOpen, navRef)=>{
    gsap.registerPlugin(CSSRulePlugin)
    const mobileMenu = navRef.current.querySelector('ul.nav_menuOption__qnYjP')
    const fullName = navRef.current.querySelectorAll('span.nav_name__S4n8D')
    const menu = navRef.current.querySelector('span.nav_menu__5Hd38')

    const nameBeforeElem = CSSRulePlugin.getRule('.nav_name__S4n8D::before')
    const menuBeforeElem = CSSRulePlugin.getRule('.nav_menuPseudoElem__GcQEu::before')
    const menuAfterElem = CSSRulePlugin.getRule('.nav_menuPseudoElem__GcQEu::after')

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
        .to(menuBeforeElem,{
            transform: 'rotate(-45deg)',
            border: '0.1rem solid #d9d9d9',
            duration: 0.3,
            stagger: 0.1,
            ease: 'power2.inOut'
        },'-=0.6')
        .to(menuAfterElem,{
            transform: 'rotate(-45deg)',
            border: '0.1rem solid #d9d9d9',
            duration: 0.3,
            stagger: 0.1,
            ease: 'power2.inOut'
        },'-=0.5')
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
        .to(menuBeforeElem,{
            transform: 'rotate(45deg)',
            border: '0.1rem solid #353535',
            duration: 0.3,
            stagger: 0.1,
            ease: 'power2.inOut'
        },'-=0.5')
        .to(menuAfterElem,{
            transform: 'rotate(45deg)',
            border: '0.1rem solid #353535',
            duration: 0.3,
            stagger: 0.1,
            ease: 'power2.inOut'
        },'-=0.6')
    }
};

export const kevImgAnimation = () =>{
    gsap.registerPlugin(CSSRulePlugin)

    const kevImgBG1Before = CSSRulePlugin.getRule('.about_kevImgBG1__M_W6D::before');
    const kevImgBG1After = CSSRulePlugin.getRule('.about_kevImgBG1__M_W6D::after');

    const kevImgBG2Before = CSSRulePlugin.getRule('.about_kevImgBG2__qlTa0::before');
    const kevImgBG2After = CSSRulePlugin.getRule('.about_kevImgBG2__qlTa0::after');

    gsap.to([ kevImgBG1Before, kevImgBG1After, kevImgBG2Before, kevImgBG2After ],{
        transform: 'rotate(720deg)',
        // stagger: 1,
        duration: 64,
        ease: 'linear',
        repeat: -1,
        yoyo: true
    });
};