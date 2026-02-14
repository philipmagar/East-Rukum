import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Villages = () => {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };
    const villagesData = [
        {
            name: t('Tak', 'तक'),
            img: "/images/villages/tak.jpg",
            desc: t("It's a big, old village. The stone roofs are famous.", "यो एउटा ठूलो र पुरानो गाउँ हो। यहाँका ढुङ्गाले छाएका घरहरू प्रख्यात छन्।"),
            hasWatermark: false
        },
        {
            name: t('Mathilo Sera', 'माथिल्लो सेरा'),
            img: "/images/villages/mathilo sera village.jpg",
            desc: t("It sits up on the hill. You can see the whole valley from there.", "यो डाँडामा छ। त्यहाँबाट तलको सबै उपत्यका देख्न सकिन्छ।"),
            hasWatermark: false
        },
        {
            name: t('Tallo Sera', 'तल्लो सेरा'),
            img: "/images/villages/tallo sera village.jpg",
            desc: t("Down near the river. The land is good for farming here.", "नदी को छेउमा। यहाँको जग्गा खेतीको लागि राम्रो छ।"),
            hasWatermark: false
        },
        {
            name: t('Maikot', 'मैकोट'),
            img: "/images/villages/maikot village.png",
            desc: t("It's really high up. People go from here to look for Yarsagumba.", "यो धेरै उचाइमा छ। मान्छेहरू यहाँबाट यार्सागुम्बा खोज्न जान्छन्।"),
            hasWatermark: false
        },
        {
            name: t('Hukam', 'हुकाम'),
            img: "/images/villages/hukam village.jpg",
            desc: t("A quiet village where you can see how people really live.", "एउटा शान्त गाउँ जहाँ मानिसहरू कसरी बस्छन् भनेर देख्न सकिन्छ।"),
            hasWatermark: false
        },
        {
            name: t('Lukum', 'लुकुम'),
            img: "/images/villages/lukum village.jpg",
            desc: t("They have stone houses and keep the old Magar traditions alive.", "यहाँ ढुङ्गाका घरहरू छन् र पुराना मगर परम्पराहरू अझै जीवित छन्।"),
            hasWatermark: false
        },
        {
            name: t('Rukumkot', 'रुकुमकोट'),
            img: "/images/villages/rukumkot(town).jpeg",
            desc: t("The main town. They say it has 52 lakes.", "मुख्य शहर। यहाँ ५२ वटा पोखरी छन् भन्छन्।"),
            hasWatermark: false
        },
        {
            name: t('Kankri', 'कांक्री'),
            img: "/images/villages/kankri village.jpg",
            desc: t("The gateway to the high places. People grow many different things here.", "लेक जाने बाटो। यहाँ मानिसहरू धेरै थरीका बाली लगाउँछन्।"),
            hasWatermark: false
        },
        {
            name: t('Sisne Village', 'सिस्ने गाउँ'),
            img: "/images/villages/sisne-village.jpg",
            desc: t("Right at the bottom of the mountain. The big walks start here.", "हिमालको ठ्याक्कै फेदमा। ठूला यात्राहरू यहाँबाट सुरु हुन्छन्।"),
            hasWatermark: false
        }
    ];

    return (
        <main>
            <Helmet>
                <title>{t('Traditional Villages of East Rukum | Tak, Maikot & More', 'पूर्वी रुकुमका परम्परागत गाउँहरू | तक, मैकोट र थप')}</title>
                <meta name="description" content={t('Explore the stone-roofed houses and ancient traditions of villages like Tak, Maikot, and Lukum in Eastern Rukum.', 'पूर्वी रुकुमका तक, मैकोट र लुकुम जस्ता गाउँहरूको ढुङ्गाले छाएका घर र प्राचीन परम्पराहरूको अन्वेषण गर्नुहोस्।')} />
                <link rel="canonical" href="https://eastrukum.com/villages" />
            </Helmet>
            <section className="hero village-hero" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/villages/tak during rainy season.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <h1>{t('The Villages', 'गाउँहरू')}</h1>
                    <p>{t("People have lived here for a long time.", "मानिसहरू यहाँ धेरै पहिलेदेखि बस्दै आएका छन्।")}</p>
                </motion.div>
            </section>
            <section className="storytelling-section">
                <div className="container">
                    <motion.div
                        className="story-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}>
                        <motion.div
                            className="story-label"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}>
                            {t('Special place', 'विशेष ठाउँ')}
                        </motion.div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            {t('Tak Village', 'तक गाउँ')}
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            {t(
                                "Tak is old. The houses are packed together on the hill, all with stone roofs. It feels like a different time here. The lifestyle is simple, and everyone seems to know everyone else.",
                                "तक पुरानो गाउँ हो। पहाडमा ढुङ्गाले छाएका घरहरू खादिएर रहेका छन्। यहाँ अर्कै समय जस्तो महसुस हुन्छ। जीवनशैली सरल छ, र सबैले सबैलाई चिन्ने जस्तो लाग्छ।"
                            )}
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            {t(
                                "From the fields they work to how they welcome you, it feels honest. You can stay in their homes, eat what they eat, and see what village life is really like.",
                                "खेतबारीको कामदेखि पाहुनालाई गर्ने स्वागतसम्म, सबै कुरा वास्तविक लाग्छ। तपाईं उनीहरूको घरमा बस्न सक्नुहुन्छ, उनीहरूले खाने खाना खान सक्नुहुन्छ र गाउँको जीवन कस्तो हुन्छ भनेर देख्न सक्नुहुन्छ।"
                            )}
                        </p>
                        <Link to="/taka-village" className="explore-btn" style={{ marginTop: '2rem', textDecoration: 'none', display: 'inline-block' }}>
                            {t('Go to Tak Village', 'तक गाउँ जानुहोस्')}
                        </Link>
                    </motion.div>
                    <motion.div
                        className="story-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}>
                        <img src="/images/villages/tak.jpg" alt="Tak Village" className="no-watermark" style={{ borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }} />
                    </motion.div>
                </div>
            </section>
            <section className="visit-grid-section">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}>
                        {t('Local Life', 'स्थानीय जीवन')}
                    </motion.h2>
                    <motion.div
                        className="visit-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}>
                        {villagesData.map((village, index) => (
                            <motion.div
                                className="visit-card"
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}>
                                {village.link ? (
                                    <Link to={village.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <img src={village.img} alt={village.name} className={village.hasWatermark ? "" : "no-watermark"} />
                                        <div className="visit-card-content">
                                            <h3>{village.name}</h3>
                                            <p>{village.desc}</p>
                                            <div className="explore-btn-sm" style={{ marginTop: '1rem' }}>
                                                {t('Read More', 'थप पढ्नुहोस्')}
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <>
                                        <img src={village.img} alt={village.name} className={village.hasWatermark ? "" : "no-watermark"} />
                                        <div className="visit-card-content">
                                            <h3>{village.name}</h3>
                                            <p>{village.desc}</p>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

        </main>
    );
};
export default Villages;

