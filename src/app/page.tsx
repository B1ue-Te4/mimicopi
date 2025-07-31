'use client'

import ReactPlayer from 'react-player'
import { useRef, useState } from 'react'
import { RewindIcon, FastForwardIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"

export default function Page() {

  const [videoUrl, setVideoUrl] = useState('')
  const playerRef = useRef<any>(null)

  const rewind = () => {
    const currentTime = playerRef.current.currentTime
    playerRef.current.currentTime = currentTime - 5
  }

  const fastforward = () => {
    const currentTime = playerRef.current.currentTime
    playerRef.current.currentTime = currentTime + 5
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
      <div className="inline-flex items-center gap-1">
        <Button onClick={rewind}>
          <RewindIcon />5sec
        </Button>
        <Button onClick={fastforward}>
          5sec<FastForwardIcon />
        </Button>
      </div>
    </main>
  )
}