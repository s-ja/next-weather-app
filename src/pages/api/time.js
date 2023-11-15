// pages/api/time.js
import axios from 'axios'

export default async function handler(req, res) {
  const timeZone = req.query.timeZone || 'Asia/Seoul' // 기본값은 'Asia/Seoul'

  try {
    const response = await axios.get(
      `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`,
    )
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
