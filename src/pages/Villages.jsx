import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import Slider from '../components/Slider';

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
            img: "/images/taka.jpg",
            desc: t("Taka is one of the most historic and largest Kham Magar villages, famous for its unique architecture and traditions.", "तका सबैभन्दा ऐतिहासिक र ठूलो खाम मगर गाउँहरू मध्ये एक हो, यसको अद्वितीय वास्तुकला र परम्पराका लागि प्रसिद्ध।"),
            link: "/taka-village",
            hasWatermark: false
        },
        {
            name: t('Maikot', 'मैकोट'),
            img: "/images/maikot.png",
            desc: t("Located at high altitude, Maikot is known for its proximity to yarsagumba regions and breathtaking mountain views.", "उच्च उचाइमा अवस्थित मैकोट, यार्सागुम्बा संकलन क्षेत्र र सुन्दर हिमाली दृश्यका लागि चिनिन्छ।"),
            hasWatermark: false
        },
        {
            name: t('Hukam', 'हुकाम'),
            img: "/images/hukam.jpg",
            desc: t("A beautiful village offering a glimpse into the authentic rural lifestyle and sustainable community practices.", "वास्तविक ग्रामीण जीवनशैली र दिगो सामुदायिक अभ्यासहरूको झलक दिने एक सुन्दर गाउँ।"),
            hasWatermark: true
        },
        {
            name: t('Lukum', 'लुकुम'),
            img: "/images/lukum village.jpg",
            desc: t("Famous for its stone-roofed houses and the preservation of ancient Magar culture.", "ढुङ्गाले छाएका घरहरू र प्राचीन मगर संस्कृतिको संरक्षणका लागि प्रसिद्ध।"),
            hasWatermark: false
        },
        {
            name: t('Rukumkot', 'रुकुमकोट'),
            img: "/images/rukumkot.jpeg",
            desc: t("The historic capital known as the city of 52 lakes and 53 hills.", "ऐतिहासिक राजधानी, जुन ५२ पोखरी र ५३ टाकुरीको शहरका रूपमा चिनिन्छ।"),
            hasWatermark: true
        },
        {
            name: t('Kankri', 'कांक्री'),
            img: "/images/kankri.jpg",
            desc: t("A gateway to the highlands, Kankri is rich in agricultural diversity and communal harmony.", "उच्च भूमिको प्रवेशद्वार, कांक्री कृषि विविधता र सामुदायिक सद्भावमा धनी छ।"),
            hasWatermark: true
        }
    ];

    return (
        <main>
            <section className="hero village-hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>{t('Our Beautiful Villages', 'हाम्रा सुन्दर गाउँहरू')}</h1>
                    <p>{t("The heart and soul of Eastern Rukum's heritage", 'पूर्वी रुकुमको सम्पदाको मुटु र आत्मा')}</p>
                </motion.div>
            </section>

            <Slider />

            <section className="visit-grid-section">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {t('Explore Local Life', 'स्थानीय जीवनको अन्वेषण')}
                    </motion.h2>

                    <motion.div
                        className="visit-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {villagesData.map((village, index) => (
                            <motion.div
                                className="visit-card"
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
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

