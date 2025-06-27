
import Header from "@/components/Header/header";
import AuthPanel from "@/components/AuthPanel/AuthPanel";
import styles from './page.module.css'



export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.rightSide}>
      <AuthPanel />
      </div>
    </div>
  );
}
