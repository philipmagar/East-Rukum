import React, { useState, useEffect, useRef } from 'react';
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
    const [isHovered, setIsHovered] = useState(false);
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            paginate(1);
        }, 6000);
        return () => clearInterval(interval);
    }, [currentIndex, isHovered]);

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => (prev + newDirection + slidesData.length) % slidesData.length);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 1.1,
            filter: 'blur(10px)'
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.6 },
                scale: { duration: 0.8 },
                filter: { duration: 0.6 }
            }
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.9,
            filter: 'blur(10px)',
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
                    viewport={{ once: true }}>
                    {t('Moments of Grace', 'ग्रेसका क्षणहरू')}
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}>
                    {t('Witness the Unseen Beauty', 'अनदेखा सुन्दरताको साक्षी')}
                </motion.h2>
            </div>

            <div
                className="premium-slider-wrapper"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="premium-slide">
                        <motion.img
                            src={slidesData[currentIndex].img}
                            alt={slidesData[currentIndex].en}
                            className="no-watermark"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                        <div className="premium-caption">
                            <motion.div
                                className="caption-content"
                                initial={{ x: -30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <motion.h3
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {t(slidesData[currentIndex].en, slidesData[currentIndex].np)}
                                </motion.h3>
                                <div className="caption-line"></div>
                                <p>{t('Captured in the heart of East Rukum', 'पूर्वी रुकुमको हृदयमा कैद गरिएको')}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <motion.button
                    className="slider-nav-btn prev"
                    onClick={() => paginate(-1)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
                    whileHover={{ scale: 1.1, backgroundColor: "var(--green)" }}
                    whileTap={{ scale: 0.9 }}
                >
                    ←
                </motion.button>
                <motion.button
                    className="slider-nav-btn next"
                    onClick={() => paginate(1)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
                    whileHover={{ scale: 1.1, backgroundColor: "var(--green)" }}
                    whileTap={{ scale: 0.9 }}
                >
                    →
                </motion.button>

                <div className="premium-dots">
                    {slidesData.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`p-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            whileHover={{ scale: 1.3 }}
                            animate={{
                                width: index === currentIndex ? 40 : 12,
                                height: 12,
                                backgroundColor: index === currentIndex ? "#fff" : "rgba(255,255,255,0.3)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Slider;
