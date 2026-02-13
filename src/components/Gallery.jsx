import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const images = [
    { src: "/images/3e4aaf8a-2edc-4c53-9fff-985f4fb76aae.jpg", alt: "Eastern Rukum Landscape" },
    { src: "/images/4670a2f4-0cde-4fab-8b79-449f58b08d64.jpg", alt: "Local Life" },
    { src: "/images/480f5b4c-9762-49dd-84b4-83b057b7f9d9.jpg", alt: "Mountain View" },
    { src: "/images/53fed32e-022d-4f78-a316-ad2c1517e41e.jpg", alt: "Traditional Architecture" },
    { src: "/images/879abfa3-3e70-44c4-a4e0-2f812f3fa2e3.jpg", alt: "Village Scene" },
    { src: "/images/9053aa88-e39a-41a3-8ac0-4cc08c7caced.jpg", alt: "Nature" },
    { src: "/images/Animal Grazing.jpg", alt: "Animal Grazing" },
    { src: "/images/Roads to village in the winter.jpg", alt: "Winter Roads" },
    { src: "/images/c896bbad-e958-430d-a6b1-b14a4f0e8722.jpg", alt: "Scenic Route" },
    { src: "/images/d556bf00-795e-46ef-a62e-7c90387b3d2d.jpg", alt: "Valley View" },
    { src: "/images/jeep crossing river.jpg", alt: "Jeep Crossing River" },
    { src: "/images/view (2).jpg", alt: "Panoramic View" },
    { src: "/images/place to visit/putha himal 2.jpg", alt: "Putha Himala View 2" },
    { src: "/images/place to visit/putha himal2.jpg", alt: "Putha Himala View 3" },
];

const Gallery = () => {
    const { t } = useLanguage();
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="gallery" className="gallery-section" style={{
            padding: '6rem 2rem',
            background: 'var(--offwhite)'
        }}>
            <div className="container">
                <div className="masonry-grid">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            layoutId={img.src}
                            className="masonry-item"
                            onClick={() => setSelectedId(img.src)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                            />
                            <div className="overlay">
                                <span>{img.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            className="modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                layoutId={selectedId}
                                className="modal-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img src={selectedId} alt="Full view" />
                                <button
                                    className="close-btn"
                                    onClick={() => setSelectedId(null)}
                                >
                                    &times;
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <style>{`
                    .masonry-grid {
                        column-count: 3;
                        column-gap: 2rem;
                    }
                    @media (max-width: 900px) {
                        .masonry-grid {
                            column-count: 2;
                        }
                    }
                    @media (max-width: 600px) {
                        .masonry-grid {
                            column-count: 1;
                        }
                    }
                    .masonry-item {
                        break-inside: avoid;
                        margin-bottom: 2rem;
                        border-radius: 16px;
                        overflow: hidden;
                        cursor: zoom-in;
                        position: relative;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                        background: #fff;
                    }
                    .masonry-item img {
                        width: 100%;
                        display: block;
                        transition: transform 0.6s ease;
                    }
                    .masonry-item:hover img {
                        transform: scale(1.05);
                    }
                    .masonry-item .overlay {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        padding: 1.5rem;
                        background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
                        color: #fff;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                        font-family: 'Playfair Display', serif;
                        font-size: 1.1rem;
                    }
                    .masonry-item:hover .overlay {
                        opacity: 1;
                    }
                    .modal-backdrop {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(62, 44, 44, 0.95);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 2000;
                        padding: 2rem;
                    }
                    .modal-content {
                        position: relative;
                        max-width: 90%;
                        max-height: 90vh;
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    }
                    .modal-content img {
                        max-width: 100%;
                        max-height: 90vh;
                        display: block;
                    }
                    .close-btn {
                        position: absolute;
                        top: 1rem;
                        right: 1rem;
                        background: rgba(255,255,255,0.2);
                        border: none;
                        color: #fff;
                        font-size: 2rem;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: background 0.2s;
                    }
                    .close-btn:hover {
                        background: rgba(255,255,255,0.4);
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Gallery;
