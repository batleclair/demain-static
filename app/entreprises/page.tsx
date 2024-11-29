'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Page() {
  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideTo = (index: number) => {
    if (swiperRef.current) swiperRef.current.slideTo(index - 1);
  };

  return (
    <div>

      <div className='ctn flex dir-col ai-center mb-40'>
        <div className='grid max-w-1200'>
          <div className="row grid-gap-30">
            <div className='col-6 col-12-m ac-center'>
              <h1 className='mb-20 fs-40 fw-5'>Demain.Works vous aide à opérer du mécénat de <span className='highlight fw-6 fc-1n'>compétences</span></h1>
              <p className='mb-20'>Permettez à vos collaborateurs de partager leurs compétences professionnelles auprès d'associations sur leur temps de travail</p>
              <div className="flex gap-20">
                <Link href="/associations" className='btn-h hover 3g-white bg-to-2l fc-1n fw-5 w-100 text-middle'>
                  Nos services
                </Link>
                <Link href="/entreprises" className='btn-h hover 3g-1n bg-to-1d fc-white fw-5 w-100 text-middle'>
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className='col-6 col-12-m'>
              <Image
                src="/companies/comp_0.png"
                alt="Entreprises offrant à des associations les compétences de leurs collaborateurs à différentes fréquences"
                width="400"
                height="400"
                className='w-100 h-100 max-w-500 scale-down block'
              />
            </div>
          </div>
        </div>
      </div>

      <div className="ctn flex dir-col ai-center bg-2l pt-50 pb-50">
        <div className="row grid-gap-30 mb-20 max-w-1200">
          <div className="col-6 col-12-m">
            <h2 className="fc-1n fs-16">Les avantages</h2>
            <h2 className="mb-10 md-resp-pt-20 fs-30">Pourquoi le mécénat de compétences ?</h2>
          </div>
          <div className="col-6 col-12-m ac-center">
            <p className='mb-10'>Une initiative RH différenciante à fort impact sociétal, et qui bénéficie des avantages fiscaux du mécénat.</p>
            <Link href="https://mecenatdecompetences.info/" target="_blank" className='fc-1n flex ai-center w-100 zoom-h'>
              <span className="icon block w-30px">open_in_new</span>
              <span>En savoir plus sur le mécénat de compétences</span>
            </Link>
          </div>
        </div>
        <div className='w-100'>
          <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            className='grab max-w-1200'
            pagination={{
              clickable: true,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className='max-w-300 p-30 bg-white h-100 round-20'>
              <h3>Professionnalisant</h3>
              <span className="block fw-7 fs-40 fc-1n">71%</span>
              <p className='fw-2'>des collaborateurs engagés dans le dispositif estiment que l’expérience les a fait évoluer</p>
            </SwiperSlide>
            <SwiperSlide className='max-w-300 p-30 bg-white h-100 round-20'>
              <h3>Motivant</h3>
              <span className="block fw-7 fs-40 fc-1n">67%</span>
              <p className='fw-2'>des dirigeants y voient une source d’engagement et de remotivation des équipes</p>
            </SwiperSlide>
            <SwiperSlide className='max-w-300 p-30 bg-white h-100 round-20'>
              <h3>Impactant</h3>
              <span className="block fw-7 fs-40 fc-1n">83%</span>
              <p className='fw-2'>des responsables associatifs jugent le dispositif structurant pour leur organisation</p>
            </SwiperSlide>
            <SwiperSlide className='max-w-300 p-30 bg-white h-100 round-20'>
              <h3>Economique</h3>
              <span className="block fw-7 fs-40 fc-1n">60%</span>
              <p className='fw-2'>de réduction d'impôt sur le coût employeur des collaborateurs en mécénat de compétences</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="ctn flex dir-col ai-center bg-white pt-40 pb-40">
        <div className="row grid-gap-30 mb-20 max-w-1200">
          <div className="col-6 col-12-m">
            <h2 className="fc-1n fs-16">Les finalités</h2>
            <h2 className="mb-10 md-resp-pt-20 fs-30">Pour quels objectifs RH ?</h2>
            <p className="mb-20">Demain Works vous accompagne afin de définir un programme sur-mesure qui réponde à vos problématiques RH et aux attentes de vos collaborateurs en matière d'engagement sociétal</p>
            <div className="flex flex-wrap gap-10">
              <button key={1} type="button" className={`round pr-10 pl-10 pt-5 pb-5 ${activeIndex === 0 ? 'bg-1n fc-white' : 'bg-6n'}`} onClick={() => handleSlideTo(1)}>Fins de carrière</button>
              <button key={2} type="button" className={`round pr-10 pl-10 pt-5 pb-5 ${activeIndex === 1 ? 'bg-1n fc-white' : 'bg-6n'}`} onClick={() => handleSlideTo(2)}>Inter-missions</button>
              <button key={3} type="button" className={`round pr-10 pl-10 pt-5 pb-5 ${activeIndex === 2 ? 'bg-1n fc-white' : 'bg-6n'}`} onClick={() => handleSlideTo(3)}>Marque employeur</button>
              <button key={4} type="button" className={`round pr-10 pl-10 pt-5 pb-5 ${activeIndex === 3 ? 'bg-1n fc-white' : 'bg-6n'}`} onClick={() => handleSlideTo(4)}>Développement RH</button>
              <button key={5} type="button" className={`round pr-10 pl-10 pt-5 pb-5 ${activeIndex === 4 ? 'bg-1n fc-white' : 'bg-6n'}`} onClick={() => handleSlideTo(5)}>Retour en emploi</button>
            </div>
          </div>
          <div className="col-6 col-12-m ac-center">
            <Swiper
              spaceBetween={20}
              slidesPerView={'auto'}
              className='grab max-w-400 navigation-card-swiper'
              loop={false}
              centeredSlides={false}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              <SwiperSlide key={1} className='round-20 bg-white p-30'>
                <h5 className="fs-20 mb-10 fw-6 fc-1n">Fins de carrière</h5>
                <p>Proposez à des collaborateurs seniors une transition vers une retraite active et engagée.</p>
              </SwiperSlide>
              <SwiperSlide key={2} className='round-20 bg-white p-30'>
                <h5 className="fs-20 mb-10 fw-6 fc-1n">Inter-missions</h5>
                <p>Gardez vos collaborateurs actifs, motivés et engagés lors de périodes d'inter-projet.</p>
              </SwiperSlide>
              <SwiperSlide key={3} className='round-20 bg-white p-30'>
                <h5 className="fs-20 mb-10 fw-6 fc-1n">Marque employeur</h5>
                <p>Proposez une expérience collaborateur individualisée et riche de sens pour attirer et fidéliser vos talents.</p>
              </SwiperSlide>
              <SwiperSlide key={4} className='round-20 bg-white p-30'>
                <h5 className="fs-20 mb-10 fw-6 fc-1n">Développement RH</h5>
                <p>Permettez à des collaborateurs d'enrichir leurs compétences techniques et humaines dans un environnement challengeant.</p>
              </SwiperSlide>
              <SwiperSlide key={5} className='round-20 bg-white p-30'>
                <h5 className="fs-20 mb-10 fw-6 fc-1n">Retour en emploi</h5>
                <p>Proposez un parcours progressif de retour en entrerprise après un arrêt de travail long (maladie, parentalité...).</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>


      <div className="ctn flex dir-col ai-center bg-white pt-40 pb-40">
        <div className="row grid-gap-30 mb-20 max-w-1200">
          <div className="col-6 col-12-m">
            <h2 className="fc-1n fs-16">Nos services</h2>
            <h2 className="mb-10 md-resp-pt-20 fs-30">Demain vous accompagne à chaque étape</h2>
            <p className="mb-20">Demain Works vous accompagne afin de définir un programme sur-mesure qui réponde à vos problématiques RH et aux attentes de vos collaborateurs en matière d'engagement sociétal</p>
          </div>
          <div className="col-6 col-12-m ac-center">

          </div>
        </div>
      </div>


      <div className="ctn bg-6l">
        <div className="pt-50 pb-50 flex dir-col ai-center max-w-600 margin-center">
          <h2 className="mb-10 fs-30 text-middle">Vous souhaitez réaliser du mécénat de compétences ?</h2>
          <p className='text-middle mb-20'>L'équipe Demain.Works est à votre écoute. Laissez-nous vos coordonnées afin d'échanger sur vos besoins et vos objectifs.</p>
          <Link
            className="btn-h fc-white bg-1n bg-to-1d"
            href=""
          >
            Nous contacter
          </Link>

        </div>
      </div>

    </div>
  )
}
