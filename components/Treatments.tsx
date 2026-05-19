import React from 'react';
import styles from './Treatments.module.css';

const treatments = [
  {
    id: 1,
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements to restore your smile.',
    icon: '🦷'
  },
  {
    id: 2,
    title: 'Smile Designing',
    description: 'Customized cosmetic treatments to give you the perfect, confident smile.',
    icon: '✨'
  },
  {
    id: 3,
    title: 'Clear Aligners',
    description: 'Straighten your teeth invisibly and comfortably with custom clear aligners.',
    icon: '😁'
  },
  {
    id: 4,
    title: 'Pediatric Dentistry',
    description: 'Gentle and specialized dental care tailored for children and adolescents.',
    icon: '🧸'
  },
  {
    id: 5,
    title: 'Oral & Maxillofacial Surgery',
    description: 'Expert surgical procedures for complex dental, jaw, and facial conditions.',
    icon: '⚕️'
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
