import styles from './industrial.module.css'
import Image from 'next/image'
import Link from 'next/link'
import bg from './assets/bg.jpg'
import { FaFileDownload } from "react-icons/fa";
import Slide from '@/components/Slide/slide'

export const meta = {
    title: 'Industrial Served | SuperCleanMe-IN',
    description: 'Industrial Served',
    keywords: 'Industrial Served',
}

export default function page() {
    return (
        <div className={styles.industrial}>
            <div className={styles.header}>
                <h1>Discover Superior Industrial Cleaning Solutions with SUPER MIDDLE EAST</h1>
                <p>As the manufacturer of wide range of professional cleaning/house
                    keeping liquid detergents in the market for nearly two decades
                </p>
            </div>

            <Image
                src={bg}
                alt="industrial1"
                width={1500}
                height={1500}
                className={styles.bg}
            />

            <div className={styles.content}>
                <p>
                    The chemical industry is one of the UAE' s largest manufacturing industries, serving both a sizeable
                    domestic market and an expanding global market. Strong product identification and quality, a highly
                    educated workforce, world class research centers, protection for intellectual property, and a robust
                    regulatory system make the United Arab Emirates  a competitive home for chemicals firms from across the globe.
                </p>
                <br />
                <div className={styles.download}>
                    To know more about our products
                    <Link href="#">
                        <FaFileDownload size={30} />
                        Download Brochure
                    </Link>
                </div>
                <p>
                    As the manufacturer of wide range of professional cleaning/house keeping liquid detergents in the market
                    for nearly two decades , <b>SUPER MIDDLE EAST</b> satisfy variety of customers dulled by the humdrum of every
                    day cleaning. Working with the principles of most advanced innovative technologies and state of the art
                    equipment and machineries with full set R&D and sophisticated lab facilities, products are manufactured
                    for a wide variety of industrial, institutional and retail sector.
                    <br /><br />
                    The product line of  environmental  friendly DETERGENTS ,  are developed through many years of research and
                    industry knowledge as well as custom formulation services to deal with specific client problems. Manufacturing
                    unit is  under scrupulous quality control procedures and standards , product testing is conducted at multiple
                    stages of formulation and manufacture to ensure consistency and quality. We  tailor ourselves in line with your
                    requirements, making things completely hassle-free and  can deliver our products in bulk quantity in big size packing
                    as well as the same with small packing . Retailers interested in filling their shelves with products featuring their
                    brand name have a good choice  as we  can  private label a line of products for their convenience.
                    We believe in GO GREEN and our commitment to providing high performance products by using premium quality raw materials,
                    mostly imported from around the world, coupled with quick turnaround and top-notch services at a challenging market price,
                    make the selection of <b>SUPER MIDDLE EAST</b> the customer’s Smart Choice!
                </p>
            </div>

            <Slide />
        </div >
    )
}
