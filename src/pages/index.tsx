
import React, { FC } from 'react'
import Head from 'next/head'
import { PageContainer, TimerContainer, Timer, TextContainer, GeneratedText } from './styles'

const Home: FC = () => {
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
            <GeneratedText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus est, efficitur id dolor quis, fermentum fringilla orci. Pellentesque elementum est quis metus sollicitudin efficitur. Nullam nec gravida velit. Maecenas in facilisis sem. Phasellus porttitor neque in turpis scelerisque commodo. Nunc eget tristique lectus, eget sagittis ex. Nulla eu nibh eget diam mattis mollis sit amet sit amet ligula. Fusce vestibulum lacinia ligula, quis mattis urna gravida ac. Aenean dapibus eget lectus at semper. Pellentesque lobortis non mi in venenatis. Integer mauris arcu, rutrum a consectetur ut, volutpat et massa.</GeneratedText>
          </TextContainer>
        </PageContainer>
      </main>
    </div>
  )
}

export default Home
