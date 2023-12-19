import styles from './about.module.css'
import Images from 'next/image'
import { brands } from './assets/brands'
import Link from 'next/link';

export const metadata = {
    title: 'About Us | SuperCleanMe-IN',
    description: 'A list of products that we use in our cleaning services.',
};

export default function page() {
    return (
        <div className={styles.about}>
            <div className={styles.aboutHeader}>
                <h1>Elevate Cleanliness: Unleashing Excellence with Our Global Products</h1>
                <p>We have been manufacturing cleaning detergents, supplying janitorial items and exceeding customer needs ever since 1996.</p>
            </div>

            <div className={styles.aboutStory}>
                <div className={styles.aboutLeft}>
                    <h3>Our Story</h3>
                    <b>Unveiling Our Roots: Tracing the Professional Evolution of Our Company</b>
                </div>
                <div className={styles.aboutRight}>
                    <p>SUPER MIDDLE EAST CHEMICALS & CLG. MAT.L.L.C., headquartered in UA.E., opened their doors in 1996 and has been manufacturing cleaning detergents,
                        supplying janitorial items and exceeding customer needs ever since. We are a transnational company that takes pride in being your go-to destination
                        for high-quality commercial cleaning products that elevate hygiene standards in diverse industries.
                        <br /> <br />
                        We started our operations in India in 2012 under the name of  SUPER MIDDLE EAST MARKETING INDIA (PVT) LTD. Our best-quality raw materials are
                        sourced from around the world, and all our chemical manufacturing processes in India are carried out within our own facility in Muriyadu, Kerala.
                        The production in the initial period had been located in small premises and the continued growth of the company demanded factory-sized production facilities.
                        Currently, we have a factory floor space of around 5,000 square feet. Now the team at SUPER have access to modern lab facilities and specialist equipment to
                        maintain excellent quality standards. We conduct product trials and testing in-house to ensure our standards align with our client’s requirements and specifications.
                        <br /> <br />
                        We also specialise in the bespoke formulation of your own private-label chemical products that will showcase your brand. Our internal chemists will help you design
                        and offer an extra touch in tailoring these products to the specific requirements of your business. With well over a thousand formulations on record and ever-increasing,
                        we are sure that we have the right formula for your needs.
                    </p>
                </div>
            </div>

            <div className={styles.aboutOther}>
                <b>Our brands</b>
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

            <div className={styles.aboutManuf}>
                <p>Exclusive association with the world’s best manufacturers from ITALY, U.K, MALAYSIA etc enable SMEC  to boast of a comprehensive janitorial supply range as well.
                    Our inventory features numerous janitorial supplies, including toiletry, glass wipers, mop trolley, dustpan, broom, wringer, paper products and more.
                    We can provide you with the best janitorial supplies across the world. All you need to do is get in touch and set the ball rolling. We’ll do the rest.
                </p>
            </div>
        </div>
    )
}
