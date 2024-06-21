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

// Form validation and submission
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
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch("https://formspree.io/f/mrbzzeyb", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                alert("Form submitted successfully!");
                this.reset();
            } else {
                return response.json().then(data => {
                    alert(`Error: ${data.error || "Something went wrong"}`);
                });
            }
        })
        .catch(error => {
            alert(`Error: ${error.message}`);
        });
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
