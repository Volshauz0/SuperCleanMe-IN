import LandingPage from './LandingPage/LandingPage';

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <LandingPage /> */}
      <Image
        src='/Logo.png'
        alt="under construction"
        width={500}
        height={500}
        className={styles.logo}
      />
      <div>
        <h1>Website in Progress</h1>
        <p>Check back soon!</p>
        <h3>If you have any query</h3>
        <p>contact us at <a href="mailto:info@supercleanmeind.com">info@supercleanmeind.com</a></p>
        <p>Phone no: <a href="tel:8943353554">8943353554</a></p>
      </div>

    </main>
  );
}
