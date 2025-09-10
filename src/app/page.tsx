'use client'

// ReactのuseState, useEffectを使います
import { useState, useEffect } from 'react'
// 各種自作コンポーネントをインポート
import DropDown from '@/components/dropdown'
import MediaPlayer from '@/components/mediaplayer'
import FullPiano from '@/components/fullpiano'
import AbcEditor from '@/components/abceditor'

// ページのメイン関数コンポーネント
export default function Page() {

  // タイトル、動画URL、ABC記譜コードの状態を管理
  const [title, setTitle] = useState('')
  const [videoUrl, setVideoUrl] = useState('https://youtu.be/HSacuzQKpxw?si=19teGSqwJhFLc7JW')
  const [abcCode, setAbcCode] = useState(`X:1\nT:Scarborough Fair\nM:3/4\nL:1/4\nK:C\n || D2 D | A2 A | E3/2 F/2 E | D5/2 |`)

  // abcCodeが変わるたびにタイトルを更新
  useEffect(() => {
    setTitle(document.title)
  }, [abcCode])

  // ログ出力（デバッグ用）
  console.log('Page loaded')

  // 画面のレイアウト
  return (
    <div>
      {/* ヘッダー部分 */}
      <header className="flex items-center justify-between px-4 py-2 border-b">
        <h1 className="text-base font-semibold truncate">
          mimicopi - {title}
        </h1>
        {/* ドロップダウンメニュー */}
        <DropDown
          videoUrl={videoUrl}
          setVideoUrl={setVideoUrl}
          abcCode={abcCode}
          setAbcCode={setAbcCode}
        />
      </header>
      {/* メイン部分 */}
      <main className="space-y-6">
        {/* 動画プレイヤー */}
        <section>
          <MediaPlayer
            videoUrl={videoUrl}
            setVideoUrl={setVideoUrl}
          />
        </section>
        {/* ピアノ */}
        <section className="overflow-x-auto">
          <div className="w-max mx-auto">
            <FullPiano />
          </div>
        </section>
        {/* ABCエディタ */}
        <section>
          <AbcEditor
            abcCode={abcCode}
            setAbcCode={setAbcCode}
          />
        </section>
      </main>
    </div>
  )
}
