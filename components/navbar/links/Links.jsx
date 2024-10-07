"use client"

import styles from './links.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Navlink from './navLink/NavLink'

const Links = () => {
    const links = [
        {
            title: 'homepage',
            path: '/'
        },
        {
            title: 'about',
            path: '/about'
        },
        {
            title: 'contact',
            path: '/contact'
        },
        {
            title: 'blog',
            path: '/blog'
        },
    ]


  return (
    <div className={styles.container}>
        <div className={styles.links}>
            {
                links.map(link => (
                    // <NavLink key={link.title} item={link}/>
                    <Navlink key={link.title} item={link}/>
                ))
            }
        </div>
    </div>
  )
}

export default Links