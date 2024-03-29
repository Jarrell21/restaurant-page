import chef from './images/chef.jpg';
function createHome() {
        const homeContainer = document.createElement('div');
        homeContainer.classList.add('home');

        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        img.src = chef;
        
        
        imgContainer.classList.add('home-img');

        homeContainer.appendChild(
                createParagraph('Best pizza in town')
        );

        homeContainer.appendChild(
                createParagraph('Made with love since 2000')
        );

        homeContainer.appendChild(imgContainer);
        imgContainer.appendChild(img);

        homeContainer.appendChild(
                createParagraph('Order now or visit us')
        );


        return homeContainer;
}

function createParagraph(text){
        const para = document.createElement('p');
        para.textContent = text;

        return para;
}

function loadHome() {
        const main = document.querySelector('#main');

        main.textContent = '';
        main.appendChild(createHome());
}

export {loadHome, createParagraph};
