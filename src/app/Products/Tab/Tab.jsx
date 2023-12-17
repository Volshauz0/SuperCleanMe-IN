// TabComponent.js
'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './Tab.module.css';

const TabComponent = ({ tabs }) => {

    const [index, setIndex] = useState(0);

    const handleTabClick = (i) => {
        setIndex(i);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.TabContent}>
            <div className={styles.sideTab}>
                {tabs.map((tab, i) => (
                    <span
                        className={styles.side}
                        key={i}
                        style={{
                            background: index === i ? '#A8EA9F' : '#fff',
                            borderTop: index === i ? '1px solid #A8EA9F' : '1px solid #E5E5E5',
                            borderLeft: index === i ? '1px solid #A8EA9F' : '1px solid #E5E5E5',
                        }}
                        onClick={() => handleTabClick(i)}
                    >
                        {tab.name}
                    </span>
                ))}
            </div>

            <div className={styles.TabProducts}>
                {tabs[index].sections.map((section) => (
                    <div className={styles.ProductsHead} key={section.title}>
                        <h1 className={styles.head}>
                            {section.title}
                        </h1>
                        <p className={styles.desc}>
                            {section.desc}
                        </p>

                        <div className={styles.TabItems}>
                            {section.product.map((pdt) => (
                                <div
                                    key={pdt.name}
                                    className={styles.card}>
                                    <div>
                                        <a href={pdt.link} target="_blank">
                                            <Image
                                                src={pdt.img}
                                                alt={pdt.name}
                                                width={300}
                                                height={300}
                                                className={styles.cardImage}
                                            />
                                        </a>
                                    </div>
                                    <h1 className={styles.cardCode}>
                                        {pdt.name}
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabComponent;
