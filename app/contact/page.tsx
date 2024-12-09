'use client';

import Image from 'next/image'
import { useState } from 'react';

export default function Page() {
  const [orgType, setOrgType] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = (contactForm: FormData) => {
    const validationErrors = {};

    if (contactForm.get("password") !== '') {
      validationErrors.password = 'Mot de passe';
    }

    if (!contactForm.get("orgType")) {
      validationErrors.orgType = 'Choix requis';
    }

    if (!contactForm.get("org")) {
      validationErrors.org = 'Nom requis';
    }

    if (!contactForm.get("firstName")) {
      validationErrors.firstName = 'Prénom requis';
    }

    if (!contactForm.get("lastName")) {
      validationErrors.lastName = 'Nom requis';
    }

    if (!contactForm.get("email")) {
        validationErrors.email = 'Adresse requise';
    } else if (!/\S+@\S+\.\S+/.test(contactForm.get("email"))) {
        validationErrors.email = 'Adresse invalide';
    }

    if (!contactForm.get("phone")) {
      validationErrors.phone = 'Numéro requis';
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactForm = new FormData(e.target)
    const validationErrors = validateForm(contactForm);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        setIsFormValid(true);
        console.log("c'est ok")
        e.target.submit();
    } else {
        setIsFormValid(false);
        console.log('Le formulaire comporte des erreurs, merci de les corriger');
    }
  };


  return (
    <div className='min-h-screen'>

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
                <form action="https://getform.io/f/apjjrmpa" method="POST" className='w-100 max-w-300' onSubmit={handleSubmit}>

                  <div className='pos-rel mb-20 radio-input'>
                    <label htmlFor="orgType" className='block radio-title'>Vous représentez une :</label>
                    <div className="flex ai-center jc-between gap-30">
                      <div className="w-100">
                        <input
                          type="radio" name="orgType" value="entreprise" id="entreprise" onChange={(e) => setOrgType(e.target.value)}/>
                        <label htmlFor="entreprise" className='fs-16'>Entreprise</label>
                      </div>
                      <div className="w-100">
                        <input type="radio" name="orgType" value="association" id="association" onChange={(e) => setOrgType(e.target.value)}/>
                        <label htmlFor="association" className='fs-16'>Association</label>
                      </div>
                      <p className='fs-12 fc-5n pos-abs right-0 bottom-10-n'>{errors.orgType}</p>
                    </div>
                  </div>

                  <div className='pos-rel mb-20'>
                    <input className='text-input w-100' type="text" name='org' placeholder='La Tribu'/>
                    <label htmlFor="org" className='pos-abs'>{orgType ? `Nom de ${orgType === "entreprise" ? "l'entreprise" : "l'association"}` : "Nom de ..."}</label>
                    <p className='fs-12 fc-5n pos-abs right-0'>{errors.org}</p>
                  </div>

                  <div className='pos-rel mb-20 w-100'>
                    <input className='text-input w-100' type="text" name='firstName' placeholder='Fanette'/>
                    <label htmlFor="firstName" className='pos-abs'>Prénom</label>
                    <p className='fs-12 fc-5n pos-abs right-0'>{errors.firstName}</p>
                  </div>

                  <div className='pos-rel mb-20'>
                    <input className='text-input w-100' type="text" name='lastName' placeholder='Dupuy'/>
                    <label htmlFor="lastName" className='pos-abs'>Nom</label>
                    <p className='fs-12 fc-5n pos-abs right-0'>{errors.lastName}</p>
                  </div>


                  <div className='pos-rel mb-20'>
                    <input className='text-input w-100' type="text" name='email' placeholder='fanette@demain.works'/>
                    <label htmlFor="email" className='pos-abs'>Adresse email</label>
                    <p className='fs-12 fc-5n pos-abs right-0'>{errors.email}</p>
                  </div>

                  <input type="hidden" name="password" value=""/>

                  <div className='pos-rel mb-20'>
                    <input className='text-input w-100' type="text" name='phone' placeholder='0123456789'/>
                    <label htmlFor="phone" className='pos-abs'>Téléphone</label>
                    <p className='fs-12 fc-5n pos-abs right-0'>{errors.phone}</p>
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
