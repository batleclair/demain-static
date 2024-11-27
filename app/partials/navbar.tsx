'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="p-20 bg-2l">
      <Link href="/">
        <Image
          src="/logo_dark.svg"
          alt="Logo de Demain Works"
          width="200"
          height="50"
        />
      </Link>

      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        <span className="mso-icon">home</span>
      </Link>

      <Link
        className={`link ${pathname === '/about' ? 'active' : ''}`}
        href="/about"
      >
        About
      </Link>
    </nav>
  )
}
