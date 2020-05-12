const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const mainDiv = document.getElementById('featured-img');
const img = mainDiv.querySelectorAll('img');

img.forEach(item => {
    item.addEventListener('click', e => {
        lightbox.classList.add('active');
        const tmp = document.createElement('img');
        tmp.src = item.src;
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(tmp);
    });
});

lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
});