import Image from 'next/image'
import React from 'react'
import styles from './home.module.css'


const home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Creative Thoughts Agency</h1>
            <p className={styles.desc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus earum velit dicta adipisci ducimus veniam fugiat, nobis aut quia, enim perspiciatis. Laboriosam autem dolor unde!
            </p>
            <div className={styles.buttons}>
                <button className={styles.button}>Learn more</button>
                <button className={styles.button}>Contact</button>
            </div>
            <div className={styles.brands}>
                <Image className={styles.brandImg} 
                    src='/brands.png'
                    alt='brands'
                    fill
                    sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
                />
            </div>
            <div className={styles.imgContainer}>
                <Image className={styles.heroImg}
                    src='/hero.gif'
                    alt='hero'
                    fill
                    sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
                />
            </div>
        </div>
    </div>
    
  )
}

export default home