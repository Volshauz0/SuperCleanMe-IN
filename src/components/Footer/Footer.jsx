import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { BsFacebook } from 'react-icons/bs'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsFillPinMapFill } from 'react-icons/bs'
import download from './assets/download.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.quickNav}>
                    <div className={styles.quickLinks}>
                        <h4 style={{ color: "#fff" }}>Quick Contact</h4>
                        <p>If you have any questions or need help, feel <br />
                            free to contact with our team.</p>
                        <a href="tel:+12 345 67890" className={styles.phone}> <BsFillTelephoneFill /> 8943353554</a>
                        <p>Super Middle East Marketing (India) <br />
                            Private LimitedP.B. No.2, Thrissur, <br />
                            Pin: 680655 - kerala, India
                        </p>
                        <a href="https://maps.app.goo.gl/fhL57kh5koqyZTzL7" style={{ color: "#fff", fontSize: "1.2rem", textDecoration: "none" }}>
                            <BsFillPinMapFill />  Get Directions</a>
                    </div>
                    <div className={styles.quickLinks}>
                        <h4 style={{ color: "#fff" }}>Company</h4>
                        <Link className={styles.link} href="/about">About Us</Link>
                        <Link className={styles.link} href="/Products">Products</Link>
                        <Link className={styles.link} href="/services">Services</Link>
                        <Link className={styles.link} href="/industrialServed">Industry</Link>
                        <Link className={styles.link} href="/contact">Contact Us</Link>
                    </div>
                </div>
                <div className={styles.catalog}>
                    <h4 style={{ color: "#fff" }}>Products Catalogue</h4>
                    <a href="#" className={styles.download}>
                        <Image src={download} />
                        Download Catalogue
                    </a>
                    <div className={styles.socialLinks}>
                        <Link href="#"><BsFacebook /></Link>
                        <Link href="#"><BiLogoInstagramAlt /></Link>
                        <Link href=""><AiFillTwitterCircle /></Link>
                    </div>
                </div>
            </div>
            <div className={styles.terms}>
                <p>Terms & Condition</p>
                <p>© 2023 Superclean India, All Rights Reserved. With Love by  &nbsp;
                    <a href="https://www.volshauz.com/" target='_blank' style={{ color: "#fff" }}>Volshauz</a></p>
            </div>
        </footer>
    )
}
