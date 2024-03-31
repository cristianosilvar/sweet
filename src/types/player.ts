import { TimeProps } from './time'

export type VideoRefProps = {
  restart: () => void
  durationSeconds: number
  duration: TimeProps
  playedPorcent: number
  seekTo: (seconds: number) => void
}
