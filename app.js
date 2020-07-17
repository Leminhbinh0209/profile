new fullpage("#fullpage", {
    autoScrolling: true,
    navigation:true,
    afterLoad: (origin, destination, direction) => {
        const section = destination.item;
        const tl = new TimelineMax({delay:0.5});
        const welcome = section.querySelector('.welcome');
        console.log(destination);
        if (destination.index === 0) {
            tl.fromTo(welcome, 1, { y:"40%", height: "0%",opacity:0}, {y:"-30%", height: "30%", opacity:1, ease:Power2.easeInOut})
            ;
        }
    },
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({delay:0.5});
        console.log(destination);
        
        if (destination.index === 1){
            tl.fromTo(title, 0.5, {y:'50', opacity:0}, {y:0, opacity:1});
            const dia = document.querySelectorAll('.DiaPer1');
            const description = document.querySelectorAll('.description');

            console.log(description);
            tl.fromTo(dia, 0.35, { opacity:0}, {opacity:1})
            .fromTo(description[0], 0.45, { opacity:0}, {opacity:1})
            .fromTo(description[1], 0.45, { opacity:0}, {opacity:1});

        }
        if (destination.index === 2){
            const pros = document.querySelectorAll('.projects');
            const langpr = document.querySelectorAll('.langpr');
            tl.fromTo(title, 0.5, {y:'50', opacity:0}, {y:0, opacity:1});
            const dia = document.querySelectorAll('.DiaPer2');
            console.log(dia);
            tl.fromTo(dia, 0.55, { x:"-750"}, {x:0})
            .fromTo(pros,  0.45, { opacity:0}, {opacity:1});

            tl.fromTo(langpr[0], 0.35, {  height: "0%",opacity:0}, { height: "30%", opacity:1, ease:Power2.easeInOut})
            .fromTo(langpr[1], 0.35, {height: "0%",opacity:0}, { height: "30%", opacity:1, ease:Power2.easeInOut})
            .fromTo(langpr[2], 0.35, {  height: "0%",opacity:0}, { height: "30%", opacity:1, ease:Power2.easeInOut})
            .fromTo(langpr[3], 0.35, {  height: "0%",opacity:0}, {height: "30%", opacity:1, ease:Power2.easeInOut})
            ;
        }
    }
})