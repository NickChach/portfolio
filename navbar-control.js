const navbar = document.querySelector("nav");
const body = document.querySelector("body");
const menu = document.createElement("section");

menu.innerHTML = `
    <p><a href="#skills">Skills</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#resume">Résumé</a></p>
    <p><a href="#contact-me">Contact</a></p>
    `;

menu.classList.add("menu");

function closeMenu() {
    try {
        body.removeChild(menu);
    }
    catch(error) {
        return 1;
    }
}

function toggleMenu() {
    if (window.innerWidth <= 576) {
        try {
            body.removeChild(menu);
        }
        catch(error) {
            body.appendChild(menu);
        }
    }    
}

function minimiseNavbar() {
    if (window.innerWidth <= 576) {
        navbar.innerHTML = "[ . . . ]";
    }
}

function maximiseNavbar() {
    if (window.innerWidth > 576) {
        closeMenu();

        navbar.innerHTML = `
        <ul>
            <li>[</li>
            <li><a href="#skills">Skills,</a></li>
            <li><a href="#projects">Projects,</a></li>
            <li><a href="#resume">Resume,</a></li>
            <li><a href="#contact-me">Contact</a></li>
            <li>]</li>
            </ul>
        `;
    }
}

