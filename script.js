let currentIndex = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

document.getElementById('next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

document.getElementById('prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

// Auto-sliding feature
setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000); // Change slide every 3 seconds

// Initial display
showSlide(currentIndex);