import {loadHome} from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';

function createHeader() {
        const header = document.createElement('header');
        header.classList.add('header');

        const headerTitle = document.createElement('div');
        headerTitle.classList.add('header-title');

        headerTitle.textContent = 'Délicieux';

        header.appendChild(headerTitle);
        header.appendChild(createNav());

        return header;
}

function createNav(){
        const nav = document.createElement('nav');
        nav.classList.add('nav-btns');

        const homeBtn = document.createElement('button');
        homeBtn.textContent = 'HOME';
        homeBtn.classList.add('homeBtn');
        homeBtn.addEventListener('click', () => {
                loadHome();
                setActiveBtn('home');
        })

        const menuBtn = document.createElement('button');
        menuBtn.textContent = 'MENU';
        menuBtn.classList.add('menuBtn');
        menuBtn.addEventListener('click', () => {
                loadMenu();
                setActiveBtn('menu')
        })

        const contactBtn = document.createElement('button');
        contactBtn.textContent = 'CONTACT';
        contactBtn.classList.add('contactBtn');
        contactBtn.addEventListener('click', () => {
                loadContact();
                setActiveBtn('contact');
        })

        nav.appendChild(homeBtn);
        nav.appendChild(menuBtn);
        nav.appendChild(contactBtn);

        return nav;
}

function setActiveBtn(btnName){
        const allBtn = document.querySelectorAll('button');
        const btn =  document.querySelector(`.${btnName}Btn`);

        allBtn.forEach(btn => {
                btn.classList.remove('active-btn');
        })
        btn.classList.add('active-btn');
}

function createBody(){
        const main = document.createElement('main');
        main.setAttribute('id', 'main');

        return main;
}

function createFooter(){
        const footer = document.createElement('footer');
        footer.classList.add('footer');

        return footer;
}

function initialize(){
        const content = document.getElementById('content');

        content.appendChild(createHeader());
        content.appendChild(createBody());
        content.appendChild(createFooter());

        setActiveBtn('home');
        loadHome();
}

initialize();