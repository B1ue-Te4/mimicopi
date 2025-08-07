'use client'

import { useState, useEffect } from 'react'
import DropDown from '@/components/dropdown'
import MediaPlayer from '@/components/mediaplayer'
import FullPiano from '@/components/fullpiano'
import AbcEditor from '@/components/abceditor'

export default function Page() {

  const [title, setTitle] = useState('')
  const [videoUrl, setVideoUrl] = useState('https://music.youtube.com/watch?v=Npjk5Y0jhEU')
  const [abcCode, setAbcCode] = useState(`X:1\nT:Scarborough Fair\nM:3/4\nL:1/4\nK:C\n || D2 D | A2 A | E3/2 F/2 E | D5/2 |`)

  useEffect(() => {
    setTitle(document.title)
  }, [abcCode])

  console.log('Page loaded')

  return (
    <div>
      <header className="flex items-center justify-between px-4 py-2 border-b">
        <h1 className="text-base font-semibold truncate">
          mimicopi - {title}
        </h1>
        <DropDown
          videoUrl={videoUrl}
          setVideoUrl={setVideoUrl}
          abcCode={abcCode}
          setAbcCode={setAbcCode}
        />
      </header>
      <main className="space-y-6">
        <section>
          <MediaPlayer
            videoUrl={videoUrl}
            setVideoUrl={setVideoUrl}
          />
        </section>
        <section className="overflow-x-auto">
          <div className="w-max mx-auto">
            <FullPiano />
          </div>
        </section>
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