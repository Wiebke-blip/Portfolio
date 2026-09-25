const galleryElements = document.querySelectorAll('[data-gallery]');

const loadPromises = Array.from(galleryElements).map(gallery => {
    const galleryFile = gallery.dataset.gallery;

    return fetch(`./${galleryFile}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Galerie konnte nicht geladen werden: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            gallery.innerHTML = html;
        })
        .catch(error => console.error(error));
});

Promise.all(loadPromises).then(() => {
    new GLightbox({
        selector: '.glightbox',
        descPosition: 'right'
    });
});