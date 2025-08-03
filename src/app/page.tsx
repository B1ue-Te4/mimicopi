'use client'

import MediaPlayer from '@/components/mediaplayer'
import FullPiano from '@/components/fullpiano'
import AbcEditor from '@/components/abceditor'

export default function Page() {

  return (
    <main>
      <MediaPlayer />
      <FullPiano />
      <AbcEditor />
    </main>
  )
}