let navlist = document.querySelector('.navlist');

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true 
});

sr.reveal('.homesplash-text',{delay:100, origin:'top'})
sr.reveal('.homesplash-img',{delay:100, origin:'right'})
sr.reveal('.icons',{delay:900, origin:'left'})
sr.reveal('.scroll-down',{delay:50, origin:'bottom'})
sr.reveal('.scroll-up',{delay:50, origin:'bottom'})