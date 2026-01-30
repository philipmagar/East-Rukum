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
            <section className="hero">
                <div className="hero-content">
                    <h1>{t('Places to Visit', 'घुम्नलायक स्थानहरू')}</h1>
                    <p>{t('Discover mountains, villages, and cultural landmarks', 'हिमाल, गाउँ र सांस्कृतिक स्थलहरू पत्ता लगाउनुहोस्')}</p>
                </div>
            </section>

            {/* FEATURED: CHAURIKHARKA */}
            <section className="storytelling-section" style={{ background: '#f0f4f8' }}>
                <div className="container">
                    <motion.div
                        className="story-content"
                        style={{ maxWidth: '100%', marginBottom: '2rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="story-label" style={{ color: '#2c3e50', background: '#e1e8ed' }}>
                            {t('Hidden Gem', 'लुकेको गन्तव्य')}
                        </div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1a202c' }}>{t('Chaurikharka The Highland Paradise', 'चौरीखर्क - उच्च हिमाली स्वर्ग')}</h2>
                        <p style={{ fontSize: '1.1rem', maxWidth: '800px', marginBottom: '2rem' }}>
                            {t(
                                "Chaurikharka is not just a grazing ground; it is a breathtaking expanse of alpine meadows sitting in the lap of the Himalayas. Known for its lush greenery in the monsoon and golden hues in autumn, it offers unrivaled peace. This is where the sky touches the earth, and the only sound you hear is the whistle of the mountain wind and the bells of grazing cattle.",
                                "चौरीखर्क केवल चरन क्षेत्र मात्र होइन; यो हिमालयको काखमा अवस्थित अल्पाइन घाँसे मैदानको एक मनमोहक विस्तार हो। मनसुनमा हरियाली र शरद ऋतुमा सुनौलो रङ्गका लागि परिचित, यसले अतुलनीय शान्ति प्रदान गर्दछ। यो त्‍यो ठाउँ हो जहाँ आकाशले पृथ्वीलाई छुन्छ, र तपाईँले सुन्ने एकमात्र आवाज पहाडी हावाको सुस्केरा र गाईवस्तुको घण्टी हो।"
                            )}
                        </p>
                    </motion.div>

                    {/* CHAURIKHARKA AUTO SLIDER */}
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
                            <motion.img
                                key={currentChauriIndex}
                                src={`/images/place to visit/chaurikharka(${currentChauriIndex + 1}).jpg`}
                                alt={`Chaurikharka View ${currentChauriIndex + 1}`}
                                style={{
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

                        {/* Overlay Gradient */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                            zIndex: 1
                        }}></div>

                        {/* Slider Controls/Indicators */}
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
                                <div
                                    key={idx}
                                    onClick={() => setCurrentChauriIndex(idx)}
                                    style={{
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
                            "Experience the raw beauty of Chaurikharka — a quiet meeting of earth, sky, and wandering hearts.",
                            "चौरीखर्कको कच्चा सुन्दरताको अनुभव गर्नुहोस् - जहाँ पृथ्वी, आकाश र भौँतारिने मनहरूको शान्त भेट हुन्छ।"
                        )}
                    </p>
                </div>
            </section>

            <section className="visit-grid-section">
                <div className="container">
                    <h2 className="section-title">{t('More Destinations', 'अन्य गन्तव्यहरू')}</h2>

                    <div className="visit-grid">
                        <div className="visit-card">
                            <img src="/images/place to visit/sisne Himal.jpg" alt="Sisne Himal" />
                            <div className="visit-card-content">
                                <h3>{t('Sisne Himal', 'सिस्ने हिमाल')}</h3>
                                <p>
                                    {t(
                                        "Sisne Himal, also known as the Virgin Peak, is famous for trekking and panoramic views.",
                                        "सिस्ने हिमाल, जसलाई भर्जिन पिक पनि भनिन्छ, पदयात्रा र सुन्दर दृश्यका लागि प्रसिद्ध छ।"
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
                                        "A historic town with 52 lakes and 53 hills. Famous for Barah Temple and the scenic Rukumkot Lake.",
                                        "५२ पोखरी ५३ टाकुरीको शहर। बराह मन्दिर र सुन्दर रुकुमकोट तालको लागि प्रसिद्ध।"
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
                                        "A high altitude meadow rich in biodiversity and stunning landscapes, perfect for adventure seekers.",
                                        "जैवविविधता र आश्चर्यजनक परिदृश्यहरूले धनी उच्च उचाइको मैदान, साहसी खोज्नेहरूका लागि उपयुक्त।"
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
                                        "Nepal's only hunting reserve, famous for Blue Sheep and Himalayan Tahr.",
                                        "नेपालको एकमात्र शिकार आरक्ष, नीलो भेडा र हिमालयन थारका लागि प्रसिद्ध।"
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="visit-card">
                            <img src="/images/place to visit/rukumkot lake (2).jpeg" alt="Rukumkot Lakes" className="no-watermark" />
                            <div className="visit-card-content">
                                <h3>{t('Sacred Lakes', 'पवित्र तालहरू')}</h3>
                                <p>
                                    {t(
                                        "Explore the hidden lakes around Rukumkot, each with its own myth and beauty.",
                                        "रुकुमकोट वरपरका लुकेका तालहरू अन्वेषण गर्नुहोस्, जसको आफ्नै मिथक र सुन्दरता छ।"
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
                                        "The journey to the base of Sisne is as majestic as the peak itself.",
                                        "सिस्नेको फेदसम्मको यात्रा शिखर जत्तिकै भव्य छ।"
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="visit-card">
                            <img src="/images/place to visit/hunting reserve.jpg" alt="Wilderness" className="no-watermark" />
                            <div className="visit-card-content">
                                <h3>{t('Wilderness Exploration', 'जङ्गल अन्वेषण')}</h3>
                                <p>
                                    {t(
                                        "Deep forests and untouched trails waiting for explorers.",
                                        "गहिरो जङ्गल र अछूत पदमार्गहरू अन्वेषकहरूको पर्खाइमा छन्।"
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
