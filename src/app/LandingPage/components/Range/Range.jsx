import styles from './Range.module.css'
import Image from 'next/image'
import Link from 'next/link'
import n2 from '../../assets/next2.png'
import r1 from '../../assets/r1.png'
import r2 from '../../assets/r2.png'
import r3 from '../../assets/r3.png'
import back from '../../assets/back.png'
import front from '../../assets/front.png'

export default function Range() {
    return (
        <div className={styles.range}>
            <div className={styles.title}>
                <div className={styles.head}>
                    <h1>Our Product Range</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                </div>
                <a href="" className={styles.explore}>
                    Explore All Range
                    <Image src={n2} alt="arrowBtn" />
                </a>
            </div>

            <div className={styles.slider}>
                <div className={styles.controls}>
                    <span>
                        <Image src={back} alt="arrowBtn" />
                        <Image src={front} alt="arrowBtn" />
                    </span>
                    <Link className={styles.view} href="">All Products</Link>
                </div>
                <div className={styles.imgSlider}>
                    <Image src={r1} alt="products" />
                    <Image src={r2} alt="products" />
                    <Image src={r3} alt="products" />
                </div>
            </div>
        </div>
    )
}
