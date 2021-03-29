
import React, { FC, useEffect, useState, createElement } from 'react'

import { useRouter } from 'next/router'

import { motion } from 'framer-motion'

import Quotes from '../../quotes'

import { PageContainer, TextContainer, GeneratedText, RightLetter, WrongLetter, untypedLetter, Cursor, StartTyping } from './styles'

let timerInterval = null
let timer = 0
let wpm = 0
let wordCount = 0
let errors = 0
let totalErrors = 0

const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max))

const resetValues = () => {
  window.clearInterval(timerInterval)

  timerInterval = null
  timer = 0
  wpm = 0
  wordCount = 0
  errors = 0
  totalErrors = 0
}

const Typing: FC = () => {
  const max = Quotes.length
  const originalText = Quotes[getRandomInt(max)]

  const [generatedText, setGeneratedText] = useState<string | string[]>(originalText)
  const [showStartTyping, setShowStartTyping] = useState(true)

  const router = useRouter()

  const splitGeneratedText = originalText.split('')

  let typedText = ''

  const generatedTextDefaultStyle = () => {
    const result = []

    splitGeneratedText.forEach((generatedLetter: string, key: number) => {
      if (key === 0 ) {
        const cursorElement = createElement(Cursor, { key }, generatedLetter)
        result.push(cursorElement)
        return
      }
      const element = createElement(untypedLetter, { key }, generatedLetter)
        result.push(element)
    })

    setGeneratedText(result)
  }

  const handleKeyPress = ({ key, code }: KeyboardEvent) => {
    if (typedText.length === 1 && !timerInterval) {
      setShowStartTyping(false)

      timerInterval = setInterval(() => {
        timer++
        wpm = Math.round(wordCount / (timer / 60))

      }, 1000)
    }

    switch(code) {
      case 'Backspace':
        typedText = typedText.slice(0, -1)
        break
      case 'Enter':
        typedText += ' '
        break
      case 'Space':
        wordCount++
      default:
        typedText += key
    }

    const cursorIndex = typedText.length
    const renderResult = []

    errors = 0

    splitGeneratedText.forEach((generatedLetter: string, key: number) => {
        const typedChar = typedText[key]

        if (!typedChar) {
          const element = createElement(untypedLetter, { key }, generatedLetter)
          renderResult.push(element)

          return
        }

        if (typedChar === generatedLetter) {
          const element = createElement(RightLetter, { key }, generatedLetter)
          renderResult.push(element)
        } else {
          const element = createElement(WrongLetter, { key }, generatedLetter)
          renderResult.push(element)
          errors++
        }

    })

    let correctCharacters = (typedText.length - (totalErrors + errors))
    let accuracy = Math.round((correctCharacters / typedText.length) * 100)

    const hasCompleted = typedText.length === generatedText.length

    if (hasCompleted) {
      router.push({ pathname: 'results', query: { wpm, accuracy } })
      resetValues()
    }

    const letterOnCursor = generatedText[cursorIndex]
    const cursorElement = createElement(Cursor, { key }, letterOnCursor)

    renderResult[cursorIndex] = cursorElement

    setGeneratedText(renderResult)
  }

  useEffect(() => {
    generatedTextDefaultStyle()
    window.addEventListener('keypress', handleKeyPress)

    return () => {
      window.removeEventListener('keypress', handleKeyPress)
      resetValues()
    }
  }, [])

  return (
    <div>
        <main>
          <PageContainer>

            <TextContainer>
            {
              showStartTyping &&
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: "easeInOut", duration: 1, repeat: Infinity }}
                >
                  <StartTyping>Start typing...</StartTyping>
                </motion.div>
            }
              <motion.p
                 initial={{ opacity: 0, x: 30 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ ease: "easeOut", duration: 0.5 }}
              >
                <GeneratedText>{generatedText}</GeneratedText>
              </motion.p>
            </TextContainer>
          </PageContainer>
        </main>
      </div>
    )
}

export default Typing
