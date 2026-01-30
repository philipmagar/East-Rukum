import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('np'); // Default language is Nepali

    const toggleLang = () => {
        setLang((prev) => (prev === 'en' ? 'np' : 'en'));
    };
    const t = (en, np) => (lang === 'en' ? en : np);
    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
export const useLanguage = () => useContext(LanguageContext);
