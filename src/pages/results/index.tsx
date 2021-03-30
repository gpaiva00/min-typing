import React, { FC } from 'react';

import { useRouter } from 'next/router';

import { i18n } from '../../_translate/i18n'

import { motion } from 'framer-motion'

import { DataName, DataNumber, DataNumberSign, GoAgainButton, PageContainer, ResultItemContainer, ResultsDataContainer, ResultsText } from './styles'

const Results: FC = () => {
  const router = useRouter()

  const { wpm, accuracy } = router.query

  console.log(router.query)

  return (
    <PageContainer>
      <motion.div
        initial={{ y: 100, opacity: 0}}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
      >
        <ResultsText>{i18n.t('descriptions.results')}</ResultsText>
      </motion.div>

      <ResultsDataContainer>

      <motion.div
        initial={{ x: 100, opacity: 0}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
      >
          <ResultItemContainer>
            <DataNumber>{wpm}</DataNumber>
            <DataName>{i18n.t('descriptions.wpm')}</DataName>
          </ResultItemContainer>
        </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
      >
        <ResultItemContainer>
          <DataNumber>{accuracy}<DataNumberSign>%</DataNumberSign></DataNumber>
          <DataName>{i18n.t('descriptions.accuracy')}</DataName>
        </ResultItemContainer>
      </motion.div>

      </ResultsDataContainer>
        <motion.div
          initial={{ y: -100, opacity: 0}}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.5, delay: 1 }}
        >
          <GoAgainButton onClick={() => router.push('/typing')}>{i18n.t('buttons.goAgain')}</GoAgainButton>
        </motion.div>
    </PageContainer>
  )
}

export default Results
