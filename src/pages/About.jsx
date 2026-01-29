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
                    transition={{ duration: 0.8 }}
                >
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
                        transition={{ duration: 0.8 }}
                    >
                        <h2>{t('Geography & Climate', 'भूगोल र मौसम')}</h2>
                        <p>
                            {t(
                                "Eastern Rukum is a hilly district in Karnali Province, featuring mountains like Sisne Himal, forests, rivers, and terraced farmlands. The climate varies from subtropical valleys to cold highlands.",
                                "पूर्वी रुकुम कर्णाली प्रदेशको पहाडी जिल्ला हो। यहाँ सिस्ने हिमाल, जंगल, नदी र तहदेखि खेतहरू पाइन्छ। मौसम उपोष्णकटिबंधीयदेखि चिसो उच्चभूमिसम्म फरक छ।"
                            )}
                        </p>

                        <h2>{t('Palikas & Villages', 'गाउँपालिका र गाउँहरू')}</h2>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, staggerChildren: 0.1 }}
                        >
                            <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>{t('Putha Uttarganga Rural Municipality', 'पुथा उत्तरगंगा गाउँपालिका')}</motion.li>
                            <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>{t('Bhume Rural Municipality', 'भूमे गाउँपालिका')}</motion.li>
                            <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>{t('Sisne Rural Municipality', 'सिस्ने गाउँपालिका')}</motion.li>
                        </motion.ul>
                        <p>
                            {t(
                                "Major villages include Taksera, Ranmamaikot, Hukam, Pelma, Kholagaun, Mahat, and Kankri.",
                                "प्रमुख गाउँहरूमा तकसेरा, रणमामैकोट, हुकाम, पेल्मा, खोलागाउँ, महत र कांक्री समावेश छन्।"
                            )}
                        </p>

                        <h2>{t('History & Culture', 'इतिहास र संस्कृति')}</h2>
                        <p>
                            {t(
                                "Eastern Rukum has a rich history shaped by indigenous Kham Magar traditions, migration patterns, and rural development. The region preserves unique languages, festivals, and communal lifestyles.",
                                "पूर्वी रुकुमको समृद्ध इतिहास indigenous खाम मगर परम्परा, बसोबासको प्रवृत्ति र ग्रामीण विकासबाट आकारिएको छ। यहाँको भाषा, चाडपर्व र सामुदायिक जीवन अनौठो छ।"
                            )}
                        </p>
                    </motion.div>
                    <motion.div
                        className="intro-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/images/rukum-village.jpg" alt="Eastern Rukum Village" className="no-watermark" />
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default About;

