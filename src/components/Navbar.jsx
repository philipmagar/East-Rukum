import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
    const { lang, toggleLang } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/places", label: "Visit" },
        { to: "/villages", label: "Villages" },
        { to: "/culture", label: "Culture" },
        { to: "/contact", label: "Contact" }
    ];

    return (
        <motion.header
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>

            {/* Scroll Progress Bar */}
            <motion.div className="scroll-progress-bar" style={{ scaleX }} />

            <Link to="/" className="logo-container" onClick={() => setIsOpen(false)}>
                <motion.div
                    className="logo-icon"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                ></motion.div>
                <motion.div
                    className="logo"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    East Rukum
                </motion.div>
            </Link>

            <div className="nav-controls">
                <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        {navItems.map((link, index) => (
                            <motion.li
                                key={link.label}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 * index + 0.3, duration: 0.6 }}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) => isActive ? "active-link" : ""}
                                    onClick={() => setIsOpen(false)}>
                                    {link.label}
                                    <motion.div className="nav-underline" />
                                </NavLink>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
                <div className="navbar-actions">
                    <motion.button
                        id="langToggle"
                        onClick={toggleLang}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "var(--accent)",
                            color: "#fff",
                            boxShadow: "0 0 15px rgba(212, 163, 115, 0.4)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}>
                        {lang === 'en' ? 'ने' : 'EN'}
                    </motion.button>
                    <motion.button
                        className="menu-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        whileTap={{ scale: 0.9 }}>
                        <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
                    </motion.button>
                </div>
            </div>
        </motion.header>
    );
};
export default Navbar;



