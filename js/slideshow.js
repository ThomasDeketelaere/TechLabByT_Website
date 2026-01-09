const imagePaths = [
    'assets/images/photo1.jpg',
    'assets/images/photo2.jpg',
    'assets/images/photo3.jpg',
    'assets/images/photo4.jpg',
    'assets/images/photo5.jpg',
    'assets/images/photo6.jpg',
    'assets/images/photo7.jpg',
    'assets/images/photo8.jpg'
];

// Preload images
const images = imagePaths.map(src => {
    const img = new Image();
    img.src = src;
    return img;
});

const slides = [
    document.querySelector('.slide1'),
    document.querySelector('.slide2')
];

let current = 0;
let visibleIndex = 0;

// Initialize first slide
slides[visibleIndex].style.backgroundImage = `url('${images[current].src}')`;
slides[visibleIndex].classList.add('visible');

function nextSlide() {
    // Determine next indices
    current = (current + 1) % images.length;
    const nextIndex = 1 - visibleIndex;

    // Set next image and fade it in
    slides[nextIndex].style.backgroundImage = `url('${images[current].src}')`;
    slides[nextIndex].classList.add('visible');

    // Fade out current
    slides[visibleIndex].classList.remove('visible');

    // Swap visible index
    visibleIndex = nextIndex;
}

// Switch every 200ms
setInterval(nextSlide, 350);