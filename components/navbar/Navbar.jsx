
import styles from './navbar.module.css'
import Link from 'next/link'
import Links from './links/links'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Agency</Link>
        <div className="">
            <Links />
        </div>
    </div>
  )
}

export default Navbar