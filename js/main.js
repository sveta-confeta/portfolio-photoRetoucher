gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {//если мы скролим не на устройствах с тачем(это значит мобильные)-отключаем скрол на мобильниках
    ScrollSmoother.create({ //можем указать область скролла.не обязательно это будет вся страница=мбыть какой то блок
        wrapper: '.wrapper', //это то в чем будет скролл происходить
        content: '.content',//то что будет плавать внутри wrappera
        smooth: 1.5,//speed
        effects: true,

    })
    gsap.fromTo('.hero-section', {opacity: 1}, {
        opacity: 0, scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: 'bottom',
            // , ||
            // end:900,
            scrub: true
        }
    }) //показываем куда должен обьект придти в процессе анимации/ 1фигурные скобки свойство до анимации
//2 фигурные скобки свойство после скролла:

    // gsap.fromTo('.gallery__left .gallery__item',{x: -100, opacity:0},{opacity: 1,
    //     x:0,
    //     scrollTrigger:{ //движение карточек
    //         trigger:'.gallery__item',
    //         scrub:true
    //     }})


    //чтобы выплывал не весь блок одновременно, а каждый элемент по отдельности-применим цикл и в цикле
    //применим эти свойства к каждому элементу

    let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item');

    itemsLeft.forEach(item => {
        gsap.fromTo(item, {x: -200, opacity: 0}, {
            opacity: 1,
            x: 0,
            scrollTrigger: { //движение карточек
                trigger: item,
                start: '-800',
                end: '-100',
                scrub: true
            }
        })
    })

    let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item');

    itemsRight.forEach(item => {
        gsap.fromTo(item, {x: 200, opacity: 0}, {
            opacity: 1,
            x: 0,
            scrollTrigger: { //движение карточек
                trigger: item,
                start: '-800',
                end: '-100',
                scrub: true
            }
        })
    })
}


