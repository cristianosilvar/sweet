import { Volume2, VolumeX } from 'lucide-react'
import { ComponentProps, ReactNode, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import { formatTime } from '../../utils/format/formatTime'
import { getTimeWithSeconds } from '../../utils/getTimeWithSeconds'

import Button from '../../components/button'
import { twMerge } from 'tailwind-merge'

type ProgressBarProps = ComponentProps<'div'> & {
  completed: number
  barClass?: string
}

type TimeProps = ComponentProps<'span'> & {
  time: {
    hours: number
    minutes: number
    seconds: number
  }
  showSeparator?: boolean
  elementSeparator?: ReactNode
}

function ProgressBar({
  className,
  barClass,
  completed: completedT,
  ...props
}: ProgressBarProps) {
  const completed = Math.min(completedT, 100)

  console.log(completed)

  return (
    <div
      className={twMerge(
        'h-1 w-full overflow-hidden rounded-full bg-white/15 hover:cursor-pointer',
        className,
      )}
      {...props}
    >
      <div
        className={twMerge(`h-full w-7 rounded-full bg-white/50`, barClass)}
      />
    </div>
  )
}

function Time({
  time,
  className,
  showSeparator = false,
  elementSeparator = '/',
  ...props
}: TimeProps) {
  return (
    <>
      <span className={twMerge('text-xs', className)} {...props}>
        {formatTime(
          time.hours,
          time.minutes,
          time.seconds,
          time.hours > 0 ? 'hoursMinutesSeconds' : 'minutesSeconds',
        )}
      </span>
      {showSeparator && (
        <span className={twMerge('mx-1 text-xs', className)}>
          {elementSeparator}
        </span>
      )}
    </>
  )
}

function Player() {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeSeconds, setTimeSeconds] = useState(0)
  const [currentTime, setCurrentTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const playerRef = useRef<ReactPlayer>(null)
  const duration = getTimeWithSeconds(playerRef.current?.getDuration() || 0)

  // const x = playerRef.current?.getDuration()
  // const porcent = (timeSeconds / (x || 0)).toFixed(0)

  console.log(timeSeconds)

  const handleSeekTo = (time: number) => {
    const value = Math.min(time, playerRef?.current?.getDuration() || 0)
    playerRef.current?.seekTo(value)
  }

  const restartTime = () => {
    handleSeekTo(0)
  }

  return (
    <div
      onMouseOver={() => setIsPlaying(true)}
      onMouseLeave={() => {
        setIsPlaying(false)
        restartTime()
      }}
      className="group/player relative aspect-video h-min w-[300px] overflow-hidden rounded-2xl bg-white/5 object-cover"
      // className="group/player relative aspect-video h-min w-min overflow-hidden rounded-3xl bg-white/5 object-cover"
    >
      <div
        className={`column absolute bottom-0 z-[100000] w-full px-2 pb-4 md:px-4`} //group-hover/player:flex
      >
        <div className="mb-1 flex items-center justify-between pl-2">
          <div className="select-none">
            <Time time={currentTime} showSeparator />
            <Time time={duration} className="text-white/70" />
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
        <ProgressBar completed={5} />
      </div>
      <div
        className="to-/90 absolute h-full w-full cursor-pointer bg-gradient-to-t from-black via-black/70 to-transparent" //group/player:bg-gradient-to-t
        onClick={() => {
          setIsPlaying((prev) => !prev)
        }}
      />
      <ReactPlayer
        ref={playerRef}
        url="https://vimeo.com/354218747" // https://vimeo.com/354218747
        playing={isPlaying}
        width="130%"
        height="100%"
        onProgress={({ playedSeconds }) => {
          const time = getTimeWithSeconds(playedSeconds)

          setTimeSeconds(playedSeconds)
          setCurrentTime(time)
        }}
        muted={isMuted}
        loop
      />
    </div>
  )
}

export default Player
