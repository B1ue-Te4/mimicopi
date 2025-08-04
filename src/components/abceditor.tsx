'use client'

import { useRef, useState, useEffect } from 'react'
import abcjs from 'abcjs'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Textarea } from '@/components/ui/textarea'

console.log('AbcEditor loaded O')

export default function AbcEditor() {

  console.log('AbcEditor loaded')

  const paperRef = useRef<HTMLDivElement>(null)

  const [abcCode, setAbcCode] = useState(`X:1\nT:Scarborough Fair\nM:3/4\nL:1/4\nK:C\n || D2 D | A2 A | E3/2　F/2 E | D5/2 |`)

  useEffect (() => {
    abcjs.renderAbc(paperRef.current!,abcCode,{ responsive: "resize" })
  }, [abcCode])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value
    setAbcCode(newCode)
  }

  return (
    <Carousel className="w-full flex items-center">
      <CarouselPrevious className="static" />
      <CarouselContent className="flex-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent>
                <Textarea
                  value={abcCode}
                  onChange={handleChange}
                  placeholder="AbcNotation"
                  className="resize"
                />
                <div ref={paperRef} />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="static" />
    </Carousel>
  )
}