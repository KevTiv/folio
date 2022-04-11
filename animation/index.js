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

export const sunBurstAnimation = () =>{
    gsap.registerPlugin(CSSRulePlugin)

    const titleAnimation1Before = CSSRulePlugin.getRule('.about_titleAnimationBox1__dXZVO::before');
    const titleAnimation1After = CSSRulePlugin.getRule('.about_titleAnimationBox1__dXZVO::after');

    const titleAnimation2Before = CSSRulePlugin.getRule('.about_titleAnimationBox2__RCKSn::before');
    const titleAnimation2After = CSSRulePlugin.getRule('.about_titleAnimationBox2__RCKSn::after');

    gsap.to([ titleAnimation1Before, titleAnimation1After, titleAnimation2Before, titleAnimation2After ],{
        transform: 'rotate(720deg)',
        stagger: 1.5,
        duration: 64,
        ease: 'linear',
        repeat: -1,
        yoyo: true
    });
};

export const revealProject = (projectRef, projectImgRef, isProjectBodyOpen)=>{
    const tl = gsap.timeline();
    const projectBody = projectRef.current;
    const projectImg = projectImgRef.current;
    if(isProjectBodyOpen){
        tl
        .to([projectBody, projectImg],{
            opacity: 0,
            duration: 0.1,
            ease: 'power2.inOut'
        })
        .to(projectBody,{
            height: '0%',
            duration: 0.1,
            ease: 'power2.inOut'
        },'-=0.1')
        .to(projectBody,{
            display: 'none',
            duration: 0.1,
            ease: 'power2.inOut'
        },'-=0.1')
        .to([projectBody, projectImg],{
            display: 'none',
            duration: 0.1,
            ease: 'power2.inOut'
        })
    };
    if(!isProjectBodyOpen){
        tl
        .to([projectBody, projectImg],{
            display: 'block',
            height: 'fit-content',
            opacity: 1,
            duration: 1.25,
            ease: 'power2.inOut'
        })
        .to(projectImg,{
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut'
        },'-=0.9')
    };
};

export const animateSpanClick=(isProjectBodyOpen, projectSpanClickElem)=>{
    gsap.registerPlugin(CSSRulePlugin);
    const spanClick = CSSRulePlugin.getRule(`${projectSpanClickElem}`);
    console.log(spanClick);
    
    if(!isProjectBodyOpen){
        gsap.to(spanClick,{
            transform: 'rotate(0deg)',
            duration: 0.3,
            ease: 'power2.inOut'
        })
    };
    if(isProjectBodyOpen){
        gsap.to(spanClick,{
            transform: 'rotate(90deg)',
            duration: 0.3,
            ease: 'power2.inOut'
        })
    };
};

