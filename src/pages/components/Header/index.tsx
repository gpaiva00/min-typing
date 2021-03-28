import React, { FC } from 'react';

import themeIcon from '../../../assets/theme_icon.png';

import { Container, SwitchButton, Title, ButtonIcon  } from './styles'

interface HeaderProps {
  setToggleTheme(): void;
}

export const Header: FC<HeaderProps> = ({ setToggleTheme }) => (
  <Container>
    <Title>Typing</Title>

    <SwitchButton onClick={setToggleTheme}>
      <ButtonIcon src={themeIcon} />
    </SwitchButton>
  </Container>
)


