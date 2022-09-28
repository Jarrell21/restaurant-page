
export default function about(){
    const aboutContainer = document.createElement('div');
    const title = document.createElement('h1');
    const content = document.createElement('p');
    
    aboutContainer.classList.add('content-container');
    title.classList.add('about-title');
    content.classList.add('about-content');

    title.textContent = 'Get to know';
    content.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores itaque amet totam! Beatae neque molestias eaque, nam perferendis incidunt sapiente id distinctio? Error explicabo voluptatem iure autem veritatis fuga, impedit in earum reiciendis illum, ipsam rem sed mollitia illo delectus cupiditate accusamus ipsa labore! Natus vitae eos quo in velit!';

    aboutContainer.appendChild(title);
    aboutContainer.appendChild(content);
    
    return aboutContainer;
}