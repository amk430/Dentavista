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
          <p>Don&apos;t just take our word for it. Here&apos;s what our happy patients have to say.</p>
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
      </div>
    </section>
  );
}
