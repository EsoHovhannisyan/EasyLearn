import Image from "next/image";
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.leftSide}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/mainImage.jpg"
          alt="Main"
          fill
          style={{ objectFit: 'cover', borderRadius: '20px' }}
          priority
        />
        <div className={styles.textOverlay}>
          <div className={styles.topText}>
            <h2>Welcome to EasyLearn</h2>
            <h4>Your Smart Path to Effortless Learning.</h4>
          </div>
          <div className={styles.bottomSection}>
            <div className={styles.bottomText}>
              <h2>Learn. Grow. Succeed.</h2>
              <h4>Master new skills with ease</h4>
              <h4>anytime, anywhere</h4>
            </div>
            <div className={styles.indicators}>
              <div className={styles.active}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


