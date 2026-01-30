import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import MusicPlayer from '../components/MusicPlayer';

const TakaVillage = () => {
    const { t } = useLanguage();
    const [selectedImg, setSelectedImg] = useState(null);

    const takaImages = [
        { src: '/images/villages/Tak village.jpg', alt: 'Classic Taka', caption: t('Traditional Architecture', 'परम्परागत वास्तुकला') },
        { src: '/images/villages/tak during rainy season.png', alt: 'Rainy Season', caption: t('Lush Green Monsoon', 'हरियाली मनसुन') },
        { src: '/images/villages/tak village from from far.jpg', alt: 'Panoramic View', caption: t('Village from Afar', 'टाढाबाट गाउँको दृश्य') },
        { src: '/images/villages/tak school.jpg', alt: 'Tak School', caption: t('Community School', 'सामुदायिक विद्यालय') },
        { src: '/images/villages/Tak villagee.jpg', alt: 'Village Life', caption: t('Daily Life in Tak', 'तकमा दैनिक जीवन') },
        { src: '/images/villages/tak.jpg', alt: 'Historic Streets', caption: t('Ancient Pathways', 'प्राचीन गोरेटोहरू') },
    ];

    return (
        <main>
            {/* Image Modal Overlay */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        className="image-modal"
                        onClick={() => setSelectedImg(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.img
                            src={selectedImg.src}
                            alt={selectedImg.alt}
                            className="modal-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                        <motion.div
                            style={{ position: 'absolute', bottom: '20px', color: '#fff', textAlign: 'center', width: '100%', fontSize: '1.2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {selectedImg.caption}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <section className="hero" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/villages/Tak village.jpg')" }}>
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>{t('Tak', 'तक')}</h1>
                    <p>{t('A journey through the heritage of Kham Magar people', 'खाम मगर समुदायको सम्पदाको यात्रा')}</p>
                </motion.div>
            </section>

            <section className="intro">
                <div className="container">
                    <motion.div
                        className="intro-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>{t('Heart of Kham Magar Culture', 'खाम मगर संस्कृतिको मुटु')}</h2>
                        <p>
                            {t(
                                "Tak (Taksera) is one of the most significant settlements in Eastern Rukum. Known for its unique stone-roofed houses clustered tightly on the mountainside, it represents the architectural and cultural pinnacle of the Kham Magar people. The village has a long history of self-governance and communal living, preserving ancient dialects and rituals that are rare in other parts of Nepal.",
                                "तकसेरा पूर्वी रुकुमको सबैभन्दा महत्त्वपूर्ण बस्तीहरूमध्ये एक हो। पहाडको काखमा मिलेर बसेका ढुङ्गाले छाएका घरहरूका लागि चिनिने यो गाउँ खाम मगर समुदायको वास्तुकला र सांस्कृतिक शिखरको प्रतिनिधित्व गर्दछ। यस गाउँको स्वशासन र सामुदायिक जीवनको लामो इतिहास छ, जसले नेपालका अन्य भागहरूमा दुर्लभ रहेका प्राचीन भाषिका र संस्कारहरूलाई संरक्षण गरेको छ।"
                            )}
                        </p>
                        <p>
                            {t(
                                "Life in Taka is dictated by the seasons. From the vibrant green of the monsoon to the golden hues of autumn and the quiet, snow-covered winters, every change brings new traditions and activities. The people here are known for their hospitality, bravery, and deep connection to the land.",
                                "तकसेरामा जीवन मौसम अनुसार चल्छ। मनसुनको हरियालीदेखि शरद ऋतुको पहेंलो रङ्ग र हिउँले ढाकिएको शान्त हिउँदसम्म, प्रत्येक परिवर्तनले नयाँ परम्परा र गतिविधिहरू ल्याउँछ। यहाँका मानिसहरू उनीहरूको आतिथ्य, बहादुरी र जमिनसँगको गहिरो सम्बन्धका लागि परिचित छन्।"
                            )}
                        </p>
                    </motion.div>
                    <motion.div
                        className="intro-image"
                        onClick={() => setSelectedImg({ src: '/images/villages/tak village from from far.jpg', alt: 'Panoramic Tak', caption: t('A Scenic View of Taka', 'तकसेराको मनोरम दृश्य') })}
                        style={{ cursor: 'pointer' }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src="/images/villages/tak village from from far.jpg" alt="Panoramic Tak" className="no-watermark" />
                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>{t('Click to enlarge', 'ठूलो बनाउन क्लिक गर्नुहोस्')}</div>
                    </motion.div>
                </div>
            </section>

            <section className="visit-grid-section">
                <div className="container">
                    <h2 className="section-title">{t('Gallery: Shades of Tak', 'ग्यालेरी: तकका विभिन्न रूपहरू')}</h2>
                    <motion.div
                        className="visit-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {takaImages.map((img, index) => (
                            <motion.div
                                key={index}
                                className="visit-card"
                                onClick={() => setSelectedImg(img)}
                                style={{ cursor: 'pointer' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <img src={img.src} alt={img.alt} className="no-watermark" />
                                <div className="visit-card-content">
                                    <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{img.caption}</p>
                                    <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>{t('Click to view', 'हेर्न क्लिक गर्नुहोस्')}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="intro" style={{ background: '#fff' }}>
                <div className="container">
                    <motion.div
                        className="intro-image"
                        onClick={() => setSelectedImg({ src: '/images/villages/Tak villagee.jpg', alt: 'Village Life', caption: t('Authentic Village Atmosphere', 'प्रामाणिक गाउँको वातावरण') })}
                        style={{ cursor: 'pointer' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src="/images/villages/Tak villagee.jpg" alt="Village Life" />
                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>{t('Click to enlarge', 'ठूलो बनाउन क्लिक गर्नुहोस्')}</div>
                    </motion.div>
                    <motion.div
                        className="intro-text"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>{t('Sustainable Tourism & Homestays', 'दिगो पर्यटन र होमस्टे')}</h2>
                        <p>
                            {t(
                                "Visitors to Taka can experience the authentic lifestyle by staying in local homestays. Share traditional meals like Dhindo and Gundruk, learn about the symbolic meanings of house decorations, and participate in community dances like the Nachari.",
                                "तकसेरा पुग्ने पर्यटकहरूले स्थानीय होमस्टेमा बसेर वास्तविक ग्रामीण जीवनको अनुभव गर्न सक्छन्। ढिँडो र गुन्द्रुक जस्ता परम्परागत खानाको स्वाद लिनुहोस्, घरको सजावटका प्रतीकात्मक अर्थहरूका बारेमा जान्नुहोस्, र नाचरी जस्ता सामुदायिक नृत्यहरूमा सहभागी हुनुहोस्।"
                            )}
                        </p>
                    </motion.div>
                </div>
            </section>
            <MusicPlayer />
        </main>
    );
};

export default TakaVillage;

