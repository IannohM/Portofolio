import React, { useState, useEffect } from 'react';
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code2,
    Database,
    Globe,
    Terminal,
    Menu,
    X,
    ChevronDown,
    Sparkles,
} from 'lucide-react';
import './App.css';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPos = window.scrollY + 100;

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
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const projects = [
        {
            title: 'Eat and Split Bill',
            desc: 'Real-time collaborative task management with drag & drop and live notifications',
            tech: ['React', 'css'],
            live: 'https://friendseatandsplit.netlify.app/',
            github: '#',
            gradient: 'from-violet-500 to-purple-600',
        },
        {
            title: 'DevConnect',
            desc: 'Social platform for developers to share projects, blogs, and connect',
            tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
            live: '#',
            github: '#',
            gradient: 'from-blue-500 to-cyan-500',
        },
    ];

    return (
        <>
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <h1 className="text-3xl font-bold">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Ian
                        </span>
                        <span className="text-white">.dev</span>
                    </h1>

                    <div className="hidden md:flex space-x-10">
                        {['home', 'about', 'skills', 'projects', 'contact'].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item)}
                                    className={`capitalize text-lg font-medium transition-all ${
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
                        className="md:hidden text-white"
                    >
                        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
                        {['home', 'about', 'skills', 'projects', 'contact'].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item)}
                                    className="block w-full text-left px-8 py-5 text-xl capitalize text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                                >
                                    {item}
                                </button>
                            )
                        )}
                    </div>
                )}
            </nav>

            {/* Hero Section */}

            <section
                id="home"
                className="min-h-screen flex items-center justify-center px-6 text-center"
            >
                <div className="max-w-5xl">
                    <div className="flex flex-col items-center">
                        <div className="relative mb-8 mt-auto">
                            <img
                                src="/IMG-20251223-WA0007.jpg"
                                alt="Ian Musyoka"
                                className="w-40 h-40 object-top scale-125 md:w-48 md:h-48 rounded-full object-cover border-4 border-cyan-500 shadow-2xl shadow-cyan-500/50"
                            />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-600 opacity-30 blur-xl"></div>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center">
                            <span className="block text-gray-400 text-4xl md:text-5xl mb-4">
                                Hey, I'm
                            </span>
                            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Ian Musyoka
                            </span>
                        </h1>
                    </div>
                    <p className="text-3xl md:text-5xl text-gray-300 mb-8">
                        Full-Stack Developer
                    </p>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        I build fast, beautiful, and scalable web applications
                        using React, Node.js, Laravel, and more.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                        <button
                            onClick={() => scrollTo('projects')}
                            className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-xl font-bold hover:scale-110 transition"
                        >
                            See My Work
                        </button>
                        <a
                            href="mailto:ianmusyoka.dev@gmail.com"
                            className="px-12 py-5 border-2 border-cyan-500 rounded-full text-gray-300 text-xl font-bold hover:bg-cyan-500/20 transition"
                        >
                            Hire Me
                        </a>
                    </div>
                    <ChevronDown
                        size={48}
                        className="text-cyan-400 mx-auto animate-bounce"
                    />
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-bold mb-16">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="text-left space-y-6 text-gray-300 text-lg">
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
                                When not coding, I'm learning new tech,
                                contributing to open source, or helping others
                                grow as developers.
                            </p>
                            <div className="flex gap-8 pt-6">
                                <a
                                    href="https://github.com/IannohM"
                                    className="text-cyan-400 hover:scale-125 transition"
                                >
                                    <Github size={36} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/"
                                    className="text-cyan-400 hover:scale-125 transition"
                                >
                                    <Linkedin size={36} />
                                </a>
                                <a
                                    href="mailto:mutukuianmusyoka@gmail.com"
                                    className="text-cyan-400 hover:scale-125 transition"
                                >
                                    <Mail size={36} />
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { icon: Code2, label: 'Clean Code' },
                                { icon: Globe, label: 'Web Apps' },
                                { icon: Database, label: 'Databases' },
                                { icon: Terminal, label: 'Backend' },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 text-center border border-white/10 hover:border-cyan-500/50 transition"
                                >
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 p-5">
                                        <item.icon
                                            size={48}
                                            className="text-white mx-auto"
                                        />
                                    </div>
                                    <p className="text-2xl font-bold text-white">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills - Now with Logos! */}
            <section id="skills" className="py-24 px-6 bg-black/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold text-center mb-16">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            Tech Stack
                        </span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                                name: 'PHP',
                                color: 'from-purple-500 to-indigo-600',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
                            },
                            {
                                name: 'MySQL',
                                color: 'from-orange-400 to-red-600',
                                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
                            },
                        ].map((tech) => (
                            <div
                                key={tech.name}
                                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500 pointer-events-none`}
                                ></div>

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-24 h-24 mb-6 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center p-4 shadow-2xl">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-full h-full object-contain drop-shadow-2xl"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-wide">
                                        {tech.name}
                                    </h3>
                                </div>

                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-cyan-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold text-center mb-16">
                        <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all hover:scale-105"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition pointer-events-none`}
                                ></div>
                                <div className="p-8">
                                    <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                                        <Sparkles
                                            size={36}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-4 py-2 bg-white/10 rounded-full text-sm text-cyan-400"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-6">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                                        >
                                            <ExternalLink size={20} /> Live
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-400 hover:text-white"
                                        >
                                            <Github size={20} /> Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Let's Work Together
                        </span>
                    </h2>
                    <p className="text-2xl text-gray-400 mb-12">
                        Got a project? Let's bring it to life!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <a
                            href="mailto:mutukuianmusyoka@gmail.com"
                            className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-2xl font-bold hover:scale-110 transition"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="/IAN_MUSYOKA_CV.pdf"
                            className="px-12 py-6 border-2 border-cyan-500 rounded-full text-gray-300 text-2xl font-bold hover:bg-cyan-500/10 transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </section>

            <footer className="py-10 text-center text-gray-500 border-t border-white/10">
                © 2025 Ian Musyoka. Built with React, Tailwind & Love
            </footer>
        </>
    );
}

export default App;
