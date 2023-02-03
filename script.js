
const onMenu = () => {
    const menu = document.getElementById("menu-con");
    const menulist = document.getElementById("menulist");
    const menuClose = document.getElementById("menu-close");
    const modal = document.getElementById("modal");
    

    
    menu.onclick = () => {
        menulist.style.display = 'none'

        menulist.style.display === 'none' ?
        menulist.style.display = 'flex' : 
        menulist.style.display = 'none'
    }

    menuClose.onclick = () => {
        menulist.style.display = 'none'
    }

    modal.onclick = () => {
        menulist.style.display === 'flex' ?
        menulist.style.display = 'none':
        null
    }
}
onMenu();


const mode = () => {
    const body = document.getElementById("body")
    const socials  = document.getElementById("socials")
    const modeBtn = document.getElementById("mode-btn");
    const header = document.getElementById("header")
    const p = document.getElementsByClassName("p")
    let theMode = document.querySelector("#mode")
    let light = document.querySelector("#light")
    let dark = document.querySelector("#night")
    theMode.onclick = () => {
        setTimeout(() => {

        if(dark.className.includes('hide')){
            light.classList.add('hide')
            dark.classList.remove('hide')

            theMode.style.backgroundColor = 'rgb(21, 20, 20)'
            header.style.backgroundColor = 'black'
            body.style.background = 'black'
            socials.style.background = 'white';
            for(var i = 0; i < p.length; i++){
                p[i].style.color = 'white'
        }

        } else{
            dark.classList.add('hide')
            light.classList.remove('hide')
            theMode.style.backgroundColor = 'white'
            header.style.backgroundColor = 'white'
            socials.style.background = 'white';
            body.style.background = 'white'
            for(var i = 0; i < p.length; i++){
                p[i].style.color = 'black'
        }}
    }, 100);
}}
mode()
