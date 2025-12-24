import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className={styles.contactContainer}>
      {/* Hero Section */}
      <div className={styles.contactHeroSection}>
        <img
          src="/images/contactus.avif"
          alt="Contact Us"
          className={styles.heroImage}
        />
        <div className={styles.contactHeroOverlay}>
          <h1>Arihanta Naturals</h1>
          <p>Rooted in Nature. Raised with Care. Delivered with Love.</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className={styles.messageSection}>
        <h2>Send Us a Message</h2>
        <p>
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Connect Section */}
      <div className={styles.connectSection}>
        <h2>Visit Us or Connect Directly</h2>
        <div className={styles.connectCards}>
          {/* Contact Info Card */}
          <div className={styles.infoCard}>
            <h3>Contact Information</h3>
            <div className={styles.infoItem}>
              <strong>Address:</strong>
              <p>
                631 Mehta Bhawan, Near High School, Naraina Road, Dudu,
                Rajasthan, 303008
              </p>
            </div>
            <div className={styles.infoItem}>
              <strong>Phone:</strong>
              <p>+91 - [Add phone number]</p>
            </div>
            <div className={styles.infoItem}>
              <strong>Email:</strong>
              <p>arihanta.naturals@gmail.com</p>
            </div>
            <div className={styles.infoItem}>
              <strong>LinkedIn:</strong>
              <p>
                <a
                  href="https://www.linkedin.com/company/arihanta-naturals/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/company/arihanta-naturals
                </a>
              </p>
            </div>
            <div className={styles.infoItem}>
              <strong>GSTIN:</strong>
              <p>08ABEHS5941M1ZJ</p>
            </div>
          </div>

          {/* Business Details Card */}
          <div className={styles.infoCard}>
            <h3>About Arihanta Naturals</h3>
            <div className={styles.infoItem}>
              <strong>Founder:</strong> <p>Sunil Mehta</p>
            </div>
            <div className={styles.infoItem}>
              <strong>Founded:</strong> <p>2022</p>
            </div>
            <div className={styles.infoItem}>
              <strong>Land Area:</strong> <p>20+ acres</p>
            </div>
            <div className={styles.infoItem}>
              <strong>Main Crops:</strong>
              <p>Black wheat isarbol, wheat, groundnut, Chickpea Farming</p>
            </div>
            <div className={styles.infoItem}>
              <strong>Practices:</strong>
              <p>Organic Farming, Solar Energy, Cow-based Farming</p>
            </div>
          </div>

          {/* Map Card */}
          <div className={styles.mapCard}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.0630839086066!2d75.2337192!3d26.6827719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c1325e020fcfd%3A0x1d6bbfa77815aa78!2sArihanta%20Naturals!5e1!3m2!1sen!2sin!4v1766225160365!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arihanta Naturals Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary> What makes Arihanta Naturals truly different?</summary>
          <p>
            We{" "}
            <b>
              own our farmland and grow our produce like we do for our own
              family
            </b>
            . With a <b>100-year legacy of farming</b>, our focus is purity,
            care, and trust — not mass production.
          </p>
        </details>
        <details>
          <summary>Where do your products come from?</summary>
          <p>
            All products are <b>grown on our own land in India</b>, carefully
            harvested and packed by our family to preserve natural quality and
            freshness.
          </p>
        </details>
        <details>
          <summary>Are your products 100% natural?</summary>
          <p>
            Yes. Our products are <b>completely natural</b>, free from
            artificial colors, preservatives, and harmful chemicals.
          </p>
        </details>
        <details>
          <summary>Where do you deliver?</summary>
          <p>
            We currently <b>deliver across India only</b>. International
            delivery is not available at this time.
          </p>
        </details>
        <details>
          <summary>How can I place an order?</summary>
          <p>
            We are in the process of setting up our <b>online distribution</b>. Until
            then, you can place orders by <b>email or phone</b>, and we will assist you
            personally.
          </p>
        </details>
      </div>
    </div>
  );
};

export default ContactUs;
