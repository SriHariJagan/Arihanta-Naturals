import React from "react";
import { testimonialsData } from "../../data";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Our Customers Say</h2>
        <p className={styles.subtitle}>
          Honest feedback from people who trust our quality and purity.
        </p>

        <div className={styles.grid}>
          {testimonialsData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.rating}>
                {"★".repeat(item.rating)}
              </div>

              <p className={styles.text}>
                “{item.testimonial}”
              </p>

              <div className={styles.author}>
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
