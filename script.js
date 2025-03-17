// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

// Close Sidebar when clicking outside
document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.querySelector(".menu-btn");
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});

// Improved Search Functionality
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');
const noResultsMessage = document.getElementById('noResultsMessage');

if (searchInput && cards) {
    searchInput.addEventListener('input', function () {
        const searchText = searchInput.value.trim().toLowerCase(); // Trim and lowercase search term
        let hasResults = false; // Track if any results are found

        cards.forEach(card => {
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDescription = card.querySelector('p').textContent.toLowerCase();
            const cardKeywords = card.getAttribute('data-keywords')?.toLowerCase() || ''; // Get keywords
            const cardText = cardTitle + " " + cardDescription + " " + cardKeywords; // Combine all searchable text

            // Highlight matching text
            if (cardText.includes(searchText)) {
                card.style.display = 'block';
                hasResults = true; // At least one result found

                // Highlight matching text in title and description
                card.querySelector('h3').innerHTML = cardTitle.replace(
                    new RegExp(searchText, 'gi'),
                    (match) => `<span class="highlight">${match}</span>`
                );
                card.querySelector('p').innerHTML = cardDescription.replace(
                    new RegExp(searchText, 'gi'),
                    (match) => `<span class="highlight">${match}</span>`
                );
            } else {
                card.style.display = 'none'; // Hide non-matching cards
            }
        });

        // Show/hide no results message
        if (hasResults || searchText === "") {
            noResultsMessage.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'block';
        }
    });
}

// Loading Screen
window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 500);
});

// Konami Code Easter Egg
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let konamiIndex = 0;

document.addEventListener("keydown", (event) => {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            alert("🦇 You found the Dark Knight's secret! Redirecting to the Batcave... 🦇");
            window.location.href = "https://phantomcodex9.github.io/phantom/"; // Replace with your link
        }
    } else {
        konamiIndex = 0; // Reset if the sequence is broken
    }
});

// Back to Top Button
window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll to Section Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Attach Event Listeners to Buttons
document.querySelectorAll('.quick-access-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('onclick').match(/'([^']+)'/)[1]; // Extract section ID from onclick
        scrollToSection(sectionId);
    });
});

// Console Log Easter Egg
console.log("%c🦇 I'm Batman. 🦇", "font-size: 20px; color: #000; background: #FFD700; padding: 10px; border-radius: 5px;");
console.log("%cWelcome to PirateHive, where the Dark Knight keeps watch.", "font-size: 14px; color: #2c3e50;");
console.log("%cRemember: 'It's not who I am underneath, but what I do that defines me.'", "font-size: 14px; color: #2c3e50; font-style: italic;");
