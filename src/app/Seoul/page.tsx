// src/app/Seoul/page.tsx

'use client'

import Link from 'next/link'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Seoul() {
  const [weather, setWeather] = useState('')
  const [currentTime, setCurrentTime] = useState('')

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=0ae722ef722b4b4fb7b21655231511&q=Seoul`,
      )
      setWeather(
        `${response.data.current.temp_c}도, ${response.data.current.condition.text}`,
      )
    } catch (error) {
      console.error('Weather API error:', error)
    }
  }

  const fetchTime = async () => {
    try {
      const response = await axios.get('/api/time')
      setCurrentTime(response.data.dateTime)
    } catch (error) {
      console.error('Time API error:', error)
    }
  }

  useEffect(() => {
    fetchWeather()
    fetchTime()
  }, [])

  return (
    <div>
      <h1>서울 날씨: {weather}</h1>
      <p>현재 시간: {currentTime}</p>
      <Link href="/">to Home</Link>
    </div>
  )
}

export default Seoul
