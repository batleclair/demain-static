import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="red">
        ceci est un test
      </h1>
      <p>super</p>
      <div>test</div>
      <Link href="/entreprises">
        <span className="mso-icon">close</span>
        Entreprises
      </Link>
      <Link href="/associations">
        <span className="mso-icon">close</span>
        Associations
      </Link>
    </div>
  );
}
