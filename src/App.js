import { useEffect, useState } from 'react';
import {
    ArrowUpRight,
    Code2,
    Database,
    GitFork,
    Globe,
    Mail,
    Menu,
    Server,
    Terminal,
    X,
} from 'lucide-react';

import './App.css';

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

const projects = [
    {
        title: 'Eat and Split Bill',
        image: '/eatnsplit.png',
        desc: 'A focused utility for splitting bills with friends and tracking what everyone owes.',
        tech: ['React', 'CSS'],
        live: 'https://friendseatandsplit.netlify.app/',
        github: 'https://github.com/IannohM',
    },
    {
        title: 'React Quiz App',
        image: '/quizapp.png',
        desc: 'Dynamic questions, a timer, and immediate feedback in a clear quiz experience.',
        tech: ['React', 'Node.js', 'CSS'],
        live: 'https://ultimate-react-quiz-app.netlify.app/',
        github: 'https://github.com/IannohM/mordern_quiz_app.git',
    },
    {
        title: 'Fast Pizza',
        image: '/pizza.png',
        desc: 'A streamlined pizza ordering flow with cart management and order tracking.',
        tech: ['React', 'Node.js', 'Tailwind'],
        live: 'https://fast-pizzas-app.netlify.app/',
        github: 'https://github.com/IannohM/fast-react-pizza.git',
    },
    {
        title: 'UsePopcorns',
        image: '/usepopcorns.png',
        desc: 'Movie discovery, ratings, and a personal watched list in one place.',
        tech: ['React', 'CSS'],
        live: 'https://usepopcons-netlify.netlify.app/',
        github: 'https://github.com/IannohM/usePopcorn.git',
    },
    {
        title: 'Frontend Youtube Clone',
        image: '/youtube.png',
        desc: 'A responsive video interface with search and a familiar content layout.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        live: 'https://ytouube-clone-front.netlify.app/',
        github: 'https://github.com/IannohM/youtube-clone.git',
    },
    {
        title: 'WorldWise',
        image: '/worldwise.png',
        desc: 'An interactive way to record the places you have visited around the world.',
        tech: ['React', 'CSS'],
        live: 'https://worldwise-netlify.netlify.app/',
        github: 'https://github.com/IannohM/WORLD_WISE.git',
    },
    {
        title: 'World Oasis',
        image: '/wild_oasis.png',
        desc: 'A  digital platform that lets guests view real-time availability, select specific cabins, and reserve stays instantly. For hotel staff, the software simplifies operations by managing reservations, updating seasonal pricing, and sending automated confirmations from a single dashboard.',
        tech: ['React', 'Styled Components', 'Supabase'],
        live: 'https://iannoh-wild-oasis.netlify.app/',
        github: 'https://github.com/IannohM/the_wild_oasis.git',
    },
];

const capabilities = [
    {
        icon: Code2,
        label: 'Clean code',
        text: 'Thoughtful interfaces and maintainable systems.',
    },
    {
        icon: Globe,
        label: 'Web applications',
        text: 'Fast, responsive experiences built for people.',
    },
    {
        icon: Database,
        label: 'Data systems',
        text: 'Reliable foundations for products that scale.',
    },
    {
        icon: Server,
        label: 'Backend development',
        text: 'Practical APIs and services that do the work.',
    },
];

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);

                if (visible) {
                    setActive(visible.target.id);
                }
            },
            {
                rootMargin: '-25% 0px -65% 0px',
            }
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    function goTo(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

        setMenuOpen(false);
    }

    return (
        <main>
            <header className="site-header">
                <div className="shell header-inner">
                    <button
                        className="wordmark"
                        onClick={() => goTo('home')}
                        aria-label="Go to home"
                    >
                        Ian<span>.dev</span>
                    </button>

                    <nav className="desktop-nav" aria-label="Main navigation">
                        {sections.map((item) => (
                            <button
                                key={item}
                                className={active === item ? 'active' : ''}
                                onClick={() => goTo(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    <a
                        className="header-cta"
                        href="mailto:mutukuianmusyoka@gmail.com"
                    >
                        Let's talk
                        <ArrowUpRight size={15} />
                    </a>

                    <button
                        className="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {menuOpen && (
                    <nav className="mobile-nav" aria-label="Mobile navigation">
                        {sections.map((item) => (
                            <button key={item} onClick={() => goTo(item)}>
                                {item}
                            </button>
                        ))}
                    </nav>
                )}
            </header>

            <section id="home" className="hero shell">
                <div className="hero-copy">
                    <p className="eyebrow">
                        <span className="status-dot" />
                        Available for select projects · Nairobi, Kenya
                    </p>

                    <h1>
                        Building useful things
                        <br />
                        <em>for the web.</em>
                    </h1>

                    <p className="hero-intro">
                        I'm Ian Musyoka, a full-stack developer who turns
                        thoughtful ideas into fast, dependable digital
                        experiences.
                    </p>

                    <div className="hero-actions">
                        <button
                            className="button button-dark"
                            onClick={() => goTo('projects')}
                        >
                            View selected work
                            <ArrowUpRight size={17} />
                        </button>

                        <a
                            className="text-link"
                            href="mailto:mutukuianmusyoka@gmail.com"
                        >
                            Start a conversation
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                </div>

                <div className="hero-aside">
                    <div className="portrait-frame">
                        <img src="/ian-portrait.png" alt="Ian Musyoka" />
                    </div>

                    <p className="hero-note">
                        Digital craft, from first sketch
                        <br />
                        to final interaction.
                    </p>
                </div>
            </section>

            <section id="about" className="section shell section-rule">
                <div className="section-label">01 / About</div>

                <div className="about-grid">
                    <div>
                        <h2>
                            Curious by nature.
                            <br />
                            <em>Precise by practice.</em>
                        </h2>
                    </div>

                    <div className="about-copy">
                        <p>
                            Passionate <strong>full-stack developer</strong>{' '}
                            from Kenya, building modern web experiences with
                            care and clarity.
                        </p>

                        <p>
                            I love turning ideas into reality with clean code,
                            considered UI, and scalable architecture. When I'm
                            not coding, I'm learning new technologies,
                            contributing to open source, or helping others grow.
                        </p>

                        <div className="social-links">
                            <a
                                href="https://github.com/IannohM"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <GitFork size={18} />
                                GitHub
                            </a>

                            <a href="mailto:mutukuianmusyoka@gmail.com">
                                <Mail size={18} />
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="section shell section-rule">
                <div className="section-label">02 / Capabilities</div>

                <div className="skills-heading">
                    <h2>
                        What I bring
                        <br />
                        <em>to the table.</em>
                    </h2>

                    <p>
                        From frontend polish to backend structure, I care about
                        the details that make products feel simple.
                    </p>
                </div>

                <div className="capability-list">
                    {capabilities.map(({ icon: Icon, label, text }, index) => (
                        <div className="capability" key={label}>
                            <span>0{index + 1}</span>

                            <Icon size={21} />

                            <div>
                                <h3>{label}</h3>
                                <p>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="stack-line">
                    <Terminal size={17} />
                    <span>Working stack</span>
                    <b>
                        React · Node.js · Laravel · MongoDB · Express · Tailwind
                        · MySQL
                    </b>
                </div>
            </section>

            <section id="projects" className="section shell section-rule">
                <div className="section-label">03 / Selected work</div>

                <div className="projects-heading">
                    <h2>
                        A few things
                        <br />
                        <em>I've made.</em>
                    </h2>

                    <p>
                        Small products, practical problems, and a lot of
                        learning along the way.
                    </p>
                </div>

                <div className="project-grid">
                    {projects.map((project, index) => (
                        <article className="project" key={project.title}>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="project-image"
                            >
                                <img
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                />

                                <span>
                                    View project
                                    <ArrowUpRight size={15} />
                                </span>
                            </a>

                            <div className="project-meta">
                                <div>
                                    <p className="project-number">
                                        0{index + 1}
                                    </p>

                                    <h3>{project.title}</h3>

                                    <p>{project.desc}</p>
                                </div>

                                <div className="project-bottom">
                                    <div className="tags">
                                        {project.tech.map((tech) => (
                                            <span key={tech}>{tech}</span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`View ${project.title} source code`}
                                    >
                                        <GitFork size={18} />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="contact" className="contact shell section-rule">
                <div className="section-label">04 / Contact</div>

                <div className="contact-content">
                    <p className="eyebrow">Have something in mind?</p>

                    <h2>
                        Let's make it
                        <br />
                        <em>worth building.</em>
                    </h2>

                    <a
                        className="contact-email"
                        href="mailto:mutukuianmusyoka@gmail.com"
                    >
                        mutukuianmusyoka@gmail.com
                        <ArrowUpRight size={21} />
                    </a>

                    <div className="contact-actions">
                        <a
                            className="flex gap-4 border-2 border-slate-950/70 px-4 py-3"
                            href="mailto:mutukuianmusyoka@gmail.com"
                        >
                            Get in touch
                            <ArrowUpRight size={17} />
                        </a>

                        <a
                            className="bg-emerald-600 px-4 py-4 text-white hover:bg-emerald-600/70"
                            href="/IAN_MUSYOKA_MUTUKU_Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer shell">
                <span>© {new Date().getFullYear()} Ian Musyoka</span>

                <span>Designed & built with intention</span>

                <button
                    onClick={() => goTo('home')}
                    className="text-white bg-slate-950/70 "
                >
                    Back to top ↑
                </button>
            </footer>
        </main>
    );
}

export default App;
