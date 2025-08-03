'use client'

import { SplendidGrandPiano } from "smplr";

const piano = new SplendidGrandPiano(new AudioContext());

const WHITE_KEYS = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4']
const BLACK_KEYS = [
  { note: 'Db4', position: 0 },
  { note: 'Eb4', position: 1 },
  { note: 'Gb4', position: 3 },
  { note: 'Ab4', position: 4 },
  { note: 'Bb4', position: 5 },
]

export default function FullPiano() {

  const handleClick = (note: string) => {
    const stopNote = piano.start({ note: note });
    setTimeout(() => stopNote(), 300)
  }

  return (
    <div className="relative w-fit p-4">
      <div className="flex">
        {WHITE_KEYS.map((note) => (
          <button
            key={note}
            onClick={() => handleClick(note)}
            className="relative w-12 h-40 bg-white border border-gray-700 active:bg-gray-300"
          >
          </button>
        ))}
      </div>

      <div className="absolute top-0 left-0 flex h-24">
        {BLACK_KEYS.map(({ note, position }) => (
          <button
            key={note}
            onClick={() => handleClick(note)}
            className="absolute w-8 h-24 bg-black z-10 active:bg-gray-700"
            style={{ left: `${position * 3.0}rem`, marginLeft: '2rem' }}
          />
        ))}
      </div>
    </div>
  )
}