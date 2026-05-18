'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Denta<span>Vista</span>
        </Link>
        
        <nav className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <Link href="#treatments" onClick={() => setMobileMenuOpen(false)}>Treatments</Link>
          <Link href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          
          <a href="tel:+1234567890" className={styles.phoneLink}>
            <Phone size={18} />
            +1 234 567 890
          </a>
          
          <Link href="#booking" className="glass-button glass-button-primary" onClick={() => setMobileMenuOpen(false)}>
            Book Appointment
          </Link>
        </nav>

        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
