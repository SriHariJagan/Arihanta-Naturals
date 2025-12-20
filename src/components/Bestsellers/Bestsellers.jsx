import React from "react";
import { productsData } from "../../data.js";
import styles from "./Bestsellers.module.css";

const BestSellers = () => {
  return (
    <section className={styles.bestSellers}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Best Sellers</h2>
        <div className={styles.productsGrid}>
          {productsData.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                {/* <p className={styles.productPrice}>₹ {product.price}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
