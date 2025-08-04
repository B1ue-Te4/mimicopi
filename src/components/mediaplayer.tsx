'use client'

import ReactPlayer from 'react-player'
import { useRef, useState } from 'react'
import { RewindIcon, FastForwardIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

console.log('MediaPlayer loaded O')

export default function MediaPlayer() {

  console.log('MediaPlayer loaded')

  const playerRef = useRef<HTMLVideoElement>(null)

  const [videoUrl, setVideoUrl] = useState('https://youtu.be/mA-dRWAbqFE?si=5esZ-x8OC-1e2kol')

  const seek = (sec: number) => {
    playerRef.current!.currentTime += sec
  }

  const playlate = (late: number) => {
    playerRef.current!.playbackRate = late
  }

  return (
    <div>
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
    </div>
  )
}