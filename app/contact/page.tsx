'use client';

import Image from 'next/image'
import { useState } from 'react';

export default function Page() {
  const [orgType, setOrgType] = useState("");

  const handleTypeChange = (e: any) => {
    setOrgType(e.target.value);
  };

  return (
    <div>

      <div className='ctn flex dir-col ai-center mb-40'>
        <div className='grid max-w-1200'>
          <div className="row grid-gap-30">
            <div className='col-6 col-12-m'>
              <Image
                src="/companies/comp_0.png"
                alt="Entreprises offrant à des associations les compétences de leurs collaborateurs à différentes fréquences"
                width="400"
                height="400"
                className='w-100 h-100 max-w-500 scale-down block'
              />
            </div>
            <div className='col-6 col-12-m ac-center'>
              <h1 className='mb-20 fs-30 fw-5'>Vous souhaitez réaliser du mécénat de compétences ?</h1>
              <p className='mb-30'>L'équipe Demain.Works est à votre écoute. Laissez-nous vos coordonnées afin d'échanger sur vos besoins et vos objectifs.</p>
              <div>
                <form action="https://getform.io/f/apjjrmpa" method="POST" className='w-100 max-w-300'>

                  <div className='pos-rel mb-20 radio-input'>
                    <label htmlFor="type" className='block radio-title'>Vous représentez une :</label>
                    <div className="flex ai-center jc-between gap-30">
                      <div className="w-100">
                        <input type="radio" name="type" value="entreprise" id="entreprise" onChange={handleTypeChange}/>
                        <label htmlFor="entreprise" className='fs-16'>Entreprise</label>
                      </div>
                      <div className="w-100">
                        <input type="radio" name="type" value="association" id="association" onChange={handleTypeChange}/>
                        <label htmlFor="association" className='fs-16'>Association</label>
                      </div>
                    </div>
                  </div>

                  <div className='pos-rel mb-20'>
                    <input className='text-input w-100' type="text" name='org' placeholder='La Tribu'/>
                    <label htmlFor="org" className='pos-abs'>{orgType ? `Nom de ${orgType === "entreprise" ? "l'entreprise" : "l'association"}` : "Nom de ..."}</label>
                  </div>

                  <div className='pos-rel mb-20 w-100'>
                    <input className='text-input w-100' type="text" name='first' placeholder='Fanette'/>
                    <label htmlFor="first" className='pos-abs'>Prénom</label>
                  </div>

                  <div className='pos-rel mb-20'>
                    <input className='text-input w-100' type="text" name='last' placeholder='Dupuy'/>
                    <label htmlFor="last" className='pos-abs'>Nom</label>
                  </div>


                  <div className='pos-rel mb-20'>
                    <input className='text-input w-100' type="text" name='mail' placeholder='fanette@demain.works'/>
                    <label htmlFor="mail" className='pos-abs'>Adresse email</label>
                  </div>

                  <div className='pos-rel mb-20'>
                    <input className='text-input w-100' type="text" name='phone' placeholder='0123456789'/>
                    <label htmlFor="phone" className='pos-abs'>Téléphone</label>
                  </div>

                  <button type="submit" className='btn zoom-h fc-white bg-1n bg-to-1d fs-16'>Envoyer</button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
