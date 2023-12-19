import styles from './contact.module.css'
import Images from 'next/image'
import Link from 'next/link';
import { brands } from './assets/brands'

export const meta = {
    title: 'Contact Us | SuperCleanMe-IN',
    description: 'Contact Us',
    keywords: 'Contact Us',
}

export default function page() {
    return (
        <div className={styles.contact}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <form action="">
                        <h1>Contact Us</h1>
                        <div className={styles.inputBox}>
                            <label>Name</label>
                            <input type="text" name="" placeholder='Enter name' required="required" />
                        </div>
                        <div className={styles.inputBox}>
                            <label>Email</label>
                            <input type="email" name="" placeholder='Enter email' required="required" />
                        </div>
                        <div className={styles.inputBox}>
                            <label>Phone Number</label>
                            <input type="number" name="" placeholder='Enter ph:no' required="required" />
                        </div>
                        <div className={styles.inputBox}>
                            <label>Message</label>
                            <textarea rows={5} required="required" placeholder='Write your query here ...'></textarea>
                        </div>
                        <div className={styles.inputBox}>
                            <input className={styles.submit} type="submit" name="" value="Send" />
                        </div>
                    </form>
                </div>
                <div className={styles.right}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.709236276789!2d76.18735407503831!3d10.523551989610285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee71e0249ac3%3A0xaff216fbb4a2cc80!2sSuper%20Middle%20East%20Marketing!5e0!3m2!1sen!2sin!4v1703016419823!5m2!1sen!2sin"
                        width="600" height="450" allowfullscreen="" loading="lazy">
                    </iframe>
                </div>
            </div>

            <div className={styles.brands}>
                <h2>Trusted by the best companies</h2>
                <div className={styles.brand}>
                    {brands.map((brand, index) => {
                        return (
                            <Link key={index} href={brand.href}>
                                <Images
                                    src={brand.src}
                                    alt={brand.alt}
                                    width={300}
                                    height={300}
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
