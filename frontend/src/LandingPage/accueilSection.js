import { motion } from 'framer-motion';
import './accueilSection.css';
import image from '../assets/Group 36.png';

function AccueilSection() {
  const sentence = "Faciliter l'accès des femmes à l'éducation technologie et l'apprentissage du numerique  avec ";

  const words = sentence.split(" ").map((word, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.3, duration: 0.3 }}
      style={{ display: 'inline-block', marginRight: '0.3rem' }}
    >
      {word}
    </motion.span>
  ));

  return (
    <div className="accueil-section">
      <div className="left">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <h2>
            {words} 
            <span className="gradient-text">
            viavytech
          </span>
          </h2>
          
          <motion.button
            className="start-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            Commencer
          </motion.button>
        </motion.div>
      </div>

      <div className="right">
        <motion.img
          src={image}
          alt="Éducation pour les femmes"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
          className="full-image"
        />
      </div>
    </div>
  );
}

export default AccueilSection;
