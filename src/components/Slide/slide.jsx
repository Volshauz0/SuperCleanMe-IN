'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from './assect/images';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowAltCircleRight } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function slide() {
    return (
        <div>
            <Link className='viewMore' href="/Products">
                View more products
                <FaArrowAltCircleRight size={20} />
            </Link>

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
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 60,
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
    )
}
