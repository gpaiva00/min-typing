
import React, { FC} from 'react'

import { motion } from 'framer-motion'

import { useRouter } from 'next/router'

import { PageContainer, LetsStartText, Start } from './styles'

const Home: FC = () => {

  const router = useRouter()

  return (
    <div>
        <main>
          <PageContainer>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
            >
              <LetsStartText>Do you have a minute to test your typing?</LetsStartText>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
            >
              <Start onClick={() => router.push('/typing')}>Start</Start>
            </motion.p>
          </PageContainer>
        </main>
      </div>
    )
}

export default Home
