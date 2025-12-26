import React from "react";
import styles from "./ProductsPage.module.css";
import { products } from "../../data";

const ProductsPage = () => {
  // 🔥 Sort products by content size (large cards first)
  const sortedProducts = [...products].sort((a, b) => {
    const aSize =
      a.description.length + (a.benefits?.join("").length || 0);
    const bSize =
      b.description.length + (b.benefits?.join("").length || 0);

    return bSize - aSize;
  });

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
          {sortedProducts.map((product) => (
            <article key={product.id} className={styles.productCard}>
              
              {/* Image */}
              <div className={styles.productImageWrapper}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className={styles.productContent}>
                <h3 className={styles.productName}>{product.name}</h3>

                <p className={styles.productShortDesc}>
                  {product.shortDesc}
                </p>

                <p
                  className={styles.productDesc}
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />

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
