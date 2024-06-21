// scripts/main.js

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example of adding dynamic content
    const features = [
        {
            title: 'User Authentication',
            description: 'Secure login and profile management.',
            image: 'images/authentication.jpg'
        },
        {
            title: 'Puzzle Generation',
            description: 'Generate puzzles of varying difficulty.',
            image: 'images/puzzle.jpg'
        },
        {
            title: 'Leaderboard',
            description: 'Compete with others and track your progress.',
            image: 'images/leaderboard.jpg'
        },
        {
            title: 'Multiplayer Mode',
            description: 'Challenge your friends in real-time matches.',
            image: 'images/multiplayer.jpg'
        }
    ];

    const featuresContainer = document.querySelector('.features-grid');
    featuresContainer.innerHTML = features.map(feature => `
        <div class="feature">
            <img src="${feature.image}" alt="${feature.title}">
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');
});
