const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const mainDiv = document.getElementById('featured-img');
const img = mainDiv.querySelectorAll('img');
const closeBtn = document.createElement('button');
closeBtn.innerHTML="close";
closeBtn.className="close-btn";

img.forEach(item => {
    item.addEventListener('click', e => {
        lightbox.classList.add('active');
        const imgDiv = document.createElement('div');
        const tmp = document.createElement('img');
        tmp.src = item.src;
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }
        imgDiv.appendChild(closeBtn);
        imgDiv.appendChild(tmp);
        lightbox.appendChild(imgDiv);
    });
});

closeBtn.addEventListener('click', e => {
    lightbox.classList.remove('active');
});