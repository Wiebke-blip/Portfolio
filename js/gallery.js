const lightbox = GLightbox({
    selector: '.glightbox',
    descPosition: 'right'
});


const gallery = document.getElementById('gallery');

if (gallery) {

    const galleryFile = gallery.dataset.gallery;

    fetch(`./${galleryFile}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Galerie konnte nicht geladen werden: ${response.status}`);
            }

            return response.text();
        })
        .then(html => {

            gallery.innerHTML = html;

            GLightbox({
                selector: '.glightbox',
                descPosition: 'right'
            });

        })
        .catch(error => {
            console.error(error);
        });
}