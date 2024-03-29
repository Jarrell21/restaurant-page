import {createParagraph} from './home';
import location from './images/location.jpg';
function createContact(){
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact');

    const locationImg = document.createElement('img');
    locationImg.src = location;
    locationImg.alt = 'Location';

    contactContainer.appendChild(
        createParagraph('Phone: +63999 999 9999')
    )

    contactContainer.appendChild(
        createParagraph('Email: delicieux2000@gmail.com')
    )

    contactContainer.appendChild(locationImg)

    return contactContainer;
}

function loadContact(){
    const main = document.querySelector('#main');

    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;