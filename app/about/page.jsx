import Image from 'next/image'
import styles from './aboutPage.module.css'

const aboutPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h2 className={styles.subtitle}>About Agency</h2>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione maxime aperiam eaque.</h1>
            <p className={styles.desk}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias suscipit aliquam accusantium quisquam modi excepturi voluptates obcaecati dolore quo facere? Aliquam dolor porro delectus dolorum!</p>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <span>
                        10 k+
                    </span>
                    <p>Year of Expirience</p>
                </div>
                <div className={styles.box}>
                <span>
                        10 k+
                    </span>
                    <p>Year of Expirience</p>
                </div>
                <div className={styles.box}>
                <span>
                        10 k+
                    </span>
                    <p>Year of Expirience</p>
                </div>
            </div>
        </div>
        <div className={styles.imgContainer}>
                <Image 
                    priority={true}
                    className={styles.img}
                    src='/about.png'
                    alt='about'
                    fill
                    sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
                />
            </div>
    </div>
  )
}

export default aboutPage