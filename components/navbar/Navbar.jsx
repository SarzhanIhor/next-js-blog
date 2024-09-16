import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Agency</Link>
        <div className="">
            Menu
        </div>
    </div>
  )
}

export default Navbar