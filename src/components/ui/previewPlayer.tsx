import { useCallback, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'

import Button from '../button'
import Player from '../player'
import ProgressBar from '../progressBar'

import { PlayerRootProps } from '../player/PlayerRoot'

type PlayerProps = Omit<PlayerRootProps, 'children'> & {
  videoProps?: ReactPlayerProps
}

function PreviewPlayer({ videoProps, onClick, ...props }: PlayerProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playedSeconds, setPlayedSeconds] = useState(0)
  const [durationSeconds, setDurationSeconds] = useState(0)

  const playerRef = useRef<ReactPlayer>(null)
  const playedPorcent = (playedSeconds / durationSeconds || 0) * 100

  const seekTo = useCallback(
    (seconds: number) => {
      const newTime = Math.min(seconds, durationSeconds)
      playerRef.current?.seekTo(newTime)
    },
    [durationSeconds],
  )

  const restart = useCallback(() => {
    setPlayedSeconds(0)
    seekTo(0)
  }, [seekTo])

  return (
    <Player.Root
      onMouseOver={() => setIsPlaying(true)}
      onMouseLeave={() => {
        setIsPlaying(false)
        setIsMuted(true)
        restart()
      }}
      {...props}
    >
      <Player.Controls>
        <div className="mb-1 flex items-center justify-between pl-2">
          <div className="select-none">
            <Player.Time seconds={playedSeconds} separator="/" />
            <Player.Time seconds={durationSeconds} className="text-white/70" />
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
      <Player.Overlay onClick={onClick} />
      <Player.Video
        ref={playerRef}
        playing={isPlaying}
        light={!isPlaying}
        muted={isMuted}
        onDuration={(duration) => {
          setDurationSeconds(duration)
        }}
        onProgress={(state) => {
          setPlayedSeconds(state.playedSeconds)
        }}
        playIcon={() => undefined}
        {...videoProps}
      />
    </Player.Root>
  )
}

export default PreviewPlayer
