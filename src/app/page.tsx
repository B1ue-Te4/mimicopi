'use client'

import { useState, useEffect } from 'react'
import DropDown from '@/components/dropdown'
import MediaPlayer from '@/components/mediaplayer'
import FullPiano from '@/components/fullpiano'
import AbcEditor from '@/components/abceditor'


console.log('Page loaded O')

export default function Page() {

  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle(document.title)
  }, [])

  console.log('Page loaded')

  return (
    <div>
      <header className="flex items-center justify-between px-4 py-2 border-b">
        <h1 className="text-base font-semibold truncate">
          mimicopi - {title}
        </h1>
        <DropDown />
      </header>
      <main className="space-y-6 p-4">
        <section>
          <MediaPlayer />
        </section>
        <section>
          <FullPiano />
        </section>
        <section>
          <AbcEditor />
        </section>
      </main>
    </div>
  )
}