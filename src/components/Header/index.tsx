import React, { FC, useEffect, useState } from 'react';

import Link from 'next/link'
import { useRouter } from 'next/router'

import themeIcon from '../../assets/theme_icon.png';

import { Container, SwitchButton, Title, ButtonIcon, OptionsContainer, Language } from './styles'
import { i18n } from '../../_translate/i18n';
import usePersistedState from '../../hooks/usePersistedState';

interface HeaderProps {
  setToggleTheme(): void;
}

const LANGUAGES = {
  pt: {
    text: 'Português',
    code: 'pt'
  },
  en: {
    text: 'English',
    code: 'en',
  },
}

const Header: FC<HeaderProps> = ({ setToggleTheme }) => {
  const { pt: { code: ptCode }, en: { code: enCode } } = LANGUAGES
  const router = useRouter()

  const [selectedLanguage, setSelectedLanguage] = usePersistedState<string>('@typingTest', ptCode)

  const [languageText, setLanguageText] = useState('')

  const handleChangeLanguage = () => {
    const languageToChange = selectedLanguage === ptCode ? enCode : ptCode

    setSelectedLanguage(languageToChange)

    setLanguageText(LANGUAGES[languageToChange].text)

    i18n.changeLanguage(languageToChange)

    const currentPathName = router.pathname
    router.push(currentPathName)
  }

  useEffect(() => {
    const languageToChange = selectedLanguage === ptCode ? enCode : ptCode

    setLanguageText(LANGUAGES[languageToChange].text)

    i18n.changeLanguage(selectedLanguage)
  }, [])


  return (
    <Container>
      <Link href="/">
        <Title>Typing</Title>
      </Link>

      <OptionsContainer>
        {/* <Language onClick={handleChangeLanguage}>{languageText}</Language> */}

        <SwitchButton onClick={setToggleTheme}>
          <ButtonIcon src={themeIcon} />
        </SwitchButton>
      </OptionsContainer>
    </Container>
  )
}

export default Header
