import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link'

import themeIcon from '../../../assets/theme_icon.png';

import { Container, SwitchButton, Title, ButtonIcon, OptionsContainer, Language } from './styles'
import { i18n } from '../../../_translate/i18n';
import usePersistedState from '../../../hooks/usePersistedState';

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

interface DefaultLanguage {
  selectedLanguage: string;
}

export const Header: FC<HeaderProps> = ({ setToggleTheme }) => {
  const { pt: { code: ptCode }, en: { code: enCode } } = LANGUAGES

  const [selectedLanguage, setSelectedLanguage] = usePersistedState<string>('@typingTest', ptCode)

  const [languageText, setLanguageText] = useState('')

  const selectedCode = selectedLanguage === ptCode ? enCode : ptCode

  const handleChangeLanguage = () => {


    setSelectedLanguage(selectedCode)

    setLanguageText(LANGUAGES[selectedLanguage].text)

    console.log({ selectedCode, selectedLanguage });


    i18n.changeLanguage(selectedCode)

    window.location.reload()
  }

  useEffect(() => {
    console.log({ selectedLanguage, selectedCode });

    setLanguageText(LANGUAGES[selectedLanguage].text)
    i18n.changeLanguage(selectedCode)

  }, [])


  return (
    <Container>
      <Link href="/">
        <Title>Typing</Title>
      </Link>

      <OptionsContainer>
        <Language onClick={handleChangeLanguage}>{languageText}</Language>

        <SwitchButton onClick={setToggleTheme}>
          <ButtonIcon src={themeIcon} />
        </SwitchButton>
      </OptionsContainer>
    </Container>
  )
}


