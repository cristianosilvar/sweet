import ReactPlayer from 'react-player'

import ButtonLink from '../../components/ui/buttonLink'
import { useState } from 'react'

function Home() {
  const [isPlaying, setPlaying] = useState(false)

  return (
    <div className="px-2">
      <ButtonLink textButton="sports" />
      <div
        onMouseOver={() => setPlaying(true)}
        onMouseLeave={() => setPlaying(false)}
        className="w-min overflow-hidden rounded-lg"
      >
        <ReactPlayer url="https://vimeo.com/354218747" playing={isPlaying} />
      </div>
    </div>
  )
}

export default Home
