// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const listEl = document.querySelector(".gallery");
const elements = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");
listEl.insertAdjacentHTML("beforeend", elements);

new SimpleLightbox('.gallery__link',
        {   captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
        });
