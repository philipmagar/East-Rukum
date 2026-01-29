import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const slidesData = [
    {
        img: '/images/autumn taka.png',
        en: 'Autumn Colors in Taka',
        np: 'तकालीगाउँको शरद ऋतु',
    },
    {
        img: '/images/lake with mountain.jpg',
        en: 'Serene Rukumkot Lake',
        np: 'शान्त रुकुमकोट ताल',
    },
    {
        img: '/images/sheep grazing in wild.jpg',
        en: 'Highland Pastures',
        np: 'उच्च हिमाली बुकी',
    },
    {
        img: '/images/taka snowing .png',
        en: 'Winter in Taka Village',
        np: 'तकालीगाउँको हिउँद',
    },
    {
        img: '/images/maikot.png',
        en: 'Historic Maikot Village',
        np: 'ऐतिहासिक मैकोट गाउँ',
    },
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t } = useLanguage();

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slidesData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    };

    return (
        <section className="gallery-section">
            <h2>{t('Visual Journey', 'दृश्य यात्रा')}</h2>
            <div className="slider-container">
                <div className="slider">
                    {slidesData.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentIndex ? 'active' : ''}`}
                            style={{ display: index === currentIndex ? 'block' : 'none' }}
                        >
                            <img src={slide.img} alt={slide.en} className="no-watermark" />
                            <div className="slide-caption">{t(slide.en, slide.np)}</div>
                        </div>
                    ))}
                </div>
                <button className="slider-btn prev" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="slider-btn next" onClick={nextSlide}>
                    &#10095;
                </button>
                <div className="slider-dots">
                    {slidesData.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Slider;
