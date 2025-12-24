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
            {Object.entries(cat.images).map(([name, img], idx) => (
              <a
                key={idx}
                href={img}
                className={styles.galleryItem}
                // data-sub-html={`<h4>${name}</h4><p>${cat.category}</p>`}
              >
                <img src={img} alt={idx + 1} />
                {/* <span className={styles.imageLabel}>{name}</span> */}
              </a>
            ))}
          </LightGallery>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
