
import React, { FC} from 'react'

import { motion } from 'framer-motion'

import { useRouter } from 'next/router'

import { i18n } from '../_translate/i18n'

import { PageContainer, LetsStartText, Start } from '../styles/Home.styles'

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
              <LetsStartText>{i18n.t('descriptions.letsStart')}</LetsStartText>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
            >
              <Start onClick={() => router.push('/typing')}>{i18n.t('buttons.start')}</Start>
            </motion.p>
          </PageContainer>
        </main>
      </div>
    )
}

export default Home
