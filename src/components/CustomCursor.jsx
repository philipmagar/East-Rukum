import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [sparkles, setSparkles] = useState([]);
    const sparkleIdRef = useRef(0);

    // Magnifier / Binocular states
    const [hoveredImage, setHoveredImage] = useState(null);
    const [relPos, setRelPos] = useState({ x: 0, y: 0, width: 0, height: 0 });

    useEffect(() => {
        if (window.matchMedia('(hover: none)').matches) return;

        const handleMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            setMousePos({ x, y });

            // Dynamically get the hovered image and its bounds relative to current viewport
            const target = e.target;
            const img = target.closest('img');
            
            if (img && img.offsetWidth > 60 && img.offsetHeight > 60) {
                const rect = img.getBoundingClientRect();
                // Ensure calculations use viewport coordinates
                const px = (x - rect.left) / rect.width;
                const py = (y - rect.top) / rect.height;

                setHoveredImage(img.src);
                setRelPos({
                    x: px,
                    y: py,
                    width: rect.width,
                    height: rect.height
                });
                setIsHovering(true);
            } else {
                setHoveredImage(null);
                
                // Add sparkles occasionally on general interactive hover
                const interactive = target.closest('a, button, .visit-card, .feature-card, .story-card, .explore-btn, .explore-btn-sm, input, textarea, .season-tab, .culture-accordion-header, .dyk-dot');
                setIsHovering(!!interactive);

                if (!interactive && Math.random() < 0.25) {
                    const newSparkle = {
                        id: sparkleIdRef.current++,
                        x: x + (Math.random() - 0.5) * 20,
                        y: y + (Math.random() - 0.5) * 20,
                    };
                    setSparkles(prev => [...prev.slice(-8), newSparkle]);
                }
            }
        };

        const handleMouseLeave = () => {
            setHoveredImage(null);
            setIsHovering(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        if (sparkles.length === 0) return;
        const timeout = setTimeout(() => {
            setSparkles(prev => prev.slice(1));
        }, 600);
        return () => clearTimeout(timeout);
    }, [sparkles]);

    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null;

    const showMagnifier = !!hoveredImage;
    const lensSize = 100; // Diameter of the binocular magnifying lens (increased as requested)

    return (
        <>
            {/* Sparkles */}
            <AnimatePresence>
                {!showMagnifier && sparkles.map((sparkle) => (
                    <motion.div
                        key={sparkle.id}
                        className="cursor-sparkle"
                        style={{ left: sparkle.x, top: sparkle.y }}
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 0, opacity: 0, y: -20 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                ))}
            </AnimatePresence>

            {/* Standard small pointer dot */}
            <motion.div
                className="custom-cursor-dot"
                style={{ left: mousePos.x, top: mousePos.y }}
                animate={{
                    x: '-50%',
                    y: '-50%',
                    scale: showMagnifier ? 0 : isHovering ? 1.5 : 1,
                    opacity: showMagnifier ? 0 : 1
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.3 }}
            />

            {/* Magnifier / Binocular Lens */}
            {showMagnifier ? (
                <motion.div
                    className="cursor-binocular-lens"
                    style={{
                        left: mousePos.x,
                        top: mousePos.y,
                        width: lensSize,
                        height: lensSize,
                    }}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, x: '-50%', y: '-50%' }}
                    transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                >
                    <div 
                        className="binocular-lens-inner"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <img
                            src={hoveredImage}
                            alt="Magnified View"
                            style={{
                                position: 'absolute',
                                width: relPos.width * 2,  // 2x magnification
                                height: relPos.height * 2,
                                maxWidth: 'none',
                                maxHeight: 'none',
                                left: -relPos.x * (relPos.width * 2) + (lensSize / 2),
                                top: -relPos.y * (relPos.height * 2) + (lensSize / 2),
                                display: 'block',
                                objectFit: 'cover'
                            }}
                        />
                        {/* Lens reflection shine */}
                        <div className="lens-shine" />
                    </div>
                </motion.div>
            ) : (
                /* Regular custom ring - transparent inside, 34px wide */
                <motion.div
                    className={`custom-cursor-ring ${isHovering ? 'hovering' : ''}`}
                    animate={{
                        left: mousePos.x,
                        top: mousePos.y,
                        x: '-50%',
                        y: '-50%',
                        scale: isHovering ? 1.6 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.5 }}
                />
            )}
        </>
    );
};

export default CustomCursor;
