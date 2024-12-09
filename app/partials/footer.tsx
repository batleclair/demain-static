import Link from 'next/link'
import Image from 'next/image'

export function Footer() {

  return (
    <footer className="bg-1n ctn pt-40 pb-40">
      <div className="row grid-gap-20 max-w-1000">
        <div className="col-6 col-12-m">
          <div className="mb-20 max-w-500">
            <Image src="/logos/logo_white.png"
                  alt="Logo de Demain Works"
                  width="200"
                  height="60"
                  className="scale-down block mb-10">
            </Image>
            <p className="fc-white pb-20 pr-50">L'engagement associatif sur son temps de travail : pour ne plus avoir à choisir entre un job qui paye et un job qui compte !</p>
            <div className="flex gap-10">
              <a href="https://www.linkedin.com/company/demain-works/" className="bg-1n bg-to-1d zoom-h round p-10 flex ai-center jc-center w-40px h-40px border-white" target="_blank">
                <svg className="h-20px w-20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
              </a>
              <a href="mailto:contact@demain.works" className="bg-1n bg-to-1d zoom-h round p-10 flex ai-center jc-center w-40px h-40px border-white"><span className="fs-18 fill-1 fc-white icon">mail</span></a>
            </div>
          </div>
        </div>

        <div className="col-2 col-12-m">
          <p className='fc-white mt-20 mb-30'>LIENS</p>
          <ul>
            <li className='mb-10'><Link href="/entreprises" className='fc-white fw-3'>Entreprises</Link></li>
            <li className='mb-10'><Link href="/associations" className='fc-white fw-3'>Associations</Link></li>
            <li className='mb-10'><Link href="https://mecenatdecompetences.info/associations" className='fc-white fw-3 flex ai-center'>Blog <span className='icon ml-5'>open_in_new</span></Link></li>
          </ul>
        </div>

        <div className="col-2 col-12-m">
          <p className='fc-white mt-20 mb-30'>DEMAIN WORKS</p>
          <ul>
            <li className='mb-10'><Link href="/a-propos" className='fc-white fw-3'>A propos</Link></li>
            <li className='mb-10'><Link href="/" className='fc-white fw-3'>Mentions légales</Link></li>
            <li className='mb-10'><Link href="/" className='fc-white fw-3'>Confidentialité</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
