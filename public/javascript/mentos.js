
export function genHeader(title) {
    const header = document.querySelector("header");

    // --- div#pokediv ---
    const pokeDiv = document.createElement("div");
    pokeDiv.id = "pokediv";

    // h1
    const h1 = document.createElement("h1");
    h1.textContent = title;

    // menu open button
    const menuOpen = document.createElement("button");
    menuOpen.className = "menu";
    menuOpen.id = "menuOpen";
    menuOpen.setAttribute("onclick", "menuBarOpen()");
    //menuOpen.addEventListener("click", menuBarOpen);

    const openIcon = document.createElement("i");
    openIcon.className = "fa fa-bars";
    menuOpen.appendChild(openIcon);

    // menu close button
    const menuClose = document.createElement("button");
    menuClose.className = "menu";
    menuClose.id = "menuClose";
    menuClose.setAttribute("onclick", "menuBarClose()");
    //menuClose.addEventListener("click", menuBarClose);

    const closeIcon = document.createElement("i");
    closeIcon.className = "fa fa-close";
    menuClose.appendChild(closeIcon);

    // append to pokediv
    pokeDiv.appendChild(h1);
    pokeDiv.appendChild(menuOpen);
    pokeDiv.appendChild(menuClose);

    // --- nav#navBar ---
    const nav = document.createElement("nav");
    nav.id = "navBar";

    function createNavLink(text, href) {
        const a = document.createElement("a");
        a.setAttribute("onclick", "overShadow()");
        a.href = href;

        const button = document.createElement("button");
        button.textContent = text;

        a.appendChild(button);
        return a;
    }

    nav.appendChild(createNavLink("Home", "./"));
    nav.appendChild(createNavLink("Blog", "blog"));
    nav.appendChild(createNavLink("Gallery", "gallery"));
    nav.appendChild(createNavLink("Projects", "projects"));

    // append everything to header
    header.appendChild(pokeDiv);
    header.appendChild(nav);

    //console.log("genHeader() executed"); //DEBUG
}

export function genFooter(route) {
    const footer = document.querySelector("footer");

    // div.footer 
    const footerDiv = document.createElement("div");
    footerDiv.className = "footer";

    // div#fttext 
    const ftText = document.createElement("div");
    ftText.id = "fttext";
    ftText.textContent = route || "";

    // div#stylesheets
    const stylesheets = document.createElement("div");
    stylesheets.id = "stylesheets";

    // button.stylechanger
    const styleBtn = document.createElement("button");
    styleBtn.className = "stylechanger";
    styleBtn.id = "css1";
    styleBtn.setAttribute("onclick", "toggleTheme('css/glowy.css', 'css/neo.css')");
    styleBtn.textContent = 'R';

    // append button to stylesheets
    stylesheets.appendChild(styleBtn);

    // assemble footer
    footerDiv.appendChild(ftText);
    footerDiv.appendChild(stylesheets);

    footer.appendChild(footerDiv);

    //console.log("genFooter() executed"); //DEBUG
}