import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const About = () => {
    const { t } = useLanguage();
    return (
        <main>
            <section className="hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <h1>{t('About Eastern Rukum', 'पूर्वी रुकुमको परिचय')}</h1>
                    <p>{t('Explore the geography, people, and history of Eastern Rukum', 'पूर्वी रुकुमको भूगोल, बस्ती र इतिहासको अवलोकन गर्नुहोस्')}</p>
                </motion.div>
            </section>

            <section className="intro">
                <div className="container">
                    <motion.div
                        className="intro-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}>
                        <h2>{t('Geography & Climate', 'भूगोल र मौसम')}</h2>
                        <p>
                            {t(
                                "Eastern Rukum is a hilly district in Karnali Province, featuring mountains like Sisne Himal, forests, rivers, and terraced farmlands. The climate varies from subtropical valleys to cold highlands.",
                                "पूर्वी रुकुम कर्णाली प्रदेशको पहाडी जिल्ला हो। यहाँ सिस्ने हिमाल, जंगल, नदी र तहदेखि खेतहरू पाइन्छ। मौसम उपोष्णकटिबंधीयदेखि चिसो उच्चभूमिसम्म फरक छ।"
                            )}
                        </p>
                    </motion.div>
                    <motion.div
                        className="intro-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}>
                        <img src="/images/villages/village hero.jpg" alt="Eastern Rukum Village" className="no-watermark" />
                    </motion.div>
                </div>
            </section>

            <section className="admin-divisions" style={{ padding: '4rem 2rem', background: '#f8fafc' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>{t('Administrative Divisions', 'प्रशासनिक विभाजन')}</h2>

                    <div className="municipality-list" style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                        <div className="rm-section" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexDirection: 'row' }}>
                            <motion.div
                                style={{ flex: 1 }}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}>
                                <img
                                    src="/images/villages/Tak village.jpg"
                                    alt="Putha Uttarganga"
                                    style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                                    className="no-watermark"
                                />
                            </motion.div>
                            <motion.div
                                style={{ flex: 1 }}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#2d3748' }}>
                                    {t('Putha Uttarganga Rural Municipality', 'पुथा उत्तरगंगा गाउँपालिका')}
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '1rem', lineHeight: '1.8' }}>
                                    {t(
                                        "As the largest municipality in the district, Putha Uttarganga encompasses the rugged high altitude terrains of Eastern Rukum. It is the heartland of the Kham Magar civilization, where ancient dialects and shamanistic traditions are preserved in their purest forms. The region is also the gateway to the Dhorpatan Hunting Reserve and is famous for its harvesting of Yarsagumba and spectacular alpine meadows.",
                                        "जिल्लाको सबैभन्दा ठूलो गाउँपालिकाको रूपमा, पुथा उत्तरगंगाले पूर्वी रुकुमको कडा उच्च पहाडी भूभागहरू समेट्छ। यो खाम मगर सभ्यताको केन्द्रविन्दु हो, जहाँ प्राचीन भाषिका र धामीझाँक्री परम्पराहरू तिनको शुद्ध रूपमा संरक्षित छन्। यो क्षेत्र ढोरपाटन शिकार आरक्षणको प्रवेशद्वार पनि हो र यारसागुम्बा संकलन तथा शानदार लेकाली मैदानहरूका लागि प्रसिद्ध छ।"
                                    )}
                                </p>
                                <h4 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.8rem', color: '#2d3748', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('Key Villages', 'प्रमुख गाउँहरू')}</h4>
                                <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', paddingLeft: '1.2rem', color: '#4a5568' }}>
                                    <li>{t('Taksera (Tak)', 'तकसेरा (तक)')}</li>
                                    <li>{t('Ranmamaikot', 'रणमामैकोट')}</li>
                                    <li>{t('Hukam', 'हुकाम')}</li>
                                    <li>{t('Kol', 'कोल')}</li>
                                    <li>{t('Rangsi', 'राङ्सी')}</li>
                                    <li>{t('Jang', 'जाङ')}</li>
                                </ul>
                            </motion.div>
                        </div>
                        <div className="rm-section" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexDirection: 'row-reverse' }}>
                            <motion.div
                                style={{ flex: 1 }}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}>
                                <img src="/images/villages/lukum village.jpg" alt="Bhume" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} className="no-watermark" />
                            </motion.div>
                            <motion.div style={{ flex: 1 }} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#2d3748' }}>
                                    {t('Bhume Rural Municipality', 'भूमे गाउँपालिका')}
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '1rem', lineHeight: '1.8' }}>
                                    {t(
                                        "Bhume, meaning 'Land of the Earth', is culturally renowned for the vibrant Bhume Naach festival dedicated to the Earth deity. This region features lush temperate forests, terraced fields, and dense settlements. It bridges the gap between the highlands and the mid-hills, offering a rich blend of agriculture and indigenous culture.",
                                        "भूमे, जसको अर्थ 'पृथ्वीको भूमि' हो, पृथ्वी देवतालाई समर्पित जीवन्त भूमे नाच पर्वका लागि सांस्कृतिक रूपमा प्रसिद्ध छ। यस क्षेत्रमा हरियाली समशीतोष्ण जंगल, कान्ला परेका खेतहरू र घना बस्तीहरू छन्। यसले उच्च पहाड र मध्य पहाडहरू बीचको खाडललाई जोड्छ, कृषि र आदिवासी संस्कृतिको धनी मिश्रण प्रदान गर्दछ।"
                                    )}
                                </p>
                                <h4 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.8rem', color: '#2d3748', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('Key Villages', 'प्रमुख गाउँहरू')}</h4>
                                <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', paddingLeft: '1.2rem', color: '#4a5568' }}>
                                    <li>{t('Kankri', 'कांक्री')}</li>
                                    <li>{t('Lukum', 'लुकुम')}</li>
                                    <li>{t('Mahat', 'महत')}</li>
                                    <li>{t('Chunbang', 'चुनवाङ')}</li>
                                    <li>{t('Morabang', 'मोरावाङ')}</li>
                                    <li>{t('Khabang', 'खावाङ')}</li>
                                </ul>
                            </motion.div>
                        </div>
                        <div className="rm-section" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexDirection: 'row' }}>
                            <motion.div style={{ flex: 1 }} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                                <img src="/images/place to visit/sisne Himal.jpg" alt="Sisne" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} className="no-watermark" />
                            </motion.div>
                            <motion.div style={{ flex: 1 }} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#2d3748' }}>{t('Sisne Rural Municipality', 'सिस्ने गाउँपालिका')}</h3>
                                <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '1rem', lineHeight: '1.8' }}>{t("Dominated by the imposing presence of Sisne Himal (the virgin mountain), this municipality serves as the administrative center of the district. It is famous for Rukumkot (Chhippridaha), known as the 'City of 52 Lakes and 53 Hills', offering breathtaking views of reflections in Kamal Taal and starting points for high altitude treks.", "सिस्ने हिमाल (कुमारी हिमाल) को प्रभावशाली उपस्थितिले ओगटेको, यो गाउँपालिका जिल्लाको प्रशासनिक केन्द्रको रूपमा सेवा गर्दछ। यो रुकुमकोट (छिप्रिदह) का लागि प्रसिद्ध छ, जसलाई '५२ पोखरी र ५३ टाकुरीको शहर' भनेर चिनिन्छ, जहाँ कमल तालमा हिमालको प्रतिबिम्ब र उच्च पहाडी पदयात्राको सुरुवाती बिन्दुहरूको मनोरम दृश्य देखिन्छ।")}</p>
                                <h4 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.8rem', color: '#2d3748', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('Key Villages', 'प्रमुख गाउँहरू')}</h4>
                                <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', paddingLeft: '1.2rem', color: '#4a5568' }}>
                                    <li>{t('Rukumkot', 'रुकुमकोट')}</li>
                                    <li>{t('Sisne', 'सिस्ने')}</li>
                                    <li>{t('Pwang', 'प्वाङ')}</li>
                                    <li>{t('Syalkhadi', 'स्यालाखदी')}</li>
                                    <li>{t('Pokhara', 'पोखरा')}</li>
                                    <li>{t('Naigad', 'नाइगाड')}</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="history-section" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2>{t('History & Culture', 'इतिहास र संस्कृति')}</h2>
                    <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
                        {t(
                            "Eastern Rukum has a rich history shaped by indigenous Kham Magar traditions, migration patterns, and rural development. The region preserves unique languages, festivals, and communal lifestyles.",
                            "पूर्वी रुकुमको समृद्ध इतिहास indigenous खाम मगर परम्परा, बसोबासको प्रवृत्ति र ग्रामीण विकासबाट आकारिएको छ। यहाँको भाषा, चाडपर्व र सामुदायिक जीवन अनौठो छ।"
                        )}
                    </p>
                </div>
            </section>
            <section className="intro" style={{ borderTop: '1px solid #eee', textAlign: 'center', padding: '4rem 2rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ marginBottom: '2rem' }}>{t('Ready to see our villages?', 'हाम्रा गाउँहरू हेर्न तयार हुनुहुन्छ?')}</h2>
                    <Link to="/villages.html" className="explore-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                        {t('Explore Villages', 'गाउँहरू अन्वेषण गर्नुहोस्')}
                    </Link>
                </motion.div>
            </section>
        </main>
    );
};
export default About;

