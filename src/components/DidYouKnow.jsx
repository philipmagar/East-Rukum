import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const facts = [
    { en: "East Rukum is home to the rare Yarsagumba — the world's most expensive caterpillar fungus.", np: "पूर्वी रुकुममा दुर्लभ यार्सागुम्बा पाइन्छ — संसारको सबैभन्दा महँगो किरा-फटेको च्याउ।" },
    { en: "Putha Hiunchuli (7,246m) stands as the tenth highest peak entirely within Nepal.", np: "पुथा हिउँचुली (७,२४६ मि.) पूर्णतः नेपालभित्र रहेको दसौँ उच्च शिखर हो।" },
    { en: "The Kham Magar language has its own unique phonetic system not found anywhere else.", np: "खाम मगर भाषाको आफ्नै अनूठो ध्वन्यात्मक प्रणाली छ जुन अन्यत्र पाइँदैन।" },
    { en: "Guerrilla Trail here is one of Nepal's newest trekking routes, connecting war-era history.", np: "यहाँको गुरिल्ला ट्रेल नेपालको नवीनतम ट्रेकिङ मार्गहरूमध्ये एक हो।" },
    { en: "Rukumkot Lake sits at over 3,000m and is renowned for its mirror-like reflections.", np: "रुकुमकोट ताल ३,०००+ मिटरमा रहेको छ र यसको ऐना जस्तो प्रतिबिम्बका लागि प्रसिद्ध छ।" },
];

const DidYouKnow = ({ t }) => {
    const [currentFact, setCurrentFact] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        const delay = setTimeout(() => setIsVisible(true), 4000);
        return () => clearTimeout(delay);
    }, []);

    useEffect(() => {
        if (!isVisible || isDismissed) return;
        timerRef.current = setInterval(() => {
            setCurrentFact(prev => (prev + 1) % facts.length);
        }, 6000);
        return () => clearInterval(timerRef.current);
    }, [isVisible, isDismissed]);

    if (isDismissed) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="did-you-know"
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 100, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                >
                    <div className="dyk-header">
                        <span className="dyk-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z"/></svg></span>
                        <span className="dyk-title">{t ? t('Did You Know?', 'के तपाईंलाई थाहा छ?') : 'Did You Know?'}</span>
                        <button className="dyk-close" onClick={() => setIsDismissed(true)}>×</button>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={currentFact}
                            className="dyk-text"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            {t ? t(facts[currentFact].en, facts[currentFact].np) : facts[currentFact].en}
                        </motion.p>
                    </AnimatePresence>
                    <div className="dyk-dots">
                        {facts.map((_, i) => (
                            <button
                                key={i}
                                className={`dyk-dot ${i === currentFact ? 'active' : ''}`}
                                onClick={() => setCurrentFact(i)}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DidYouKnow;
