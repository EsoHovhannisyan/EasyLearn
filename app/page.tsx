
import Header from "@/components/Header/header";
import SignupPage from "./signup/SignUp/page";
import styles from './page.module.css'




export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.leftSide}>
        <Header />
      </div>
      <div className={styles.rightSide}>
        <SignupPage/>
      </div>
    </div>
  );
}
