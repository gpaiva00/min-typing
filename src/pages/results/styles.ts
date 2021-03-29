import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 20vh;
`

export const ResultsText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.big};
`

export const ResultsDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`

export const ResultItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 100px 120px;
`

export const DataNumber = styled.h1`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.big};
`

export const DataName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.smoke};
`

export const DataNumberSign = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.small};

`
export const GoAgainButton = styled.button`
  padding: 20px 50px;
  background: ${({ theme }) => theme.colors.text};

  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  border-radius: 5px;
  border: 0;
`
