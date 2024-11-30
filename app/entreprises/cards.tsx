'use client'

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export function Cards() {
  const slideContent = [
    [
      "Fins de carrière",
      "Proposez à des collaborateurs seniors une transition vers une retraite active et engagée."
    ],
    [
      "Inter-missions",
      "Gardez vos collaborateurs actifs, motivés et engagés lors de périodes d'inter-projet."
    ],
    [
      "Marque employeur",
      "Proposez une expérience collaborateur individualisée et riche de sens pour attirer et fidéliser vos talents."
    ],
    [
      "Développement RH",
      "Permettez à des collaborateurs d'enrichir leurs compétences techniques et humaines dans un environnement challengeant."
    ],
    [
      "Retour en emploi",
      "Proposez un parcours progressif de retour en entrerprise après un arrêt de travail long (maladie, parentalité...)."
    ],
  ]
  const handleSlideTo = (index: number, ref: any) => {
    if (ref.current) ref.current.slideTo(index - 1);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef(null);
  return (
    <>
      <div className="col-6 col-12-m">
        <h2 className="fc-1n fs-16">Les finalités</h2>
        <h2 className="mb-10 md-resp-pt-20 fs-30">Pour quels objectifs RH ?</h2>
        <p className="mb-20">Demain Works vous accompagne afin de définir un programme sur-mesure qui réponde à vos problématiques RH et aux attentes de vos collaborateurs en matière d'engagement sociétal</p>
        <div className="flex flex-wrap gap-10">
          {slideContent.map((content, index) => (
            <button key={index + 1} type="button" className={`round pr-10 pl-10 pt-5 pb-5 ${activeIndex === index ? 'bg-1n fc-white' : 'bg-6n'}`} onClick={() => handleSlideTo(index + 1, cardsRef)}>{content[0]}</button>
          ))}
        </div>
      </div>
      <div className="col-6 col-12-m ac-center">
        <Swiper
          spaceBetween={20}
          slidesPerView={'auto'}
          className='grab max-w-400 navigation-card-swiper'
          loop={false}
          centeredSlides={false}
          onSwiper={(swiper) => (cardsRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slideContent.map((content, index) => (
            <SwiperSlide key={index + 1} className='round-20 bg-white p-30'>
              <h5 className="fs-20 mb-10 fw-6 fc-1n">{content[0]}</h5>
              <p>{content[1]}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
