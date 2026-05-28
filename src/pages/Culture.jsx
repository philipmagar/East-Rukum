import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const cultureSections = [
    {
        icon: '01',
        titleEn: 'Language & Communication',
        titleNp: 'भाषा र सञ्चार',
        bodyEn: 'The Kham Magar speak the Kham language, maintaining oral traditions, folktales, and indigenous knowledge passed down through generations. The language itself is a living archive of the community\'s history, philosophy, and connection with nature.',
        bodyNp: 'खाम मगरहरूले खाम भाषा बोल्छन् र मौखिक परम्परा, लोककथा र अनुभवजन्य ज्ञान पुस्तौलीबाट सन्तानसम्म पुर्याउँछन्। भाषा नै समुदायको इतिहास, दर्शन र प्रकृतिसँगको सम्बन्धको जीवन्त अभिलेख हो।',
    },
    {
        icon: '02',
        titleEn: 'Traditional Dress & Ornaments',
        titleNp: 'परम्परागत पोशाक र गहना',
        bodyEn: 'Men wear traditional woolen garments, and women adorn themselves with colorful dresses, beads, and silver ornaments during festivals and ceremonies. Each piece of clothing carries deep symbolic meaning tied to the seasons and social roles.',
        bodyNp: 'पुरुषहरूले परम्परागत ऊनी लुगा लगाउँछन्, र महिलाहरू चाडपर्व तथा समारोहमा रङ्गीन लुगा, मनका माला र चाँदीका गहना लगाउँछन्। प्रत्येक लुगाले मौसम र सामाजिक भूमिकासँग जोडिएको गहिरो प्रतीकात्मक अर्थ बोकेको हुन्छ।',
    },
    {
        icon: '03',
        titleEn: 'Music & Dance',
        titleNp: 'संगीत र नृत्य',
        bodyEn: 'Folk songs, drums, and flute melodies are central to festivals, rituals, and social gatherings, preserving community cohesion. The rhythmic beats of the Magar dhol echo across valleys during celebrations and have the power to move even the coldest hearts.',
        bodyNp: 'लोकगीत, ढोल, बाँसुरी र धुन चाडपर्व, संस्कार र सामाजिक भेला कार्यक्रममा मुख्य भूमिका खेल्छन्। मगर ढोलको लयबद्ध तालहरू उत्सवको बेला उपत्यकामा गुञ्जन्छन्।',
    },
    {
        icon: '04',
        titleEn: 'Festivals & Celebrations',
        titleNp: 'चाडपर्व र उत्सव',
        bodyEn: 'Maghe Sankranti, winter feasts, and harvest festivals are celebrated with dance, music, and communal rituals highlighting indigenous heritage. These are not just celebrations but profound expressions of gratitude to the land and mountains.',
        bodyNp: 'माघे संक्रान्ति, जाडो पर्व र बाली चाँदी उत्सव नाच, गीत र सामुदायिक संस्कारसहित मनाइन्छ। यी केवल उत्सव मात्र होइन, भूमि र हिमालप्रति गहिरो कृतज्ञताका अभिव्यक्ति हुन्।',
    },
    {
        icon: '05',
        titleEn: 'Architecture & Crafts',
        titleNp: 'वास्तुकला र हस्तकला',
        bodyEn: 'Stone-roofed houses built without mortar have stood for centuries, testifying to the ingenuity of the Kham Magar builders. Intricate wood carvings, hand-woven textiles (Dhaka), and crafted jewelry reflect artistic traditions carried across generations.',
        bodyNp: 'सिमेन्टबिना बनाइएका ढुङ्गाले छाएका घरहरू शताब्दीयौंसम्म टिकेका छन्। जटिल काठ नक्काशी, हातले बुनेको ढाका कपडा र गहनाहरूले पुस्तौपुस्ता चलेको कलात्मक परम्परालाई झल्काउँछन्।',
    },
];

const AccordionItem = ({ item, isOpen, onToggle, onEnter, t }) => {
    return (
        <motion.div
            className={`culture-accordion-item ${isOpen ? 'open' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            onViewportEnter={onEnter}
        >
            <button className="culture-accordion-header" onClick={onToggle}>
                <span className="culture-acc-icon">{item.icon}</span>
                <span className="culture-acc-title">{t(item.titleEn, item.titleNp)}</span>
                <motion.span
                    className="culture-acc-chevron"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    ▼
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className="culture-accordion-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <p>{t(item.bodyEn, item.bodyNp)}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const phrases = [
    { category: 'common', english: 'Hello / Namaste', kham: 'Chhyajee-lo', pronunciation: 'Chhya-jee-lo', nepali: 'नमस्ते' },
    { category: 'common', english: 'Thank you', kham: 'O-khai', pronunciation: 'Oh-khai', nepali: 'धन्यवाद' },
    { category: 'common', english: 'Where are you going?', kham: 'Khakha ba-nyo?', pronunciation: 'Kha-kha ba-nyo', nepali: 'कहाँ जान लाग्नुभएको?' },
    { category: 'common', english: 'Have you eaten?', kham: 'Syah zya-nyo?', pronunciation: 'Syah zya-nyo', nepali: 'भात खानुभयो?' },
    { category: 'common', english: 'Welcome', kham: 'Maan-chhya-lo', pronunciation: 'Maan-chhya-lo', nepali: 'स्वागत छ' },

    { category: 'nature', english: 'Water', kham: 'Rih', pronunciation: 'Ree', nepali: 'पानी' },
    { category: 'nature', english: 'Mountain / Hill', kham: 'Dhaang', pronunciation: 'Dhaang', nepali: 'डाँडा / पहाड' },
    { category: 'nature', english: 'River / Stream', kham: 'Rikhola', pronunciation: 'Ree-kho-la', nepali: 'खोला / नदी' },
    { category: 'nature', english: 'Snow', kham: 'Pam', pronunciation: 'Pahm', nepali: 'हिउँ' },

    { category: 'people', english: 'Friend', kham: 'Mita / Saathi', pronunciation: 'Mee-ta', nepali: 'साथी / मित' },
    { category: 'people', english: 'Elder Brother', kham: 'Dada', pronunciation: 'Dah-dah', nepali: 'दाइ' },
    { category: 'people', english: 'Elder Sister', kham: 'Nana', pronunciation: 'Nah-nah', nepali: 'दिदी' },
    { category: 'people', english: 'Mother', kham: 'Aama', pronunciation: 'Ah-mah', nepali: 'आमा' },
    { category: 'people', english: 'Father', kham: 'Baba', pronunciation: 'Bah-bah', nepali: 'बुवा' }
];

const Culture = () => {
    const { t } = useLanguage();
    const [openIdx, setOpenIdx] = useState(0);
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPhrases = phrases.filter(phrase => {
        const matchesCategory = activeCategory === 'all' || phrase.category === activeCategory;
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
            phrase.english.toLowerCase().includes(query) ||
            phrase.kham.toLowerCase().includes(query) ||
            phrase.nepali.toLowerCase().includes(query) ||
            phrase.pronunciation.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    return (
        <main>
            <section className="hero" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/lifestyle/sheep-grazing-in-wild.jpg')" }}>
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {t('Living Traditions', 'जीवन्त परम्पराहरू')}
                    </motion.div>
                    <h1>{t('Kham Magar Culture', 'खाम मगर संस्कृति')}</h1>
                    <p>{t('Traditions, festivals, and lifestyle in Eastern Rukum', 'पूर्वी रुकुममा परम्परा, चाडपर्व र जीवनशैली')}</p>
                </motion.div>
            </section>

            {/* Accordion culture sections */}
            <section className="intro">
                <div className="container">
                    <div className="intro-text">
                        <h2>{t('Cultural Pillars', 'सांस्कृतिक आधारस्तम्भहरू')}</h2>
                        <p style={{ marginBottom: '2rem' }}>
                            {t(
                                'The Kham Magar culture is one of Nepal\'s most unique and vibrant indigenous cultures. Explore each aspect below.',
                                'खाम मगर संस्कृति नेपालका सबैभन्दा अनूठा र जीवन्त आदिवासी संस्कृतिहरूमध्ये एक हो।'
                            )}
                        </p>
                        <div className="culture-accordion">
                            {cultureSections.map((item, i) => (
                                <AccordionItem
                                    key={i}
                                    item={item}
                                    isOpen={openIdx === i}
                                    onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                                    onEnter={() => setOpenIdx(i)}
                                    t={t}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="intro-image">
                        <motion.img
                            src="/images/lifestyle/shepherd-lifestyle.jpg"
                            alt="Kham Magar traditional dress and dance"
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>
                </div>
            </section>

            {/* Kham Magar Interactive Phrasebook */}
            <section className="phrasebook-section" style={{ padding: '6rem 2rem', background: '#fff', borderTop: '1px solid #eee' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="story-label" style={{ display: 'inline-block', marginBottom: '1rem' }}>
                            {t('Language Explorer', 'भाषा अन्वेषक')}
                        </span>
                        <h2 style={{ fontSize: '2.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem' }}>
                            {t('Kham Magar Phrasebook', 'खाम मगर वाक्यांश पुस्तक')}
                        </h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                            {t(
                                'Learn common words and phrases spoken by the Kham Magar community in Eastern Rukum. Hover or search to explore.',
                                'पूर्वी रुकुममा खाम मगर समुदायले बोल्ने केही साझा शब्द र वाक्यांशहरू सिक्नुहोस्।'
                            )}
                        </p>
                    </div>

                    {/* Search and Category Filters */}
                    <div className="phrasebook-controls" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', marginBottom: '3rem' }}>
                        <div className="phrasebook-search-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                            <input
                                type="text"
                                className="phrasebook-search-input"
                                placeholder={t('Search words (English, Kham, Nepali)...', 'शब्द खोज्नुहोस् (अंग्रेजी, खाम, नेपाली)...')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem 1.2rem',
                                    borderRadius: '30px',
                                    border: '1.5px solid #ddd',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'border-color 0.3s',
                                    background: '#fafafa'
                                }}
                            />
                        </div>

                        <div className="phrasebook-tabs" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                            {[
                                { id: 'all', nameEn: 'All Words', nameNp: 'सबै शब्दहरू' },
                                { id: 'common', nameEn: 'Common Phrases', nameNp: 'साधारण वाक्यांश' },
                                { id: 'nature', nameEn: 'Nature & Land', nameNp: 'प्रकृति र भूमि' },
                                { id: 'people', nameEn: 'Family & People', nameNp: 'परिवार र मानिस' }
                            ].map((cat) => (
                                <button
                                    key={cat.id}
                                    className={`phrasebook-tab ${activeCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                    style={{
                                        padding: '0.6rem 1.4rem',
                                        borderRadius: '20px',
                                        border: '1px solid #ddd',
                                        background: activeCategory === cat.id ? 'var(--green)' : '#fff',
                                        color: activeCategory === cat.id ? '#fff' : 'var(--dark)',
                                        fontWeight: '500',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {t(cat.nameEn, cat.nameNp)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Phrase Grid */}
                    <motion.div 
                        className="phrasebook-grid" 
                        layout 
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '1.5rem'
                        }}
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredPhrases.map((phrase, idx) => (
                                <motion.div
                                    key={phrase.english}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="phrasebook-card"
                                    style={{
                                        background: 'var(--offwhite)',
                                        border: '1px solid #eee',
                                        borderRadius: '16px',
                                        padding: '1.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                                            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--green)', fontWeight: 'bold' }}>
                                                {t(phrase.category.toUpperCase(), phrase.category === 'common' ? 'वार्तालाप' : phrase.category === 'nature' ? 'प्रकृति' : 'पारिवारिक')}
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: '1.4rem', color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'Playfair Display, serif' }}>
                                            {phrase.kham}
                                        </h3>
                                        <p style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic', marginBottom: '1rem' }}>
                                            {t(`Pronunciation: [ ${phrase.pronunciation} ]`, `उच्चारण: [ ${phrase.pronunciation} ]`)}
                                        </p>
                                    </div>
                                    <div style={{ borderTop: '1px dashed #ddd', paddingTop: '1rem', marginTop: '1rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                            <p style={{ fontSize: '0.95rem', margin: 0, fontWeight: 'bold', color: 'var(--dark)' }}>
                                                En: <span style={{ fontWeight: 'normal', color: '#444' }}>{phrase.english}</span>
                                            </p>
                                            <p style={{ fontSize: '0.95rem', margin: 0, fontWeight: 'bold', color: 'var(--dark)' }}>
                                                Np: <span style={{ fontWeight: 'normal', color: '#444' }}>{phrase.nepali}</span>
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Daily life cards */}
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
                        {[
                            { img: '/images/lifestyle/shepherd-lifestyle.jpg', titleEn: 'Pastoral Heritage', titleNp: 'पशुपालन सम्पदा', descEn: 'Shepherds tend their flocks in high-altitude pastures, continuing centuries-old traditions of animal husbandry.', descNp: 'गोठालाहरूले उच्च उचाइको चरनमा आफ्ना बगालहरू हेरचाह गर्छन्, शताब्दीयौं पुरानो पशुपालन परम्परा जारी राख्दै।' },
                            { img: '/images/lifestyle/sheep-grazing-in-wild.jpg', titleEn: 'Highland Grazing', titleNp: 'उच्च भूमि चरन', descEn: 'Sheep and goats graze freely in pristine meadows, providing wool and sustenance to mountain communities.', descNp: 'भेडा र बाख्राहरू शुद्ध घाँसे मैदानमा स्वतन्त्र रूपमा चर्छन्।' },
                            { img: '/images/lifestyle/man-crossing-river.jpg', titleEn: 'Mountain Trails', titleNp: 'पहाडी बाटोहरू', descEn: 'Villagers navigate challenging terrain and river crossings as part of their daily journey.', descNp: 'गाउँलेहरूले यात्राको भागको रूपमा चुनौतीपूर्ण भूभाग र नदी पार गर्छन्।' },
                            { img: '/images/lifestyle/snow.jpg', titleEn: 'Winter Resilience', titleNp: 'जाडो लचिलोपन', descEn: 'Communities adapt to harsh winter conditions with traditional knowledge and strong communal bonds.', descNp: 'समुदायहरू परम्परागत ज्ञान र बलियो सामुदायिक बन्धनका साथ कठोर जाडो अवस्थामा अनुकूलन गर्छन्।' },
                            { img: '/images/lifestyle/sheep.jpg', titleEn: 'Livestock Care', titleNp: 'पशुधन हेरचाह', descEn: 'Animals are integral to mountain life, providing food, wool, and companionship to families.', descNp: 'जनावरहरू पहाडी जीवनको अभिन्न अंग हुन्, परिवारहरूलाई खाना, ऊन र साथ प्रदान गर्दै।' },
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                className="visit-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="card-img-wrapper">
                                    <img src={card.img} alt={card.titleEn} className="no-watermark" />
                                    <div className="card-img-overlay" />
                                </div>
                                <div className="visit-card-content">
                                    <h3>{t(card.titleEn, card.titleNp)}</h3>
                                    <p>{t(card.descEn, card.descNp)}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
export default Culture;
