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

            // Search Functionality
            const searchInput = document.getElementById('searchInput');
            const cards = document.querySelectorAll('.card');
            if (searchInput && cards) {
                searchInput.addEventListener('input', function () {
                    const searchText = searchInput.value.toLowerCase();
                    cards.forEach(card => {
                        const cardText = card.textContent.toLowerCase();
                        card.style.display = cardText.includes(searchText) ? 'block' : 'none';
                    });
                });
            }

            window.addEventListener("load", function () {
                const loadingScreen = document.getElementById("loadingScreen");
                loadingScreen.style.opacity = "0";
                setTimeout(() => {
                    loadingScreen.style.display = "none";
                }, 500);
            });
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
            // Add this to your JavaScript
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
            function scrollToSection(sectionId) {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }

            console.log("%c🦇 I'm Batman. 🦇", "font-size: 20px; color: #000; background: #FFD700; padding: 10px; border-radius: 5px;");
            console.log("%cWelcome to PirateHive, where the Dark Knight keeps watch.", "font-size: 14px; color: #2c3e50;");
            console.log("%cRemember: 'It's not who I am underneath, but what I do that defines me.'", "font-size: 14px; color: #2c3e50; font-style: italic;");
