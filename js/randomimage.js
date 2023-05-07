const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ['image-1.jpeg', 'image-2.jpeg', 'image-3.jpeg', 'image-4.jpeg'];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = 'img/' + images[randomIndex]; 
}