let menuOpen = document.getElementById('menu-open');
let menuClose = document.getElementById('menu-close');
let menuList = document.getElementById('menulist');
let menushow ;
let menuhide;




menuOpen.addEventListener('click', function(){
    if(menuList.classList == "menulist") {
        menuList.classList = "menulistoff"
        
        
   } else{
    menuList.classList = "menulist";
    
    menushow = document.getElementById('menu-close').style.display = 'block';
    
   };
});

menuClose.addEventListener('click', function(){
    if(menuList.classList == "menulistoff"){
        menuList.classList = "menulist";
        
        
    } else{
        menuList.classList = "menulistoff";   
    };
});

