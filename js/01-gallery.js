import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");

const createGalleryItem = createGalleryMakeup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", createGalleryItem);

function createGalleryMakeup(gallery) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
    )
    .join("");
}
//const createGalleryItem = galleryItems
//.map(
//  ({ preview, original, description }) =>
//    `<div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`
//)
//.join("");

//galleryContainer.insertAdjacentHTML("beforeend", createGalleryItem);

galleryContainer.addEventListener("click", onOpenModalClick);

function onOpenModalClick(event) {
  event.preventDefault();
  console.log(event.target);

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <div class="modal">
        <img src= "${event.target.dataset.source}"/>
    </div>
`);

  instance.show();
}

//addEventListener("click", onCloseModalClick);
//
//function onCloseModalClick(event) {
//  if (event.target.nodeName === "IMG") {
//    instance.close();
//  }
//}
