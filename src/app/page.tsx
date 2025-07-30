'use client'

import ReactPlayer from 'react-player'
import { useRef, useState } from 'react'
import { RewindIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"

export default function Page() {

  const [videoUrl, setVideoUrl] = useState('')
  const playerRef = useRef<any>(null)

  const rewind = () => {
    const current = playerRef.current?.getCurrentTime?.() || 0
    playerRef.current?.seekTo(current - 5, true)
  }

  return (
    <main>
      <Input
        type="url"
        id="youtubeurl"
        placeholder="YoutubeURL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      {videoUrl && <ReactPlayer src={videoUrl} ref={playerRef} controls />}
      <Button onClick={rewind}>
        <RewindIcon />5sec
      </Button>
    </main>
  )
}