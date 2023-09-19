import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
gallery.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  event.preventDefault();

  const currentLink = event.target.dataset.source;

  const modal = basicLightbox.create(
    `<div>
  <img src ="${currentLink}"/></div>`,
    {
      onShow: (instance) => {
        const modalImage = instance.element().querySelector("img");
        modalImage.addEventListener("click", () => {
          instance.close();
        });

        window.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            modal.close();
          }
        });
      },
      onClose: (instance) =>
        window.removeEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            modal.close();
          }
        }),
    }
  );

  modal.show();
}

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
    )
    .join("");
}
