import styles from './Form.module.css';
import Image from 'next/image';
import next from '../../assets/next.png';

export default function Form() {
    return (
        <div className={styles.form}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.leftContent}>
                        <h1>Get in Touch</h1>
                        <p>SuperClean is a UAE-born brand now flourishing in India since 2009.
                            Trusted for eco-friendly cleaning, top-notch quality, and tailored support.</p>
                        <div className={styles.contact}>
                            <div className={styles.social}>
                                <Image src={next} />
                                <p>+91 1234567890</p>
                            </div>
                            <div className={styles.social}>
                                <Image src={next} />
                                <p>Address Details</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <form className={styles.formSection} action="">
                        <h1>Any Query's, Contact Us</h1>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Phone" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        <button className={styles.submit}>
                            <Image src={next} />
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
