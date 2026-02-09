import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const { t } = useLanguage();

    const audioUrl = "/flute.m4a";
    useEffect(() => {
        const playAudio = async () => {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (err) {
                console.log("Autoplay blocked. User interaction required.");
            }
        };
        if (audioRef.current) {
            playAudio();
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, []);
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(err => console.log("Audio play blocked by browser."));
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <div className="music-player-fixed">
            <audio ref={audioRef} loop src={audioUrl} />
            <motion.button
                className={`music-toggle ${isPlaying ? 'playing' : ''}`}
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                title={isPlaying ? t('Mute Music', 'संगीत बन्द गर्नुहोस्') : t('Play Music', 'संगीत बजाउनुहोस्')}
                aria-label={isPlaying ? t('Mute Music', 'संगीत बन्द गर्नुहोस्') : t('Play Music', 'संगीत बजाउनुहोस्')}>
                <div className="music-icon-wrapper">
                    {isPlaying ? (
                        <div className="music-waves">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                            <line x1="23" y1="9" x2="17" y2="15"></line>
                            <line x1="17" y1="9" x2="23" y2="15"></line>
                        </svg>
                    )}
                </div>
            </motion.button>
            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        className="now-playing-tag"
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                    >
                        {t('Traditional Flute', 'परम्परागत बाँसुरी')}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
export default MusicPlayer;
