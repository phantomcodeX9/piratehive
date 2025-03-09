document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const sidebarContainer = document.querySelector('.sidebar-container');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const searchInput = document.getElementById('searchInput');

    // Handle scroll event
    function handleScroll() {
        hamburger.classList.toggle('hidden', window.scrollY > 0);
    }

    // Toggle sidebar visibility
    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        sidebarContainer.classList.toggle('active');
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!sidebarContainer.contains(event.target) && !hamburger.contains(event.target)) {
            sidebarContainer.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Scroll to section when sidebar link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
                sidebarContainer.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Search functionality
    searchInput.addEventListener('input', function (event) {
        const searchText = event.target.value.toLowerCase();
        sidebarLinks.forEach(link => {
            const linkText = link.textContent.toLowerCase();
            link.parentElement.style.display = linkText.includes(searchText) ? 'block' : 'none';
        });
    });

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
// Set the date we're counting down to
const countdownDate = new Date("March 9, 2025 10:45:00").getTime();

// Update the countdown every second
const countdownFunction = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with corresponding IDs
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "The update is live! 🎉";
    }
}, 1000);

const carouselContainer = document.querySelector('.carousel-container');
const items = carouselContainer.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentIndex = 0;

function showItem(index) {
    const offset = -index * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
    stopVideos();
}

function showNextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}

function showPrevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
}

function stopVideos() {
    items.forEach(item => {
        const video = item.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });
}

prevButton.addEventListener('click', showPrevItem);
nextButton.addEventListener('click', showNextItem);

showItem(currentIndex);
            const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
            let konamiIndex = 0;

            document.addEventListener("keydown", (event) => {
                if (event.key === konamiCode[konamiIndex]) {
                    konamiIndex++;
                    if (konamiIndex === konamiCode.length) {
                        alert("🦇 You found the Dark Knight's secret! Redirecting to the Batcave... 🦇");
                        window.location.href = "https://phantomcodex9.github.io/X9BETA/"; // Replace with your link
                    }
                } else {
                    konamiIndex = 0; // Reset if the sequence is broken
                }
            });
