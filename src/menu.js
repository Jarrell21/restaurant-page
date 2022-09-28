function createMenu(){
    const menuContainer = document.createElement('div');
    
    menuContainer.classList.add('menu');

    menuContainer.appendChild(
        createMenuItem('Capricciosa')
    );

    menuContainer.appendChild(
        createMenuItem('Hawaiian')
    );

    menuContainer.appendChild(
        createMenuItem('Margherita')
    );

    menuContainer.appendChild(
        createMenuItem('Marinara')
    );

    menuContainer.appendChild(
        createMenuItem('Mexican')
    );

    menuContainer.appendChild(
        createMenuItem('Mushroom')
    );

    menuContainer.appendChild(
        createMenuItem('Pepperoni')
    );

    menuContainer.appendChild(
        createMenuItem('Seafood')
    );

    return menuContainer;
}

function createMenuItem(name){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodImg = document.createElement('img');
    foodImg.src = `../dist/images/pizzas/${name.toLowerCase()}.jpg`;
    foodImg.alt = `${name}`;

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    menuItem.appendChild(foodImg);
    menuItem.appendChild(foodName);

    return menuItem;
}

function loadMenu() {
    const main = document.querySelector('#content');

    main.textContent = '';
    // main.appendChild(createMenu());
}

export default createMenu;