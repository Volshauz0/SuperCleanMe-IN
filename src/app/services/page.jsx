import styles from './services.module.css'
import Slide from '@/components/Slide/slide'

export default function page() {
    return (
        <div className={styles.services}>
            <div className={styles.header}>
                <h1>Services</h1>
                <p>Experience Excellence in Cleaning Solutions with SUPER MIDDLE EAST</p>
            </div>

            <div className={styles.content}>
                <p>We believe there is a responsibility to understand the latest advancements and be able to communicate the benefits they may provide to our customers.
                    SUPER MIDDLE EAST has a solid team of professionals, dedicated to providing our customers with many solutions for their entire cleaning product and
                    tool needs.  With years of  professional experience, technical know-how and an unsurpassed commitment to customer satisfaction, no firm is in a
                    better position to meet your company’s Cleaning  needs.
                    <br /><br />
                    Some of our Specialty Services include:
                </p>
                <ul>
                    <li>FAST DELIVERY </li>
                    <li>SUPERIOR  QUALITY </li>
                    <li>FREE SAMPLES WITH DEMO</li>
                    <li>TECHNICAL HELP & ADVICE</li>
                    <li>SUPPLY OF EXTENSIVE  RANGE OF PRODUCTS </li>
                    <li>AFTER SALES SUPPORT  </li>
                </ul>
            </div>

            <Slide />
        </div>
    )
}
