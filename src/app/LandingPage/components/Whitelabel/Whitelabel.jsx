import Link from 'next/link'
import Image from 'next/image'
import styles from './Whitelabel.module.css'
import next from '../../assets/next.png'
import pdt from '../../assets/pdt.webp'
import plate from '../../assets/plate.webp'
import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import c3 from '../../assets/c3.png'

export default function Whitelabel() {
    return (
        <>
            <div className={styles.whitelabel}>
                <div className={styles.left}>
                    <h1 style={{ fontWeight: "normal" }}>
                        Empower Your Brand <br /> with Our Premium <br />
                        <b>White Label Products</b>
                    </h1>
                    <p>Our skilled team collaborates closely with you to create tailored
                        cleaning solutions that align with your brand's ethos and requirements.
                    </p>
                    <Link href="/services" className={styles.more}>
                        Explore More
                        <Image src={next} />
                    </Link>
                </div>

                <div className={styles.right}>
                    <div className={styles.product}>
                        <Image className={styles.pdt} src={pdt} />
                        <Image className={styles.plate} src={plate} />
                    </div>
                    <div className={styles.selector}>
                        <Image className={styles.select} src={c1} />
                        <Image className={styles.select} src={c2} />
                        <Image className={styles.select} src={c3} />
                    </div>
                </div>
            </div>
            {/* <p className={styles.knowMore}>Want to know more about white-labeling?</p> */}
        </>
    )
}
