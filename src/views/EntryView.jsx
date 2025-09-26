import { useState } from 'react'
import './EntryView.css'

export default function EntryView({ onEnter }) {
  const [exit, setExit] = useState(false)

  const handleClick = () => {
    setExit(true)
    setTimeout(() => {
      onEnter()
    }, 1200) // match animation duration
  }

  return (
    <div className={`entry-container ${exit ? 'vhs-exit' : ''}`}>
      <video
        src="src/assets/food.mp4"
        className="entry-video"
        autoPlay
        muted
        playsInline
        loop
      />
      <button className="enter-btn" onClick={handleClick}>
        Vào
      </button>
      <div className="vhs-noise-overlay" />
    </div>
  )
}
