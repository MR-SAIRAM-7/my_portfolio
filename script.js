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
