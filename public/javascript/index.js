import { genHeader, genFooter } from "./mentos.js";

// Mentos Generator
function mentos(title, route){
  genHeader(title);
  genFooter(route);
  //console.log("mentos() executed"); //DEBUG
};

// Utils
function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length); // value
        }
    }
    return null;
}

function handleResize() {
  const width = window.innerWidth;
  //console.log(`The current screen width is: ${width}px`); //DEBUG
  //document.querySelector('model-viewer').style.width = '30vw';
  //document.getElementById('vapor3D').style.width='30vw';
  
  if (width > 770) {
    menuBarClose();
    headerSetDesktop();
    //console.log("Desktop view active"); //DEBUG
  } else{
    menuBarClose();
    //console.log("Mobile view active"); //DEBUG
  }
}

//Opens menu bar for Mobile miew
function menuBarOpen (){
  document.getElementById("navBar").style.height="150px";
  
  document.getElementById("pokediv").style.paddingBottom="150px";
  document.getElementById("menuOpen").style.display="none";
  document.getElementById("menuClose").style.display="inline";
}
function menuBarClose (){
  document.getElementById("navBar").style.height="0px";
  document.getElementById("navBar").style.overflowY="hidden";
  document.getElementById("pokediv").style.paddingBottom="0px";
  document.getElementById("menuOpen").style.display="inline";
  document.getElementById("menuClose").style.display="none";
}
function headerSetDesktop (){
  document.getElementById("navBar").style.height="auto";
  document.getElementById("menuOpen").style.display="none";
  document.getElementById("menuClose").style.display="none";
}

//Makes the glowy effect work when the menu is open
function overShadow (){
  document.getElementById("navBar").style.overflowY="overflow";
}

function toggleTheme(theme1, theme2){
  const link = document.querySelector("link[rel='stylesheet']");

  if (!link) return;

  const current = link.getAttribute("href");

  if (current === theme1) {
    link.setAttribute("href", theme2);
    setCookie("theme","light",7);
  } else {
    link.setAttribute("href", theme1);
    setCookie("theme","dark",7);
  }
}

// Set all global functions to comply with module scope
window.menuBarOpen = function () {
  menuBarOpen();
};

window.menuBarClose = function () {
  menuBarClose();
};

window.toggleTheme = function () {
  toggleTheme('css/glowy.css','css/neo.css');
};

window.overShadow = function () {
  overShadow();
};

document.addEventListener("DOMContentLoaded", () => {
let path = window.location.pathname;

  mentos('Markos Calderon', path);
  //console.log("Content Loaded"); //DEBUG
});

window.addEventListener('resize', handleResize);