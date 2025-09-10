'use client'

// Reactのフックとabcjsライブラリ
import { useRef, useEffect } from 'react'
import abcjs from 'abcjs'
import { Textarea } from '@/components/ui/textarea'

// ABC記譜エディタのコンポーネント
export default function AbcEditor({
  abcCode,
  setAbcCode,
}: {
  abcCode: string
  setAbcCode: (code: string) => void
}) {

  // デバッグ用ログ
  console.log('AbcEditor loaded')

  // 楽譜描画用のdiv参照
  const paperRef = useRef<HTMLDivElement>(null)

  // abcCodeが変わるたびに楽譜を描画
  useEffect (() => {
    abcjs.renderAbc(paperRef.current!,abcCode,{ responsive: "resize" })
  }, [abcCode])

  // テキストエリアの変更時
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value
    setAbcCode(newCode)
  }

  // UI
  return (
    <div>
      {/* ABC記譜用テキストエリア */}
      <Textarea
        value={abcCode}
        onChange={handleChange}
        placeholder="AbcNotation"
        className="resize"
      />
      {/* 楽譜表示エリア */}
      <div ref={paperRef} />
    </div>
  )
}