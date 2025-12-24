import React from "react";
import styles from "./Footer.module.css";
import { Facebook, Instagram, Youtube, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* About */}
        <div className={`${styles.column} ${styles.aboutFooter}`}>
          <img src="/logo.png" alt="logo" width={180}/>
          <h3>Arihanta Naturals</h3>
        </div>

        <div className={`${styles.column} ${styles.aboutFooterDec}`}>
          <p>
            Rooted in <strong>Nature</strong>. Raised with <strong>Care</strong>. 
            Delivered with <strong>Love</strong>. We offer high-quality organic products 
            crafted sustainably for your health and well-being.
          </p>
        </div>

        {/* Quick Links */}
        <div className={`${styles.column} ${styles.quickLinksFooter}`}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={`${styles.column} ${styles.contactFooter}`}>
          <h4>Contact Us</h4>
          <div className={styles.contactDetails}>
            <p><MapPin size={16}/> &nbsp; 631 Mehta Bhawan, Near High School, Naraina Road, Dudu, Rajasthan, 303008</p>
            <p><Mail size={16}/> &nbsp; arihanta.naturals@gmail.com</p>
          </div>

          <div className={styles.social}>
            <a href="https://www.linkedin.com/company/arihanta-naturals/?viewAsMember=true" target="_blank" rel="noreferrer"><Facebook /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><Youtube /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Arihanta Naturals · All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
