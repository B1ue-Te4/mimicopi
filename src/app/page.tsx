'use client'

import MediaPlayer from '@/components/mediaplayer'
import FullPiano from '@/components/fullpiano'
import AbcEditor from '@/components/abceditor'

console.log('Page loaded O')

export default function Page() {

  console.log('Page loaded')

  return (
    <main className="space-y-6 p-4">
      <MediaPlayer />
      <FullPiano />
      <AbcEditor />
    </main>
  )
}