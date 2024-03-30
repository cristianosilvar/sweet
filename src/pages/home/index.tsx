import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import ButtonLink from '../../components/ui/buttonLink'
import PreviewPlayer from '../../components/ui/previewPlayer'

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
          <div className="flex gap-2">
            {videos?.map((video) => {
              if (video.categoryId === category.id) {
                return (
                  <PreviewPlayer
                    key={video.id}
                    videoProps={{ url: video.url }}
                  />
                )
              }

              return undefined
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
