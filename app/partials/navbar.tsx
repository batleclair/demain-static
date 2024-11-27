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
    <div className="bg-2l pos-abs top-0 w-100">
      <button type='button' className='m-10 pos-abs left-0 burger icon round w-30px h-30px fs-20 z-1' onClick={menuToggle}>menu</button>
      <nav className="ctn navbar flex w-100 ai-center" aria-expanded={expanded}>
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

        <div className="flex">
          <Link className={`link ${pathname === '/' ? 'active' : ''} w-20px mr-10 ml-10`} href="/" onClick={menuToggle}>
            <span className="icon">home</span>
          </Link>

          <Link
            className={`link ${pathname === '/entreprises' ? 'active' : ''} w-100px mr-10 ml-10`}
            href="/entreprises"
            onClick={menuToggle}
          >
            Entreprises
          </Link>

          <Link
            className={`link ${pathname === '/associations' ? 'active' : ''} w-100px  mr-10 ml-10`}
            href="/associations"
            onClick={menuToggle}
          >
            Associations
          </Link>
        </div>
      </nav>
    </div>
  )
}
