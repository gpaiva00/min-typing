import React, { FC, useState } from 'react';
import Link from 'next/link'

import themeIcon from '../../../assets/theme_icon.png';

import { Container, SwitchButton, Title, ButtonIcon, OptionsContainer, Language } from './styles'

interface HeaderProps {
  setToggleTheme(): void;
}

const LANGUAGES = {
  portuguese: 'Português',
  english: 'English',
}

export const Header: FC<HeaderProps> = ({ setToggleTheme }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES.portuguese)
  return (
    <Container>
      <Link href="/">
        <Title>Typing</Title>
      </Link>

      <OptionsContainer>
        {/* <Language onClick={() => setSelectedLanguage(selectedLanguage === LANGUAGES.portuguese ? LANGUAGES.english : LANGUAGES.portuguese)}>{selectedLanguage}</Language> */}

        <SwitchButton onClick={setToggleTheme}>
          <ButtonIcon src={themeIcon} />
        </SwitchButton>
      </OptionsContainer>
    </Container>
  )
}


