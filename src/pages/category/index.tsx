import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import PreviewPlayer from '../../components/ui/previewPlayer'

import { VideoProps } from '../../types/video'
import { CategoryProps } from '../../types/category'

const Category = () => {
  const { id: idRota } = useParams()

  const [videos, setVideos] = useState<VideoProps[]>([])
  const [category, setCategory] = useState<CategoryProps>()

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

  const getCategories = useCallback(async () => {
    const response = await axios.get<CategoryProps[]>(
      'https://65de1eeadccfcd562f5653a0.mockapi.io/api/v1/category',
    )

    if (response) {
      if (response.status === 200) {
        const newCategory = response.data?.find(
          ({ id: categoryId }) => categoryId === idRota,
        )

        setCategory(newCategory)
      }
    }
  }, [idRota])

  useEffect(() => {
    getVideos()
  }, [getVideos])

  useEffect(() => {
    getCategories()
  }, [getCategories])

  return (
    <div className="mx-auto w-[94%] text-[#fefefe90]">
      <p className="mb-4 text-2xl font-bold">{category?.title}</p>
      <div className="base:grid-cols-2 grid gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {videos?.map((video) => {
          if (video.categoryId === idRota) {
            return (
              <PreviewPlayer
                key={video.id}
                videoProps={{ url: video.url }}
                className="w-full"
              />
            )
          }

          return undefined
        })}
      </div>
    </div>
  )
}

export default Category
