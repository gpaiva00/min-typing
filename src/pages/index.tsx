
import React, { FC, useEffect, useState, createElement } from 'react'
import Head from 'next/head'
import { PageContainer, TimerContainer, Timer, TextContainer, GeneratedText, RightLetter, WrongLetter, untypedLetter } from './styles'

const originalText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus est, efficitur id dolor quis, fermentum fringilla orci. Pellentesque elementum est quis metus sollicitudin efficitur. Nullam nec gravida velit. Maecenas in facilisis sem. Phasellus porttitor neque in turpis scelerisque commodo. Nunc eget tristique lectus, eget sagittis ex. Nulla eu nibh eget diam mattis mollis sit amet sit amet ligula. Fusce vestibulum lacinia ligula, quis mattis urna gravida ac. Aenean dapibus eget lectus at semper. Pellentesque lobortis non mi in venenatis. Integer mauris arcu, rutrum a consectetur ut, volutpat et massa.'

const Home: FC = () => {
  const [generatedText, setGeneratedText] = useState<string | string[]>(originalText)
  const [inputValue, setInputValue] = useState('')

  // useEffect(() => {
  //   setGeneratedText(originalText)
  // })

  const handleTyping = (e) => {
    const typedText = e.target.value

    setInputValue(typedText)

    const splitGeneratedText = originalText.split('')

    const renderResult = []

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
        }
    })

    setGeneratedText(renderResult)
  }

  // const rendered = []

  // generatedText.split('').forEach((generatedLetter: string, key: number) => {
  //   // splitTypedText.forEach((typedLetter: string) => {
  //     // if (generatedText === typedLetter) {
  //       const element = createElement(RightLetter, { key }, generatedLetter)
  //       rendered.push(element)
  //     // } else {
  //     //   const element = createElement(WrongLetter, {}, generatedLetter)
  //     //   result.push(element)
  //     // }
  //   // })
  // })

  return (
    <div>
        <Head>
          <title>Typing Test</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <main>
          <PageContainer>
            <TimerContainer>
              <Timer>00:20</Timer>
            </TimerContainer>

            <TextContainer>
              <GeneratedText>{generatedText}</GeneratedText>
            </TextContainer>
          </PageContainer>

          <textarea spellCheck="false" onChange={handleTyping} value={inputValue}/>
        </main>
      </div>
    )
}

export default Home
