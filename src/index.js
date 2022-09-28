import home from './home';
import menu from './menu';
import contact from './contact';
import './style.css';

function navComponent() {
        const navContainer = document.createElement('div');
        const navTitle = document.createElement('div');
        const navBtns = document.createElement('div');
        const homeBtn = document.createElement('button');
        const menuBtn = document.createElement('button');
        const contactBtn = document.createElement('button');

        navContainer.classList.add('nav-container');
        navTitle.classList.add('nav-title');
        navBtns.classList.add('nav-btns');
        homeBtn.classList.add('homeBtn');
        menuBtn.classList.add('menuBtn');
        contactBtn.classList.add('contactBtn');

        navTitle.textContent = 'Délicieux';
        homeBtn.textContent = 'HOME';
        menuBtn.textContent = 'MENU';
        contactBtn.textContent = 'CONTACT';

        navContainer.appendChild(navTitle);
        navBtns.appendChild(homeBtn);
        navBtns.appendChild(menuBtn);
        navBtns.appendChild(contactBtn);
        navContainer.appendChild(navBtns);

        homeBtn.addEventListener('click', () => {bodyComp('home')});
        menuBtn.addEventListener('click', () => bodyComp('menu'));
        contactBtn.addEventListener('click', () => bodyComp('contact'));

        return navContainer;
}

function bodyComp(content) {
        const body = document.querySelector('#content');
        const allBtns = document.querySelectorAll('button');
        const homeBtn = document.querySelector('.homeBtn');
        const menuBtn = document.querySelector('.menuBtn');
        const contactBtn = document.querySelector('.contactBtn');

        allBtns.forEach((btn) => {
                btn.style.color = 'white';
                btn.style.borderBottom = null;
        })

        if (body.lastChild) body.removeChild(body.lastChild);
        if (content === 'home') {
                homeBtn.style.borderBottom = "2px solid white"
                body.appendChild(home());
        } else if (content === 'menu') {
                menuBtn.style.borderBottom = "2px solid white"
                body.appendChild(menu());
        } else {
                contactBtn.style.borderBottom = "2px solid white"
                body.appendChild(contact());
        }

}

document.body.prepend(navComponent());
bodyComp('home');
