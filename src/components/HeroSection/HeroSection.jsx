import React, { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const videos = ["/videos/video1.mp4"];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentVideoIndex]);

  return (
    <section className={styles.hero}>
      <video
        ref={videoRef}
        src={videos[currentVideoIndex]}
        autoPlay
        muted
        loop
        playsInline
        onEnded={handleVideoEnd}
        className={styles.heroVideo}
      />

      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1>Arihanta Naturals</h1>
          <p>Rooted in Nature · Raised with Care · Delivered with Love</p>

          <button
            className={styles.ctaButton}
            onClick={() => navigate("/products")}
          >
            Explore Organic Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
