import { useLanguage } from '../context/LanguageContext';

const Culture = () => {
    const { t } = useLanguage();

    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <h1>{t('Kham Magar Culture', 'खाम मगर संस्कृति')}</h1>
                    <p>{t('Traditions, festivals, and lifestyle in Eastern Rukum', 'पूर्वी रुकुममा परम्परा, चाडपर्व र जीवनशैली')}</p>
                </div>
            </section>

            <section className="intro">
                <div className="container">
                    <div className="intro-text">
                        <h2>{t('Language & Communication', 'भाषा र सञ्चार')}</h2>
                        <p>
                            {t(
                                "The Kham Magar speak the Kham language, maintaining oral traditions, folktales, and indigenous knowledge passed down through generations.",
                                "खाम मगरहरूले खाम भाषा बोल्छन् र मौखिक परम्परा, लोककथा र indigenous ज्ञान पुस्तौलीबाट सन्तानसम्म पुर्याउँछन्।"
                            )}
                        </p>

                        <h2>{t('Traditional Dress & Ornaments', 'परम्परागत पोशाक र गहना')}</h2>
                        <p>
                            {t(
                                "Men wear traditional woolen garments, and women adorn themselves with colorful dresses, beads, and silver ornaments during festivals and ceremonies.",
                                "पुरुषहरूले परम्परागत ऊनी लुगा लगाउँछन्, र महिलाहरू चाडपर्व तथा समारोहमा रङ्गीन लुगा, मनका माला र चाँदीका गहना लगाउँछन्।"
                            )}
                        </p>

                        <h2>{t('Music & Dance', 'संगीत र नृत्य')}</h2>
                        <p>
                            {t(
                                "Folk songs, drums, and flute melodies are central to festivals, rituals, and social gatherings, preserving community cohesion.",
                                "लोकगीत, ढोल, बाँसुरी र धुन चाडपर्व, संस्कार र सामाजिक भेला कार्यक्रममा मुख्य भूमिका खेल्छन्।"
                            )}
                        </p>

                        <h2>{t('Festivals & Celebrations', 'चाडपर्व र उत्सव')}</h2>
                        <p>
                            {t(
                                "Maghe Sankranti, winter feasts, and harvest festivals are celebrated with dance, music, and communal rituals highlighting indigenous heritage.",
                                "माघे संक्रान्ति, जाडो पर्व र बाली चाँदी उत्सव नाच, गीत र सामुदायिक संस्कारसहित मनाइन्छ।"
                            )}
                        </p>
                    </div>
                    <div className="intro-image">
                        <img src="/images/lifestyle/shepard lifestyle.jpg" alt="Kham Magar traditional dress and dance" />
                    </div>
                </div>
            </section>

            {/* LIFESTYLE GALLERY */}
            <section className="visit-grid-section" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <h2 className="section-title">{t('Daily Life in the Mountains', 'पहाडमा दैनिक जीवन')}</h2>
                    <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', color: '#666' }}>
                        {t(
                            'Experience the authentic lifestyle of Eastern Rukum through the eyes of its people',
                            'पूर्वी रुकुमको प्रामाणिक जीवनशैली यहाँका मानिसहरूको नजरबाट अनुभव गर्नुहोस्'
                        )}
                    </p>

                    <div className="visit-grid">
                        <div className="visit-card">
                            <img src="/images/lifestyle/shepard lifestyle.jpg" alt="Shepherd Lifestyle" className="no-watermark" />
                            <div className="visit-card-content">
                                <h3>{t('Pastoral Heritage', 'पशुपालन सम्पदा')}</h3>
                                <p>
                                    {t(
                                        'Shepherds tend their flocks in high-altitude pastures, continuing centuries-old traditions of animal husbandry.',
                                        'गोठालाहरूले उच्च उचाइको चरनमा आफ्ना बगालहरू हेरचाह गर्छन्, शताब्दीयौं पुरानो पशुपालन परम्परा जारी राख्दै।'
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="visit-card">
                            <img src="/images/lifestyle/sheep grazing in wild.jpg" alt="Sheep Grazing" className="no-watermark" />
                            <div className="visit-card-content">
                                <h3>{t('Highland Grazing', 'उच्च भूमि चरन')}</h3>
                                <p>
                                    {t(
                                        'Sheep and goats graze freely in pristine meadows, providing wool and sustenance to mountain communities.',
                                        'भेडा र बाख्राहरू शुद्ध घाँसे मैदानमा स्वतन्त्र रूपमा चर्छन्, पहाडी समुदायहरूलाई ऊन र जीविका प्रदान गर्दै।'
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="visit-card">
                            <img src="/images/lifestyle/mancrossing river.jpg" alt="River Crossing" className="no-watermark" />
                            <div className="visit-card-content">
                                <h3>{t('Mountain Trails', 'पहाडी बाटोहरू')}</h3>
                                <p>
                                    {t(
                                        'Villagers navigate challenging terrain and river crossings as part of their daily journey.',
                                        'गाउँलेहरूले आफ्नो दैनिक यात्राको भागको रूपमा चुनौतीपूर्ण भूभाग र नदी पार गर्छन्।'
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="visit-card">
                            <img src="/images/lifestyle/snow.jpg" alt="Winter Life" className="no-watermark" />
                            <div className="visit-card-content">
                                <h3>{t('Winter Resilience', 'जाडो लचिलोपन')}</h3>
                                <p>
                                    {t(
                                        'Communities adapt to harsh winter conditions with traditional knowledge and strong communal bonds.',
                                        'समुदायहरू परम्परागत ज्ञान र बलियो सामुदायिक बन्धनका साथ कठोर जाडो अवस्थामा अनुकूलन गर्छन्।'
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="visit-card">
                            <img src="/images/lifestyle/sheep.jpg" alt="Livestock Care" className="no-watermark" />
                            <div className="visit-card-content">
                                <h3>{t('Livestock Care', 'पशुधन हेरचाह')}</h3>
                                <p>
                                    {t(
                                        'Animals are integral to mountain life, providing food, wool, and companionship to families.',
                                        'जनावरहरू पहाडी जीवनको अभिन्न अंग हुन्, परिवारहरूलाई खाना, ऊन र साथ प्रदान गर्दै।'
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Culture;
