import type { Metadata } from "next";
import "./globals.scss";
import { Navbar } from '@/app/partials/navbar'
import { Footer } from '@/app/partials/footer'

export const metadata: Metadata = {
  title: "Demain Works",
  description: "Votre partenaire en mécénat de compétences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="pt-80">
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
