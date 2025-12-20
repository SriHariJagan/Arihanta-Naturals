import React from "react";
import styles from "./Gallery.module.css";
import LightGallery from "lightgallery/react";

// Plugins
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

// Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { galleryItems } from "../../data";

const Gallery = () => {
  return (
    <section className={styles.gallerySection}>
      <h2>Our Gallery</h2>

      {galleryItems.map((cat) => (
        <div key={cat.category} className={styles.galleryCategory}>
          <h3>{cat.category}</h3>

          <LightGallery
            speed={500}
            plugins={[lgZoom, lgThumbnail]}
            elementClassNames={styles.galleryGrid}
          >
            {cat.images.map((img, idx) => (
              <a
                key={idx}
                href={img}
                className={styles.galleryItem}
                data-title={`${cat.category} ${idx + 1}`}
              >
                <img src={img} alt={`${cat.category} ${idx + 1}`} />
              </a>
            ))}
          </LightGallery>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
