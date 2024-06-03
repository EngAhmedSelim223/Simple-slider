var imgList=Array.from(document.querySelectorAll('.item img'));
var lightContainer = document.querySelector('.light-container');
var closeBtn = document.getElementById('close');
var lightItem = document.querySelector('.light-item');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var imgIndex;


for(var i = 0 ; i < imgList.length; i++){
    imgList[i].addEventListener('click', function(e){
        imgIndex = imgList.indexOf(e.target);
        lightContainer.classList.replace('d-none', 'd-flex');
        var imgSrc = e.target.getAttribute('src');
        lightItem.style.backgroundImage = `url(${imgSrc})`;
        lightItem.style.backgroundPosition = 'center';
        lightItem.style.objectFit = 'cover';

    });
}

closeBtn.addEventListener('click', closeSlide);

function closeSlide(){
    lightContainer.classList.replace('d-flex', 'd-none');
}

nextBtn.addEventListener('click', nextSlide);

function nextSlide(){
    imgIndex++;
    if(imgIndex == imgList.length){
        imgIndex = 0;
    }
    lightItem.style.backgroundImage = `url(${imgList[imgIndex].getAttribute('src')})`;
};

prevBtn.addEventListener('click', prevSlide);

function prevSlide(){
    imgIndex--;
    if(imgIndex < 0){
        imgIndex = imgList.length - 1;
    }
    lightItem.style.backgroundImage = `url(${imgList[imgIndex].getAttribute('src')})`;
};

lightContainer.addEventListener('click', function(e){
    if(e.target === lightContainer){
        closeSlide() init;
    }
});

document.addEventListener('keydown', function(e){
    if(e.key == 'Escape'){
        lightContainer.classList.replace('d-flex', 'd-none');
    }
    if(e.key == 'ArrowRight'){
        nextSlide();
    }
    if(e.key == 'ArrowLeft'){
        prevSlide();
    }
});