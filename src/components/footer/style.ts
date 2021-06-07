import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 95px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  padding: 0 20px;
`

export const CornerContainer = styled.div`
  min-width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 690px) {
    display: none;
  }
`

export const HalfContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`

export const FooterText = styled.span`
  color: #fff;
  font-size: 14px;
`

export const MiddleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
