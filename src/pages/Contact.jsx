import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Contact = () => {
    const { t } = useLanguage();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! / धन्यवाद! तपाईंको सन्देश प्राप्त भयो।');
    };
    return (
        <main style={{ background: 'var(--offwhite)', minHeight: '100vh', paddingTop: '120px' }}>
            <section className="premium-contact-section">
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}>
                    <motion.div
                        className="contact-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            background: '#fff',
                            padding: '4rem',
                            borderRadius: '30px',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
                            textAlign: 'center'
                        }}>
                        <motion.span
                            className="story-label"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}>
                            {t('Get in Touch', 'सम्पर्क गर्नुहोस्')}
                        </motion.span>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', marginTop: '1rem' }}>
                            {t('Contact & Contribute', 'सम्पर्क तथा योगदान')}
                        </h2>
                        <p style={{ color: '#666', marginBottom: '3rem', fontSize: '1.1rem' }}>
                            {t('Submit stories, photos, or support local initiatives. We would love to hear from you.', 'कथा, तस्बिर पठाउनुहोस् वा स्थानीय पहललाई समर्थन गर्नुहोस्। हामी तपाईंबाट सुन्न चाहन्छौं।')}
                        </p>
                        <form onSubmit={handleSubmit} style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>{t('Name', 'नाम')}</label>
                                <input
                                    type="text"
                                    required
                                    maxLength={100}
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem',
                                        borderRadius: '12px',
                                        border: '1px solid #eee',
                                        background: '#f9f9f9',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>{t('Email', 'इमेल')}</label>
                                <input
                                    type="email"
                                    required
                                    maxLength={254}
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem',
                                        borderRadius: '12px',
                                        border: '1px solid #eee',
                                        background: '#f9f9f9',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div className="form-group" style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>{t('Message', 'सन्देश')}</label>
                                <textarea
                                    rows="5"
                                    required
                                    maxLength={2000}
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem',
                                        borderRadius: '12px',
                                        border: '1px solid #eee',
                                        background: '#f9f9f9',
                                        fontSize: '1rem',
                                        resize: 'none'
                                    }}
                                ></textarea>
                            </div>
                            <motion.button type="submit" className="explore-btn" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ width: '100%', border: 'none' }}>
                                {t('Send Message', 'सन्देश पठाउनुहोस्')}
                            </motion.button>
                        </form>

                        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid #eee' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                                <div>
                                    <span style={{ display: 'block', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                                        {t('Direct Email', 'प्रत्यक्ष इमेल')}
                                    </span>
                                    <a href="mailto:philipmagar7302@gmail.com" style={{ fontSize: '1.1rem', color: 'var(--dark)', textDecoration: 'none', fontWeight: '500' }}>
                                        philipmagar7302@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                                        {t('Location', 'स्थान')}
                                    </span><p style={{ fontSize: '1.1rem', color: 'var(--dark)', fontWeight: '500', margin: 0 }}>{t('East Rukum, Nepal', 'पूर्वी रुकुम, नेपाल')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};
export default Contact;
