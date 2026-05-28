import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const MountainIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21l4.5-9 3.5 4 4-8" />
        <path d="M2 21h20" />
        <path d="M16 7l-2-4-6 12" />
    </svg>
);
const PeopleIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
);
const MapIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
);
const ElevationIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20" />
        <polyline points="16 6 12 2 8 6" />
    </svg>
);

const CountUp = ({ end, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const step = end / (duration * 60);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const stats = [
    { icon: <MountainIcon />, value: 7246, suffix: 'm', label: 'Highest Peak (Putha Hiunchuli)', labelNp: 'सर्वोच्च शिखर (पुथा हिउँचुली)' },
    { icon: <PeopleIcon />, value: 56786, suffix: '+', label: 'People call it Home', labelNp: 'मानिसहरू यहाँ बस्छन्' },
    { icon: <MapIcon />, value: 3, suffix: ' RMs', label: 'Rural Municipalities', labelNp: 'गाउँपालिकाहरू' },
    { icon: <ElevationIcon />, value: 900, suffix: 'm+', label: 'Lowest Elevation', labelNp: 'न्यूनतम उचाइ' },
];

const StatsSection = ({ t }) => {
    return (
        <section className="stats-section">
            <div className="stats-grid">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        className="stat-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
                        whileHover={{ y: -8, scale: 1.03 }}
                    >
                        <motion.span
                            className="stat-icon"
                            animate={{ rotate: [0, -5, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 3 + i, ease: 'easeInOut' }}
                        >
                            {stat.icon}
                        </motion.span>
                        <div className="stat-value">
                            <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
                        </div>
                        <p className="stat-label">{t ? t(stat.label, stat.labelNp) : stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
