import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import MusicPlayer from '../components/MusicPlayer';

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
            desc: t("Tak is one of the most historic and largest Kham Magar villages, famous for its unique architecture and traditions.", "तका सबैभन्दा ऐतिहासिक र ठूलो खाम मगर गाउँहरू मध्ये एक हो, यसको अद्वितीय वास्तुकला र परम्पराका लागि प्रसिद्ध।"),
            hasWatermark: false
        },
        {
            name: t('Mathilo Sera', 'माथिल्लो सेरा'),
            img: "/images/villages/mathilo sera village.jpg",
            desc: t("A scenic settlement perched on the hills, offering panoramic views of the valley below.", "उपत्यकाको मनोरम दृश्यहरू प्रदान गर्ने पहाडहरूमा अवस्थित एक सुन्दर बस्ती।"),
            hasWatermark: false
        },
        {
            name: t('Tallo Sera', 'तल्लो सेरा'),
            img: "/images/villages/tallo sera village.jpg",
            desc: t("Located near the river banks, Tallo Sera is known for its fertile lands and traditional farming.", "नदी किनार नजिकै अवस्थित, तल्लो सेरा यसको उब्जाउ भूमि र परम्परागत खेतीका लागि चिनिन्छ।"),
            hasWatermark: false
        },
        {
            name: t('Maikot', 'मैकोट'),
            img: "/images/villages/maikot village.png",
            desc: t("Located at high altitude, Maikot is known for its proximity to yarsagumba regions and breathtaking mountain views.", "उच्च उचाइमा अवस्थित मैकोट, यार्सागुम्बा संकलन क्षेत्र र सुन्दर हिमाली दृश्यका लागि चिनिन्छ।"),
            hasWatermark: false
        },
        {
            name: t('Hukam', 'हुकाम'),
            img: "/images/villages/hukam village.jpg",
            desc: t("A beautiful village offering a glimpse into the authentic rural lifestyle and sustainable community practices.", "वास्तविक ग्रामीण जीवनशैली र दिगो सामुदायिक अभ्यासहरूको झलक दिने एक सुन्दर गाउँ।"),
            hasWatermark: false
        },
        {
            name: t('Lukum', 'लुकुम'),
            img: "/images/villages/lukum village.jpg",
            desc: t("Famous for its stone roofed houses and the preservation of ancient Magar culture.", "ढुङ्गाले छाएका घरहरू र प्राचीन मगर संस्कृतिको संरक्षणका लागि प्रसिद्ध।"),
            hasWatermark: false
        },
        {
            name: t('Rukumkot', 'रुकुमकोट'),
            img: "/images/villages/rukumkot(town).jpeg",
            desc: t("The historic capital known as the city of 52 lakes and 53 hills.", "ऐतिहासिक राजधानी, जुन ५२ पोखरी र ५३ टाकुरीको शहरका रूपमा चिनिन्छ।"),
            hasWatermark: false
        },
        {
            name: t('Kankri', 'कांक्री'),
            img: "/images/villages/kankri village.jpg",
            desc: t("A gateway to the highlands, Kankri is rich in agricultural diversity and communal harmony.", "उच्च भूमिको प्रवेशद्वार, कांक्री कृषि विविधता र सामुदायिक सद्भावमा धनी छ।"),
            hasWatermark: false
        },
        {
            name: t('Sisne Village', 'सिस्ने गाउँ'),
            img: "/images/villages/sisne-village.jpg",
            desc: t("The village lying at the foot of Sisne Himal, a starting point for many adventures.", "सिस्ने हिमालको फेदमा अवस्थित गाउँ, धेरै साहसिक कार्यहरूको लागि एक प्रस्थानविन्दु।"),
            hasWatermark: false
        }
    ];

    return (
        <main>
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
                    transition={{ duration: 0.8 }}
                >
                    <h1>{t('Our Beautiful Villages', 'हाम्रा सुन्दर गाउँहरू')}</h1>
                    <p>{t("The heart and soul of Eastern Rukum's heritage", 'पूर्वी रुकुमको सम्पदाको मुटु र आत्मा')}</p>
                </motion.div>
            </section>

            {/* FEATURED TAK VILLAGE SECTION */}
            <section className="storytelling-section">
                <div className="container">
                    <motion.div
                        className="story-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="story-label"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {t('Featured Village', 'विशेष गाउँ')}
                        </motion.div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            {t('Tak Village The Crown Jewel', 'तक गाउँ - मुकुटको रत्न')}
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                            {t(
                                "Tak (Taka) stands as the most historic and culturally significant village in Eastern Rukum. This ancient Kham Magar settlement showcases remarkable stone-roofed architecture that has withstood centuries. The village is a living museum where traditional customs, indigenous language, and communal harmony thrive in their purest form.",
                                "तक (तका) पूर्वी रुकुमको सबैभन्दा ऐतिहासिक र सांस्कृतिक रूपमा महत्त्वपूर्ण गाउँको रूपमा खडा छ। यो प्राचीन खाम मगर बस्तीले शताब्दीयौंदेखि टिकेको उल्लेखनीय ढुङ्गाले छाएको वास्तुकला प्रदर्शन गर्दछ। यो गाउँ एउटा जीवित संग्रहालय हो जहाँ परम्परागत रीतिरिवाज, आदिवासी भाषा र सामुदायिक सद्भाव आफ्नो शुद्ध रूपमा फस्टाउँछ।"
                            )}
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            {t(
                                "From its terraced farmlands to the warm hospitality of its people, Tak represents the essence of Eastern Rukum's heritage. Visitors are welcomed into homestays where they can experience authentic village life, taste traditional cuisine, and participate in age-old festivals.",
                                "यसको तहदेखि खेतहरूदेखि यहाँका मानिसहरूको न्यानो आतिथ्यसम्म, तकले पूर्वी रुकुमको सम्पदाको सार प्रतिनिधित्व गर्दछ। आगन्तुकहरूलाई होमस्टेमा स्वागत गरिन्छ जहाँ उनीहरूले प्रामाणिक गाउँ जीवनको अनुभव गर्न, परम्परागत खाना चाख्न र पुरानो चाडपर्वहरूमा भाग लिन सक्छन्।"
                            )}
                        </p>
                        <Link to="/taka-village" className="explore-btn" style={{ marginTop: '2rem', textDecoration: 'none', display: 'inline-block' }}>
                            {t('Discover Tak Village', 'तक गाउँ पत्ता लगाउनुहोस्')}
                        </Link>
                    </motion.div>
                    <motion.div
                        className="story-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
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
            <MusicPlayer />
        </main>
    );
};

export default Villages;

