import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Slider from '../components/Slider';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const { t } = useLanguage();
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from('.intro-text', {
            scrollTrigger: {
                trigger: '.intro',
                start: 'top 80%',
            },
            opacity: 0,
            x: -50,
            duration: 1,
            ease: 'power2.out'
        });

        gsap.from('.intro-image', {
            scrollTrigger: {
                trigger: '.intro',
                start: 'top 80%',
            },
            opacity: 0,
            x: 50,
            duration: 1,
            ease: 'power2.out'
        });

        gsap.from('.feature-card', {
            scrollTrigger: {
                trigger: '.features',
                start: 'top 85%',
            },
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'back.out(1.7)'
        });
    }, { scope: containerRef });

    const scrollToExplore = () => {
        const nextSection = document.getElementById('explore-section');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main ref={containerRef}>
            {/* HERO SECTION */}
            <section className="hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        {t('Discover Eastern Rukum', 'पूर्वी रुकुम चिनौँ')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        {t('A land of mountains, culture, and community strength', 'हिमाल, संस्कृति र समुदायको भूमि')}
                    </motion.p>
                    <motion.button
                        className="explore-btn"
                        onClick={scrollToExplore}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t('Explore More', 'थप अन्वेषण गर्नुहोस्')} ↓
                    </motion.button>
                </motion.div>
            </section>

            {/* INTRO SECTION */}
            <section className="intro" id="explore-section">
                <div className="container">
                    <div className="intro-text">
                        <h2>{t('Where Nature Meets Heritage', 'जहाँ प्रकृति र पहिचान भेटिन्छ')}</h2>
                        <p>
                            {t(
                                "Eastern Rukum (Rukum Purba) lies in the heart of Karnali Province, offering a breathtaking landscape where the snow-capped Sisne Himal stands guard over lush valleys and ancient trails. This region is the soul of Kham Magar culture, where traditions are preserved through vibrant festivals, unique dialects, and a spirit of communal resilience. From the high-altitude pastures to the historic stone-roofed villages, it is a land where nature's raw beauty perfectly intertwines with a rich, living heritage.",
                                "पूर्वी रुकुम (रुकुम पूर्व) कर्णाली प्रदेशको हृदयमा अवस्थित छ, जहाँ हिमशृङ्खलाले भरिएको सिस्ने हिमालले हरियाली उपत्यका र प्राचीन पदमार्गहरूको रक्षा गरिरहेको जस्तो देखिन्छ। यो क्षेत्र खाम मगर संस्कृतिको मुटु हो, जहाँ जीवन्त चाडपर्वहरू, मौलिक बोलीचाली र सामुदायिक एकताको भावनाका साथ परम्पराहरू जोगाइएका छन्। उच्च पहाडी घाँसे मैदानदेखि ऐतिहासिक ढुङ्गाले छाएका घरहरू भएका गाउँहरूसम्म, यो प्रकृति र समृद्ध जीवन्त सम्पदाको सुन्दर संगम हो।"
                            )}
                        </p>
                    </div>
                    <div className="intro-image">
                        <Link to="/taka-village">
                            <motion.img
                                src="/images/taka.jpg"
                                alt="Taka Village"
                                className="no-watermark"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="features">
                <div className="feature-card">
                    <img src="/images/lukum village.jpg" alt="Village in Rukum" />
                    <div className="feature-card-content">
                        <h3>🏔️ {t('Places', 'स्थानहरू')}</h3>
                        <p>{t('Sisne Himal, Rukumkot, Kankri and more.', 'सिस्ने हिमाल, रुकुमकोट, कांक्री र थप।')}</p>
                    </div>
                </div>
                <div className="feature-card">
                    <img src="/images/ChauriLakhePhoto.jpg" alt="Culture" />
                    <div className="feature-card-content">
                        <h3>🎭 {t('Culture', 'संस्कृति')}</h3>
                        <p>{t('Kham Magar traditions, language, and festivals.', 'खाम मगर परम्परा, भाषा र चाडपर्व।')}</p>
                    </div>
                </div>
                <div className="feature-card">
                    <img src="/images/jeep crossing river.jpg" alt="Travel" className="no-watermark" />
                    <div className="feature-card-content">
                        <h3>🛣️ {t('Travel', 'यात्रा')}</h3>
                        <p>{t('Routes, homestays, and local guidance.', 'मार्ग, होमस्टे र स्थानीय मार्गदर्शन।')}</p>
                    </div>
                </div>
            </section>

            <Slider />
        </main>
    );
};

export default Home;

