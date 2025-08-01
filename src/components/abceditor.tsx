'use client'

import { useRef, useState } from 'react'
import abcjs from 'abcjs'
import { Textarea } from '@/components/ui/textarea'

export default function AbcEditor() {
  const [abcCode, setAbcCode] = useState(`X:1\nT:Sample\nM:4/4\nK:C\nC D E F | G A B c`)
  const paperRef = useRef<HTMLDivElement>(null)

  const setRef = (elm: HTMLDivElement) => {
    if (elm && !paperRef.current) {
      paperRef.current = elm
      abcjs.renderAbc(elm, abcCode)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value
    setAbcCode(newCode)
    if (paperRef.current) {
      abcjs.renderAbc(paperRef.current, newCode)
    }
  }

  return (
    <div>
      <Textarea
        value={abcCode}
        onChange={handleChange}
        placeholder="AbcNotation"
        className="resize"
      />
      <div ref={setRef} />
    </div>
  )
}