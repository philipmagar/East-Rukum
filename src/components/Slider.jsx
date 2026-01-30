import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const slidesData = [
    {
        img: '/images/villages/tak.jpg',
        en: 'Historic Taka Village',
        np: 'ऐतिहासिक तक गाउँ',
    },
    {
        img: '/images/place to visit/rukumkot lake.jpg',
        en: 'Serene Rukumkot Lake',
        np: 'शान्त रुकुमकोट ताल',
    },
    {
        img: '/images/lifestyle/sheep grazing in wild.jpg',
        en: 'Highland Pastures',
        np: 'उच्च हिमाली बुकी',
    },
    {
        img: '/images/lifestyle/snow.jpg',
        en: 'Winter Resilience',
        np: 'जाडो लचिलोपन',
    },
    {
        img: '/images/villages/maikot village.png',
        en: 'Historic Maikot Village',
        np: 'ऐतिहासिक मैकोट गाउँ',
    },
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t } = useLanguage();
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 6000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + slidesData.length) % slidesData.length);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 1.1
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.6 }
            }
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
            }
        })
    };

    return (
        <section className="premium-gallery">
            <div className="gallery-header">
                <motion.span
                    className="gallery-tag"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {t('Moments of Grace', 'ग्रेसका क्षणहरू')}
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {t('Witness the Unseen Beauty', 'अनदेखा सुन्दरताको साक्षी')}
                </motion.h2>
            </div>

            <div className="premium-slider-wrapper">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="premium-slide"
                    >
                        <img
                            src={slidesData[currentIndex].img}
                            alt={slidesData[currentIndex].en}
                            className="no-watermark"
                        />
                        <div className="premium-caption">
                            <motion.div
                                className="caption-content"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <h3>{t(slidesData[currentIndex].en, slidesData[currentIndex].np)}</h3>
                                <div className="caption-line"></div>
                                <p>{t('Captured in the heart of East Rukum', 'पूर्वी रुकुमको हृदयमा कैद गरिएको')}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="premium-dots">
                    {slidesData.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`p-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            whileHover={{ scale: 1.2 }}
                            animate={{
                                width: index === currentIndex ? 40 : 10,
                                backgroundColor: index === currentIndex ? "#fff" : "rgba(255,255,255,0.4)"
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Slider;
