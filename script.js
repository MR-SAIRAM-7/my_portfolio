// Set a maximum width for small screens
function adjustBodyWidth() {
    if (window.innerWidth < 1024) {
        document.body.style.width = '1024px';
        document.body.style.margin = '0 auto';
    }
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize GSAP and AOS animations
function initializeAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Animations
    gsap.from(".hero h1", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".hero p", { duration: 1.5, y: 50, opacity: 0, ease: "power2.out", delay: 0.5 });

    gsap.from("#about", {
        scrollTrigger: { trigger: "#about", start: "top 80%", end: "top 30%", toggleActions: "play none none reverse" },
        duration: 1, y: 100, opacity: 0, ease: "power2.out"
    });

    gsap.from(".section-title", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".about-content h3", { duration: 1, x: -100, opacity: 0, ease: "power2.out", delay: 0.5 });
    gsap.from(".about-content p", { duration: 1, x: 100, opacity: 0, ease: "power2.out", delay: 0.7 });

    gsap.from(".projects-title", { scrollTrigger: ".projects-section", duration: 1, y: -50, opacity: 0, ease: "power3.out" });
    gsap.from(".project-item", { scrollTrigger: ".project-item", duration: 1, opacity: 0, y: 100, ease: "power3.out", stagger: 0.2 });

    gsap.from(".contact-section h2", { scrollTrigger: ".contact-section", duration: 1, y: -50, opacity: 0, ease: "power3.out" });
    gsap.from(".contact-info p", { scrollTrigger: ".contact-info", duration: 1, x: (index) => index % 2 === 0 ? -100 : 100, opacity: 0, ease: "power3.out", stagger: 0.2 });

    // GSAP Hover Effects for Project Items
    document.querySelectorAll('.project-item').forEach((item) => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { y: -10, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", ease: "power2.out", duration: 0.3 });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { y: 0, boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", ease: "power2.in", duration: 0.3 });
        });
    });
}

// Add Projects Dynamically
function addProjects() {
    const projectList = document.querySelector('.project-list');
    const projects = [
        { name: "E-commerce Website using AI", link: "https://github.com/MR-SAIRAM-7/E-commerce_website_using_ai" },
        { name: "Netflix Clone", link: "https://github.com/MR-SAIRAM-7/Netflix-clone" },
        { name: "Amazon Clone", link: "https://github.com/MR-SAIRAM-7/Amazon-clone" },
        { name: "Exploratory Data Analysis", link: "https://github.com/MR-SAIRAM-7/Exploratory_data_analysis" },
        { name: "Web Dev Practice", link: "https://github.com/MR-SAIRAM-7/web_dev_practice" },
        { name: "Online Food Business", link: "https://github.com/MR-SAIRAM-7/Online_Food_buisiness" }
    ];

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
            <h3>${project.name}</h3>
            <a href="${project.link}" target="_blank">View on GitHub</a>
        `;
        projectList.appendChild(projectItem);
    });
}

// Initialize AOS
function initializeAOS() {
    AOS.init({
        duration: 1000, // Animation duration
        once: true // Whether animation should happen only once - while scrolling down
    });
}

// Document ready
document.addEventListener("DOMContentLoaded", function () {
    adjustBodyWidth();
    setupSmoothScrolling();
    initializeAOS();
    initializeAnimations();
    addProjects();
});


// Initialize AOS
AOS.init();

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Example GSAP animations with ScrollTrigger
gsap.from(".part1", {
  scrollTrigger: ".quote-section", // Animation triggered by scrolling
  duration: 1.5,
  x: -100,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".part2", {
  scrollTrigger: ".quote-section",
  duration: 1.5,
  y: 100,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".part3", {
  scrollTrigger: ".quote-section",
  duration: 1.5,
  x: 100,
  opacity: 0,
  ease: "power3.out"
});