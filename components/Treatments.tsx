import React from 'react';
import styles from './Treatments.module.css';

const treatments = [
  {
    id: 1,
    title: 'Teeth Whitening',
    description: 'Professional whitening services for a brighter, more confident smile.',
    icon: '✨'
  },
  {
    id: 2,
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements to restore your smile.',
    icon: '🦷'
  },
  {
    id: 3,
    title: 'Invisalign & Braces',
    description: 'Straighten your teeth with modern, nearly invisible aligners or traditional braces.',
    icon: '😁'
  },
  {
    id: 4,
    title: 'Root Canals',
    description: 'Painless endodontic therapy to save damaged or infected teeth.',
    icon: '⚕️'
  },
  {
    id: 5,
    title: 'Routine Checkups',
    description: 'Comprehensive exams and professional cleanings to maintain optimal oral health.',
    icon: '🔍'
  },
  {
    id: 6,
    title: 'Cosmetic Dentistry',
    description: 'Veneers and bonding to give you the perfect Hollywood smile.',
    icon: '💎'
  }
];

export default function Treatments() {
  return (
    <section id="treatments" className={styles.treatments}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Our <span>Treatments</span></h2>
          <p>We provide comprehensive dental care using the latest technology and techniques.</p>
        </div>
        
        <div className={styles.grid}>
          {treatments.map((treatment) => (
            <div key={treatment.id} className={`glass-panel ${styles.card}`}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{treatment.icon}</span>
              </div>
              <h3>{treatment.title}</h3>
              <p>{treatment.description}</p>
              <button className={styles.learnMore}>Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
