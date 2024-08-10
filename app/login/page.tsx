"use client"
import React from 'react'
import styles from './LoginPage.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


function LoginPage() {
  const {data, status} = useSession()
  const router = useRouter()

  if(status === "loading") {
    return <div>در حال دریافت اطلاعات</div>
  }
  if (status === "authenticated") {
    return router.push("/")
  }

  return (
    <div className='flex bg-[var(--softBg)] flex-col justify-center py-14 px-4 gap-6 items-center'>
        <h2 className='title_h2 text-center'>ورود با:</h2>
        <button className={styles.main_button} disabled>Google</button>
        <button className={styles.main_button} disabled>FaceBook</button>
        <button className={styles.main_button} onClick={() => signIn('github')}>Github</button>
    </div>
  )
}

export default LoginPage