import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Gallery from '../components/Gallery';

const GalleryPage = () => {
    const { t } = useLanguage();

    return (
        <main>
            <Helmet>
                <title>{t('Gallery | Eastern Rukum', 'ग्यालरी | पूर्वी रुकुम')}</title>
                <meta name="description" content={t('Explore the beautiful landscapes, culture, and life of Eastern Rukum through our photo gallery.', 'हाम्रो फोटो ग्यालरी मार्फत पूर्वी रुकुमको सुन्दर परिदृश्य, संस्कृति र जीवन अन्वेषण गर्नुहोस्।')} />
                <link rel="canonical" href="https://eastrukum.com/gallery" />
            </Helmet>

            <section style={{ padding: '6rem 2rem 2rem', textAlign: 'center', background: 'var(--offwhite)' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        fontSize: '3rem',
                        color: 'var(--dark)',
                        marginBottom: '1rem',
                        fontFamily: 'Playfair Display, serif'
                    }}
                >
                    {t('Gallery', 'ग्यालरी')}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--dark)',
                        opacity: 0.8,
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}
                >
                    {t('A visual journey through Eastern Rukum', 'पूर्वी रुकुमको दृश्य यात्रा')}
                </motion.p>
            </section>

            <Gallery />
        </main>
    );
};
export default GalleryPage;
