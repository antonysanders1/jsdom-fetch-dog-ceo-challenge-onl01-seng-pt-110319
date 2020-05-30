console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
});

function fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl).then(resp => resp.json())
  .then(json => renderImage(json.message));
}


