import React from 'react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const phoneNumber = "1234567890"; // Dummy data
  const message = "Hello DentaVista, I would like to know more about your services.";
  
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={waLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.waButton}
      aria-label="Chat with us on WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="lucide lucide-message-circle"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    </a>
  );
}
