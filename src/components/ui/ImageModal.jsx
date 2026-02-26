import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ selectedImg, onClose }) => {
    return (
        <AnimatePresence>
            {selectedImg && (
                <motion.div
                    className="image-modal modal-backdrop"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(62, 44, 44, 0.95)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}
                >
                    <motion.div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        style={{ position: 'relative', maxWidth: '90%', maxHeight: '90vh' }}
                    >
                        <img 
                            src={selectedImg.src} 
                            alt={selectedImg.alt} 
                            style={{ maxWidth: '100%', maxHeight: '90vh', display: 'block' }} 
                        />
                        {selectedImg.caption && (
                            <motion.div
                                style={{ position: 'absolute', bottom: '20px', color: '#fff', textAlign: 'center', width: '100%', fontSize: '1.2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {selectedImg.caption}
                            </motion.div>
                        )}
                        <button
                            className="close-btn"
                            onClick={onClose}
                            style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', fontSize: '2rem', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            &times;
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageModal;
