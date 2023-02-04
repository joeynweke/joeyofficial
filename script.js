
const onMenu = () => {
    const menu = document.getElementById("menu-con");
    const menulist = document.getElementById("menulist");
    const menuClose = document.getElementById("menu-close");
    const modal = document.getElementById("modal");
    

    
    menu.onclick = () => {
       if(menulist.className === 'hide'){
        menulist.classList = 'menulist'
       }
    }

    menuClose.onclick = () => {
        menulist.classList = 'hide'
    }

    modal.onclick = () => {
        if(menulist.className === 'menulist'){
            menulist.classList = 'hide'
        }
    }
}
onMenu();


const mode = () => {
    const body = document.getElementById("body")
    const socials  = document.getElementById("socials")
    const modeBtn = document.getElementById("mode-btn");
    const header = document.getElementById("header")
    const logo = document.getElementById("logo")
    const p = document.getElementsByClassName("p")
    let theMode = document.querySelector("#mode")
    let light = document.querySelector("#light")
    let dark = document.querySelector("#night")
    let topIntro = document.querySelector("#top-intro")
    let anchor = document.querySelectorAll(".anchor")
    theMode.onclick = () => {
        setTimeout(() => {

        if(theMode.alt === 'dark mode'){
            theMode.src = 'images/light.png';
            theMode.alt = 'light mode';
            
            header.style.backgroundColor = 'black';
            logo.style.backgroundColor = 'rgba(234, 126, 3, 0.956)';
            anchor.forEach(element => {
                element.style.color = 'rgba(234, 126, 3, 0.956)';
            });
            body.style.background = 'black'
            topIntro.style.color = 'rgb(237, 225, 225)'
            socials.style.background = 'white';
            for(var i = 0; i < p.length; i++){
                p[i].style.color = 'white'
        }

        } else{
            theMode.src = 'images/night.png';
            theMode.alt = 'dark mode'
            logo.style.backgroundColor = 'white';
            header.style.backgroundColor = 'white'
            socials.style.background = 'white';
            body.style.background = 'white'
            topIntro.style.color = 'rgb(56, 56, 56)'
            for(var i = 0; i < p.length; i++){
                p[i].style.color = 'black'
        }}
    }, 100);
}}
mode()
