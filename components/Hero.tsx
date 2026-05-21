import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Star, ShieldCheck } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className="animate-fade-in-up">
            <span className={styles.badge}>Premium Dental Care</span>
            <h1 className={styles.title}>
              Reveal Your Best <span>Smile</span> with DentaVista
            </h1>
            <p className={styles.description}>
              Experience world-class dental treatments in a relaxing, modern environment. 
              Our expert team is dedicated to your oral health and beautiful smile.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="#booking" className="glass-button glass-button-primary">
                Book Appointment
              </Link>
              <Link href="#treatments" className="glass-button">
                View Treatments
              </Link>
            </div>
          </div>
        </div>
        
        <div className={styles.heroVisuals}>
          <div className={`glass-panel ${styles.featureCard} ${styles.card1}`}>
            <Calendar className={styles.cardIcon} size={28} />
            <div>
              <h4>Easy Booking</h4>
              <p>Schedule online 24/7</p>
            </div>
          </div>
          
          <div className={`glass-panel ${styles.featureCard} ${styles.card2}`}>
            <Star className={styles.cardIcon} size={28} />
            <div>
              <h4>Top Rated</h4>
              <p>500+ happy patients</p>
            </div>
          </div>
          
          <div className={`glass-panel ${styles.featureCard} ${styles.card3}`}>
            <ShieldCheck className={styles.cardIcon} size={28} />
            <div>
              <h4>Safe & Clean</h4>
              <p>Highest hygiene standards</p>
            </div>
          </div>
          
          <div className={styles.imagePlaceholder}>
            <Image 
              src="/hero-bg.png" 
              alt="Modern Dental Clinic" 
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
