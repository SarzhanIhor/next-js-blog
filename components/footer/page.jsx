import React from 'react'
import styles from './footer.module.css'
const Footer = () => {

  const year = new Date()

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Agency</div>
      <div className={styles.text}>Create throught agency <span className="year">
        {year.getFullYear()}
        </span>
      </div>
    </div>
  )
}

export default Footer