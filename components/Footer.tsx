import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <h2 className={styles.logo}>Denta<span>Vista</span></h2>
          <p className={styles.brandDesc}>
            Experience premium dental care in a relaxing environment. We combine advanced technology with compassionate care.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="https://share.google/ZbUtgd6QscVH15UHw" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#treatments">Our Treatments</Link></li>
            <li><Link href="#reviews">Patient Reviews</Link></li>
            <li><Link href="#booking">Book Appointment</Link></li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <MapPin size={18} className={styles.icon} />
              <span>OPP Anthatta school, Arangadath koyilandy</span>
            </li>
            <li>
              <Phone size={18} className={styles.icon} />
              <a href="tel:+918921838085">+91 8921838085</a>
            </li>
            <li>
              <Mail size={18} className={styles.icon} />
              <a href="mailto:dhrudhavinod@gmail.com">dhrudhavinod@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerHours}>
          <h3>Opening Hours</h3>
          <ul>
            <li>
              <span>Mon - Sat:</span>
              <span>10:00 AM - 6:30 PM</span>
            </li>
            <li>
              <span>Sunday:</span>
              <span>Holiday (Closed)</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} DentaVista Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
