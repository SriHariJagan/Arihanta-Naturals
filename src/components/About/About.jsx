import React from "react";
import styles from "./about.module.css";
import aboutImg from "/images/aboutUs/aboutUs.jpg";

const galleryItems = [
  { title: "Infrastructure", img: "/images/aboutUs/buildings.jpg" },
  { title: "Cattle Care", img: "/images/aboutUs/cattles.jpg" },
  { title: "Organic Crops", img: "/images/aboutUs/crops.jpg" },
  { title: "Our People", img: "/images/aboutUs/people.jpg" },
  { title: "Traditional Farming", img: "/images/aboutUs/tractor.jpg" },
  { title: "Natural Water Sources", img: "/images/aboutUs/well.jpg" },
];

const AboutUs = () => {
  return (
    <div className={styles.aboutPage}>
      {/* 🌟 Hero Section */}
      <section
        className={styles.heroSection}
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <h1 className={styles.heroTitle}>About Arihanta Naturals</h1>
        <p>Rooted in Tradition • Crafted with Integrity</p>
      </section>

      {/* 🎥 Brand Video Section */}
      <section className={styles.videoSection}>
        <div className={styles.videoText}>
          <h2>Who We Are</h2>
          <p>
            Arihanta Naturals is committed to preserving India’s traditional
            food wisdom through ethical sourcing, natural processing, and
            uncompromised quality. Our journey is driven by purity, trust, and
            sustainability.
          </p>
        </div>

        <div className={styles.videoWrapper}>
          <video
            src="/videos/video1.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
        </div>
      </section>

      {/* 🌱 Our Philosophy */}
      <section className={styles.textSection}>
        <h2>Our Philosophy</h2>
        <p>
          We believe food should nourish the body and respect nature. Every
          product from Arihanta Naturals is produced using
          <strong> traditional cold-pressed techniques</strong>, free from
          chemicals, preservatives, and artificial processing.
        </p>
      </section>

      {/* 🧴 Core Strengths */}
      <section className={styles.highlightSection}>
        {[
          {
            title: "Exquisite Cold-Pressed Oils",
            desc: "Expertly extracted at low temperatures to preserve the full spectrum of nutrients, aroma, and flavor.",
          },
          {
            title: "Premium Natural Ingredients",
            desc: "Sourced directly from trusted local farmers, ensuring authenticity, purity, and traceability in every product.",
          },
          {
            title: "100% Chemical-Free",
            desc: "Free from additives, artificial colors, or preservatives — delivering nature’s goodness as it was meant to be.",
          },
          {
            title: "Heritage & Tradition",
            desc: "Crafted using time-honored methods refined over generations, blending ancestral wisdom with modern care.",
          },
        ].map((item, i) => (
          <div key={i} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* 🏛️ Our Ecosystem */}
      <section className={styles.gallerySection}>
        <h2>Our Ecosystem</h2>

        <div className={styles.galleryGrid}>
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} title={item.title} img={item.img} />
          ))}
        </div>
      </section>

      {/* 🎯 Vision */}
      <section className={styles.textSection}>
        <h2>Our Vision</h2>
        <p>
          To become a trusted name in natural food products by promoting
          wellness, sustainability, and transparency — ensuring every home
          experiences the goodness of pure food.
        </p>
      </section>

      {/* 📊 Quick Facts */}
      <section className={styles.factsSection}>
        <h2 className={styles.tableTitle}>Quick Facts</h2>
        <table className={styles.factsTable}>
          <tbody>
            <tr>
              <th>Brand</th>
              <td>Arihanta Naturals</td>
            </tr>
            <tr>
              <th>Specialization</th>
              <td>Cold Pressed Oils & Natural Products</td>
            </tr>
            <tr>
              <th>Process</th>
              <td>Traditional Wooden Cold Press</td>
            </tr>
            <tr>
              <th>Values</th>
              <td>Purity • Transparency • Sustainability</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

const GalleryCard = ({ title, img }) => (
  <div className={styles.galleryCard}>
    <img src={img} alt={title} />
    <span>{title}</span>
  </div>
);

export default AboutUs;
