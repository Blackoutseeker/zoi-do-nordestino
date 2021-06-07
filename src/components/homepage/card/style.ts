import styled from 'styled-components'

export const CardContainer = styled.div`
  position: sticky;
  min-width: 290px;
  max-width: 290px;
  height: 150px;
  display: flex;
  padding: 10px;
  margin: 0 25px;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow};
`

export const PresentationContainer = styled.div`
  width: 110px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

export const ImageContent = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 4px;
  overflow: hidden;
`

export const StarsContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`

export const NameContent = styled.div`
  width: 160px;
  height: 25px;
  padding: 0 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const NameText = styled.span`
  color: #333;
  font-size: 20px;
`
