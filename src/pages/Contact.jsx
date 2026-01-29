import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! / धन्यवाद! तपाईंको सन्देश प्राप्त भयो।');
    };

    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <h1>{t('Contact & Contribute', 'सम्पर्क तथा योगदान')}</h1>
                    <p>{t('Submit stories, photos, or support local initiatives', 'कथा, तस्बिर पठाउनुहोस् वा स्थानीय पहललाई समर्थन गर्नुहोस्')}</p>
                </div>
            </section>

            <section className="intro">
                <div className="container">
                    <div className="intro-text">
                        <h2>{t('Get in Touch', 'सम्पर्क गर्नुहोस्')}</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">{t('Name', 'नाम')}</label>
                            <input type="text" id="name" name="name" required />

                            <label htmlFor="email">{t('Email', 'इमेल')}</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="message">{t('Message', 'सन्देश')}</label>
                            <textarea id="message" name="message" rows="5" required></textarea>

                            <button type="submit" className="btn">{t('Submit', 'पठाउनुहोस्')}</button>
                        </form>

                        <h2>{t('Contact Info', 'सम्पर्क जानकारी')}</h2>
                        <p>{t('Email: info@easternrukum.gov.np', 'इमेल: info@easternrukum.gov.np')}</p>
                        <p>{t('Phone: +977 123456789', 'फोन: +977 123456789')}</p>
                        <p>{t('Address: Eastern Rukum, Karnali Province, Nepal', 'ठेगाना: पूर्वी रुकुम, कर्णाली प्रदेश, नेपाल')}</p>
                    </div>
                    <div className="intro-image">
                        <img src="/images/contact-rukum.jpg" alt="Eastern Rukum contact" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
