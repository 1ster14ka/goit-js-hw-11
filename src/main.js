import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showLoading,
  hideLoading,
} from './js/render-functions.js';

let lightbox = new SimpleLightbox('.list a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  loop: true,
});

const form = document.querySelector('.form');

let userText;

form.addEventListener('submit', event => {
  event.preventDefault();

  if (userText) {
    showLoading();

    fetchImages(userText)
      .then(data => renderImages(data, lightbox))
      .catch(error => {
        console.error(error);
        hideLoading();
      });
  }
});
form.addEventListener('input', event => {
  if (event.target.value.trim()) {
    userText = event.target.value.trim();
  } else {
    userText = undefined;
  }
});
