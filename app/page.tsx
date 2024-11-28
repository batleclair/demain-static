import Link from 'next/link'
import Image from 'next/image'
import { AssoLogos } from '@/app/partials/asso_logos'

export default function Home() {

  return (
    <div>
      <div className='ctn flex dir-col ai-center mb-40'>
        <div className='grid max-w-1200'>
          <div className="row grid-gap-30">
            <div className='col-6 col-12-m'>
              <Image
                src="/home_0.svg"
                alt="Personnage associant travail et sens"
                width="200"
                height="200"
                className='w-100 h-100 max-w-400 scale-down block'
              />
            </div>
            <div className='col-6 col-12-m'>
              <h1 className='mb-20 fs-40 fw-5'>Les compétences des <span className='highlight fw-6 fc-1n'>entreprises</span> au service des <span className='highlight fw-6 fc-1n'>associations</span></h1>
              <p>Demain Works facilite le mécénat de compétences et permet aux collaborateurs et collaboratrices en entreprise de s'engager sur leur temps de travail auprès d'organismes d'intérêt général</p>

              <h5 className='mt-20 mb-10'>Vous êtes :</h5>
              <div className="flex gap-20">
                <Link href="/associations" className='btn-h border-1n hover bg-white bg-to-2l fc-1n fw-5 w-100 text-middle'>
                  → Une association
                </Link>
                <Link href="/entreprises" className='btn-h border-1n hover bg-white bg-to-2l fc-1n fw-5 w-100 text-middle'>
                  → Une entreprise
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Image
          src="/div_2l.svg"
          alt=""
          width="200"
          height="200"
          className='w-100 h-50px block'
        />
      </div>
      <div className="bg-2l p-50 w-100 ctn">
        <div className="flex dir-col ai-center">
          <div className="pb-50 grid max-w-1200">
            <div className="row grid-gap-30">
              <div className="col-6 col-12-m cards-illustration">
                <div className="round-20 p-20 bg-white border-6n">
                  <h5 className="fs-18 fw-5">Product Management</h5>
                  <div className="flex ai-center"><span className="icon fc-1n w-30px block">schedule</span><p>1 jour / semaine</p></div>
                  <div className="flex ai-center"><span className="icon fc-1n w-30px block">calendar_month</span><p>5 mois</p></div>
                </div>
                <div className="round-20 p-20 bg-white border-6n">
                  <h5 className="fs-18 fw-5">Gestion RH</h5>
                  <div className="flex ai-center"><span className="icon fc-1n w-30px block">schedule</span><p>2 jours / semaine</p></div>
                  <div className="flex ai-center"><span className="icon fc-1n w-30px block">calendar_month</span><p>2 mois</p></div>
                </div>
                <div className="round-20 p-20 bg-white border-6n">
                  <h5 className="fs-18 fw-5">Business Development</h5>
                  <div className="flex ai-center"><span className="icon fc-1n w-30px block">schedule</span><p>2 jours / mois</p></div>
                  <div className="flex ai-center"><span className="icon fc-1n w-30px block">calendar_month</span><p>12 mois</p></div>
                </div>
                <Image
                  src="/home_2.svg"
                  alt=""
                  width="200"
                  height="200"
                  className='block pos-abs top-0'
                />
                <Image
                  src="/home_1.svg"
                  alt=""
                  width="300"
                  height="250"
                  className='block'
                />
              </div>
              <div className="col-6 col-12-m">
                <h2 className="fc-1n fs-16">Notre mission</h2>
                <h2 className="mb-10 md-resp-pt-20 fs-30">Faciliter le mécénat de compétences à <span className="highlight fc-1n fw-6">fort impact</span></h2>
                <p className="mb-20">Demain accompagne les entreprises et leurs collaborateurs afin de réaliser du mécénat de compétences.</p>
                <h2 className="fs-16 mb-10">Nos formats</h2>
                <ul className='mb-20'>
                  <li className='mb-10'>
                    <h4 className='fc-1n fw-6 fs'>un engagement long...</h4>
                    <p>Nous accompagnons des entreprises qui s'engagent sur des missions nécessitant a minima 10 jours de travail, consécutifs ou sur plusieurs mois.</p>
                  </li>
                  <li>
                    <h4 className='fc-1n fw-6 fs'>...sur des besoins métier</h4>
                    <p>Nous recherchons des associations dont les enjeux nécessitent des compétences en gestion, finance, digital, marketing ou encore RH.</p>
                  </li>
                </ul>
                <Link href="https://mecenatdecompetences.info/" target="_blank" className='fc-1n flex ai-center w-100 jc-end zoom-h'>
                  <span className="icon block w-30px">open_in_new</span>
                  <span>En savoir plus sur le mécénat de compétences</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/div_2l.svg"
          alt=""
          width="200"
          height="200"
          className='w-100 h-50px block flip-180'
        />
      </div>

      <div className="bg-white p-50 w-100 ctn">
        <div className="flex dir-col ai-center">
          <div className="pb-50 grid max-w-1200">
            <div className="row grid-gap-30">
              <div className="col-6 col-12-m">
                <h2 className="fc-1n fs-16">Nos services</h2>
                <h2 className="mb-10 md-resp-pt-20 fs-30">Demain Works propose un accompagnement <span className="highlight fc-1n fw-6">end-to-end</span></h2>
                <p className="mb-20">Nous accompagnons nos partenaires sur l'ensemble des besoins liés à la réalisation de mécénat de compétences, du cahier des charges au retour d'expérience</p>
                <ul>
                  <li className='flex ai-center mb-10'>
                    <span className="icon fs-30 fc-3n w-40px block fw-9 flex-0">task_alt</span>
                    <span>Identification et pré-qualification de missions adaptées aux critères des partenaires</span>
                  </li>
                  <li className='flex ai-center mb-10'>
                    <span className="icon fs-30 fc-4n w-40px block fw-9 flex-0">task_alt</span>
                    <span>Contractualisation des missions et suivi de leur réalisation</span>
                  </li>
                  <li className='flex ai-center'>
                    <span className="icon fs-30 fc-5n w-40px block fw-9">task_alt</span>
                    <span>Valorisation des bénéfices RH, RSE et fiscaux du mécénat de compétences</span>
                  </li>

                </ul>
              </div>
              <div className="col-6 col-12-m">
                <Image
                  src="/home_3.svg"
                  alt=""
                  width="300"
                  height="250"
                  className='block h-100 w-100 max-w-500 margin-center'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ctn bg-6l pb-40">
        <div className="pt-20 pb-20 mb-10">
          <h2 className="fc-1n fs-20 flex ai-center jc-center"><span className='fw-9 icon fs-30 w-40px block'>add</span> d'impact pour les association</h2>
          <p className='text-middle'>Nous accompagnons les associations & fondations d'intérêt général partout en France</p>
        </div>
        <AssoLogos></AssoLogos>
      </div>

    </div>
  );
}
