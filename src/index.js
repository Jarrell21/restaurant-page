import home from "./home";
import about from "./about";
import contact from "./contact";
import './style.css';

function navComponent(){
    const navContainer = document.createElement('div');
    const homeBtn = document.createElement('button');
    const aboutBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    navContainer.classList.add('nav-container');

    homeBtn.textContent = 'HOME';
    aboutBtn.textContent = 'ABOUT';
    contactBtn.textContent = 'CONTACT';

    navContainer.appendChild(homeBtn);
    navContainer.appendChild(aboutBtn);
    navContainer.appendChild(contactBtn);

    bodyComp('home');

    homeBtn.addEventListener('click', ()=> bodyComp('home'));
    aboutBtn.addEventListener('click', ()=> bodyComp('about'));
    contactBtn.addEventListener('click', ()=> bodyComp('contact'));

    return navContainer;
}

function bodyComp(content){
    const body = document.querySelector('#content');

    if(body.lastChild) body.removeChild(body.lastChild);
    if(content === 'home'){
        body.appendChild(home());
    }
    else if(content === 'about'){
        body.appendChild(about());
    }
    else body.appendChild(contact());

}

document.body.prepend(navComponent());