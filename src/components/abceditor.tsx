'use client'

import { useRef, useState, useEffect } from 'react'
import abcjs from 'abcjs'
import { Textarea } from '@/components/ui/textarea'

console.log('AbcEditor loaded O')

export default function AbcEditor() {

  console.log('AbcEditor loaded')

  const paperRef = useRef<HTMLDivElement>(null)

  const [abcCode, setAbcCode] = useState(`X:1\nT:Sample\nM:4/4\nL:1/4\nK:C\nC D E F | G A B c`)

  useEffect (() => {
    abcjs.renderAbc(paperRef.current!,abcCode)
  }, [abcCode])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value
    setAbcCode(newCode)
  }

  return (
    <div>
      <Textarea
        value={abcCode}
        onChange={handleChange}
        placeholder="AbcNotation"
        className="resize"
      />
      <div ref={paperRef} />
    </div>
  )
}