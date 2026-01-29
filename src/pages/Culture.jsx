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
                        <img src="/images/kham-culture.jpg" alt="Kham Magar traditional dress and dance" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Culture;
