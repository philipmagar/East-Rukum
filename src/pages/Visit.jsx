import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Visit = () => {
    const { t } = useLanguage();
    const [currentChauriIndex, setCurrentChauriIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentChauriIndex((prev) => (prev + 1) % 6);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main>
            <section className="hero" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/place to visit/sisne Himal.jpg')" }}>
                <div className="hero-content">
                    <h1>{t('Places to go', 'घुम्ने ठाउँहरू')}</h1>
                    <p>{t('There are mountains, villages, and some old temples to see.', 'यहाँ हिमाल, गाउँ र केही पुराना मन्दिरहरू हेर्न पाइन्छ।')}</p>
                </div>
            </section>

            <section className="storytelling-section" style={{ background: '#f0f4f8' }}>
                <div className="container">
                    <motion.div className="story-content" style={{ maxWidth: '100%', marginBottom: '2rem' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="story-label" style={{ color: '#2c3e50', background: '#e1e8ed' }}>
                            {t('Quiet place', 'शान्त ठाउँ')}
                        </div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1a202c' }}>{t('Chaurikharka', 'चौरीखर्क')}</h2>
                        <p style={{ fontSize: '1.1rem', maxWidth: '800px', marginBottom: '2rem' }}>
                            {t(
                                "It’s a big meadow, way up high. In the monsoon it gets really green, and in autumn everything turns gold. It feels very quiet here. Mostly you just hear the wind blowing and the bells on the cattle.",
                                "यो माथि लेकमा रमाइलो पाटन हो। मनसुनमा यो एकदम हरियो हुन्छ, र शरद ऋतुमा सबै थोक सुनौलो देखिन्छ। यहाँ एकदम शान्त महसुस हुन्छ। धेरैजसो हावा चलेको र गाईवस्तुको घण्टी मात्र सुनिन्छ।"
                            )}
                        </p>
                    </motion.div>

                    <div className="chaurikharka-slider-container" style={{
                        position: 'relative',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                        height: '500px',
                        marginBottom: '2rem',
                        background: '#000'
                    }}>
                        <AnimatePresence mode='wait'>
                            <motion.img key={currentChauriIndex} src={`/images/place to visit/chaurikharka(${currentChauriIndex + 1}).jpg`} alt={`Chaurikharka View ${currentChauriIndex + 1}`} style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                position: 'absolute',
                                top: 0,
                                left: 0
                            }}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="no-watermark"
                            />
                        </AnimatePresence>

                        <div style={{
                            position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                            zIndex: 1
                        }}></div>

                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 2,
                            display: 'flex',
                            gap: '10px'
                        }}>
                            {[0, 1, 2, 3, 4, 5].map((idx) => (
                                <div key={idx} onClick={() => setCurrentChauriIndex(idx)} style={{
                                    width: idx === currentChauriIndex ? '30px' : '10px',
                                    height: '10px',
                                    borderRadius: '5px',
                                    background: idx === currentChauriIndex ? '#fff' : 'rgba(255,255,255,0.4)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                />
                            ))}
                        </div>
                    </div>
                    <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#666' }}>
                        {t(
                            "It feels real here. Just the ground, the sky, and you.",
                            "यहाँ साँच्चिकै रमाइलो लाग्छ। बस जमिन, आकाश र तपाईं।"
                        )}
                    </p>
                </div>
            </section>

            <section className="visit-grid-section">
                <div className="container">
                    <h2 className="section-title">{t('Other places', 'अरु ठाउँहरू')}</h2>
                    ]
                    <div className="visit-grid">
                        <div className="visit-card">
                            <img src="/images/place to visit/sisne Himal.jpg" alt="Sisne Himal" />
                            <div className="visit-card-content">
                                <h3>{t('Sisne Himal', 'सिस्ने हिमाल')}</h3>
                                <p>
                                    {t(
                                        "People call it the Virgin Peak. It's really good for trekking if you like walking.",
                                        "मान्छेहरू यसलाई भर्जिन पिक भन्छन्। यदि तपाईंलाई हिँड्न मन पर्छ भने यो ट्रेकिङको लागि राम्रो छ।"
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="visit-card">
                            <img src="/images/place to visit/rukumkot lake.jpg" alt="Rukumkot" className="no-watermark" />
                            <div className="visit-card-content">
                                <h3>{t('Rukumkot', 'रुकुमकोट')}</h3>
                                <p>
                                    {t(
                                        "It's an old town. They say there used to be 52 lakes around here.",
                                        "एउटा पुरानो शहर। यहाँ वरिपरि ५२ वटा पोखरी थिए भन्छन्।"
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="visit-card">
                            <img src="/images/place to visit/Thakur patan.png" alt="Thakur Patan" className="no-watermark" />
                            <div className="visit-card-content">
                                <h3>{t('Thakur Patan', 'ठाकुर पाटन')}</h3>
                                <p>
                                    {t(
                                        "It's high up in the hills. You can see a lot of different plants and animals.",
                                        "यो धेरै माथि छ। त्यहाँ धेरै थरीका बोटबिरुवा र जनावरहरू देख्न पाइन्छ।"
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="visit-card">
                            <img src="/images/place to visit/Dhorpatan-Hunting-Reserve.jpg" alt="Dhorpatan Hunting Reserve" />
                            <div className="visit-card-content">
                                <h3>{t('Dhorpatan Hunting Reserve', 'धोरपाटन शिकार रिजर्भ')}</h3>
                                <p>
                                    {t(
                                        "The only place in Nepal where hunting is allowed. You might see blue sheep.",
                                        "नेपालमा शिकार गर्न पाइने एक मात्र ठाउँ। तपाईंले यहाँ नीलो भेडा देख्न सक्नुहुन्छ।"
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="visit-card">
                            <img src="/images/place to visit/rukumkot lake (2).jpeg" alt="Rukumkot Lakes" className="no-watermark" />
                            <div className="visit-card-content">
                                <h3>{t('Small Lakes', 'साना तालहरू')}</h3>
                                <p>
                                    {t(
                                        "There are smaller lakes all around Rukumkot. The locals have stories about them.",
                                        "रुकुमको वरिपरि साना तालहरू छन्। स्थानीयहरूका यस बारेमा आफ्नै कथाहरू छन्।"
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="visit-card">
                            <img src="/images/place to visit/sisne Himal(2).jpg" alt="Sisne Himal Trek" className="no-watermark" />
                            <div className="visit-card-content">
                                <h3>{t('Sisne Base Camp', 'सिस्ने आधार शिविर')}</h3>
                                <p>
                                    {t(
                                        "Walking to the bottom of the mountain is just as nice as looking at the top.",
                                        "हिमालको फेदसम्म हिँड्नु पनि शिखर हेर्नु जत्तिकै रमाइलो हुन्छ।"
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="visit-card">
                            <img src="/images/place to visit/hunting reserve.jpg" alt="Wilderness" className="no-watermark" />
                            <div className="visit-card-content">
                                <h3>{t('The Forest', 'जङ्गल')}</h3>
                                <p>
                                    {t(
                                        "The forests are thick here. Not many people go inside.",
                                        "यहाँका जङ्गलहरू बाक्ला छन्। भित्र धेरै मान्छे जाँदैनन्।"
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
export default Visit;
