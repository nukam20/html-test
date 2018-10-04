const sideMenu = document.querySelector('.sidemenu-wrapper')
const toggle = document.querySelector(".toggle-btn")
function eventListener(){
  toggle.addEventListener("click", showSidemenu)
}
eventListener()
function showSidemenu(){
sideMenu.style.display 
if(sideMenu.style.display==="block"){
sideMenu.style.display = "none"
}else{
  sideMenu.style.display = "block"
}
}
