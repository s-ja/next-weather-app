'use client'

import Link from 'next/link'
import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [currentTime, setCurrentTime] = useState('')

  const fetchTime = async () => {
    const response = await axios.get('/api/time')
    setCurrentTime(response.data.dateTime)
  }

  useEffect(() => {
    fetchTime()
  }, [])
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>현재 시간: {currentTime}</h1>
        <button onClick={fetchTime} type="button">
          시간 데이터 캐시 비우기
        </button>
        <Link href="/Seoul">서울 날씨</Link>
        <Link href="/HongKong">홍콩 날씨</Link>
      </div>
    </main>
  )
}
