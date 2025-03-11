// side nav creation


var menuClose= document.getElementById("menu-close")
var menuOpen=document.getElementById("menu-open")
var sideNav=document.getElementById("side-nav")

menuOpen.addEventListener("click",function(){
    sideNav.style.right="0";
})
menuClose.addEventListener("click",function(){
    sideNav.style.right="-50%";
})


// Product search functionality
var productContainer=document.getElementById("product-container")
var search=document.getElementById("search")
var productList=productContainer.querySelectorAll("div")
search.addEventListener("keyup", function(){
    var eneteredValue=event.target.value.toUpperCase()
    for(i=0;i<productList.length;i++){
        var productName=productList[i].querySelector("h2").textContent.toUpperCase()
        if(productName.indexOf(eneteredValue)<0){
            productList[i].style.display="none";
        }
        else{
            productList[i].style.display="block"
        }
    }
})