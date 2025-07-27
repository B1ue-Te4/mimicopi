'use client'

import YouTube from 'react-youtube'
import { useRef } from 'react'
import { RewindIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Page() {
  const playerRef = useRef<any>(null)

  const onReady = (event: any) => {
    playerRef.current = event.target
  }

  const rewind = () => {
    const current = playerRef.current?.getCurrentTime?.() || 0
    playerRef.current?.seekTo(current - 5, true)
  }

  return (
    <div className="space-y-4">
      <YouTube videoId="ScMzIvxBSi4" onReady={onReady} />
      <Button onClick={rewind}>
        <RewindIcon className="mr-2 h-4 w-4" />
        5秒戻す
      </Button>
    </div>
  )
}