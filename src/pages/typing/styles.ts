import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const TextContainer = styled.div`
  margin-top: 20vh;
  width: 70%;
`

export const GeneratedText = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.smoke};

  line-height: 60px;
  word-spacing: 10px;
`

export const untypedLetter = styled.span`
  color: ${({ theme }) => theme.colors.smoke};
  background: transparent;
`

export const RightLetter = styled.span`
  /* background: ${({ theme }) => theme.colors.lightGreen}; */
  color: ${({ theme }) => theme.colors.darkGreen};

`

export const WrongLetter = styled.span`
  /* background: ${({ theme }) => theme.colors.lightRed}; */
  color: ${({ theme }) => theme.colors.darkRed};
`

export const Cursor = styled.span`
  background: ${({ theme }) => theme.colors.lightText};
  color: ${({ theme }) => theme.colors.darkText};
`

export const StartTyping = styled.p`
  position: absolute;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.smoke};

  /* margin: 16vh auto; */
  top: 20vh;

`
