import LandingPage from './LandingPage/LandingPage';

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <LandingPage /> */}
      <div className={styles.image}>
        <Image
          src='/Logo.png'
          alt="under construction"
          width={500}
          height={500}
          className={styles.logo}
        />
        <b>SUPER MIDDLE EAST CHEMICAL & CLG MAT LLC</b>
      </div>
      <div>
        <h1>Website in Progress</h1>
        <p>Check back soon!</p>
        <h3>If you have any query</h3>
        <p>contact us at <a href="mailto:info@supercleanind.com">info@supercleanind.com</a></p>
      </div>

    </main>
  );
}
