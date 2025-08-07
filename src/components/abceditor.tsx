'use client'

import { useRef, useEffect } from 'react'
import abcjs from 'abcjs'
import { Textarea } from '@/components/ui/textarea'

export default function AbcEditor({
  abcCode,
  setAbcCode,
}: {
  abcCode: string
  setAbcCode: (code: string) => void
}) {

  console.log('AbcEditor loaded')

  const paperRef = useRef<HTMLDivElement>(null)

  useEffect (() => {
    abcjs.renderAbc(paperRef.current!,abcCode,{ responsive: "resize" })
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