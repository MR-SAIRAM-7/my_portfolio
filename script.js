// Set a maximum width for small screens
function adjustBodyWidth() {
    if (window.innerWidth < 1024) {
        document.body.style.width = '1024px';
        document.body.style.margin = '0 auto';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const welcomeNote = document.getElementById('welcome-note');
    const pageContent = document.getElementById('page-content');
    
    // Simulate loading delay (for the animation)
    setTimeout(() => {
        // Fade out the welcome note
        welcomeNote.style.opacity = '0';
        
        // After fade-out completes, remove the welcome note and show the page content
        setTimeout(() => {
            welcomeNote.style.display = 'none';
            pageContent.style.display = 'block'; // Show content
            pageContent.style.opacity = '1'; // Fade in the content
        }, 1000); // Wait for the fade-out transition to complete (1s)
        
    }, 1500); // Show the welcome note for 3 seconds before transitioning
});

// JavaScript to force desktop view on mobile devices
if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Set viewport to desktop width
    document.querySelector("meta[name=viewport]").setAttribute('content', 'width=1024');
}


// Run adjustBodyWidth on window resize
window.addEventListener('resize', adjustBodyWidth);

// Call the function initially to set the width
adjustBodyWidth();

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

// Initialize AOS animations
function initializeAOS() {
    AOS.init({
        duration: 1000, // Animation duration
        once: false // Repeat animations every time they come into view
    });
}

// Initialize GSAP animations with ScrollTrigger
function initializeGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Animations
    gsap.from(".hero h1", {
        duration: 1.5, y: -50, opacity: 0, ease: "power2.out"
    });
    gsap.from(".hero p", {
        duration: 1.5, y: 50, opacity: 0, ease: "power2.out", delay: 0.5
    });

    gsap.from("#about", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse"
        },
        duration: 1, y: 100, opacity: 0, ease: "power2.out"
    });

    gsap.from(".section-title", {
        scrollTrigger: {
            trigger: ".section-title",
            toggleActions: "play none none reverse"
        },
        duration: 1, y: -50, opacity: 0, ease: "power2.out"
    });

    gsap.from(".about-content h3", {
        scrollTrigger: {
            trigger: ".about-content",
            toggleActions: "play none none reverse"
        },
        duration: 1, x: -100, opacity: 0, ease: "power2.out", delay: 0.5
    });

    gsap.from(".about-content p", {
        scrollTrigger: {
            trigger: ".about-content",
            toggleActions: "play none none reverse"
        },
        duration: 1, x: 100, opacity: 0, ease: "power2.out", delay: 0.7
    });

    gsap.from(".projects-title", {
        scrollTrigger: {
            trigger: ".projects-section",
            toggleActions: "play none none reverse"
        },
        duration: 1, y: -50, opacity: 0, ease: "power3.out"
    });

    gsap.from(".project-item", {
        scrollTrigger: {
            trigger: ".project-item",
            toggleActions: "play none none reverse"
        },
        duration: 1, opacity: 0, y: 100, ease: "power3.out", stagger: 0.2
    });

    // GSAP and jQuery Animations for Experience Section
    function initializeExperienceAnimations() {
        gsap.from(".experience-title", {
            scrollTrigger: {
                trigger: ".experience-section",
                toggleActions: "play none none reverse"
            },
            duration: 1, y: -50, opacity: 0, ease: "power3.out"
        });

        gsap.from(".experience-item", {
            scrollTrigger: {
                trigger: ".experience-item",
                toggleActions: "play none none reverse"
            },
            duration: 1, opacity: 0, y: 100, ease: "power3.out", stagger: 0.2
        });

        // jQuery hover effects
        $('.experience-item').hover(
            function () {
                $(this).animate({ top: "-10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }, 300);
            },
            function () {
                $(this).animate({ top: "0px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }, 300);
            }
        );
    }

    gsap.from(".contact-section h2", {
        scrollTrigger: {
            trigger: ".contact-section",
            toggleActions: "play none none reverse"
        },
        duration: 1, y: -50, opacity: 0, ease: "power3.out"
    });

    gsap.from(".contact-info p", {
        scrollTrigger: {
            trigger: ".contact-info",
            toggleActions: "play none none reverse"
        },
        duration: 1, x: (index) => index % 2 === 0 ? -100 : 100, opacity: 0, ease: "power3.out", stagger: 0.2
    });

    gsap.from(".part1", {
        scrollTrigger: {
            trigger: ".quote-section",
            toggleActions: "play none none reverse"
        },
        duration: 1.5, x: -100, opacity: 0, ease: "power3.out"
    });

    gsap.from(".part2", {
        scrollTrigger: {
            trigger: ".quote-section",
            toggleActions: "play none none reverse"
        },
        duration: 1.5, y: 100, opacity: 0, ease: "power3.out"
    });

    gsap.from(".part3", {
        scrollTrigger: {
            trigger: ".quote-section",
            toggleActions: "play none none reverse"
        },
        duration: 1.5, x: 100, opacity: 0, ease: "power3.out"
    });
}

// GSAP Hover Effects for Project Items
function setupHoverEffects() {
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

$(document).ready(function() {
    // Fade in experience items on scroll
    $(window).scroll(function() {
        $('.experience-item').each(function() {
            var position = $(this).offset().top;
            var windowHeight = $(window).scrollTop() + $(window).height();
            
            if (position < windowHeight) {
                $(this).addClass('fadeInUp');
            }
        });
    });

    // Trigger scroll event initially to show items in view
    $(window).trigger('scroll');
});



document.addEventListener("DOMContentLoaded", function () {
    adjustBodyWidth();
    setupSmoothScrolling();
    initializeAOS();
    initializeGSAPAnimations();
    setupHoverEffects();
    addProjects();
    initializeExperienceAnimations(); // Add Experience Section Animations
});
