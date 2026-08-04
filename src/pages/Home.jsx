import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Slider from '../components/Slider';
import StatsSection from '../components/StatsSection';
import SeasonPicker from '../components/SeasonPicker';
import SEO from '../components/SEO';

import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Floating particles for the hero
const HeroParticles = () => {
    const particles = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 2,
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 3,
    }));

    return (
        <div className="hero-particles" aria-hidden="true">
            {particles.map(p => (
                <motion.div
                    key={p.id}
                    className="hero-particle"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.7, 0.2],
                        scale: [1, 1.4, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
};

// Typewriter hook
const useTypewriter = (texts, speed = 60, pause = 2500) => {
    const [displayed, setDisplayed] = useState('');
    const [textIdx, setTextIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = texts[textIdx];
        let timer;

        if (!deleting && charIdx < current.length) {
            timer = setTimeout(() => setCharIdx(c => c + 1), speed);
        } else if (!deleting && charIdx === current.length) {
            timer = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && charIdx > 0) {
            timer = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
        } else if (deleting && charIdx === 0) {
            setDeleting(false);
            setTextIdx(i => (i + 1) % texts.length);
        }

        setDisplayed(current.slice(0, charIdx));
        return () => clearTimeout(timer);
    }, [charIdx, deleting, textIdx, texts, speed, pause]);

    return displayed;
};

const Home = () => {
    const { t, lang } = useLanguage();
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef });
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    const typewriterTexts = lang === 'en'
        ? ['Where Mountains Touch the Sky', 'Home of the Kham Magar People', 'A Land of Untouched Beauty', 'Walk the Ancient Trails']
        : ['जहाँ हिमाल आकाश छुन्छ', 'खाम मगरको भूमि', 'अछूत सौन्दर्यको देश', 'पुराना पदमार्गमा हिँड्नुहोस्'];

    const typewriterText = useTypewriter(typewriterTexts, 65, 2200);

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
    }, { scope: containerRef });

    const scrollToExplore = () => {
        const nextSection = document.getElementById('explore-section');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main ref={containerRef}>
            <SEO 
                title="Home"
                description="Experience the breathtaking natural beauty, rich Kham Magar heritage, and adventurous trails of Eastern Rukum, Nepal."
                keywords="Eastern Rukum, Nepal travel, Putha Himal, Kham Magar, homestay, trekking"
            />
            {/* Hero with parallax + particles + typewriter */}
            <section
                className="hero hero-parallax"
                ref={heroRef}
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/images/places/putha-himal.jpg')" }}
            >
                <HeroParticles />
                <motion.div
                    className="hero-bg-layer"
                    style={{ y: heroY, opacity: heroOpacity }}
                />
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:'inline',verticalAlign:'middle',marginRight:'6px'}}><path d="M8 21l4.5-9 3.5 4 4-8"/><path d="M2 21h20"/></svg>
                        {t('Eastern Rukum, Nepal', 'पूर्वी रुकुम, नेपाल')}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        {t('Putha Himala', 'पुथा हिमाल')}
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        {t('The Crown Jewel of Eastern Rukum', 'पूर्वी रुकुमको मुकुट मणि')}
                    </motion.p>

                    {/* Typewriter */}
                    <motion.div
                        className="hero-typewriter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <span>{typewriterText}</span>
                        <span className="typewriter-cursor">|</span>
                    </motion.div>

                    <motion.button
                        className="explore-btn"
                        onClick={scrollToExplore}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(107, 142, 117, 0.6)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t('Explore More', 'थप अन्वेषण गर्नुहोस्')} ↓
                    </motion.button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="scroll-indicator"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div className="scroll-indicator-line" />
                </motion.div>
            </section>

            {/* Intro */}
            <section className="intro" id="explore-section">
                <div className="container">
                    <div className="intro-text">
                        <h2>{t('Where Nature Meets Heritage', 'जहाँ प्रकृति र पहिचान भेटिन्छ')}</h2>
                        <p>
                            {t(
                                "Eastern Rukum (Rukum Purba) lies in the heart of Karnali Province, offering a breathtaking landscape where the snow capped Sisne Himal stands guard over lush valleys and ancient trails. This region is the soul of Kham Magar culture, where traditions are preserved through vibrant festivals, unique dialects, and a spirit of communal resilience. From the high altitude pastures to the historic stone roofed villages, it is a land where nature's raw beauty perfectly intertwines with a rich, living heritage.",
                                "पूर्वी रुकुम (रुकुम पूर्व) कर्णाली प्रदेशको हृदयमा अवस्थित छ, जहाँ हिमशृङ्खलाले भरिएको सिस्ने हिमालले हरियाली उपत्यका र प्राचीन पदमार्गहरूको रक्षा गरिरहेको जस्तो देखिन्छ। यो क्षेत्र खाम मगर संस्कृतिको मुटु हो, जहाँ जीवन्त चाडपर्वहरू, मौलिक बोलीचाली र सामुदायिक एकताको भावनाका साथ परम्पराहरू जोगाइएका छन्।"
                            )}
                        </p>
                    </div>
                    <div className="intro-image">
                        <Link to="/taka-village">
                            <motion.img
                                src="/images/villages/tak.jpg"
                                alt="Taka Village"
                                className="no-watermark"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <StatsSection t={t} />

            <Slider />

            {/* Living Heritage storytelling */}
            <section className="storytelling-section">
                <div className="container">
                    <div className="story-content">
                        <motion.div
                            className="story-label"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {t('The Living Heritage', 'जीवन्त सम्पदा')}
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {t('The Heart of the Kham Magar People', 'खाम मगर समुदायको हृदय')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            {t(
                                "Step into a world where time honored traditions breathe through every stone roofed house and every locally woven shawl. In East Rukum, culture isn't just a performance it's the way we farm, the way we celebrate the changing seasons, and the quiet resilience we show in the face of the mountains. Our dialects carry the echoes of our ancestors, and our hospitality is as warm as the hearths in our homes.",
                                "एउटा यस्तो संसारमा पाइला चाल्नुहोस् जहाँ युगौंदेखिका परम्पराहरू प्रत्येक ढुङ्गाले छाएका घर र स्थानीय रूपमा बुनिएका पछ्यौरीहरूमा जीवित छन्।"
                            )}
                        </motion.p>
                        <Link to="/culture.html" className="explore-btn-sm" style={{ marginTop: '1.5rem' }}>
                            {t('Immerse in Culture', 'संस्कृतिमा रमाउनुहोस्')}
                        </Link>
                    </div>
                    <motion.div
                        className="story-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/images/lifestyle/shepherd-lifestyle.jpg" alt="Kham Magar Culture" className="no-watermark" />
                    </motion.div>
                </div>
            </section>

            {/* Season Picker */}
            <SeasonPicker t={t} />

            {/* Nature storytelling */}
            <section className="storytelling-section reverse">
                <div className="container">
                    <div className="story-content">
                        <motion.div
                            className="story-label"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {t('Pristine Landscapes', 'अछूत प्राकृतिक दृश्य')}
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {t("Nature's Unbroken Silence", 'प्रकृतिको अटुट मौनता')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            {t(
                                "From the mirror like reflections in the lakes of Rukumkot to the challenging trails that lead to the base of Sisne Himal, nature here remains untouched and pure. It's a sanctuary for the soul, where the only sounds are the whistling of the mountain wind and the distant bells of grazing sheep.",
                                "रुकुमकोटका तालहरूमा देखिने ऐना जस्तै प्रतिबिम्बदेखि सिस्ने हिमालको फेदीसम्म पुग्ने चुनौतीपूर्ण पदमार्गसम्म, यहाँको प्रकृति अछूत र शुद्ध छ।"
                            )}
                        </motion.p>
                        <Link to="/places.html" className="explore-btn-sm" style={{ marginTop: '1.5rem' }}>
                            {t('Discover the Wild', 'प्रकृति खोज्नुहोस्')}
                        </Link>
                    </div>
                    <motion.div
                        className="story-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/images/places/rukumkot-lake.jpg" alt="Rukum Nature" className="no-watermark" />
                    </motion.div>
                </div>
            </section>

            <section style={{ textAlign: 'center', paddingTop: '4rem' }}>
                <h2 className="section-title" style={{ marginBottom: '1rem' }}>{t('Journey Through the District', 'जिल्लाको यात्रा')}</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
                    {t('Whether you seek adventure, spiritual peace, or a connection with indigenous history, East Rukum has a path for you.', 'चाहे तपाईं साहसिक कार्य, आध्यात्मिक शान्ति, वा आदिवासी इतिहाससँगको सम्बन्ध खोज्नुहुन्छ, पूर्वी रुकुममा तपाईंको लागि एउटा बाटो छ।')}
                </p>
            </section>

            <section className="features-description" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem 3rem', textAlign: 'center', fontSize: '1.2rem', lineHeight: '1.8', color: '#4a5568' }}>
                <p>
                    {t(
                        "East Rukum is a tapestry of untouched landscapes and timeless traditions. Walking these paths means tracing the footsteps of ancestors who found harmony in the rugged terrain. From the silent, snow capped guardian of Sisne Himal to the vibrant, rhythmic beats of the Kham Magar drums, every corner tells a story of resilience and beauty. This is not just a destination to see, but a home to feel where every river bend reveals a new secret and every stranger welcomes you like family.",
                        "पूर्वी रुकुम अछूत परिदृश्य र अनन्त परम्पराहरूको एक टेपेस्ट्री हो। यी बाटोहरूमा हिंड्नु भनेको ती पुर्खाहरूको पाइला पछ्याउनु हो जसले यस कठिन भूभागमा सद्भाव फेला पारे।"
                    )}
                </p>
            </section>

            <section style={{ textAlign: 'center', padding: '0 2rem 4rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link to="/places.html" className="explore-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    {t('Explore All Places', 'सबै स्थानहरू अन्वेषण गर्नुहोस्')}
                </Link>
                <Link to="/villages.html" className="explore-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    {t('View Our Villages', 'हाम्रा गाउँहरू हेर्नुहोस्')}
                </Link>
                <Link to="/gallery.html" className="explore-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    {t('View Gallery', 'ग्यालरी हेर्नुहोस्')}
                </Link>
            </section>
        </main>
    );
};
export default Home;
