class llunacoHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <header>
        <li><a data-scrollify="#home" href="#home" class="logo">llunaco</a></li>
    <ul class="navlist">
        <li><a data-scrollify="#home" href="#home">Home</a></li>
        <li><a data-scrollify="#creative" href="#creative">Creative</a></li>
        <li><a data-scrollify="#gaming" href="#gaming">Gaming</a></li>
    </ul>
    </header>
        `
    }
}

customElements.define('llunaco-header', llunacoHeader)



let navlist = document.querySelector('.navlist');



const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true 
});

sr.reveal('.home-text',{delay:100, origin:'top'})
sr.reveal('.home-img',{delay:100, origin:'right'})
sr.reveal('.icons',{delay:900, origin:'left'})
sr.reveal('.scroll-down',{delay:50, origin:'bottom'})
sr.reveal('.scroll-up',{delay:50, origin:'bottom'})



$(document).ready(function () {
    screenCheck();
    $('.scroll-down').click(function () {
        $.scrollify.move('#creative');
    });
    $('.scroll-up').click(function () {
        $.scrollify.move('#home');
    });
});
$(window).on('resize', function () {
    screenCheck();
});
function applyScroll() {
    $.scrollify({
        section: '.scroll',
        sectionName: 'section-name',
        easing: 'easeOutExpo',
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: false,
        setHeights: true,
        overflowScroll: true,
        updateHash: false,
        touchScroll: true,
    });
}
function screenCheck() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID || $(window).width() <= 1024) {
        // if mobile
        $.scrollify.destroy();
        $('section').removeClass('scroll').removeAttr('style');
        $.scrollify.disable();
    } else {
        // if desktop
        $('section').addClass('scroll');
        applyScroll();
        $.scrollify.enable();
    }
}