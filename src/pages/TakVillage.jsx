import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import Hero from '../components/ui/Hero';
import VisitCard from '../components/ui/VisitCard';
import ImageModal from '../components/ui/ImageModal';
import { useFetchData } from '../hooks/useFetchData';
import { apiService } from '../services/apiService';

const TakaVillage = () => {
    const { t } = useLanguage();
    const [selectedImg, setSelectedImg] = useState(null);

    const { data: takaImages, loading } = useFetchData(() => apiService.fetchTakVillageImages(t));
    return (
        <main>
            <ImageModal selectedImg={selectedImg} onClose={() => setSelectedImg(null)} />
            
            <Hero 
                bgImage="/images/villages/tak-village.jpg"
                title={t('Tak', 'तक')}
                subtitle={t('See how the Kham Magar people live.', 'खाम मगर समुदाय कसरी बस्छन् हेर्नुहोस्।')}
            />
            
            <section className="intro">
                <div className="container">
                    <motion.div
                        className="intro-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>{t('The Main Village', 'मुख्य गाउँ')}</h2>
                        <p>
                            {t(
                                "Tak (or Taksera) is a big village up in the mountains. The houses are built close together with stone roofs. It’s quiet and feels old-fashioned here. People still speak the old language and follow the ways of their grandparents.",
                                "तक (वा तकसेरा) पहाडमा अवस्थित एउटा ठूलो गाउँ हो। यहाँका घरहरू एक अर्कासँग जोिएर ढुङ्गाले छाएका छन्। यहाँ शान्त र पुरानो समय जस्तो महसुस हुन्छ। मानिसहरू अझै पनि पुरानो भाषा बोल्छन् र आफ्ना हजुरबुबा-हजुरआमाको बाटो पछ्याउँछन्।"
                            )}
                        </p>
                        <p>
                            {t(
                                "The weather changes everything here. When it rains, it gets really green. In autumn, the fields turn gold. In winter, there is snow. The people here are tough, but they are very kind to visitors.",
                                "यहाँ मौसमले सबै कुरा परिवर्तन गर्छ। पानी पर्दा, यो एकदम हरियो हुन्छ। शरद ऋतुमा, खेतहरू सुनौलो हुन्छन्। जाडोमा, यहाँ हिउँ पर्छ। यहाँका मानिसहरू बलिया छन्, तर पाहुनाहरूप्रति धेरै दयालु छन्।"
                            )}
                        </p>
                    </motion.div>
                    <motion.div
                        className="intro-image"
                        onClick={() => setSelectedImg({ src: '/images/villages/tak-village-far.jpg', alt: 'Panoramic Tak', caption: t('Looks nice from here', 'यहाँबाट राम्रो देखिन्छ') })}
                        style={{ cursor: 'pointer' }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src="/images/villages/tak-village-far.jpg" alt="Panoramic Tak" className="no-watermark" />
                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>{t('Click to make bigger', 'ठूलो बनाउन क्लिक गर्नुहोस्')}</div>
                    </motion.div>
                </div>
            </section>
            <section className="visit-grid-section">
                <div className="container">
                    <h2 className="section-title">{t('Gallery: Pictures of Tak', 'ग्यालेरी: तकका तस्बिरहरू')}</h2>
                    <motion.div
                        className="visit-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}>
                        {loading && <p>Loading images...</p>}
                        {takaImages && takaImages.map((img, index) => (
                            <VisitCard 
                                key={index} 
                                img={img.src} 
                                title={img.caption} 
                                desc={t('Click to see', 'हेर्न क्लिक गर्नुहोस्')}
                                onClick={() => setSelectedImg(img)}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="intro" style={{ background: '#fff' }}>
                <div className="container">
                    <motion.div
                        className="intro-image"
                        onClick={() => setSelectedImg({ src: '/images/villages/tak-village-2.jpg', alt: 'Village Life', caption: t('Real village life', 'वास्तविक गाउँको जीवन') })}
                        style={{ cursor: 'pointer' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src="/images/villages/tak-village-2.jpg" alt="Village Life" />
                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>{t('Click to make bigger', 'ठूलो बनाउन क्लिक गर्नुहोस्')}</div>
                    </motion.div>
                    <motion.div
                        className="intro-text"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>{t('Stay with the Locals', 'स्थानीयहरूसँग बस्नुहोस्')}</h2>
                        <p>
                            {t(
                                "The best way to know this place is to stay in someone's home. You can eat dhindo and gundruk with them. You can ask them why they decorate their houses that way, or just watch the dances.",
                                "यो ठाउँ जान्ने सबैभन्दा राम्रो तरिका कसैको घरमा बस्नु हो। तपाईं उनीहरूसँग ढिँडो र गुन्द्रुक खान सक्नुहुन्छ। तपाईंले उनीहरूलाई घरहरू त्यसरी किन सजाउँछन् भनेर सोध्न सक्नुहुन्छ, वा नाचहरू हेर्न सक्नुहुन्छ।"
                            )}
                        </p>
                    </motion.div>
                </div>
            </section>

        </main>
    );
};
export default TakaVillage;

