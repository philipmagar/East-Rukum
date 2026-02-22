import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const About = () => {
    const { t } = useLanguage();
    return (
        <main>
            <section className="hero" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/480f5b4c-9762-49dd-84b4-83b057b7f9d9.jpg')" }}>
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <h1>{t('About Eastern Rukum', 'पूर्वी रुकुमको परिचय')}</h1>
                    <p>{t('Explore the geography, people, and history of Eastern Rukum', 'पूर्वी रुकुमको भूगोल, बस्ती र इतिहासको अवलोकन गर्नुहोस्')}</p>
                </motion.div>
            </section>

            <section className="history-documentation" style={{ padding: '4rem 2rem', background: '#fff' }}>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="section-title">{t('History & Documentation', 'इतिहास र अभिलेख')}</h2>
                        <p className="max-w-2xl mx-auto text-gray-600">
                            {t(
                                "The formation of Eastern Rukum as a distinct district marks a significant milestone in Nepal's federal restructuring.",
                                "पूर्वी रुकुमको एक छुट्टै जिल्लाको रूपमा गठन नेपालको संघीय पुनर्संरचनामा एक महत्वपूर्ण कोसेढ हो।"
                            )}
                        </p>
                    </motion.div>

                    <div className="history-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                        <motion.div
                            className="history-text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2C3E50' }}>{t('Formation & Division', 'गठन र विभाजन')}</h3>
                            <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1.5rem' }}>
                                {t(
                                    "Following the promulgation of the Constitution of Nepal in 2015, the country moved towards a federal structure. The former Rukum district was unique as it was split between two provinces. In 2017, it was officially divided into Eastern Rukum (part of Lumbini Province) and Western Rukum (part of Karnali Province).",
                                    "२०७२ को नेपालको संविधान जारी भएपछि देश संघीय संरचनामा गयो। साविकको रुकुम जिल्ला दुई प्रदेशमा विभाजित भएकोले यो अनौठो थियो। २०७४ सालमा यसलाई औपचारिक रूपमा पूर्वी रुकुम (लुम्बिनी प्रदेश) र पश्चिमी रुकुम (कर्णाली प्रदेश) मा विभाजन गरियो।"
                                )}
                            </p>
                            <p style={{ lineHeight: '1.8', color: '#4a5568' }}>
                                {t(
                                    "This division recognized the distinct geographical and cultural identity of the eastern Kham Magar region, allowing for more focused development and administrative accessibility for the remote highlands.",
                                    "यो विभाजनले पूर्वी खाम मगर क्षेत्रको छुट्टै भौगोलिक र सांस्कृतिक पहिचानलाई मान्यता दियो, जसले दुर्गम उच्च पहाडी क्षेत्रका लागि थप केन्द्रित विकास र प्रशासनिक पहुँचको अनुमति दियो।"
                                )}
                            </p>
                        </motion.div>

                        <motion.div
                            className="timeline-container"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            style={{ background: '#f8fafc', padding: '2rem', borderRadius: '15px' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#2C3E50' }}>{t('Key Milestones', 'प्रमुख कोसेढहरू')}</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    { year: '2015', title: t('New Constitution', 'नयाँ संविधान'), desc: t('Adoption of federalism in Nepal.', 'नेपालमा संघीयताको अंगीकार।') },
                                    { year: '2017', title: t('Official Division', 'औपचारिक विभाजन'), desc: t('Rukum officially split into East and West.', 'रुकुम औपचारिक रूपमा पूर्व र पश्चिममा विभाजित।') },
                                    { year: '2018', title: t('Local Elections', 'स्थानीय निर्वाचन'), desc: t('First local government established in new districts.', 'नयाँ जिल्लाहरूमा पहिलो स्थानीय सरकार स्थापना।') }
                                ].map((item, index) => (
                                    <li key={index} style={{ marginBottom: '1.5rem', position: 'relative', paddingLeft: '20px', borderLeft: '2px solid #e2e8f0' }}>
                                        <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 'bold', color: '#8C3B2A' }}>{item.year}</span>
                                        <strong style={{ display: 'block', color: '#2d3748' }}>{item.title}</strong>
                                        <span style={{ fontSize: '0.9rem', color: '#718096' }}>{item.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="geography-demographics" style={{ padding: '4rem 2rem', background: '#f0f4f8' }}>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="section-title">{t('Geography & Demographics', 'भूगोल र जनसांख्यिकी')}</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', color: '#4a5568' }}>
                            {t(
                                "Home to 56,786 people (2021 Census), Eastern Rukum spans from subtropical valleys to alpine peaks over 7,000m.",
                                "५६,७८६ मानिसहरूको बसोबास (२०७८ जनगणना), पूर्वी रुकुम उपोष्णकटिबंधीय उपत्यकादेखि ७,००० मिटरभन्दा माथिका लेकाली चुचुराहरूसम्म फैलिएको छ।"
                            )}
                        </p>
                    </motion.div>

                    <div className="rm-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            {
                                name: t('Putha Uttarganga', 'पुथा उत्तरगंगा'),
                                pop: '18,308',
                                elev: '2,000m - 7,246m',
                                feature: t('Highlands, Dhorpatan Reserve, Yarsagumba', 'उच्च पहाडी क्षेत्र, ढोरपाटन आरक्ष, यार्सागुम्बा'),
                                img: '/images/villages/tak-village.jpg'
                            },
                            {
                                name: t('Bhume', 'भूमे'),
                                pop: '19,829',
                                elev: '1,500m - 4,000m',
                                feature: t('Cultural Hub, Guerilla Trek, Dense Forests', 'सांस्कृतिक केन्द्र, गुरिल्ला पदयात्रा, घना जंगल'),
                                img: '/images/villages/lukum-village.jpg'
                            },
                            {
                                name: t('Sisne', 'सिस्ने'),
                                pop: '18,534',
                                elev: '900m - 6,000m',
                                feature: t('Admin Center, Lakes, Kamal Taal', 'प्रशासनिक केन्द्र, तालहरू, कमल ताल'),
                                img: '/images/places/sisne-himal.jpg'
                            }
                        ].map((rm, idx) => (
                            <motion.div
                                key={idx}
                                className="rm-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={rm.img} alt={rm.name} className="no-watermark" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#2d3748' }}>{rm.name}</h3>
                                    <ul style={{ padding: 0, listStyle: 'none', fontSize: '0.95rem', color: '#4a5568' }}>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                                            <span>{t('Population', 'जनसंख्या')}:</span> <strong>{rm.pop}</strong>
                                        </li>
                                        <li style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                                            <span>{t('Elevation', 'उचाइ')}:</span> <strong>{rm.elev}</strong>
                                        </li>
                                        <li style={{ marginTop: '0.8rem', paddingTop: '0.8rem', borderTop: '1px solid #edf2f7', fontStyle: 'italic' }}>
                                            {rm.feature}
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="economy-livelihoods" style={{ padding: '4rem 2rem', background: '#fff' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="section-title">{t('Economy & Livelihoods', 'अर्थतन्त्र र जीविकोपार्जन')}</h2>
                    </motion.div>

                    <div className="economy-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            {
                                img: '/images/lifestyle/livelihood.jpg',
                                title: t('Agriculture', 'कृषि'),
                                desc: t('Traditional farming of maize, wheat, barley, and potatoes form the backbone of daily life. Terraced fields are a common sight.', 'मकै, गहुँ, जौ र आलुको परम्परागत खेती दैनिक जीवनको मुख्य आधार हो। कान्ला परेका खेतहरू सामान्य दृश्य हुन्।')
                            },
                            {
                                img: '/images/lifestyle/sheep.jpg',
                                title: t('Livestock', 'पशुपालन'),
                                desc: t('High-altitude herding of sheep, goats, and yaks is vital. Transhumance practices are still followed in the northern regions.', 'भेडा, बाख्रा र चौंरीको उच्च पहाडी पालन महत्वपूर्ण छ। उत्तरी क्षेत्रहरूमा मौसमी बसाइँसराइको अभ्यास अझै गरिन्छ।')
                            },
                            {
                                img: '/images/lifestyle/searching-for-yarshagumba.gif',
                                title: t('Herbs & Yarsagumba', 'जडीबुटी र यार्सा'),
                                desc: t('Collection of Yarsagumba and medicinal herbs during the season is a major source of income for many households.', 'सिजनमा यार्सागुम्बा र जडीबुटी संकलन धेरै घरपरिवारको आम्दानीको मुख्य स्रोत हो।')
                            },
                            {
                                img: '/images/jeep-crossing-river.jpg',
                                title: t('Infrastructure', 'पूर्वाधार'),
                                desc: t('Road connectivity constitutes the "Mid-Hill Highway" lifeline. Markets in Rukumkot and Burtibang serve as trade hubs.', 'सडक सञ्जालले "मध्य पहाडी लोकमार्ग" लाई जोड्छ। रुकुमकोट र बुर्तिबाङका बजारहरू व्यापारिक केन्द्र हुन्।')
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="economy-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{ padding: '2rem', background: '#fffbe6', borderRadius: '15px', border: '1px solid #e8dccb' }}>
                                <img src={item.img} alt={item.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }} />
                                <h3 style={{ marginBottom: '1rem', color: '#8C3B2A' }}>{item.title}</h3>
                                <p style={{ color: '#555', lineHeight: '1.6' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
};
export default About;

