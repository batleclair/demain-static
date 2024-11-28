import Image from 'next/image'

export function AssoLogos() {

  const logo_paths = [
    "alynea.png",
    "bureraux_du_coeur.png",
    "cameleon.png",
    "chaine_de_l_espoir.png",
    "entrepreneurs_pour_la_planete.png",
    "explorjob.png",
    "fnh.png",
    "generation.png",
    "habitat_et_humanisme.png",
    "jobirl.png",
    "mavoie.png",
    "merterre.png",
    "planete_mer.png",
    "rose_up.png"
  ]

  return (

    <div className="logos">
      <div className="logos-slide">
        {logo_paths.map((path, index) => (
            <Image
              key={index}
              src={`/associations/${path}`}
              alt="logo association"
              width={100}
              height={100}
              className="w-100px h-100px round-20 bg-white scale-down p-10 m-10"
            />
          ))}
      </div>
      <div className="logos-slide">
        {logo_paths.map((path, index) => (
            <Image
              key={index}
              src={`/associations/${path}`}
              alt="logo association"
              width={100}
              height={100}
              className="w-100px h-100px round-20 bg-white scale-down p-10 m-10"
            />
          ))}
      </div>
    </div>
  )
}
