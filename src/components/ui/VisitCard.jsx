import { motion } from 'framer-motion';

const VisitCard = ({ img, title, desc, onClick }) => {
    return (
        <motion.div 
            className="visit-card" 
            onClick={onClick}
            style={onClick ? { cursor: 'pointer' } : {}}
            whileHover={onClick ? { scale: 1.05 } : {}}
            whileTap={onClick ? { scale: 0.98 } : {}}
        >
            <img src={img} alt={title} className="no-watermark" />
            <div className="visit-card-content">
                {onClick ? (
                    <>
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{title}</p>
                        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>{desc}</div>
                    </>
                ) : (
                    <>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default VisitCard;
