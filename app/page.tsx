import Link from 'next/link'
import Image from 'next/image'
import { AssoLogos } from '@/app/partials/asso_logos'

export default function Home() {

  const stars = () => {
    return(
      <div className='flex'>
        <p><span className="icon fill-1 fc-4n fs-20">star</span></p>
        <p><span className="icon fill-1 fc-4n fs-20">star</span></p>
        <p><span className="icon fill-1 fc-4n fs-20">star</span></p>
        <p><span className="icon fill-1 fc-4n fs-20">star</span></p>
        <p><span className="icon fill-1 fc-4n fs-20">star</span></p>
      </div>
    )
  };


  return (
    <div className='pt-20'>
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


      <div className="ctn bg-white pb-40">
        <div className="pt-20 pb-20 mb-10">
          <h2 className="fc-1n fs-20 flex ai-center jc-center"><span className='fw-9 icon fs-30 w-40px block'>add</span> d'impact pour les salarié.e.s</h2>
          <p className='text-middle'>Nous accompagnons chaque salarié éligible pour que son expérience en mécénat soit une réussite</p>
        </div>

        <div className="row grid-gap-20">
          <blockquote className="mb-40 col-4 col-12-m">
            <div className="flex mb-20">
              <Image src="/home/karim.jpg" alt="Portrait de Karim" width={40} height={40} className='round mr-20'></Image>
              <div>
                <cite className="fw-6 block">Karim</cite>
                <cite>Consultant IT</cite>
              </div>
            </div>
            <div className="pt-10 w-100">
              <p className='mb-10'>Grâce à Demain, mon entreprise m’a permis de réaliser une mission pro bono pour aider une association dans le cadre de sa transformation digitale</p>
              {stars()}
            </div>
          </blockquote>

          <blockquote className="mb-40 col-4 col-12-m">
            <div className="flex mb-20">
              <Image src="/home/patricia.jpg" alt="Portrait de Patricia" width={40} height={40} className='round mr-20'></Image>
              <div>
                <cite className="fw-6 block">Patricia</cite>
                <cite>Responsable RH</cite>
              </div>
            </div>
            <div className="pt-10 w-100">
              <p className='mb-10'>En me laissant consacrer 3 jours par mois à une association qui m’est chère, mon entreprise m’a permis de retrouver du sens dans mon métier et un meilleur équilibre personnel</p>
              {stars()}
            </div>
          </blockquote>

          <blockquote className="mb-40 col-4 col-12-m">
            <div className="flex mb-20">
              <Image src="/home/julie.jpg" alt="Portrait de Julie" width={40} height={40} className='round mr-20'></Image>
              <div>
                <cite className="fw-6 block">Julie</cite>
                <cite>Chargée de Marketing Digital</cite>
              </div>
            </div>
            <div className="pt-10 w-100">
              <p className='mb-10'>Demain m’a permis de trouver une asso géniale dans laquelle exercer et développer de nouvelles compétences en lien avec mon projet de reconversion</p>
              {stars()}
            </div>
            </blockquote>
          </div>
      </div>

      <div className="ctn bg-6l pb-40">
        <div className="pt-20 pb-20 mb-10">
          <h2 className="fc-1n fs-20 flex ai-center jc-center"><span className='fw-9 icon fs-30 w-40px block'>add</span> d'impact pour les associations</h2>
          <p className='text-middle'>Nous collaborons avec des associations & fondations d'intérêt général partout en France</p>
        </div>
        <AssoLogos></AssoLogos>
      </div>


      <div className="bg-white p-50 w-100 ctn">
        <div className="flex dir-col ai-center">
          <div className="pb-50 grid max-w-1200">
            <div className="row grid-gap-30">
              <div className="col-6 col-12-m">
                <h2 className="fc-1n fs-16">Nos services</h2>
                <h2 className="mb-10 md-resp-pt-20 fs-30">Demain Works propose un accompagnement <span className="highlight fc-1n fw-6">end-to-end</span></h2>
                <p className="mb-20">Nous accompagnons nos partenaires sur l'ensemble des besoins liés à la réalisation de mécénat de compétences, du cahier des charges au retour d'expérience</p>
                <ul className='mb-20'>
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

                <Link href="/entreprises" className='btn-h border-1n bg-white bg-to-2l fc-1n fw-5 text-middle block w-fit'>
                  → En savoir plus sur nos services
                </Link>
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


      <div className="ctn bg-2l">
        <div className="pt-50 pb-50 flex dir-col ai-center max-w-600 margin-center">
          <h2 className="mb-10 fs-30 text-middle">Vous souhaitez réaliser du mécénat de compétences ?</h2>
          <p className='text-middle mb-20'>L'équipe Demain.Works est à votre écoute. Laissez-nous vos coordonnées afin d'échanger sur vos besoins et vos objectifs.</p>
          <Link
            className="btn-h fc-white bg-1n bg-to-1d"
            href="/contact"
          >
            Nous contacter
          </Link>

        </div>
      </div>

    </div>
  );
}
