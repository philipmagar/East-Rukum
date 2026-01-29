import { useLanguage } from '../context/LanguageContext';

const Visit = () => {
    const { t } = useLanguage();

    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <h1>{t('Places to Visit', 'घुम्नलायक स्थानहरू')}</h1>
                    <p>{t('Discover mountains, villages, and cultural landmarks', 'हिमाल, गाउँ र सांस्कृतिक स्थलहरू पत्ता लगाउनुहोस्')}</p>
                </div>
            </section>

            <section className="visit-grid-section">
                <div className="container">
                    <h2 className="section-title">{t('Top Destinations', 'प्रमुख गन्तव्यहरू')}</h2>

                    <div className="visit-grid">
                        <div className="visit-card">
                            <img src="/images/hero.sisne.jpg" alt="Sisne Himal" />
                            <div className="visit-card-content">
                                <h3>{t('Sisne Himal', 'सिस्ने हिमाल')}</h3>
                                <p>
                                    {t(
                                        "Sisne Himal, also known as the Virgin Peak, is famous for trekking and panoramic views.",
                                        "सिस्ने हिमाल, जसलाई भर्जिन पिक पनि भनिन्छ, पदयात्रा र सुन्दर दृश्यका लागि प्रसिद्ध छ।"
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="visit-card">
                            <img src="/images/rukumkot lake.jpg" alt="Rukumkot" className="no-watermark" />
                            <div className="visit-card-content">
                                <h3>{t('Rukumkot', 'रुकुमकोट')}</h3>
                                <p>
                                    {t(
                                        "A historic town with 52 lakes and 53 hills. Famous for Barah Temple and the scenic Rukumkot Lake.",
                                        "५२ पोखरी ५३ टाकुरीको शहर। बराह मन्दिर र सुन्दर रुकुमकोट तालको लागि प्रसिद्ध।"
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="visit-card">
                            <img src="/images/kankri.jpg" alt="Kankri Village" />
                            <div className="visit-card-content">
                                <h3>{t('Kankri & Local Villages', 'कांक्री र स्थानीय गाउँहरू')}</h3>
                                <p>
                                    {t(
                                        "Experience village life in Kankri, Pelma, Taksera, and Mahat, with homestays and community tourism.",
                                        "कांक्री, पेल्मा, तकसेरा र महतमा गाउँ जीवनको अनुभव गर्नुहोस्, होमस्टे र सामुदायिक पर्यटनसहित।"
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="travel-routes">
                        <h2>{t('Travel Routes', 'यात्रा मार्ग')}</h2>
                        <div className="routes-container">
                            <div className="route-item">
                                <span className="route-icon">🚌</span>
                                <p>{t('Kathmandu → Surkhet → Musikot → Sisne / Putha', 'काठमाडौँ → सुर्खेत → मुसिकोट → सिस्ने / पुथा')}</p>
                            </div>
                            <div className="route-item">
                                <span className="route-icon">🚍</span>
                                <p>{t('Kathmandu → Rolpa → Rukumkot → Bhume', 'काठमाडौँ → रोल्पा → रुकुमकोट → भूमे')}</p>
                            </div>
                            <div className="route-item">
                                <span className="route-icon">🚜</span>
                                <p>{t('Local jeep trails connect villages seasonally', 'स्थानीय जिप ट्र्याकमार्फत गाउँहरू मौसमी रूपमा जोडिन्छन्')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Visit;
