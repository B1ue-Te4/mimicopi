'use client'

import ReactPlayer from 'react-player'
import { useRef, useState } from 'react'
import { RewindIcon, FastForwardIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function MediaPlayer() {

  const playerRef = useRef<HTMLVideoElement>(null)

  const getPlayer = () => {
    if (!playerRef.current) throw new Error('Player not ready')
    return playerRef.current
  }

  const [videoUrl, setVideoUrl] = useState('https://youtu.be/mA-dRWAbqFE?si=5esZ-x8OC-1e2kol')

  const seek = (sec: number) => {
    getPlayer().currentTime += sec
  }

  const playlate = (late: number) => {
    getPlayer().playbackRate = late
  }

  return (
    <>
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
    </>
  )
}