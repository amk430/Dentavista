import React from 'react';
import { Star } from 'lucide-react';
import styles from './Reviews.module.css';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Patient',
    content: 'The best dental experience I\'ve ever had. The staff is so welcoming, and the clinic feels like a spa. My teeth whitening results are amazing!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Davis',
    role: 'Patient',
    content: 'I was always afraid of dentists, but Dr. Smith and the team at DentaVista changed that. Painless root canal and great aftercare.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Patient',
    content: 'Got my Invisalign here. The process was smooth, and the flexible payment options really helped. Highly recommend this clinic.',
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className={styles.reviews}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Patient <span>Reviews</span></h2>
          <p>Don&apos;t just take our word for it. Read what our happy patients have to say, or share your own experience!</p>
        </div>
        
        <div className={styles.grid}>
          {reviews.map((review) => (
            <div key={review.id} className={`glass-panel ${styles.card}`}>
              <div className={styles.stars}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#ffc107" color="#ffc107" />
                ))}
              </div>
              <p className={styles.content}>&quot;{review.content}&quot;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a 
            href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-button"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              background: '#ffffff', 
              color: '#333',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              fontWeight: 600
            }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Review us on Google
          </a>
        </div>
      </div>
    </section>
  );
}
