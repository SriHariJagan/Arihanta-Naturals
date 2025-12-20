import React from "react";
import styles from "./ProductsPage.module.css";
import { products } from "../../data";

const ProductsPage = () => {
  return (
    <div className={styles.productsPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <h1 className={styles.heroTitle}>Our Organic Products</h1>
        <p className={styles.heroSubtitle}>
          Rooted in Nature • Crafted with Purity • Arihanta Naturals
        </p>
      </div>

      {/* Products Grid */}
      <section className={styles.productsSection}>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <article key={product.id} className={styles.productCard}>
              
              {/* Image */}
              <div className={styles.productImageWrapper}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                />
              </div>

              {/* Content */}
              <div className={styles.productContent}>
                <h3 className={styles.productName}>{product.name}</h3>

                <p className={styles.productShortDesc}>
                  {product.shortDesc}
                </p>

                <p className={styles.productDesc}>
                  {product.description}
                </p>

                {/* Benefits */}
                <div className={styles.benefitsWrapper}>
                  {product.benefits?.map((benefit, index) => (
                    <span key={index} className={styles.benefitTag}>
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
