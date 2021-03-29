import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 15%;
`

export const LetsStartText = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.regular};
`
export const Start = styled.button`
  margin-top: 50px;
  padding: 20px 50px;
  background: ${({ theme }) => theme.colors.text};

  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  border-radius: 5px;
  border: 0;
`
