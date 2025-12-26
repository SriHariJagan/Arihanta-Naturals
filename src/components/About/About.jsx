import React from "react";
import styles from "./about.module.css";
import aboutImg from "/images/aboutUs/aboutUs.jpg";

const galleryItems = [
  { title: "Room for farmers", img: "/images/aboutUs/buildings.jpg" },
  { title: "Cattle", img: "/images/aboutUs/cattles.jpg" },
  { title: "Organic Crops", img: "/images/aboutUs/crops.jpg" },
  { title: "Sprinklers", img: "/images/aboutUs/water.jpg" },
  { title: "Traditional Farming", img: "/images/aboutUs/tractor.jpg" },
  { title: "Pound", img: "/images/aboutUs/pound.jpg" },
  { title: "Natural Water Sources", img: "/images/aboutUs/well.jpg" },
  { title: "Temple", img: "/images/aboutUs/temple.jpg" },
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

      {/* 🌾 Our Specialization */}
      <section className={`${styles.textSection} ${styles.left}`}>
        <h2>Our Specialization</h2>
        <ul className={styles.list}>
          <li>
            <strong>Family-Owned Farmland</strong> – We grow on our own land,
            not sourced from unknown farms.
          </li>
          <li>
            <strong>100+ Years of Farming Legacy</strong> – Knowledge passed
            through generations, refined with experience.
          </li>
          <li>
            <strong>Natural & Sustainable Crops</strong> – Traditional grains,
            pulses, seeds, vegetables, and cattle feed.
          </li>
          <li>
            <strong>Farm-to-Home Approach</strong> – We grow, pack, and deliver
            with full control over quality.
          </li>
        </ul>
      </section>

      {/* 🤍 Our Values */}
      <section className={`${styles.textSection} ${styles.right}`}>
        <h2>Our Values</h2>
        <ul className={styles.list}>
          <li>
            <strong>Purity Over Profit</strong> – Quality and honesty matter
            more than scale.
          </li>
          <li>
            <strong>Trust & Transparency</strong> – What we grow is exactly what
            we deliver.
          </li>
          <li>
            <strong>Respect for Nature</strong> – Sustainable farming for future
            generations.
          </li>
          <li>
            <strong>Legacy & Responsibility</strong> – Carrying forward a
            100-year farming heritage with pride.
          </li>
          <li>
            <strong>Customer as Family</strong> – We serve customers the same
            way we serve our own family.
          </li>
        </ul>
      </section>

      {/* 🔄 Our Process */}
      <section className={styles.highlightSection}>
        {[
          {
            title: "Soil First Farming",
            desc: "We protect soil health using natural methods and crop rotation.",
          },
          {
            title: "Careful Cultivation",
            desc: "Crops are grown with the same care as food for our own family.",
          },
          {
            title: "Selective Harvesting",
            desc: "Only well-grown produce is harvested at the right time.",
          },
          {
            title: "Hygienic Packing",
            desc: "Clean, safe, and minimal processing to retain natural goodness.",
          },
          {
            title: "Direct Delivery",
            desc: "Packed at source and delivered directly to customers across India.",
          },
        ].map((step, i) => (
          <div key={i} className={styles.card}>
            <span>{i + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
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
              <td>Cold-Pressed Oils & Natural Farm Products</td>
            </tr>

            <tr>
              <th>Processing Method</th>
              <td>Traditional Wooden Cold-Press (Kachi Ghani)</td>
            </tr>

            <tr>
              <th>Core Values</th>
              <td>Purity • Transparency • Sustainability</td>
            </tr>

            <tr>
              <th>Founder</th>
              <td>Sunil Mehta</td>
            </tr>

            <tr>
              <th>Location</th>
              <td>Naraina, Jaipur, Rajasthan, India</td>
            </tr>

            <tr>
              <th>Established</th>
              <td>2022</td>
            </tr>

            <tr>
              <th>Farmland Area</th>
              <td>20+ Acres</td>
            </tr>

            <tr>
              <th>Main Crops</th>
              <td>Black Wheat (Isarbol), Wheat, Groundnut, Chickpea</td>
            </tr>

            <tr>
              <th>Farming Practices</th>
              <td>
                Organic Farming • Solar Energy • Cow-Based Natural Farming
              </td>
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
