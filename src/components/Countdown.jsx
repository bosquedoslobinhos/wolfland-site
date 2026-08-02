import { useState, useEffect } from 'react'

const LAUNCH_DATE = new Date('2026-09-01T00:00:00')

function pad(n) { return String(n).padStart(2, '0') }

function getTimeLeft() {
  const diff = LAUNCH_DATE - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  }
}

export default function Countdown({ label }) {
  const [time, setTime] = useState(getTimeLeft)
  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(t)
  }, [])

  if (!time) return <div className="countdown countdown--launched">🎉 {label}</div>

  return (
    <div className="countdown">
      <p className="countdown-label">{label}</p>
      <div className="countdown-units">
        {[
          { v: time.days,    k: 'd' },
          { v: time.hours,   k: 'h' },
          { v: time.minutes, k: 'm' },
          { v: time.seconds, k: 's' },
        ].map(({ v, k }, i) => (
          <span key={k} className="countdown-group">
            {i > 0 && <span className="countdown-sep">:</span>}
            <span className="countdown-unit">
              <span className="countdown-num">{pad(v)}</span>
              <span className="countdown-text">{k}</span>
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
