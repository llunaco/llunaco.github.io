class llunacoHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
    <a href="./index" class="logo">llunaco</a>                                              <!--title-->
    <ul class="navlist">                                                                    <!--navbar links-->
        <li><a href="./index">Home</a></li>
        <li><a href="./creative">Creative</a></li>
        <li><a href="./gaming">Gaming</a></li>
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

sr.reveal('.homesplash-text',{delay:100, origin:'top'})
sr.reveal('.homesplash-img',{delay:100, origin:'right'})
sr.reveal('.icons',{delay:900, origin:'left'})
sr.reveal('.scroll-down',{delay:50, origin:'bottom'})
sr.reveal('.scroll-up',{delay:50, origin:'bottom'})