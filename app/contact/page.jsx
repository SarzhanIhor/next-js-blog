import Image from 'next/image'
import styles from './contactPage.module.css'


const contactPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image 
                layout='responsive'
                className={styles.img}
                src='/contact.png'
                alt='contact'
                height={500}
                width={500}
                sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
            />
        </div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <input type="text" placeholder='Name and Surname'/>
                <input type="email" placeholder='Email Adress'/>
                <input type="number" placeholder='Phone Number'/>
                <textarea name="" id="" placeholder='Message'/>
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default contactPage