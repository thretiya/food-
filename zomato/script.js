let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    // Ensure the index wraps around
    currentIndex = (index + totalSlides) % totalSlides;

    // Update the transform property to slide images
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Initialize the slider
showSlide(currentIndex);
