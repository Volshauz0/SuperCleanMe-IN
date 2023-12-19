'use client'

import styles from './Range.module.css';
import Image from 'next/image';
import Link from 'next/link';
import n2 from '../../assets/next2.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from './assect/images';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Range() {
    return (
        <div className={styles.range} id='range'>
            <div className={styles.title}>
                <div className={styles.head}>
                    <h1>Our Product Range</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                </div>
                <Link href="/Products" className={styles.explore}>
                    Explore All Range
                    <Image src={n2} alt="arrowBtn" />
                </Link>
            </div>

            <div className={styles.slider}>

                <div className={styles.view}>
                    <Link href='/Products'>All Products</Link>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        540: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={200}
                                    height={200}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>

        </div>
    )
}
