console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
  fetchBreeds();
});

function fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl).then(resp => resp.json())
  .then(json => renderImage(json.message));
}

function renderImage(dogImages) {
    const container = document.getElementById('dog-image-container');
    dogImages.forEach(dogImage => {
        const img = document.createElement('img');
        img.src = dogImage;
        container.appendChild(img);
    })
}
