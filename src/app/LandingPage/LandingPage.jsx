import styles from "./page.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "./components/Heropage/Hero";
import About from "./components/About/About";
import Range from "./components/Range/Range";
import Whitelabel from "./components/Whitelabel/Whitelabel";
import Form from "./components/Form/Form";
import Footer from "../../components/Footer/Footer";

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <section className={styles.margin}>
        <About />
        <Range />
      </section>
      <Whitelabel />
      <Form />
      <Footer />
    </main>
  );
}
