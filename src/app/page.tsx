'use client'

import ReactPlayer from 'react-player'
import { useRef, useState } from 'react'
import { RewindIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"

export default function Page() {

  console.log('page')

  const [videoUrl, setVideoUrl] = useState('https://youtu.be/ylXk1LBvIqU?si=oQAJMAhI-num1Xk0')
  // const playerRef = useRef<ReactPlayer>(null)

  //const rewind = () => {
  //  const current = playerRef.current?.getCurrentTime?.() || 0
  //  playerRef.current?.seekTo(current - 5, true)
  //}

  return (
    <main>
      <Input
        type="url"
        id="youtubeurl"
        placeholder="YoutubeURL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <ReactPlayer src={videoUrl} />
      <Button>
        <RewindIcon />5sec
      </Button>
    </main>
  )
}