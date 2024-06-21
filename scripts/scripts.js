// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing effect for the hero section
const heroText = document.querySelector('#hero h2');
const text = "Welcome to Sitrix";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        heroText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let valid = true;

    if (name === '') {
        alert('Name is required.');
        valid = false;
    }

    if (email === '') {
        alert('Email is required.');
        valid = false;
    } else if (!validateEmail(email)) {
        alert('Invalid email address.');
        valid = false;
    }

    if (message === '') {
        alert('Message is required.');
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
        // Add actual form submission code here
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}


    const featuresContainer = document.querySelector('.features-grid');
    featuresContainer.innerHTML = features.map(feature => `
        <div class="feature">
            <img src="${feature.image}" alt="${feature.title}">
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
