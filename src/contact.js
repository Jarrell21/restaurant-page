
export default function contact(){
    const contactContainer = document.createElement('div');
    const title = document.createElement('h1');
    const content = document.createElement('p');
    
    contactContainer.classList.add('content-container');
    title.classList.add('menu-title');
    content.classList.add('menu-content');

    title.textContent = 'Contact Us';
    content.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores itaque amet totam! Beatae neque molestias eaque, nam perferendis incidunt sapiente id distinctio? Error explicabo voluptatem iure autem veritatis fuga, impedit in earum reiciendis illum, ipsam rem sed mollitia illo delectus cupiditate accusamus ipsa labore! Natus vitae eos quo in velit!';

    contactContainer.appendChild(title);
    contactContainer.appendChild(content);

    return contactContainer;
}