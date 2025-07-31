'use client'

import ReactPlayer from 'react-player'
import { useRef, useState } from 'react'
import { RewindIcon, FastForwardIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"

export default function Page() {

  const [videoUrl, setVideoUrl] = useState('')
  const playerRef = useRef<any>(null)

  const seek = (sec: number) => {
    const currentTime = playerRef.current.currentTime
    playerRef.current.currentTime = currentTime + sec
  }

  const playlate = (late: number) => {
    playerRef.current.playbackRate = late
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
      <div className="inline-flex items-center gap-2">
        <span className="inline-flex items-center">
          <Button onClick={() => seek(-3)}>
            <RewindIcon />3sec
          </Button>
          <Button onClick={() => seek(3)}>
            3sec<FastForwardIcon />
          </Button>
        </span>
        <span className="inline-flex items-center">
          <Button onClick={() => playlate(0.5)}>
            0.5x
          </Button>
          <Button onClick={() => playlate(0.75)}>
            0.75x
          </Button>
          <Button onClick={() => playlate(1)}>
            1.0x
          </Button>
        </span>
      </div>
    </main>
  )
}