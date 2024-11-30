'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname()
  const [expanded, setIsExpanded] = useState(false);
  const menuToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="bg-white pos-abs top-0 w-100 z-2">
      <button type='button' className='m-10 pos-abs left-0 burger icon round w-30px h-30px fs-20 z-1' onClick={menuToggle}>menu</button>
      <nav className={`ctn navbar flex w-100 ai-center ${ expanded ? "expanded" : "" }`}>
        <Link href="/">
          <Image
            src="/logo_dark.svg"
            alt="Logo de Demain Works"
            width="200"
            height="40"
            className="logo-dark"
          />
          <Image
            src="/logo_white.svg"
            alt="Logo de Demain Works"
            width="200"
            height="40"
            className="logo-white"
          />
        </Link>

        <div className="flex ai-center">
          <Link className={`link ${pathname === '/' ? 'active' : ''} w-20px mr-10 ml-10 zoom-h`} href="/" onClick={menuToggle}>
            <span className="icon">home</span>
          </Link>

          <Link
            className={`link ${pathname === '/entreprises' ? 'active' : ''} w-100px mr-10 ml-10 zoom-h`}
            href="/entreprises"
            onClick={menuToggle}
          >
            Entreprises
          </Link>

          <Link
            className={`link ${pathname === '/associations' ? 'active' : ''} w-100px  mr-10 ml-10 zoom-h`}
            href="/associations"
            onClick={menuToggle}
          >
            Associations
          </Link>

          <Link
            className="w-100px  mr-10 ml-10 btn-h fc-white bg-1n bg-to-1d"
            href=""
            onClick={menuToggle}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  )
}
