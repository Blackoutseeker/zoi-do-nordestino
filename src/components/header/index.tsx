import { FC, memo } from 'react'
import Image from 'next/image'
import {
  HeaderContainer,
  SearchContainer,
  SearchBarHolder,
  SearchBarContent,
  CornerContent,
  SearchInput,
  SearchButton,
  NavContainer,
  NavContent,
  NavText
} from './style'
import SearchIcon from '@assets/icons/Search.svg'
import UserIcon from '@assets/icons/User.svg'

const Header: FC = () => {
  const categorias: string[] = [
    'Assistência Técnica',
    'Borracharias',
    'Doceria',
    'Lanchonete',
    'Lojas',
    'Mercantil',
    'Postos de Gasolina',
    'Padarias'
  ]

  return (
    <HeaderContainer>
      <SearchContainer>
        <CornerContent></CornerContent>
        <SearchBarHolder>
          <SearchBarContent>
            <SearchInput placeholder={'Pesquisar'} />
            <SearchButton>
              <Image
                src={SearchIcon}
                alt={'Pesquisar'}
                width={20}
                height={20}
              />
            </SearchButton>
          </SearchBarContent>
        </SearchBarHolder>
        <CornerContent>
          <Image
            src={UserIcon}
            alt={'Entrar/Cadastrar'}
            width={50}
            height={50}
          />
        </CornerContent>
      </SearchContainer>
      <NavContainer>
        {categorias.map((categoria, index) => (
          <NavContent key={index.toString()}>
            <NavText>{categoria}</NavText>
          </NavContent>
        ))}
      </NavContainer>
    </HeaderContainer>
  )
}

export default memo(Header)
