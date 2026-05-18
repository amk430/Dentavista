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
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
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
              <span>123 Dental Avenue, Medical District, NY 10001</span>
            </li>
            <li>
              <Phone size={18} className={styles.icon} />
              <a href="tel:+1234567890">+1 234 567 890</a>
            </li>
            <li>
              <Mail size={18} className={styles.icon} />
              <a href="mailto:contact@dentavista.demo">contact@dentavista.demo</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerHours}>
          <h3>Opening Hours</h3>
          <ul>
            <li>
              <span>Mon - Fri:</span>
              <span>8:00 AM - 7:00 PM</span>
            </li>
            <li>
              <span>Saturday:</span>
              <span>9:00 AM - 4:00 PM</span>
            </li>
            <li>
              <span>Sunday:</span>
              <span>Closed</span>
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
