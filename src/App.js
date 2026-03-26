import React, { useState, useEffect } from 'react';
import {
    Github,
    Mail,
    ExternalLink,
    Code2,
    Database,
    Globe,
    Terminal,
    Menu,
    X,
    ChevronDown,
} from 'lucide-react';
import './App.css';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPos = window.scrollY + 120;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const { offsetTop, offsetHeight } = el;
                    if (
                        scrollPos >= offsetTop &&
                        scrollPos < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        setIsMenuOpen(false);
    };

    const projects = [
        {
            title: 'Eat and Split Bill',
            image: '/eatnsplit.png',
            desc: 'Real-time collaborative task management with drag & drop and live notifications',
            tech: ['React', 'css'],
            live: 'https://friendseatandsplit.netlify.app/',
            github: '#',
            gradient: 'from-violet-500 to-purple-600',
        },
        {
            title: 'React Quiz App',
            image: '/quizapp.png',
            desc: 'A sleek quiz app with dynamic questions, timer, and instant feedback built with React.',
            tech: ['React', 'Node.js', 'CSS'],
            live: 'https://app.netlify.com/projects/ultimate-react-quiz-app/overview',
            github: 'https://github.com/IannohM/mordern_quiz_app.git',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Pizza Menu',
            image: '/react-pizza.png',
            desc: 'A modern pizza menu app with real-time updates and order management.',
            tech: ['React', 'css'],
            live: 'https://pizza-menu-678.netlify.app/',
            github: 'https://github.com/IannohM/pizza_menu.git',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            title: 'UsePopcorns',
            image: '/usepopcorns.png',
            desc: 'A movie discovery app with personalized recommendations and social features.',
            tech: ['React', 'CSS'],
            live: 'https://usepopcons-netlify.netlify.app/',
            github: 'https://github.com/IannohM/usePopcorn.git',
            gradient: 'from-red-500 to-pink-500',
        },
        {
            title: 'Frontend Youtube Clone',
            image: '/youtube.png',
            desc: 'A responsive YouTube clone with video playback and search functionality.',
            tech: ['HTML', 'css', 'JavaScript'],
            live: 'https://ytouube-clone-front.netlify.app/',
            github: 'https://github.com/IannohM/youtube-clone.git',
            gradient: 'from-red-500 to-yellow-500',
        },
        {
            title: 'WorldWise',
            image: '/worldwise.png',
            desc: 'A travel blog platform with user-generated content and interactive maps',
            tech: ['React', 'CSS'],
            live: 'https://worldwise-netlify.netlify.app/',
            github: 'https://github.com/IannohM/WORLD_WISE.git',
            gradient: 'from-green-500 to-teal-500',
        },
    ];

    return (
        <>
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 md:py-5 flex justify-between items-center">
                    <h1 className="text-2xl sm:text-3xl font-bold">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Ian
                        </span>
                        <span className="text-white">.dev</span>
                    </h1>

                    <div className="hidden md:flex space-x-8 lg:space-x-10">
                        {['home', 'about', 'skills', 'projects', 'contact'].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item)}
                                    className={`capitalize text-base lg:text-lg font-medium transition-all ${
                                        activeSection === item
                                            ? 'text-cyan-400'
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                >
                                    {item}
                                </button>
                            )
                        )}
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 py-2">
                        {['home', 'about', 'skills', 'projects', 'contact'].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item)}
                                    className="block w-full text-left px-6 py-4 text-lg capitalize text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition"
                                >
                                    {item}
                                </button>
                            )
                        )}
                    </div>
                )}
            </nav>

            <section
                id="home"
                className="min-h-[100dvh] flex items-center justify-center px-5 sm:px-6 pt-20 pb-12 md:pt-24 text-center"
            >
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="relative mb-8">
                            <img
                                src="/IMG-20251223-WA0007.jpg"
                                alt="Ian Musyoka"
                                className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover object-top rounded-full border-4 border-cyan-500 shadow-2xl shadow-cyan-500/50 scale-110 md:scale-125"
                            />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-600 opacity-30 blur-xl"></div>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                            <span className="block text-gray-400 text-3xl sm:text-4xl md:text-5xl mb-3">
                                Hey, I'm
                            </span>
                            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Ian Musyoka
                            </span>
                        </h1>
                    </div>

                    <p className="text-2xl sm:text-3xl md:text-5xl text-gray-300 mb-6 md:mb-8">
                        Full-Stack Developer
                    </p>

                    <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 px-4">
                        I build fast, beautiful, and scalable web applications
                        using React, Node.js, Laravel, and more.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16">
                        <button
                            onClick={() => scrollTo('projects')}
                            className="px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-lg sm:text-xl font-bold hover:scale-105 active:scale-95 transition-all"
                        >
                            See My Work
                        </button>
                        <a
                            href="mailto:ianmusyoka.dev@gmail.com"
                            className="px-10 py-4 sm:py-5 border-2 border-cyan-500 rounded-full text-gray-300 text-lg sm:text-xl font-bold hover:bg-cyan-500/20 transition-all"
                        >
                            Hire Me
                        </a>
                    </div>

                    <ChevronDown
                        size={40}
                        className="text-cyan-400 mx-auto animate-bounce mt-8"
                    />
                </div>
            </section>

            <section id="about" className="py-20 md:py-24 px-5 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 text-gray-300 text-[17px] sm:text-lg leading-relaxed text-left">
                            <p>
                                Passionate{' '}
                                <strong className="text-cyan-400">
                                    full-stack developer
                                </strong>{' '}
                                from Kenya building modern web experiences.
                            </p>
                            <p>
                                I love turning ideas into reality with clean
                                code, beautiful UI, and scalable architecture.
                            </p>
                            <p>
                                When not coding, I'm learning new technologies,
                                contributing to open source, or helping others
                                grow as developers.
                            </p>

                            <div className="flex gap-8 pt-8">
                                <a
                                    href="https://github.com/IannohM"
                                    className="text-cyan-400 hover:scale-125 transition"
                                >
                                    <Github size={38} />
                                </a>
                                <a
                                    href="mailto:mutukuianmusyoka@gmail.com"
                                    className="text-cyan-400 hover:scale-125 transition"
                                >
                                    <Mail size={38} />
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 sm:gap-8">
                            {[
                                { icon: Code2, label: 'Clean Code' },
                                { icon: Globe, label: 'Web Apps' },
                                { icon: Database, label: 'Databases' },
                                { icon: Terminal, label: 'Backend' },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 sm:p-10 text-center border border-white/10 hover:border-cyan-500/50 transition"
                                >
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 p-5">
                                        <item.icon
                                            size={44}
                                            className="text-white mx-auto"
                                        />
                                    </div>
                                    <p className="text-xl sm:text-2xl font-bold text-white">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="skills"
                className="py-20 md:py-24 px-5 sm:px-6 bg-black/30"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            Tech Stack
                        </span>
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            {
                                name: 'React',
                                color: 'from-cyan-400 to-blue-600',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
                            },
                            {
                                name: 'Node.js',
                                color: 'from-green-400 to-emerald-600',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
                            },
                            {
                                name: 'Laravel',
                                color: 'from-red-500 to-rose-600',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
                            },
                            {
                                name: 'MongoDB',
                                color: 'from-green-500 to-lime-600',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
                            },
                            {
                                name: 'Express',
                                color: 'from-gray-400 to-gray-700',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
                            },
                            {
                                name: 'Tailwind',
                                color: 'from-teal-400 to-cyan-600',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
                            },
                            {
                                name: 'MySQL',
                                color: 'from-orange-400 to-red-600',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
                            },
                        ].map((tech) => (
                            <div
                                key={tech.name}
                                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500 pointer-events-none`}
                                ></div>

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-20 h-20 md:w-24 md:h-24 mb-6 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center p-4">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                                        {tech.name}
                                    </h3>
                                </div>

                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-cyan-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="py-20 md:py-24 px-5 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16">
                        <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all hover:scale-[1.02]"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition pointer-events-none`}
                                ></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-52 sm:h-60 object-cover"
                                />
                                <div className="p-6 sm:p-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm sm:text-base mb-6 line-clamp-3">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-cyan-400"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-6 text-sm sm:text-base">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
                                        >
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                                        >
                                            <Github size={18} /> Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="contact"
                className="py-20 md:py-24 px-5 sm:px-6 text-center"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Let's Work Together
                        </span>
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-lg mx-auto">
                        Got a project? Let's bring it to life!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <a
                            href="mailto:mutukuianmusyoka@gmail.com"
                            className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-lg font-bold hover:scale-105 transition"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="/IAN_MUSYOKA_CV.pdf"
                            className="px-10 py-5 border-2 border-cyan-500 rounded-full text-gray-300 text-lg font-bold hover:bg-cyan-500/10 transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </section>

            <footer className="py-12 text-center text-gray-500 border-t border-white/10 text-sm">
                © 2026 Ian Musyoka. Built with React, Tailwind & Love ❤️
            </footer>
        </>
    );
}

export default App;
