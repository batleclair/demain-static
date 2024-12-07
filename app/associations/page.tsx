'use client';

import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { AssoLogos } from '@/app/partials/asso_logos'
import Typed from 'typed.js';

export default function Page() {

  const typedElement = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Marketing / Com'", "Finance / Gestion", "RH / Juridique", "IT / Web / Data", "Achats / Logistique"],
      typeSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>

      <div className='ctn flex dir-col ai-center mb-40'>
        <div className='grid max-w-1200'>
          <div className="row grid-gap-30">
            <div className='col-6 col-12-m ac-center'>
              <h1 className='mb-20 fs-40 fw-5'>Demain.Works vous offre des opportunités de mécénat de <span className='highlight fw-6 fc-1n'>compétences</span></h1>
              <p className='mb-20'>Bénéficiez de mises en relation avec des entreprises et leurs collaborateurs souhaitant vous offrir leur expertise.</p>
              <div className="flex gap-20 max-w-200">
                <Link href="/contact" className='btn-h hover bg-1n bg-to-1d fc-white fw-5 w-100 text-middle'>
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className='col-6 col-12-m'>
              <Image
                src="/associations/asso_0.svg"
                alt="Entreprises offrant à des associations les compétences de leurs collaborateurs à différentes fréquences"
                width="400"
                height="400"
                className='w-100 h-100 max-w-500 scale-down block'
              />
            </div>
          </div>
        </div>
      </div>

      <div className="ctn flex dir-col ai-center bg-2l pt-40 pb-40">
        <div className="row grid-gap-30 mb-20 max-w-1200">
          <div className="col-6 col-12-m ac-center">
            <Image
              src="/associations/asso_1.svg"
              alt="Personnage à l'écoute"
              width="300"
              height="300"
              className='w-100 h-100 max-h-300 scale-down block'
            />
          </div>
          <div className="col-6 col-12-m ac-center">
            <h2 className="fc-1n fs-16">Quelles compétences</h2>
            <h2 className="fs-30">Pour vos besoins en expertise </h2>
            <h2 className="mb-10 fs-30 fw-6 fc-1n"><span ref={typedElement}></span></h2>
            <p className="mb-10">Demain.Works vous accompagne auprès de potentiels mécènes afin de définir un cadre d'intervention qui réponde à vos problématiques.</p>
            <p className="">Rejoignez notre réseau de partenaires pour rester informés d'opportunités qui vous seraient utiles.</p>
          </div>
        </div>
      </div>

      <div className="ctn bg-6l pb-40 pt-40">
        <div className="pt-20 pb-20 mb-10">
          <h2 className="fc-1n fs-20 flex ai-center jc-center">ils nous font confiance</h2>
          <p className='text-middle'>Nous collaborons avec des associations & fondations d'intérêt général partout en France</p>
        </div>
        <AssoLogos></AssoLogos>
      </div>


      <div className="ctn bg-white">
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
