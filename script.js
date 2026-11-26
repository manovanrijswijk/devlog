// Vergroot afbeeldingen wanneer je erop klikt.
const lightbox = document.getElementById('lightbox');
const largeImage = document.getElementById('largeImage');
const closeButton = document.getElementById('close');

function openLightbox(image) {
    largeImage.src = image.src;
    largeImage.alt = image.alt;
    lightbox.classList.add('open');
}

function closeLightbox() {
    lightbox.classList.remove('open');
    largeImage.removeAttribute('src');
}

document.querySelectorAll('.visual img').forEach((image) => {
    image.addEventListener('click', () => openLightbox(image));
});

closeButton.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
});
