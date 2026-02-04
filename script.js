document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Mobile Navigation Toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Hamburger animation
        const spans = hamburger.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Smooth Scrolling for anchor links (if browser doesn't support scroll-behavior: smooth in CSS)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') return; // Ignore filler links

            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // PROJECT DATA (Extracted from Resume)
    const projects = [
        {
            id: 'ismart',
            title: 'Ismart ERP',
            tech: 'Flutter, Dart, REST API, SQLite',
            image: 'assets/project_ismart.png',
            link: 'https://github.com/ARUNTHOMAS3/ismart',
            points: [
                'Developed a Flutter-based ERP application with modules for approvals, reporting, and financial tracking.',
                'Implemented multi-stage authentication with URL validation and a dashboard featuring searchable grids.',
                'Built core modules including Quick View, Approvals, and PDF-enabled Reports with REST API data handling.',
                'Enhanced UI/UX using Lottie animations, custom themes, and PDF generation.'
            ]
        },
        {
            id: 'hanuven',
            title: 'Hanuven App',
            tech: 'Flutter, Dart, Mobile UI',
            image: 'assets/project_hanuven.png',
            link: 'https://github.com/ARUNTHOMAS3/HANUVEN',
            video: 'https://youtube.com/shorts/EJ6ojM2jkmY?feature=share',
            points: [
                'Collaborated in designing and developing the user interface of a mobile application using Flutter.',
                'Ensured responsive and intuitive UI across multiple devices.',
                'Implemented reusable widgets and optimized UI components to enhance performance and maintainability.',
                'Contributed to a seamless user experience through polished design implementations.'
            ]
        },
        {
            id: 'famous-places',
            title: 'Famous Places Explorer',
            tech: 'Flutter, Firebase, Maps API, SQLite',
            image: 'assets/project_famous_places.png',
            link: 'https://github.com/ARUNTHOMAS3/Famous-Places-Explorer',
            points: [
                'Developed a cross-platform Flutter app to discover and save tourist destinations with interactive maps.',
                'Integrated Maps API for location markers and REST APIs for dynamic place search.',
                ' utilized Firebase Firestore for real-time cloud data and SQLite for efficient offline storage.',
                'Built a robust UI with detailed place views, image handling, and structured data models.'
            ]
        },
        {
            id: 'event-tracking',
            title: 'Location-Based Event System',
            tech: 'MERN Stack (MongoDB, Express, React, Node)',
            image: 'assets/project_places.png',
            link: 'https://github.com/ARUNTHOMAS3/Location-based-event-tracking-system',
            points: [
                'Developed a web application to input, process, and display event details like type, location, and date.',
                'Used Node.js and MongoDB for backend processing and efficient data management.',
                'Built a React-based front end to dynamically display and filter event data.',
                'Implemented location services to track and categorize events geographically.'
            ]
        },
        {
            id: 'bin',
            title: 'Smart Segregation Bin',
            tech: 'Arduino, Sensors (Ultrasonic/Moisture)',
            image: 'assets/project_bin.png',
            link: null, // No code link for this project
            points: [
                'Created an IoT system to automatically separate waste using ultrasonic and moisture sensors.',
                'Ultrasonic sensors detect hand movement to open the lid automatically.',
                'Moisture sensors identify waste type (biodegradable vs non-biodegradable).',
                'Servo motors control bin lids and direct waste to appropriate compartments.'
            ]
        },
        {
            id: 'adhd',
            title: 'ADHD Prediction System',
            tech: 'CNN, AdaBoost, Random Forest',
            image: 'assets/project_adhd.png',
            link: 'https://github.com/ARUNTHOMAS3/MINI-PROJECT',
            points: [
                'Developed a machine learning-based system to predict ADHD using neurological and behavioral data.',
                'Implemented CNNs for feature extraction and pattern recognition from image/sequence data.',
                'Applied ensemble learning methods (AdaBoost, Random Forest) to enhance prediction accuracy.'
            ]
        },
        {
            id: 'hall',
            title: 'Hall of Fame',
            tech: 'MERN Stack, Django',
            image: 'assets/project_hall.png',
            link: 'https://github.com/ARUNTHOMAS3/Hall-of-Fame',
            points: [
                'Developed an interactive Hall of Fame web page using MERN stack and Django.',
                'Implemented responsive React-based UI for easy post creation, viewing, and filtering.',
                'Integrated Django backend for secure admin interface and content management.',
                'Utilized MongoDB for scalable storage of awardee data.'
            ]
        }
    ];

    // MODAL LOGIC
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalTech = document.getElementById('modal-tech');
    const modalImg = document.getElementById('modal-img');
    const modalPoints = document.getElementById('modal-points');
    const modalGithub = document.getElementById('modal-github');
    const modalVideo = document.getElementById('modal-video');
    const projectCards = document.querySelectorAll('.project-card');

    // Open Modal
    projectCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const project = projects[index]; // Map card index to project array

            modalTitle.textContent = project.title;
            modalTech.textContent = project.tech;
            modalImg.style.backgroundImage = `url('${project.image}')`;

            // Update GitHub Link
            if (project.link) {
                modalGithub.href = project.link;
                modalGithub.style.display = 'inline-flex';
            } else {
                modalGithub.style.display = 'none';
            }

            // Update Video Link
            if (project.video) {
                modalVideo.href = project.video;
                modalVideo.style.display = 'inline-flex';
            } else {
                modalVideo.style.display = 'none';
            }

            // Clear and populate points
            modalPoints.innerHTML = '';
            project.points.forEach(point => {
                const li = document.createElement('li');
                li.textContent = point;
                modalPoints.appendChild(li);
            });

            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Disable scroll
        });
    });

    // Close Modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Enable scroll
    });

    // Close on clicking outside
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Simple scroll animation for elements
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Fade in effect for sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
});
