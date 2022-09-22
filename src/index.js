import home from './home';
import about from './about';
import contact from './contact';
import './style.css';

function navComponent() {
        const navContainer = document.createElement('div');
        const homeBtn = document.createElement('button');
        const aboutBtn = document.createElement('button');
        const contactBtn = document.createElement('button');

        navContainer.classList.add('nav-container');
        homeBtn.classList.add('homeBtn');
        aboutBtn.classList.add('aboutBtn');
        contactBtn.classList.add('contactBtn');

        homeBtn.textContent = 'HOME';
        aboutBtn.textContent = 'ABOUT';
        contactBtn.textContent = 'CONTACT';

        navContainer.appendChild(homeBtn);
        navContainer.appendChild(aboutBtn);
        navContainer.appendChild(contactBtn);

        homeBtn.addEventListener('click', () => {bodyComp('home')});
        aboutBtn.addEventListener('click', () => bodyComp('about'));
        contactBtn.addEventListener('click', () => bodyComp('contact'));

        return navContainer;
}

function bodyComp(content) {
        const body = document.querySelector('#content');
        const allBtns = document.querySelectorAll('button');
        const homeBtn = document.querySelector('.homeBtn');
        const aboutBtn = document.querySelector('.aboutBtn');
        const contactBtn = document.querySelector('.contactBtn');

        allBtns.forEach((btn) => {
                btn.style.color = 'white';
                btn.style.borderBottom = null;
        })

        if (body.lastChild) body.removeChild(body.lastChild);
        if (content === 'home') {
                homeBtn.style.borderBottom = "2px solid white"
                body.appendChild(home());
        } else if (content === 'about') {
                aboutBtn.style.borderBottom = "2px solid white"
                body.appendChild(about());
        } else {
                contactBtn.style.borderBottom = "2px solid white"
                body.appendChild(contact());
        }
}

document.body.prepend(navComponent());
bodyComp('home');
