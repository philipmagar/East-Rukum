import { motion } from 'framer-motion';

const Hero = ({ bgImage, title, subtitle, children }) => {
    return (
        <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${bgImage}')` }}>
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>{title}</h1>
                <p>{subtitle}</p>
                {children}
            </motion.div>
        </section>
    );
};

export default Hero;
