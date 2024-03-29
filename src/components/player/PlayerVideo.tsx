import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player'

import { getTimeWithSeconds } from '../../utils/getTimeWithSeconds'
import { VideoRefProps } from '../../types/player'

const PlayerVideo = forwardRef<VideoRefProps, ReactPlayerProps>(
  (
    {
      url = 'https://vimeo.com/354218747',
      loop,
      muted,
      width = '100%',
      height = '100%',
      onProgress,
      ...props
    },
    ref,
  ) => {
    const playerRef = useRef<ReactPlayer>(null)
    const playedSeconds = useRef<number>(0)

    const durationSeconds = playerRef?.current?.getDuration() || 0
    const duration = getTimeWithSeconds(durationSeconds)
    const playedPorcent = (playedSeconds.current / durationSeconds) * 100

    const seekTo = useCallback(
      (seconds: number) => {
        const newTime = Math.min(seconds, durationSeconds)
        playerRef.current?.seekTo(newTime)
      },
      [durationSeconds],
    )

    const restart = useCallback(() => {
      seekTo(0)
    }, [seekTo])

    useImperativeHandle(
      ref,
      () => ({
        restart,
        durationSeconds,
        duration,
        seekTo,
        playedPorcent,
      }),
      [duration, durationSeconds, playedPorcent, restart, seekTo],
    )

    return (
      <ReactPlayer
        ref={playerRef}
        url={url}
        width={width}
        height={height}
        muted={muted}
        loop={loop}
        onProgress={(state) => {
          playedSeconds.current = state.playedSeconds

          if (onProgress) {
            onProgress(state)
          }
        }}
        {...props}
      />
    )
  },
)

export default PlayerVideo
