'use client'

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css'

export function Dots() {
  const dotsRef = useRef<SwiperType | null>(null);
  const [activeDot, setActiveDot] = useState(0);
  const handleSlideTo = (index: number, ref: any) => {
    if (ref.current) ref.current.slideTo(index - 1);
  };

  const slideContent = [
    [
      "Animation d’un réseau associatif",
      "Nous recherchons des associations pertinentes et vous aidons à leur apporter votre soutien."
    ],
    [
      "Accompagnement des collaborateurs",
      "Nous échangeons avec chaque collaborateur pour comprendre ses attentes et veiller au succès de son engagement."
    ],
    [
      "Recherche de missions pertinentes",
      "Nous concevons avec les associations des missions en ligne avec les compétences et disponibilités des collaborateurs."
    ],
    [
      "Contractualisation",
      "Nous facilitons la mise en place des éléments contractuels du mécénat de compétences."
    ],
    [
      "Suivi opérationnel",
      "Nous veillons au suivi de chaque mission et à l'atteinte des objectifs de toutes les parties."
    ],
    [
      "Valorisation économique",
      "Nous facilitons l'obtention des reçus fiscaux auprès des associations aidées."
    ],
    [
      "Retours d’expérience",
      "Nous analysons les retours d'expérience des associations et collaborateurs pour faciliter le reporting RH et RSE."
    ],
    [
      "Communication",
      "Nous aidons à coordonner la communication interne et externe sur les missions réalisées."
    ],

  ]

  return (
    <>
      <div className="w-100 round h-10px bg-2n dots-path pos-rel mb-20">
        {slideContent.map((content, index) => (
          <button key={index + 1} className={`zoom-h ${activeDot === index ? 'path-dot-active' : 'path-dot'}`} onClick={() => handleSlideTo(index + 1, dotsRef)}></button>
        ))}
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={'auto'}
        className='grab max-w-400'
        onSwiper={(swiper) => (dotsRef.current = swiper)}
        onSlideChange={(swiper) => setActiveDot(swiper.realIndex)}
      >
        {slideContent.map((content, index) => (
          <SwiperSlide key={index} className='bg-white p-30'>
            <h5 className="fs-20 mb-10 fw-6 fc-1n">{content[0]}</h5>
            <p>{content[1]}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
