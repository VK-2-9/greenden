var menuClose= document.getElementById("menu-close")
var menuOpen=document.getElementById("menu-open")
var sideNav=document.getElementById("side-nav")

// side nav creation
menuOpen.addEventListener("click",function(){
    sideNav.style.right="0";
})
menuClose.addEventListener("click",function(){
    sideNav.style.right="-50%";
})