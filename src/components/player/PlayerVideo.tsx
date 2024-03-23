import { forwardRef } from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'

const PlayerVideo = forwardRef<ReactPlayer, ReactPlayerProps>(
  ({ url = 'https://vimeo.com/354218747', loop, ...props }, ref) => {
    return (
      <ReactPlayer
        ref={ref}
        url={url}
        // playing={isPlaying}
        width="130%"
        height="100%"
        // onProgress={({ playedSeconds }) => {
        //   const time = getTimeWithSeconds(playedSeconds)

        //   setTimeSeconds(playedSeconds)
        //   setCurrentTime(time)
        // }}
        // muted={isMuted}
        loop={loop}
        {...props}
      />
    )
  },
)

export default PlayerVideo
