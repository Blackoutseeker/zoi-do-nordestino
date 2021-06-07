import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 2;
`

export const SearchContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`

export const SearchBarHolder = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const SearchBarContent = styled.div`
  width: 60%;
  max-width: 500px;
  height: 30px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.inputColor};
  border-radius: 25px;
`

export const SearchInput = styled.input`
  width: calc(100% - 65px);
  height: 100%;
  outline: none;
  border: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding-left: 20px;
  font-size: 20px;
  color: #222;
  ::placeholder {
    color: #999;
  }
`

export const SearchButton = styled.button`
  outline: none;
  border: none;
  height: 30px;
  width: 65px;
  background-color: transparent;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`

export const CornerContent = styled.div`
  min-width: 90px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 400px) {
    display: none;
  }
`

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.secondary};
  @media screen and (max-width: 640px) {
    display: none;
  }
`

export const NavContent = styled.nav`
  min-width: 165px;
  height: 35px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export const NavText = styled.span`
  color: #fff;
  font-size: 18px;
  text-align: center;
`
