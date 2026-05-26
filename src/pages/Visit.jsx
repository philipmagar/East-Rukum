import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/ui/Hero';
import VisitCard from '../components/ui/VisitCard';
import { useFetchData } from '../hooks/useFetchData';
import { apiService } from '../services/apiService';

const Visit = () => {
    const { t } = useLanguage();
    const [currentChauriIndex, setCurrentChauriIndex] = useState(0);

    const { data: destinations, loading } = useFetchData(() => apiService.fetchDestinations(t));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentChauriIndex((prev) => (prev + 1) % 6);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main>
            <Hero 
                bgImage="/images/places/sisne-himal.jpg"
                title={t('Places to go', 'घुम्ने ठाउँहरू')}
                subtitle={t('There are mountains, villages, and some old temples to see.', 'यहाँ हिमाल, गाउँ र केही पुराना मन्दिरहरू हेर्न पाइन्छ।')}
            />

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

                    <div className="chaurikharka-slider-container" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', height: '500px', marginBottom: '2rem', background: '#000' }}>
                        <AnimatePresence mode='wait'>
                            <motion.img key={currentChauriIndex} src={`/images/places/chaurikharka-${currentChauriIndex + 1}.jpg`} alt={`Chaurikharka View ${currentChauriIndex + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="no-watermark"
                            />
                        </AnimatePresence>

                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', zIndex: 1 }}></div>

                        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', gap: '10px' }}>
                            {[0, 1, 2, 3, 4, 5].map((idx) => (
                                <div key={idx} onClick={() => setCurrentChauriIndex(idx)} style={{ width: idx === currentChauriIndex ? '30px' : '10px', height: '10px', borderRadius: '5px', background: idx === currentChauriIndex ? '#fff' : 'rgba(255,255,255,0.4)', transition: 'all 0.3s ease', cursor: 'pointer' }} />
                            ))}
                        </div>
                    </div>
                    <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#666' }}>
                        {t("It feels real here. Just the ground, the sky, and you.", "यहाँ साँच्चिकै रमाइलो लाग्छ। बस जमिन, आकाश र तपाईं।")}
                    </p>
                </div>
            </section>

            <section className="visit-grid-section">
                <div className="container">
                    <h2 className="section-title">{t('Other places', 'अरु ठाउँहरू')}</h2>
                    <div className="visit-grid">
                        {loading && <p>Loading destinations...</p>}
                        {destinations && destinations.map((dest, idx) => (
                            <VisitCard key={idx} img={dest.img} title={dest.title} desc={dest.desc} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
export default Visit;
