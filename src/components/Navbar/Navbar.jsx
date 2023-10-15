import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import next from '../../assets/next.png'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <div className={styles.link}>
          <Link className={styles.home} style={{color:"#fff"}} href="#">Home</Link>
          <Link href="#">Markets</Link>
          <Link href="#">Services</Link>
        </div>
        <Link className={styles.logo} href="/"><Image src={logo} /></Link>
        <div className={styles.link}>
          <Link href="#">Products</Link>
          <Link className={styles.query} style={{color:"#fff"}} href="#">Have any query <Image src={next} alt="next" /> </Link>
        </div>
      </div>
    </nav>
  )
}
