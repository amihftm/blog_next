import React from 'react'
import styles from './LoginPage.module.css'

function LoginPage() {
  return (
    <div className='flex bg-[var(--softBg)] flex-col justify-center py-14 px-4 gap-6 items-center'>
        <h2 className='title_h2 text-center'>ورود با:</h2>
        <button className={styles.main_button}>Google</button>
        <button className={styles.main_button}>FaceBook</button>
        <button className={styles.main_button}>Github</button>
    </div>
  )
}

export default LoginPage