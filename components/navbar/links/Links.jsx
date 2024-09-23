"use client"

import styles from './links.module.css'
import { useState } from 'react'
import Image from 'next/image'
import navLink from './navLink/navLink'

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
                    <navLink key={link.title} item={link}/>
                ))
            }
        </div>
    </div>
  )
}

export default Links