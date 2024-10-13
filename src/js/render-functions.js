import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const div = document.querySelector('.wrapp');

const list = document.querySelector('.list');

export function renderImages(data, lightbox) {
  if (data.total === 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageSize: 18,
      messageLineHeight: 30,
      position: 'topRight',
    });
    hideLoading();
  } else {
    // let endTime = new Date();
    // let res = endTime - startTime;
    hideLoading();
    const smallImg = data.hits
      .map(
        item =>
          `<li class="list-item"><a href="${item.largeImageURL}" data-source="${item.largeImageURL}"><img src="${item.webformatURL}" alt="${item.tags}" /></a>
          <div class="wrapp-items">
          <div class="info-item"><p class="bold">Likes</p>
          <p>${item.likes}</p>
          </div>
          <div class="info-item"><p class="bold">Views</p>
          <p>${item.views}</p>
          </div>
          <div class="info-item"><p class="bold">Comments</p>
          <p>${item.comments}</p>
          </div>
          <div class="info-item"><p class="bold">Downloads</p>
          <p>${item.downloads}</p>
          </div>

          </div></li>`
      )
      .join('');
    list.innerHTML = smallImg;

    lightbox.refresh();
  }
}

export function showLoading() {
  div.style.display = 'block';
}

export function hideLoading() {
  div.style.display = 'none';
}
