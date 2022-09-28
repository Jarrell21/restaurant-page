import capricciosa from './images/pizzas/capricciosa.jpg';
import hawaiian from './images/pizzas/hawaiian.jpg';
import margherita from './images/pizzas/margherita.jpg';
import marinara from './images/pizzas/marinara.jpg';
import mexican from './images/pizzas/mexican.jpg';
import mushroom from './images/pizzas/mushroom.jpg';
import pepperoni from './images/pizzas/pepperoni.jpg';
import seafood from './images/pizzas/seafood.jpg';

function createMenu(){
    const menuContainer = document.createElement('div');
    
    menuContainer.classList.add('menu');

    menuContainer.appendChild(
        createMenuItem(capricciosa, 'Capricciosa')
    );

    menuContainer.appendChild(
        createMenuItem(hawaiian, 'Hawaiian')
    );

    menuContainer.appendChild(
        createMenuItem(margherita, 'Margherita')
    );

    menuContainer.appendChild(
        createMenuItem(marinara, 'Marinara')
    );

    menuContainer.appendChild(
        createMenuItem(mexican, 'Mexican')
    );

    menuContainer.appendChild(
        createMenuItem(mushroom, 'Mushroom')
    );

    menuContainer.appendChild(
        createMenuItem(pepperoni, 'Pepperoni')
    );

    menuContainer.appendChild(
        createMenuItem(seafood, 'Seafood')
    );

    return menuContainer;
}

function createMenuItem(img, name){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodImg = document.createElement('img');
    foodImg.src = img;
    foodImg.alt = `${name}`;

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    menuItem.appendChild(foodImg);
    menuItem.appendChild(foodName);

    return menuItem;
}

function loadMenu() {
    const main = document.querySelector('#main');

    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;