import Link from 'next/link'
import Image from 'next/image'

export default function Home() {

  return (
    <div className='pt-20'>
      <div className='ctn flex dir-col ai-center mb-40'>
        <div className='grid max-w-1200'>
          <div className="row grid-gap-30">
            <div className='col-6 col-12-m ac-center'>
              <h1 className='mb-10 fs-50 fw-5 fc-1n'><span className='fw-8'>Demain</span> Works</h1>
              <h2 className='mb-20'>Pour un meilleur partage des compétences entre entreprises et acteurs de l'intérêt général.</h2>
              <p>Demain.Works permet aux entreprises et à leurs collaborateurs de partager les compétences professionnelles dont ils disposent auprès d'associations et fondations.</p>
            </div>
            <div className='col-6 col-12-m'>
              <Image
                src="/home_0.svg"
                alt="Personnage associant travail et sens"
                width="200"
                height="200"
                className='w-100 h-100 max-w-400 scale-down block'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='ctn flex dir-col ai-center pt-40 pb-40 bg-2l'>
        <div className='grid max-w-1200'>
          <div className="row grid-gap-30">
            <div className='col-4 col-12-m'>
              <h2 className="fc-1n fs-16">Notre mission</h2>
              <h2 className="fs-30">Pourquoi Demain ?</h2>
            </div>
            <div className='col-8 col-12-m'>
              <p className="mb-20">Le capital humain est aujourd’hui majoritairement au service des entreprises. Il est pourtant selon nous un bien commun à mettre davantage au service de causes sociales et environnementales.</p>
              <p className="mb-20">Avec Demain, nous souhaitons favoriser le partage de compétences entre associations et entreprises, en offrant l'accès à un réseau de talents engagés et désireux d'œuvrer pour l'intérêt général.</p>
              <p>En comblant l'écart structurel d'attractivité entre associations et entreprises, nous apportons impact, sens et compétences à l'ensemble de l'écosystème.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='ctn pt-40 pb-40 flex dir-col bg-white ai-center'>
        <div className='w-100 mb-20 max-w-1200'>
          <h2 className="fc-1n fs-16">L'équipe</h2>
          <h2 className="fs-30">Qui sommes-nous ?</h2>
        </div>

        <div className="row max-w-1200">

          <div className='col-6 col-12-m round-50 bg-6l p-50 shadow-20-l ml-30 mr-30 '>
            <div className="flex dir-col ai-center">
              <Image
                src="/about/pb.jpg"
                alt="Portrait de Paul Bolardi"
                width="200"
                height="200"
                className='w-100 h-100 max-w-150 scale-down block round mb-20'
              />
              <h3 className="fc-1n fs-30 fw-6 mb-40">Paul</h3>
              <p className="mb-10">Après un début de carrière en conseil puis financement de jeunes entreprises (Clipperton, AXA Venture Partners), Paul quitte le monde de la finance pour se lancer dans un projet à impact fort.</p>
              <p>Ses divers engagements associatifs, tant au niveau local que national et international lui font prendre conscience de l'importance de permettre à chaque salarié de mettre à profit ses compétences développées en entreprises au sein de structures d'intérêt général de toute taille, pour en démultiplier l'impact.</p>
            </div>
          </div>

          <div className='col-6 col-12-m round-50 bg-6l p-50 shadow-20-l ml-30 mr-30 '>
            <div className="flex dir-col ai-center">
              <Image
                src="/about/bc.jpg"
                alt="Portrait de Baptiste Clair"
                width="200"
                height="200"
                className='w-100 h-100 max-w-150 scale-down block round mb-20'
              />
              <h3 className="fc-1n fs-30 fw-6 mb-40">Baptiste</h3>
              <p className="mb-10">Baptiste a travaillé 12 ans pour des société de conseil stratégique et financier aux entreprises innovantes (Jefferies, Clipperton).</p>
              <p className="mb-10">Constatant la capacité de cet écosystème à attirer les talents, Baptiste a eu à coeur de trouver une solution pour rendre aussi attractives les organisations oeuvrant à l'intérêt général, indépendamment de leurs moyens financiers.</p>
              <p>Particulièrement sensible au sujet de l'égalité des chances, Baptiste s'investit également dans différents projets associatifs.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="ctn bg-white">
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
