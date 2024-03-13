import { useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import { formatTime } from '../../utils/format/formatTime'
import { getTimeWithSeconds } from '../../utils/getTimeWithSeconds'

import ButtonLink from '../../components/ui/buttonLink'

function Home() {
  const [isPlaying, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const playerRef = useRef<ReactPlayer>(null)
  const duration = getTimeWithSeconds(playerRef.current?.getDuration() || 0)

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
            const time = getTimeWithSeconds(playedSeconds)
            setCurrentTime(time)
          }}
          muted
          loop
        />
      </div>
      <p>{formatTime(duration.hours, duration.minutes, duration.seconds)}</p>
      <p>
        {formatTime(
          currentTime.hours,
          currentTime.minutes,
          currentTime.seconds,
        )}
      </p>
      {/* <p>{formatTime(currentTime.hours,currentTime.minutes,currentTime.seconds)}</p> */}
    </div>
  )
}

export default Home
