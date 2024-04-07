import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import Player from 'components/ui/player'
import ButtonLink from 'components/ui/buttonLink'
import PreviewPlayer from 'components/ui/previewPlayer'

import { VideoProps } from 'types/video'
import { CategoryProps } from 'types/category'

const Video = () => {
  const { id: idRota } = useParams()
  const navigate = useNavigate()

  const [category, setCategory] = useState<CategoryProps>()
  const [video, setVideo] = useState<VideoProps>()
  const [videos, setVideos] = useState<VideoProps[]>()

  const getCategory = useCallback(async () => {
    const response = await axios.get<CategoryProps[]>(
      'https://65de1eeadccfcd562f5653a0.mockapi.io/api/v1/category',
    )

    if (response) {
      if (response.status === 200) {
        const newCategory = response.data?.find(
          ({ id: categoryId }) => categoryId === video?.categoryId,
        )

        setCategory(newCategory)
      }
    }
  }, [video])

  const getVideos = useCallback(async () => {
    const response = await axios.get<VideoProps[]>(
      'https://65de1eeadccfcd562f5653a0.mockapi.io/api/v1/videos',
    )

    if (response) {
      if (response.status === 200) {
        const newVideo = response.data?.find(
          ({ id: videoId }) => videoId === idRota,
        )

        setVideo(newVideo)
        setVideos(
          response.data
            .filter(
              ({ id, categoryId }) =>
                id !== idRota && categoryId === newVideo?.categoryId,
            )
            ?.slice(0, 5),
        )
      }
    }
  }, [idRota])

  useEffect(() => {
    getCategory()
  }, [getCategory])

  useEffect(() => {
    getVideos()
  }, [getVideos])

  return (
    <div className="mx-auto flex w-[94%] flex-wrap">
      {video && (
        <>
          <div className="w-full lg:w-[70%]">
            <Player videoProps={{ url: video?.url }} />
            <div className="mt-4">
              <p className="text-3xl font-bold">{video.title}</p>
              <p className="text-xl font-medium text-[#fefefe80]">
                {video.desc}
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 lg:ml-10 lg:w-[20%]">
            <ButtonLink
              textButton={category?.title}
              className="px-0"
              onClick={() => navigate(`/sweet/category/${video.categoryId}`)}
            />
            <div className="base:grid-cols-1 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
              {videos?.map(({ id, url }) => (
                <PreviewPlayer
                  key={id}
                  className="w-full"
                  videoProps={{ url }}
                  onClick={() => navigate(`/sweet/video/${id}`)}
                  withoutSound
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Video
