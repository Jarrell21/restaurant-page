import chefImg from './home.jpg';

export default function home() {
        const homeContainer = document.createElement('div');
        const h1 = document.createElement('h1');
        const p1 = document.createElement('p');
        const imgContainer = document.createElement('div');
        const p2 = document.createElement('p');
        const img = new Image();
        img.src = chefImg;
        
        homeContainer.classList.add('home');
        h1.classList.add('home-title');
        imgContainer.classList.add('home-img');

        h1.textContent = 'Best pizza in town';
        p1.textContent = 'Made with love since 2000';
        p2.textContent = 'Order now or visit us';
        
        homeContainer.appendChild(h1);
        homeContainer.appendChild(p1);
        homeContainer.appendChild(imgContainer);
        imgContainer.appendChild(img);
        homeContainer.appendChild(p2);


        return homeContainer;
}
