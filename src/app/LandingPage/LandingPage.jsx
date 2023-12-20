import styles from "./page.module.css";
import Hero from "./components/Heropage/Hero";
import About from "./components/About/About";
import Range from "./components/Range/Range";
import Whitelabel from "./components/Whitelabel/Whitelabel";
import Form from "./components/Form/Form";

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <Hero />
      <section className={styles.margin}>
        <About />
        <Range />
      </section>
      <Whitelabel />
      <Form />
    </main>
  );
}
