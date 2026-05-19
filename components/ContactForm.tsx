"use client";

import React, { useState } from 'react';
import { Calendar, Mail, Phone, User, Clock, MessageSquare } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // REPLACE 'YOUR_FORMSPREE_ID' with your actual Formspree endpoint ID (e.g., 'xeqqjqwq')
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        alert('Thank you! Your appointment request has been submitted.');
        setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' });
      } else {
        setStatus('error');
        alert('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      setStatus('error');
      alert('Oops! There was a problem submitting your form.');
    }
    
    setStatus('');
  };

  return (
    <section id="booking" className={styles.booking}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2>Book Your <span>Appointment</span></h2>
            <p>
              Ready to achieve your dream smile? Fill out the form, and our team will get back to you within 24 hours to confirm your appointment.
            </p>
            
            <div className={styles.contactInfo}>
              <div className={`glass-panel ${styles.infoCard}`}>
                <Phone className={styles.icon} />
                <div>
                  <h4>Call Us</h4>
                  <p>8921838085</p>
                </div>
              </div>
              
              <div className={`glass-panel ${styles.infoCard}`}>
                <Mail className={styles.icon} />
                <div>
                  <h4>Email Us</h4>
                  <p>dhrudhavinod@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`glass-panel ${styles.formContainer}`}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <div className={styles.inputWrapper}>
                  <User size={20} className={styles.inputIcon} />
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="glass-input" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <div className={styles.inputWrapper}>
                    <Mail size={20} className={styles.inputIcon} />
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="glass-input" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <div className={styles.inputWrapper}>
                    <Phone size={20} className={styles.inputIcon} />
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="glass-input" 
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="date">Preferred Date</label>
                  <div className={styles.inputWrapper}>
                    <Calendar size={20} className={styles.inputIcon} />
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      className="glass-input" 
                      value={formData.date}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="time">Preferred Time</label>
                  <div className={styles.inputWrapper}>
                    <Clock size={20} className={styles.inputIcon} />
                    <select 
                      id="time" 
                      name="time" 
                      className="glass-input"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select Time</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (1PM - 4PM)</option>
                      <option value="evening">Evening (4PM - 7PM)</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Additional Notes (Optional)</label>
                <div className={styles.inputWrapper}>
                  <MessageSquare size={20} className={styles.inputIcon} style={{ top: '16px', transform: 'none' }} />
                  <textarea 
                    id="message" 
                    name="message" 
                    className="glass-input" 
                    placeholder="Tell us about your dental needs..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    style={{ paddingLeft: '2.5rem' }}
                  ></textarea>
                </div>
              </div>
              
              <button type="submit" className="glass-button glass-button-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
