import React, { FC } from 'react';

import { useRouter } from 'next/router';

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
        <ResultsText>Results</ResultsText>
      </motion.div>

      <ResultsDataContainer>

      <motion.div
        initial={{ x: 100, opacity: 0}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
      >
          <ResultItemContainer>
            <DataNumber>{wpm}</DataNumber>
            <DataName>WPM</DataName>
          </ResultItemContainer>
        </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
      >
        <ResultItemContainer>
          <DataNumber>{accuracy}<DataNumberSign>%</DataNumberSign></DataNumber>
          <DataName>Accuracy</DataName>
        </ResultItemContainer>
      </motion.div>

      </ResultsDataContainer>
        <motion.div
          initial={{ y: -100, opacity: 0}}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.5, delay: 1 }}
        >
          <GoAgainButton onClick={() => router.push('/typing')}>Go again</GoAgainButton>
        </motion.div>
    </PageContainer>
  )
}

export default Results
