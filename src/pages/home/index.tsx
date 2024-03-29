import { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

import Button from '../../components/button'
import Player from '../../components/player'
import ProgressBar from '../../components/progressBar'
import ButtonLink from '../../components/ui/buttonLink'

import { VideoRefProps } from '../../types/player'

function Home() {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  const playerVideoRef = useRef<VideoRefProps>(null)
  const playedSeconds = useRef<number>(0)

  const playedPorcent = playerVideoRef.current?.playedPorcent || 0

  return (
    <div className="px-2">
      <ButtonLink textButton="sports" />
      <Player.Root
        onMouseOver={() => setIsPlaying(true)}
        onMouseLeave={() => {
          setIsPlaying(false)
          playerVideoRef.current?.restart()
        }}
      >
        <Player.Controls>
          <div className="mb-1 flex items-center justify-between pl-2">
            <div className="select-none">
              <Player.Time seconds={playedSeconds.current} separator="/" />
              <Player.Time
                seconds={playerVideoRef.current?.durationSeconds}
                className="text-white/70"
              />
            </div>
            <Button.Root
              className="h-min w-min cursor-pointer rounded-full p-2 transition-all duration-500 hover:bg-white/5"
              onClick={() => {
                setIsMuted((prev) => !prev)
              }}
            >
              <Button.Icon
                icon={isMuted ? VolumeX : Volume2}
                className=" text-white/50 hover:text-white/80"
              />
            </Button.Root>
          </div>
          <ProgressBar.Root>
            <ProgressBar.Completed completed={playedPorcent} />
          </ProgressBar.Root>
        </Player.Controls>
        <Player.Overlay
          onClick={() => {
            setIsPlaying((prev) => !prev)
          }}
        />
        <Player.Video
          ref={playerVideoRef}
          playing={isPlaying}
          width="130%"
          onProgress={(state) => {
            playedSeconds.current = state.playedSeconds
          }}
          muted={isMuted}
        />
      </Player.Root>
    </div>
  )
}

export default Home
