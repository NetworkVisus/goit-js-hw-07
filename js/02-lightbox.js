import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

var modal = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`
    )
    .join("");
}

createMarkup(galleryItems);
