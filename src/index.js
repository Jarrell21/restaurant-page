import home from "./home";
import about from "./about";
import contact from "./contact";

function navComponent(){
    const div = document.createElement('div');
    const homeBtn = document.createElement('button');
    const aboutBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.textContent = 'HOME';
    aboutBtn.textContent = 'ABOUT';
    contactBtn.textContent = 'CONTACT';

    div.appendChild(homeBtn);
    div.appendChild(aboutBtn);
    div.appendChild(contactBtn);

    homeBtn.addEventListener('click', ()=> bodyComp('home'));
    aboutBtn.addEventListener('click', ()=> bodyComp('about'));
    contactBtn.addEventListener('click', ()=> bodyComp('contact'));

    return div;
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