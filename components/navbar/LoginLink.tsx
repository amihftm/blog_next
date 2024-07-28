"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function LoginLink() {
  const [userIn, setUserIn] = useState(false)
  return (
    <>
      {userIn ? (
        <Link href={"/write"} className="primary_link">
          متن جدید
        </Link>
      ) : (
        <Link href={"/login"} className="primary_link">
          ورود
        </Link>
      )}
    </>
  );
}

export default LoginLink