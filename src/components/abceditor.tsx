'use client'

import { useRef, useState, useEffect } from 'react'
import abcjs from 'abcjs'
import { Textarea } from '@/components/ui/textarea'

console.log('AbcEditor loaded O')

export default function AbcEditor() {

  console.log('AbcEditor loaded')

  const paperRef = useRef<HTMLDivElement>(null)

  const [abcCode, setAbcCode] = useState(`X:1\nT:Scaborough Fair\nM:3/4\nL:1/4\nK:C\n || D2 D | A2 A | E3/2　F/2 E | D5/2 |`)

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