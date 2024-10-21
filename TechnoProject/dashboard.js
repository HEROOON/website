    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    // Move to the next slide
    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    // Move to the previous slide
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    // Update carousel to show the correct image
    function updateCarousel() {
        const newTransformValue = -currentIndex * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
    }

    // Event listeners for next/prev controls
    document.querySelector('.next').addEventListener('click', showNextImage);
    document.querySelector('.prev').addEventListener('click', showPrevImage);

    // Auto-slide every 3 seconds
    setInterval(showNextImage, 5000); // 3000 milliseconds = 3 seconds

