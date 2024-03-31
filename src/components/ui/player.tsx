import ReactPlayer, { ReactPlayerProps } from 'react-player'
import { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { Play, Pause } from 'lucide-react'

import Button from '../button'
import ProgressBar from '../progressBar'
import { default as PlayerComponent } from '../player'

import { PlayerRootProps } from '../player/PlayerRoot'

type PlayerProps = Omit<PlayerRootProps, 'children'> & {
  videoProps?: ReactPlayerProps
}

function Player({ videoProps, onClick, ...props }: PlayerProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [playedSeconds, setPlayedSeconds] = useState(0)
  const [durationSeconds, setDurationSeconds] = useState(0)

  const playerRef = useRef<ReactPlayer>(null)
  const playedPorcent = (playedSeconds / durationSeconds || 0) * 100

  return (
    <PlayerComponent.Root className="w-full rounded-none" {...props}>
      <PlayerComponent.Controls className={` gap-1 ${!isPlaying && 'flex'}`}>
        <ProgressBar.Root>
          <ProgressBar.Completed completed={playedPorcent} />
        </ProgressBar.Root>
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center justify-center">
            <Button.Root
              className="h-min w-min cursor-pointer rounded-full p-2 transition-all duration-500 "
              onClick={() => {
                setIsPlaying((prev) => !prev)
              }}
            >
              <Button.Icon
                icon={isPlaying ? Pause : Play}
                className="fill-white"
              />
            </Button.Root>
            <div className="select-none">
              <PlayerComponent.Time seconds={playedSeconds} separator="/" />
              <PlayerComponent.Time
                seconds={durationSeconds}
                className="text-white/70"
              />
            </div>
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
      </PlayerComponent.Controls>
      <PlayerComponent.Overlay
        className={isPlaying ? '' : 'bg-gradient-to-t'}
        onClick={onClick}
      />
      <PlayerComponent.Video
        ref={playerRef}
        playing={isPlaying}
        muted={isMuted}
        onDuration={(duration) => {
          setDurationSeconds(duration)
        }}
        onProgress={(state) => {
          setPlayedSeconds(state.playedSeconds)
        }}
        onEnded={() => {
          setIsPlaying(false)
        }}
        {...videoProps}
      />
    </PlayerComponent.Root>
  )
}

export default Player
