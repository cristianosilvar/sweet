import { forwardRef } from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'

const PlayerVideo = forwardRef<ReactPlayer, ReactPlayerProps>(
  (
    {
      url = 'https://vimeo.com/354218747',
      loop,
      muted,
      width = '100%',
      height = '100%',
      ...props
    },
    ref,
  ) => {
    return (
      <ReactPlayer
        ref={ref}
        url={url}
        width={width}
        height={height}
        muted={muted}
        loop={loop}
        {...props}
      />
    )
  },
)

export default PlayerVideo
