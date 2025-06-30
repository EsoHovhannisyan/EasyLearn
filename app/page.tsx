
import Header from "@/components/Header/header";
// import AuthPanel from "@/components/RegistrationForm/AuthPanel";
import SignupPage from "./signup/SignUp/page";
import styles from './page.module.css'




export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.rightSide}>
        {/* <AuthPanel /> */}
        <SignupPage/>
      </div>
    </div>
  );
}
