import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Visit from './pages/Visit';
import Villages from './pages/Villages';
import Culture from './pages/Culture';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import TakaVillage from './pages/TakVillage';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import MusicPlayer from './components/MusicPlayer';
import CustomCursor from './components/CustomCursor';
import DidYouKnow from './components/DidYouKnow';
import { useLanguage } from './context/LanguageContext';

function App() {
    const { t } = useLanguage();
    return (
        <Router>
            <CustomCursor />
            <ScrollToTop />
            <BackToTop />
            <MusicPlayer />
            <DidYouKnow t={t} />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/index.html" element={<Home />} />
                <Route path="/about.html" element={<About />} />
                <Route path="/places.html" element={<Visit />} />
                <Route path="/villages.html" element={<Villages />} />
                <Route path="/gallery.html" element={<GalleryPage />} />
                <Route path="/taka-village" element={<TakaVillage />} />
                <Route path="/culture.html" element={<Culture />} />
                <Route path="/contact.html" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}
export default App;
