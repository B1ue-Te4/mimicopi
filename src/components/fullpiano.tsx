'use client'

import { SplendidGrandPiano } from "smplr"
import { useRef, useEffect } from 'react'

const WHITE_KEYS = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4','C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6']

const BLACK_KEYS = [
  { note: 'Db4', position: 0 },
  { note: 'Eb4', position: 1 },
  { note: 'Gb4', position: 3 },
  { note: 'Ab4', position: 4 },
  { note: 'Bb4', position: 5 },
  { note: 'Db5', position: 7 },
  { note: 'Eb5', position: 8 },
  { note: 'Gb5', position: 10 },
  { note: 'Ab5', position: 11 },
  { note: 'Bb5', position: 12 },
]

export default function FullPiano() {

  console.log('FullPiano loaded')

  const pianoRef = useRef<SplendidGrandPiano>(null)

  useEffect (() => {
    const audioContext = new AudioContext();
    pianoRef.current = new SplendidGrandPiano(audioContext)
  },[])

  const activeNotes = useRef<{ [key: string]: () => void }>({})

  const handlePointerDown = (note: string) => {
    const stop = pianoRef.current!.start({ note })
    activeNotes.current[note] = stop
  }

  const handlePointerUp = (note: string) => {
    const stop = activeNotes.current[note]
    if (stop) {
      stop()
      delete activeNotes.current[note]
    }
  }

  return (
    <div className="relative w-fit">
      <div className="flex">
        {WHITE_KEYS.map((note) => (
          <button
            key={note}
            onPointerDown={() => handlePointerDown(note)}
            onPointerUp={() => handlePointerUp(note)}
            onPointerLeave={() => handlePointerUp(note)}
            className="relative w-12 h-40 bg-white border border-gray-700 active:bg-gray-300"
          >
          </button>
        ))}
      </div>

      <div className="absolute top-0 left-0 flex h-24">
        {BLACK_KEYS.map(({ note, position }) => (
          <button
            key={note}
            onPointerDown={() => handlePointerDown(note)}
            onPointerUp={() => handlePointerUp(note)}
            onPointerLeave={() => handlePointerUp(note)}
            className="absolute w-8 h-24 bg-black z-10 active:bg-gray-700"
            style={{ left: `${position * 3.0}rem`, marginLeft: '2rem' }}
          />
        ))}
      </div>
    </div>
  )
}
