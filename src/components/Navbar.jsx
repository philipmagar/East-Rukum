import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { lang, toggleLang } = useLanguage();

    return (
        <motion.header
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Link to="/" className="logo-container">
                <motion.div
                    className="logo-icon"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                ></motion.div>
                <motion.div
                    className="logo"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    East Rukum
                </motion.div>
            </Link>
            <nav>
                <ul className="nav-links">
                    {[
                        { to: "/", label: "Home" },
                        { to: "/about.html", label: "About" },
                        { to: "/places.html", label: "Visit" },
                        { to: "/villages.html", label: "Villages" },
                        { to: "/culture.html", label: "Culture" },
                        { to: "/stories.html", label: "Stories" },
                        { to: "/contact.html", label: "Contact" }
                    ].map((link, index) => (
                        <motion.li
                            key={link.label}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index + 0.5 }}
                        >
                            <NavLink
                                to={link.to}
                                className={({ isActive }) => isActive ? "active-link" : ""}
                            >
                                {link.label}
                            </NavLink>
                        </motion.li>
                    ))}
                </ul>
            </nav>
            <motion.button
                id="langToggle"
                onClick={toggleLang}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {lang === 'en' ? 'ने' : 'EN'}
            </motion.button>
        </motion.header>
    );
};

export default Navbar;

