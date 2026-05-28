import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpringIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);
const MonsoonIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1115.71 8h1.79a4.5 4.5 0 012.5 8.242" />
        <path d="M16 14v6M8 14v6M12 16v6" />
    </svg>
);
const AutumnIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.1 17 3.1s-.1 3.8 2 7.5A7 7 0 0111 20z" />
        <path d="M11 13V20" />
        <path d="M8 16l3-3 3 3" />
    </svg>
);
const WinterIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    </svg>
);

const seasonIcons = [<SpringIcon />, <MonsoonIcon />, <AutumnIcon />, <WinterIcon />];

const seasons = [
    {
        id: 'spring',
        label: 'Spring',
        labelNp: 'बसन्त',
        desc: 'Rhododendrons bloom across the hillsides in vivid reds and pinks. Trekking season begins.',
        descNp: 'लालीगुराँसका फूलहरू पहाडमा फुल्छन्। पदयात्रा सिजन सुरु हुन्छ।',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #ffecd2 100%)',
        textColor: '#8B1A4A',
        months: 'Mar – May',
    },
    {
        id: 'monsoon',
        label: 'Monsoon',
        labelNp: 'मनसुन',
        desc: 'The valleys turn emerald green. Waterfalls cascade down every cliff. Yarsagumba season.',
        descNp: 'उपत्यका हरियो हुन्छन्। झरनाहरू बग्छन्। यार्सागुम्बा सिजन।',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        textColor: '#003F88',
        months: 'Jun – Aug',
    },
    {
        id: 'autumn',
        label: 'Autumn',
        labelNp: 'शरद',
        desc: 'Crystal-clear skies reveal Putha Hiunchuli in full glory. The best trekking season of all.',
        descNp: 'स्फटिक-स्वच्छ आकाशमा पुथा हिउँचुली पूर्ण सौन्दर्यमा देखिन्छ।',
        gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        textColor: '#7B3F00',
        months: 'Sep – Nov',
    },
    {
        id: 'winter',
        label: 'Winter',
        labelNp: 'शीत',
        desc: 'Snow transforms villages into white wonderlands. Traditional festivals and communal warmth.',
        descNp: 'हिउँले गाउँहरू सेतो बन्छन्। परम्परागत चाड र सामुदायिक न्यानोपन।',
        gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
        textColor: '#1A237E',
        months: 'Dec – Feb',
    },
];

const SeasonPicker = ({ t }) => {
    const [active, setActive] = useState(0);

    // Auto-detect current season
    useEffect(() => {
        const month = new Date().getMonth(); // 0-based
        if (month >= 2 && month <= 4) setActive(0);       // spring
        else if (month >= 5 && month <= 7) setActive(1);  // monsoon
        else if (month >= 8 && month <= 10) setActive(2); // autumn
        else setActive(3);                                 // winter
    }, []);

    const s = seasons[active];

    return (
        <section className="season-picker-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {t ? t('Experience Every Season', 'हर मौसम अनुभव गर्नुहोस्') : 'Experience Every Season'}
                </motion.h2>

                <div className="season-tabs">
                    {seasons.map((season, i) => (
                        <motion.button
                            key={season.id}
                            className={`season-tab ${i === active ? 'active' : ''}`}
                            onClick={() => setActive(i)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="season-tab-icon">{seasonIcons[i]}</span>
                            <span>{t ? t(season.label, season.labelNp) : season.label}</span>
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={s.id}
                        className="season-card"
                        style={{ background: s.gradient }}
                        initial={{ opacity: 0, y: 30, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.97 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        <div className="season-card-inner" style={{ color: s.textColor }}>
                            <motion.div
                                className="season-big-icon"
                                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                            >
                                {seasonIcons[active]}
                            </motion.div>
                            <div className="season-info">
                                <span className="season-months">{s.months}</span>
                                <h3 style={{ color: s.textColor }}>{t ? t(s.label, s.labelNp) : s.label}</h3>
                                <p style={{ color: s.textColor, opacity: 0.85 }}>
                                    {t ? t(s.desc, s.descNp) : s.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default SeasonPicker;
