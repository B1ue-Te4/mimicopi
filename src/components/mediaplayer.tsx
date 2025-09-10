'use client'

// ReactPlayerを使って動画再生
import ReactPlayer from 'react-player'
import { useRef } from 'react'
import { RewindIcon, FastForwardIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// 動画プレイヤーのコンポーネント
export default function MediaPlayer({
  videoUrl,
  setVideoUrl,
}: {
  videoUrl: string
  setVideoUrl: (url: string) => void
}) {

  // デバッグ用ログ
  console.log('MediaPlayer loaded')

  // プレイヤーの参照
  const playerRef = useRef<HTMLVideoElement>(null)

  // 指定秒数だけシーク
  const seek = (sec: number) => {
    playerRef.current!.currentTime += sec
  }

  // 再生速度を変更
  const playlate = (late: number) => {
    playerRef.current!.playbackRate = late
  }

  // UI
  return (
    <div className="flex flex-col items-center">
      {/* 動画URL入力欄 */}
      <Input
        type="url"
        id="youtubeurl"
        placeholder="YoutubeURL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      {/* 動画プレイヤー本体 */}
      {videoUrl && <ReactPlayer src={videoUrl} ref={playerRef} controls />}
      {/* シーク・再生速度ボタン */}
      <div className="flex items-center gap-2">
        <span className="flex items-center">
          <Button onClick={() => seek(-3)}>
            <RewindIcon />3sec
          </Button>
          <Button onClick={() => seek(3)}>
            3sec<FastForwardIcon />
          </Button>
        </span>
        <span className="flex items-center">
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