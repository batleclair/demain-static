'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Dots } from '@/app/entreprises/dots'
import { Cards } from '@/app/entreprises/cards'

export default function Page() {
  const cardsRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideTo = (index: number, ref: any) => {
    if (ref.current) ref.current.slideTo(index - 1);
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
          <Cards></Cards>
        </div>
      </div>


      <div className="ctn flex dir-col ai-center bg-white pt-40 pb-40">
        <div className="row grid-gap-30 mb-20 max-w-1200">
          <div className="col-6 col-12-m">
            <h2 className="fc-1n fs-16">Nos services</h2>
            <h2 className="mb-10 md-resp-pt-20 fs-30">Demain vous accompagne à chaque étape</h2>
            <p className="mb-40">Nous accompagnons les entreprises de bout en bout sur des missions de mécénat de compétences à fort impact.</p>
            <Dots></Dots>
          </div>
          <div className="col-6 col-12-m ac-center">
            <Image
              src="/companies/comp_1.svg"
              alt="Personnage à l'écoute"
              width="300"
              height="300"
              className='w-100 h-100 max-h-300 scale-down block'
            />
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
