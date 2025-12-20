import React from 'react';
import { testimonialsData } from '../../data.js';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`${styles.star} ${index < rating ? styles.filled : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.testimonialsTitle}>What Our Customers Say</h2>
        <div className={styles.testimonialsGrid}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.testimonialRating}>
                {renderStars(testimonial.rating)}
              </div>
              <p className={styles.testimonialText}>{testimonial.testimonial}</p>
              <h4 className={styles.testimonialAuthor}>{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
