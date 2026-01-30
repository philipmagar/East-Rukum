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
            <section className="intro" id="explore-section">
                <div className="container">
                    <div className="intro-text">
                        <h2>{t('Where Nature Meets Heritage', 'जहाँ प्रकृति र पहिचान भेटिन्छ')}</h2>
                        <p>
                            {t(
                                "Eastern Rukum (Rukum Purba) lies in the heart of Karnali Province, offering a breathtaking landscape where the snow capped Sisne Himal stands guard over lush valleys and ancient trails. This region is the soul of Kham Magar culture, where traditions are preserved through vibrant festivals, unique dialects, and a spirit of communal resilience. From the high altitude pastures to the historic stone roofed villages, it is a land where nature's raw beauty perfectly intertwines with a rich, living heritage.",
                                "पूर्वी रुकुम (रुकुम पूर्व) कर्णाली प्रदेशको हृदयमा अवस्थित छ, जहाँ हिमशृङ्खलाले भरिएको सिस्ने हिमालले हरियाली उपत्यका र प्राचीन पदमार्गहरूको रक्षा गरिरहेको जस्तो देखिन्छ। यो क्षेत्र खाम मगर संस्कृतिको मुटु हो, जहाँ जीवन्त चाडपर्वहरू, मौलिक बोलीचाली र सामुदायिक एकताको भावनाका साथ परम्पराहरू जोगाइएका छन्। उच्च पहाडी घाँसे मैदानदेखि ऐतिहासिक ढुङ्गाले छाएका घरहरू भएका गाउँहरूसम्म, यो प्रकृति र समृद्ध जीवन्त सम्पदाको सुन्दर संगम हो।"
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

            <Slider />
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
                                "एउटा यस्तो संसारमा पाइला चाल्नुहोस् जहाँ युगौंदेखिका परम्पराहरू प्रत्येक ढुङ्गाले छाएका घर र स्थानीय रूपमा बुनिएका पछ्यौरीहरूमा जीवित छन्। पूर्वी रुकुममा, संस्कृति केवल एक प्रदर्शन होइन यो हाम्रो खेती गर्ने तरिका, मौसम परिवर्तनको उत्सव मनाउने तरिका र हिमालको अगाडि हामीले देखाउने शान्त लचिलोपन हो। हाम्रा बोलीहरूमा हाम्रा पुर्खाहरूको प्रतिध्वनि सुनिन्छ र हाम्रो आतिथ्य हाम्रा घरका चुल्हाहरू जत्तिकै न्यानो छ।"
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
                        <img src="/images/lifestyle/shepard lifestyle.jpg" alt="Kham Magar Culture" className="no-watermark" />
                    </motion.div>
                </div>
            </section>
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
                                "From the mirror like reflections in the lakes of Rukumkot to the challenging trails that lead to the base of Sisne Himal, nature here remains untouched and pure. It's a sanctuary for the soul, where the only sounds are the whistling of the mountain wind and the distant bells of grazing sheep. Here, we live in harmony with the wild, respecting the peaks that define our horizon.",
                                "रुकुमकोटका तालहरूमा देखिने ऐना जस्तै प्रतिबिम्बदेखि सिस्ने हिमालको फेदीसम्म पुग्ने चुनौतीपूर्ण पदमार्गसम्म, यहाँको प्रकृति अछूत र शुद्ध छ। यो आत्माको लागि एउटा शरणस्थल हो, जहाँ हिमाली हावाको सुस्केरा र चरिरहेका भेडाहरूको टाढाको घण्टीको आवाज मात्र सुनिन्छ। यहाँ, हामी जंगली प्रकृतिसँग सद्भावमा बस्छौं र हाम्रो क्षितिज परिभाषित गर्ने टाकुरीहरूको सम्मान गर्छौं।"
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
                        <img src="/images/place to visit/rukumkot lake.jpg" alt="Rukum Nature" className="no-watermark" />
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
                        "पूर्वी रुकुम अछूत परिदृश्य र अनन्त परम्पराहरूको एक टेपेस्ट्री हो। यी बाटोहरूमा हिंड्नु भनेको ती पुर्खाहरूको पाइला पछ्याउनु हो जसले यस कठिन भूभागमा सद्भाव फेला पारे। सिस्ने हिमालको मौन, हिउँले ढाकिएको रक्षकदेखि खाम मगर ढोलको जीवन्त, लयबद्ध तालसम्म, प्रत्येक कुनाले लचिलोपन र सुन्दरताको कथा बताउँछ। यो हेर्नको लागि मात्र गन्तव्य होइन, तर महसुस गर्नको लागि घर हो जहाँ हरेक नदीको मोडले नयाँ रहस्य खोल्छ र हरेक अपरिचितले तपाईंलाई परिवार जस्तै स्वागत गर्दछ।"
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
                <Link to="/culture.html" className="explore-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    {t('Experience Culture', 'संस्कृति अनुभव गर्नुहोस्')}
                </Link>
            </section>

        </main>
    );
};
export default Home;

