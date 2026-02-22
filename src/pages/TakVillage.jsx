import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const TakaVillage = () => {
    const { t } = useLanguage();
    const [selectedImg, setSelectedImg] = useState(null);

    const takaImages = [
        { src: '/images/villages/tak-village.jpg', alt: 'Classic Taka', caption: t('Old houses', 'पुराना घरहरू') },
        { src: '/images/villages/tak-during-rainy-season.png', alt: 'Rainy Season', caption: t('Green in the rain', 'वर्षामा हरियाली') },
        { src: '/images/villages/tak-village-far.jpg', alt: 'Panoramic View', caption: t('Looking from far away', 'टाढाबाट हेर्दा') },
        { src: '/images/villages/tak-school.jpg', alt: 'Tak School', caption: t('The village school', 'गाउँको विद्यालय') },
        { src: '/images/villages/tak-village-2.jpg', alt: 'Village Life', caption: t('Just a normal day', 'साधारण दिन') },
        { src: '/images/villages/tak.jpg', alt: 'Historic Streets', caption: t('Walking paths', 'हिँड्ने बाटोहरू') },
    ];

    return (
        <main>
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
            <section className="hero" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/villages/tak-village.jpg')" }}>
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>{t('Tak', 'तक')}</h1>
                    <p>{t('See how the Kham Magar people live.', 'खाम मगर समुदाय कसरी बस्छन् हेर्नुहोस्।')}</p>
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
                        <h2>{t('The Main Village', 'मुख्य गाउँ')}</h2>
                        <p>
                            {t(
                                "Tak (or Taksera) is a big village up in the mountains. The houses are built close together with stone roofs. It’s quiet and feels old-fashioned here. People still speak the old language and follow the ways of their grandparents.",
                                "तक (वा तकसेरा) पहाडमा अवस्थित एउटा ठूलो गाउँ हो। यहाँका घरहरू एक अर्कासँग जोिएर ढुङ्गाले छाएका छन्। यहाँ शान्त र पुरानो समय जस्तो महसुस हुन्छ। मानिसहरू अझै पनि पुरानो भाषा बोल्छन् र आफ्ना हजुरबुबा-हजुरआमाको बाटो पछ्याउँछन्।"
                            )}
                        </p>
                        <p>
                            {t(
                                "The weather changes everything here. When it rains, it gets really green. In autumn, the fields turn gold. In winter, there is snow. The people here are tough, but they are very kind to visitors.",
                                "यहाँ मौसमले सबै कुरा परिवर्तन गर्छ। पानी पर्दा, यो एकदम हरियो हुन्छ। शरद ऋतुमा, खेतहरू सुनौलो हुन्छन्। जाडोमा, यहाँ हिउँ पर्छ। यहाँका मानिसहरू बलिया छन्, तर पाहुनाहरूप्रति धेरै दयालु छन्।"
                            )}
                        </p>
                    </motion.div>
                    <motion.div
                        className="intro-image"
                        onClick={() => setSelectedImg({ src: '/images/villages/tak-village-far.jpg', alt: 'Panoramic Tak', caption: t('Looks nice from here', 'यहाँबाट राम्रो देखिन्छ') })}
                        style={{ cursor: 'pointer' }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src="/images/villages/tak-village-far.jpg" alt="Panoramic Tak" className="no-watermark" />
                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>{t('Click to make bigger', 'ठूलो बनाउन क्लिक गर्नुहोस्')}</div>
                    </motion.div>
                </div>
            </section>
            <section className="visit-grid-section">
                <div className="container">
                    <h2 className="section-title">{t('Gallery: Pictures of Tak', 'ग्यालेरी: तकका तस्बिरहरू')}</h2>
                    <motion.div
                        className="visit-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}>
                        {takaImages.map((img, index) => (
                            <motion.div key={index} className="visit-card" onClick={() => setSelectedImg(img)} style={{ cursor: 'pointer' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} >
                                <img src={img.src} alt={img.alt} className="no-watermark" />
                                <div className="visit-card-content">
                                    <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{img.caption}</p>
                                    <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>{t('Click to see', 'हेर्न क्लिक गर्नुहोस्')}</div>
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
                        onClick={() => setSelectedImg({ src: '/images/villages/tak-village-2.jpg', alt: 'Village Life', caption: t('Real village life', 'वास्तविक गाउँको जीवन') })}
                        style={{ cursor: 'pointer' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src="/images/villages/tak-village-2.jpg" alt="Village Life" />
                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>{t('Click to make bigger', 'ठूलो बनाउन क्लिक गर्नुहोस्')}</div>
                    </motion.div>
                    <motion.div
                        className="intro-text"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>{t('Stay with the Locals', 'स्थानीयहरूसँग बस्नुहोस्')}</h2>
                        <p>
                            {t(
                                "The best way to know this place is to stay in someone's home. You can eat dhindo and gundruk with them. You can ask them why they decorate their houses that way, or just watch the dances.",
                                "यो ठाउँ जान्ने सबैभन्दा राम्रो तरिका कसैको घरमा बस्नु हो। तपाईं उनीहरूसँग ढिँडो र गुन्द्रुक खान सक्नुहुन्छ। तपाईंले उनीहरूलाई घरहरू त्यसरी किन सजाउँछन् भनेर सोध्न सक्नुहुन्छ, वा नाचहरू हेर्न सक्नुहुन्छ।"
                            )}
                        </p>
                    </motion.div>
                </div>
            </section>

        </main>
    );
};
export default TakaVillage;

