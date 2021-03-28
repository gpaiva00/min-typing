import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const TimerContainer = styled.div`
  margin-top: 10%;
`

export const Timer = styled.h1`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  color: ${({ theme }) => theme.colors.smoke};
`

export const TextContainer = styled.div`
  margin-top: 40px;
  width: 70%;
`

export const GeneratedText = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  color: ${({ theme }) => theme.colors.smoke};
  line-height: 60px;
  letter-spacing: 3px;
`

export const untypedLetter = styled.span`
  color: ${({ theme }) => theme.colors.smoke};
  background: transparent;
`

export const RightLetter = styled.span`
  background: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.darkGreen};
`

export const WrongLetter = styled.span`
  background: ${({ theme }) => theme.colors.lightRed};
  color: ${({ theme }) => theme.colors.darkRed};
`
