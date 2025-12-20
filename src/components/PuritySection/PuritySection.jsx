import React from 'react';
import styles from './PuritySection.module.css';

const PuritySection = () => {
  return (
    <section className={styles.puritySection}>
      <div className={styles.container}>
        <div className={styles.purityContent}>
          <div className={styles.purityText}>
            <h2 className={styles.purityTitle}>Our Promise of Purity</h2>
            <h3 className={styles.puritySubtitle}>
              Rooted in Nature. Raised with Care.
            </h3>
            <p className={styles.purityDescription}>
              At <strong>Arihanta Naturals</strong>, purity is not a claim — it is a way of life.
              We work closely with trusted farmers who follow traditional, natural, and
              chemical-free farming practices. Every product is cultivated with care,
              harvested responsibly, and processed with minimal intervention to retain
              its natural goodness.
              <br /><br />
              From our fields in Rajasthan to your home, we ensure transparency,
              authenticity, and uncompromised quality — so you receive food that is
              wholesome, safe, and truly organic.
            </p>
          </div>

          <div className={styles.purityImage}>
            <img
              src="/images/farmer.avif"
              alt="Natural farming at Arihanta Naturals"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PuritySection;
