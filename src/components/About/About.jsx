import styles from './About.module.css'
import Image from 'next/image'
import S1 from '../../assets/slider/1.png'
import p1 from '../../assets/slider/p1.png'
import p2 from '../../assets/slider/p2.png'
import p3 from '../../assets/slider/p3.png'
import p4 from '../../assets/slider/p4.png'
import p5 from '../../assets/slider/p5.png'
import f1 from '../../assets/slider/f1.png'

const card = [
    {
        img: p1,
        title: "Bathroom Cleaner",
        desc: "Revitalizes bathrooms, banishing stains and soap scum. Leaves surfaces sparkling clean."
    },
    {
        img: p2,
        title: "Disinfectant",
        desc: "Powerful germ eliminator for surfaces. Promotes hygiene and safety with swift effectiveness."
    },
    {
        img: p3,
        title: "Hand Wash",
        desc: "Gentle hand cleanser for ultimate hygiene. Moisturizes and refreshes with each use."
    },
    {
        img: p4,
        title: "Multi-Purpose",
        desc: "Versatile solution for various surfaces. Removes grime, leaves a streak-free shine."
    },
    {
        img: p5,
        title: "Janitorial",
        desc: "Efficient tools for maintaining cleanliness. Elevate your cleaning operations with reliable supplies."
    }
]

export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.leftBox}>
                <h1>Pioneering Quality Cleaning Solutions for a Quarter Century</h1>
                <p>SuperClean: A UAE-born brand now flourishing in India since 2009.
                    Trusted for eco-friendly cleaning, top-notch quality, and tailored support.</p>
                <div className={styles.imgContainer}>
                    <Image src={S1} />
                </div>
            </div>

            <div className={styles.rightBox}>
                {
                    card.map((item, index) => {
                        return (
                            <div key={index} className={styles.card}>
                                <Image src={item.img} />
                                <b>{item.title}</b>
                                <p>{item.desc}</p>
                            </div>
                        )
                    })
                }
                <div className={styles.greencard}>
                    <Image src={f1} />
                    <b>Awards & Milestones</b>
                    <p>Benefiting from nearly 26 years experience.</p>
                </div>
            </div>
        </div>
    )
}
