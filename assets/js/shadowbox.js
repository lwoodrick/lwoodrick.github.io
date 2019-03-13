// TO-DO: Make "thumbnail" images interactable via the keyboard

const imageList = document.querySelectorAll('[thumbnail]');
const shadowBox = document.querySelector('.shadow-box');
const documentBody = document.querySelector('body');
const contentWindow = document.querySelector('.content--portfolio');

shadowBox.addEventListener('click', (event) => {
  documentBody.setAttribute('style', '');
  shadowBox.classList.add('closing');
  setTimeout(function(){
    shadowBox.innerHTML = "";
    shadowBox.classList.remove('closing');
}, 185);
})

imageList.forEach( (image) => {
  var truncatedURL = image.src.substring(0, image.src.length - 4);
  var fileExt = image.src.substring(image.src.length - 4); // Hack off extension

  image.addEventListener('click', (event) => {
    event.preventDefault();
    var scrollPosition = window.scrollY;
    documentBody.setAttribute('style', 'overflow-y: hidden; height: 100vh;');

    var largeImage = document.createElement("img");
    largeImage.src = truncatedURL + "--full" + fileExt;
    shadowBox.appendChild(largeImage);
  })
 });
