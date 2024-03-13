import ReactPlayer from 'react-player'
import { useEffect, useRef, useState } from 'react'

import ButtonLink from '../../components/ui/buttonLink'

function Home() {
  const [isPlaying, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  const playerRef = useRef<ReactPlayer>(null)
  const duration = playerRef.current?.getDuration()

  return (
    <div className="px-2">
      <ButtonLink textButton="sports" />
      <div
        onMouseOver={() => setPlaying(true)}
        onMouseLeave={() => setPlaying(false)}
        className="w-min overflow-hidden rounded-lg"
      >
        <ReactPlayer
          ref={playerRef}
          url="https://vimeo.com/354218747"
          playing={isPlaying}
          onProgress={({ playedSeconds }) => {
            // const hours = Math.floor(playedSeconds / 3600).toFixed(0);
            // const minutes = Math.floor((playedSeconds % 3600) / 60);
            // const remainingSeconds = playedSeconds % 60;

            const [hours, minutes, remainingSeconds] = [
              Math.floor(playedSeconds / 3600),
              Math.floor((playedSeconds % 3600) / 60),
              playedSeconds % 60,
            ]

            setCurrentTime(formatTime(hours, minutes, remainingSeconds))
          }}
          muted
          loop
        />
      </div>
      <p>{String(isPlaying)}</p>
      <p>{duration}</p>
      <p>{currentTime}</p>
      {/* <p>{formatTime(currentTime.hours,currentTime.minutes,currentTime.seconds)}</p> */}
    </div>
  )
}

export default Home
