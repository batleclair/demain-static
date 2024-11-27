// import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='ctn'>

      <div className='grid max-w-1000'>
        <div className="row grid-gap-30">
          <div className='col-6 col-12-s'>
            <Image
              src="/homepage.svg"
              alt="Personnage associant travail et sens"
              width="200"
              height="200"
              className='w-100 h-100 max-w-400 scale-down'
            />
          </div>
          <div className='col-6 col-12-s'>
            <h1>Test</h1>
            <p>Le travail c'est la santé</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur eum odio quae optio ratione corporis soluta, eos repudiandae magnam porro. Cum laborum repellat possimus magni reprehenderit minus adipisci, quisquam officiis.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
