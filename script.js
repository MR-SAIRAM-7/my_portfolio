if (window.innerWidth < 1024) {
    document.body.style.width = '1024px';
    document.body.style.margin = '0 auto';
}

document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1200,  // Animation duration in milliseconds
        easing: 'ease-in-out',  // Easing function for the animations
        once: true  // Animation should only happen once during scroll
    });

    // GSAP Animations
    gsap.from(".hero h1", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });
    gsap.from(".hero p", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        delay: 0.5
    });

    // ScrollTrigger Animation for About Section
    gsap.from("#about", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power2.out"
    });

    // GSAP Animations for Project Items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: item,
            duration: 1,
            opacity: 0,
            y: 100,
            ease: "power3.out",
            delay: index * 0.3
        });
    });

    // GSAP Animations for About Me Section
    gsap.from(".section-title", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });
    gsap.from(".about-content h3", {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power2.out",
        delay: 0.5
    });
    gsap.from(".about-content p", {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: "power2.out",
        delay: 0.7
    });

    // Add Projects Dynamically
    const projectList = document.querySelector('.project-list');
    const projects = [
        { name: "E-commerce Website using AI", link: "https://github.com/MR-SAIRAM-7/E-commerce_website_using_ai" },
        { name: "Netflix Clone", link: "https://github.com/MR-SAIRAM-7/Netflix-clone" },
        { name: "Amazon Clone", link: "https://github.com/MR-SAIRAM-7/Amazon-clone" },
        { name: "Exploratory Data Analysis", link: "https://github.com/MR-SAIRAM-7/Exploratory_data_analysis" },
        { name: "Web Dev Practice", link: "https://github.com/MR-SAIRAM-7/web_dev_practice" },
        { name: "Online Food Business", link: "https://github.com/MR-SAIRAM-7/Online_Food_buisiness" }
    ];

    // ... (other code)

    // GSAP animations for project items
    gsap.from(".project-item", {
        scrollTrigger: ".project-item",
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power3.out",
        stagger: 0.2
    });

    // ... (other code)

    // GSAP animations
    gsap.from(".projects-title", {
        scrollTrigger: ".projects-section",
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".project-item", {
        scrollTrigger: ".project-item",
        duration: 1,
        x: (index) => index % 2 === 0 ? -100 : 100, // Alternate directions
        opacity: 0,
        ease: "power3.out",
        stagger: 0.2
    });

    // ... (other code)

    // GSAP animations for contact section
    gsap.from(".contact-section h2", {
        scrollTrigger: ".contact-section",
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".contact-info p", {
        scrollTrigger: ".contact-info",
        duration: 1,
        x: (index) => index % 2 === 0 ? -100 : 100,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.2
    });


    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
            <h3>${project.name}</h3>
            <a href="${project.link}" target="_blank">View on GitHub</a>
        `;
        projectList.appendChild(projectItem);
    });

    // GSAP Hover Effects for Project Items
    projectItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -10,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                ease: "power2.out",
                duration: 0.3
            });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                ease: "power2.in",
                duration: 0.3
            });
        });
    });
});

// Initialize AOS
AOS.init({
    duration: 1000, // Animation duration
    once: true // Whether animation should happen only once - while scrolling down
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
