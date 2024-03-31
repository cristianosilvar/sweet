import { useCallback, useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import axios from 'axios'

import ButtonLink from '../../components/ui/buttonLink'
import PreviewPlayer from '../../components/ui/previewPlayer'

import carouselBreakpoint from '../../constants/carouselBreakpoint'
import { CategoryProps } from '../../types/category'
import { VideoProps } from '../../types/video'

function Home() {
  const [categories, setCategories] = useState<CategoryProps[]>([])
  const [videos, setVideos] = useState<VideoProps[]>([])

  const getCategories = useCallback(async () => {
    const response = await axios.get<CategoryProps[]>(
      'https://65de1eeadccfcd562f5653a0.mockapi.io/api/v1/category',
    )

    if (response) {
      if (response.status === 200) {
        setCategories(response.data)
      }
    }
  }, [])

  const getVideos = useCallback(async () => {
    const response = await axios.get<VideoProps[]>(
      'https://65de1eeadccfcd562f5653a0.mockapi.io/api/v1/videos',
    )

    if (response) {
      if (response.status === 200) {
        setVideos(response.data)
      }
    }
  }, [])

  useEffect(() => {
    getVideos()
  }, [getVideos])

  useEffect(() => {
    getCategories()
  }, [getCategories])

  return (
    <div className="px-2">
      {categories?.map((category) => (
        <div key={category.id}>
          <ButtonLink textButton={category.title} />
          <Carousel
            containerClass="carousel-container"
            additionalTransfrom={0}
            autoPlaySpeed={3000}
            centerMode={false}
            focusOnSelect={false}
            removeArrowOnDeviceType={['base']}
            responsive={carouselBreakpoint}
            minimumTouchDrag={80}
            keyBoardControl
            draggable
            infinite
            arrows
          >
            {videos?.map((video) => {
              if (video.categoryId !== category.id) {
                return undefined
              }

              return (
                <PreviewPlayer key={video.id} videoProps={{ url: video.url }} />
              )
            })}
          </Carousel>
        </div>
      ))}
    </div>
  )
}

export default Home
