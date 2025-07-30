'use client'

import YouTube, { YouTubePlayer } from 'react-youtube'
import { useRef, useState } from 'react'
import { RewindIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {

  console.log('page')

  const [url, setUrl] = useState('')
  const [videoId, setVideoId] = useState('')

  const playerRef = useRef<YouTubePlayer | null>(null)

  const onReady = (e: { target: YouTubePlayer }) => {
    playerRef.current = e.target
  }

  const rewind = () => {
    const current = playerRef.current?.getCurrentTime?.() || 0
    playerRef.current?.seekTo(current - 5, true)
  }

  const extractVideoId = (url: string): string | undefined => {
    const match = url.match(
      /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})(?:\S+)?$/
    )
    return match?[1] : undefined
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handle')
    const value = e.target.value
    setUrl(value)
    const id = extractVideoId(value)
    console.log('extracted id:', id)
    if (id) setVideoId(id)
  }

  return (
    <main>
      <Input
        type="url"
        id="youtubeurl"
        placeholder="YoutubeURL"
        value={url}
        onChange={handleUrlChange}
      />
      <YouTube videoId={videoId} onReady={onReady} />
      <Button onClick={rewind}>
      <RewindIcon />5sec</Button>
    </main>
  )
}