import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 40px;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.big};
  cursor: pointer;
`

export const SwitchButton = styled.button`
  border: 0;
  background: transparent;
`

export const ButtonIcon = styled.img`
  width: 40px;
  filter: ${({ theme }) => theme.title === 'dark' ? `invert(60%)` : `invert(0)`};
`

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Language = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.focus};

  margin-right: 36px;
  cursor: pointer;
`
