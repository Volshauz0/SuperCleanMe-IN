import styles from './Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import p1 from '../../assets/p1.png'
import p3 from '../../assets/p3.png'
import label from '../../assets/white-labeling.png'
import { BsChevronCompactDown } from "react-icons/bs";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.p1}>
                <Image src={p1} alt="" />
                <p>Choose reputable white-label partners to ensure consistent product
                    quality that aligns with your brand standards</p>
            </div>
            <Image className={styles.label} src={label} />
            <p className={styles.p2}>
                While the product is pre-made, white-labeling often allows for
                certain levels of customization,such as packaging and branding</p>
            <div className={styles.p3}>
                <Image src={p3} />
                <p>Any cleaning accessors of your brand needs we make it happen </p>
            </div>
            <h1 className={styles.tagline}>Crafting Excellence, <br />
                Tailored for Your Brand
            </h1>
            <Link href="#range" className={styles.more}>
                Explore More
                <span className={styles.chev}>
                    <BsChevronCompactDown className={styles.arrow} />
                    <BsChevronCompactDown className={styles.arrow} />
                    <BsChevronCompactDown className={styles.arrow} />
                </span>
            </Link>
        </div>
    )
}
