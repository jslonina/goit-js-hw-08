// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");
const galleryItemsElement = galleryItems
      .map(x => {
            const image = `<a class="gallery__item" href="${x.original}" >
    <img
      class="gallery__image"
      src="${x.preview}"
      alt="${x.description}"
      title="${x.description}"
    />
  </a>`;
      return image;
      })
      .join(" ");

gallery.insertAdjacentHTML("afterbegin", galleryItemsElement);

new SimpleLightbox(".gallery a", { captionDelay: 250 });


