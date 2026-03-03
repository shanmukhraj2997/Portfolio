// Updated and categorized skills data
const categorizedSkills = {
    'Languages': [
        { name: "C", level: 95, icon: 'fa-solid fa-code' },
        { name: "C++", level: 85, icon: 'fa-solid fa-code' },
        { name: "JavaScript", level: 80, icon: 'fa-brands fa-js' },
        { name: "PHP", level: 75, icon: 'fa-brands fa-php' },
        { name: "Python", level: 80, icon: 'fa-brands fa-python' }
    ],
    'Web Technologies': [
        { name: "HTML", level: 90, icon: 'fa-brands fa-html5' },
        { name: "CSS", level: 88, icon: 'fa-brands fa-css3-alt' },
        { name: "Tailwind CSS", level: 85, icon: 'fa-solid fa-wind' }
    ],
    'Frameworks': [
        { name: "React", level: 70, icon: 'fa-brands fa-react' },
        { name: "Node.js", level: 65, icon: 'fa-brands fa-node-js' }
    ],
    'Tools & Platforms': [
        { name: "GitHub", level: 90, icon: 'fa-brands fa-github' },
        { name: "VS Code", level: 95, icon: 'fa-solid fa-laptop-code' },
        { name: "MongoDB", level: 60, icon: 'fa-solid fa-database' },
        { name: "MySQL (Basics)", level: 50, icon: 'fa-solid fa-database' },
        { name: "WordPress", level: 55, icon: 'fa-brands fa-wordpress' }
    ],
    'Soft Skills': [
        'Problem-Solving',
        'Adaptability',
        'Communication',
        'Team Collaboration'
    ]
};

const projects = [
    {
        title: "MovinAir",
        tech: "WordPress",
        desc: "Replicated the MovinAir website design and functionality using WordPress, closely matching the original layout, typography, and user experience.",
        impact: "Customized themes and plugins to implement dynamic content management and interactive features, ensuring smooth rendering across all devices.",
        link: "https://sunnymoveinair.free.nf/",
    },
    {
        title: "LocalEats",
        tech: "React, Node.js, MongoDB, Tailwindcss",
        desc: "Engineered a full-stack web application inspired by Swiggy, enabling discovery and ordering from local stores and shops.",
        impact: "Architected a Node.js backend with MongoDB for efficient data management, optimizing scalability through modular component design.",
        link: "https://github.com/shanmukhraj2997/Local-Eats",
    },
    {
        title: "Material Management During Disaster",
        tech: "Tailwind CSS, PHP, JavaScript",
        desc: "Crafted a web-based disaster relief management platform to monitor, allocate, and track essential resources in real time.",
        impact: "Elevated tracking accuracy and distribution efficiency by 30% through reduction of manual errors and refinement of response workflows.",
        link: "https://github.com/Demon-sunny/Mgmt-of-material-during-Disaster--receipt-availability-movement-and-its-receipt-to-the-last-person",
    },
    {
        title: "Secure Authentication Module",
        tech: "C++",
        desc: "Engineered a multi-layer authentication mechanism integrating OTP generation, CAPTCHA verification, and passkey validation.",
        impact: "Strengthened system security by over 35% in controlled test scenarios, mitigating potential authentication vulnerabilities.",
        link: "https://github.com/Demon-sunny/Secure-Authentication-Module-",
    },
    {
        title: "Currency Converter Bot",
        tech: "HTML, CSS, PHP",
        desc: "Developed an interactive currency conversion tool delivering accurate, real-time exchange computations with a smooth interface.",
        impact: "Optimized backend computations, accelerating processing speed and enhancing overall system reliability.",
        link: "https://github.com/Demon-sunny/Currency-Converter-Bot",
    },
];

const certificates = [
    { name: "Introduction to Internet of Things - NPTEL", link: "https://drive.google.com/file/d/1MtOpGEW94L7aaLKwpshV1USGZQokldXX/preview" },
    { name: "Generative AI Workshop - AGI Scholars", link: "https://drive.google.com/file/d/1-wkm2WY6Ijow61pbFFJG4wN1cowDLefO/preview" },
    { name: "TCP/IP and Advanced Topics - Coursera", link: "https://drive.google.com/file/d/1-1gbhbfBQDCv5vc6Fb6kORgmD9ESGdIz/preview" },
    { name: "Introduction to Hardware and Operating Systems - Coursera", link: "https://drive.google.com/file/d/10iRVYhi8oj4zZDNdVi7j5zf6rIDUmTMB/preview" },
    { name: "The Bits and Bytes of Computer Networking - Coursera", link: "https://drive.google.com/file/d/10gcFa0sqlAVc5SDL0HpHR3NmhELvtU5H/preview" },
];

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const certModal = document.getElementById('cert-modal');
    const certPanel = document.getElementById('cert-panel');
    const certIframe = document.getElementById('cert-iframe');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const certsGrid = document.getElementById('certs-grid');

    // --- 1. Dark Mode Logic ---
    const initializeTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        const isDark = storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    };

    const toggleTheme = () => {
        const isDark = root.classList.contains('dark');
        if (isDark) {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    themeToggleBtn.addEventListener('click', toggleTheme);
    initializeTheme();

    // --- 2. Dynamic Content Injection (Skills, Projects, Certs) ---
    const setupSkills = () => {
        const createSkillBar = (skill) => `
            <div class="mb-6 group">
                <div class="flex justify-between mb-2 text-sm font-bold text-slate-700 dark:text-slate-200 uppercase tracking-tight">
                    <span>${skill.name}</span>
                    <span class="text-blue-600 dark:text-blue-400">${skill.level}%</span>
                </div>
                <div class="w-full h-2.5 bg-slate-200 dark:bg-slate-700/50 rounded-full overflow-hidden p-0.5">
                    <div class="h-full rounded-full progress-bar transition-all duration-1000 ease-out" style="width: 0%;" data-level="${skill.level}"></div>
                </div>
            </div>
        `;

        document.getElementById('list-languages').innerHTML = categorizedSkills['Languages'].map(s => createSkillBar(s)).join('');
        document.getElementById('list-web-tech').innerHTML = categorizedSkills['Web Technologies'].map(s => createSkillBar(s)).join('');
        document.getElementById('list-frameworks').innerHTML = categorizedSkills['Frameworks'].map(s => createSkillBar(s)).join('');

        const listTools = document.getElementById('list-tools');
        listTools.innerHTML = categorizedSkills['Tools & Platforms'].map(tool => `
            <span class="glass-card hover:border-blue-500 transition-all duration-300 text-slate-700 dark:text-slate-200 py-2 px-5 rounded-xl text-sm font-bold shadow-sm flex items-center gap-2">
                <i class="${tool.icon} text-blue-500"></i> ${tool.name}
            </span>
        `).join('');

        const listSoftSkills = document.getElementById('list-soft-skills');
        listSoftSkills.innerHTML = categorizedSkills['Soft Skills'].map(skill => `
            <span class="glass-card hover:border-emerald-500 transition-all duration-300 text-slate-700 dark:text-slate-200 py-2 px-5 rounded-xl text-sm font-bold shadow-sm flex items-center gap-2">
                <i class="fa-solid fa-check-circle text-emerald-500"></i> ${skill}
            </span>
        `).join('');
    };

    // Inject Project Cards into Slider
    const projectsSlider = document.getElementById('projects-slider');
    if (projectsSlider) {
        projectsSlider.innerHTML = projects.map(project => `
            <div class="project-slide">
                <div
                    class="group glass-card rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden relative h-full"
                    onclick="window.open('${project.link}', '_blank')"
                >
                    <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-500"></div>
                    <div class="relative z-10 flex flex-col h-full">
                        <h3 class="text-2xl font-black mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors uppercase tracking-tighter">${project.title}</h3>
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${project.tech.split(', ').map(t => `<span class="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 rounded-md">${t}</span>`).join('')}
                        </div>
                        <p class="text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow">${project.desc}</p>
                        <div class="pt-6 border-t border-slate-200 dark:border-slate-700/50 mt-auto">
                            <p class="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-start gap-2">
                                <i class="fa-solid fa-chart-line mt-1"></i>
                                <span><span class="uppercase text-[10px] tracking-widest block opacity-70">Impact</span> ${project.impact}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Slider Navigation Logic
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');

    if (projectsSlider && prevBtn && nextBtn) {
        const getScrollAmount = () => {
            const firstSlide = projectsSlider.querySelector('.project-slide');
            return firstSlide ? firstSlide.offsetWidth + 32 : projectsSlider.offsetWidth;
        };

        nextBtn.addEventListener('click', () => {
            projectsSlider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            projectsSlider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });

        const toggleArrows = () => {
            const isAtStart = projectsSlider.scrollLeft <= 5;
            const isAtEnd = projectsSlider.scrollLeft + projectsSlider.clientWidth >= projectsSlider.scrollWidth - 5;

            prevBtn.style.opacity = isAtStart ? '0' : '1';
            prevBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';
            prevBtn.style.transform = isAtStart ? 'translateY(-50%) translateX(-20px)' : 'translateY(-50%) translateX(-8px)';

            nextBtn.style.opacity = isAtEnd ? '0' : '1';
            nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
            nextBtn.style.transform = isAtEnd ? 'translateY(-50%) translateX(20px)' : 'translateY(-50%) translateX(8px)';
        };

        projectsSlider.addEventListener('scroll', toggleArrows);
        window.addEventListener('resize', toggleArrows);
        // Initial check after content injection
        setTimeout(toggleArrows, 100);
    }

    // Inject Certification Buttons
    certsGrid.innerHTML = certificates.map(cert => `
        <button
            data-cert-link="${cert.link}"
            class="cert-button text-left p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition text-sm md:text-base w-full flex items-center justify-between"
            style="background-color: var(--bg-card);" 
        >
            <span class="truncate text-slate-700 dark:text-slate-200 font-bold">📜 ${cert.name}</span>
            <span class="text-blue-500 text-xs font-semibold shrink-0 ml-2">VIEW</span>
        </button>
    `).join('');

    // --- 3. Modal/Panel Logic ---
    const openCertModal = (link) => {
        certIframe.src = link;
        certModal.classList.remove('hidden');
        setTimeout(() => {
            certPanel.classList.remove('translate-x-full');
            certPanel.classList.add('translate-x-0');
        }, 10);
    };

    const closeCertModal = () => {
        certPanel.classList.remove('translate-x-0');
        certPanel.classList.add('translate-x-full');
        setTimeout(() => {
            certModal.classList.add('hidden');
            certIframe.src = '';
        }, 300);
    };

    // Global listener for any .cert-button (Training + Certifications)
    document.addEventListener('click', (e) => {
        const button = e.target.closest('.cert-button');
        if (!button) return;
        const link = button.getAttribute('data-cert-link');
        if (link) openCertModal(link);
    });

    closeModalBtn.addEventListener('click', closeCertModal);
    certModal.addEventListener('click', (e) => {
        if (e.target.id === 'cert-modal') {
            closeCertModal();
        }
    });

    // --- 4. Intersection Observer for Scroll Reveal, Skills, and Sidebar ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Specialized logic for progress bars
                if (entry.target.id === 'skills') {
                    document.querySelectorAll('.progress-bar').forEach(bar => {
                        const level = bar.getAttribute('data-level');
                        setTimeout(() => {
                            bar.style.width = `${level}%`;
                        }, 200);
                    });
                }
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const sections = ['about', 'skills', 'projects', 'training', 'certs', 'education', 'contact'];
    const sidebarLinks = sections
        .map(id => document.querySelector(`a[data-section-id="${id}"]`))
        .filter(Boolean);

    const sidebarObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.id;
                    sidebarLinks.forEach(link => {
                        const isActive = link.getAttribute('data-section-id') === currentId;
                        link.classList.toggle('active', isActive);
                    });
                }
            });
        },
        { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );

    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) sidebarObserver.observe(element);
    });

    // Execute initial setup
    setupSkills();
});
