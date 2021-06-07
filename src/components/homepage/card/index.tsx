import { FC, useCallback, memo } from 'react'
import Image from 'next/image'
import {
  CardContainer,
  PresentationContainer,
  ImageContent,
  StarsContent,
  InfoContainer,
  NameContent,
  NameText
} from './style'
import StarOutlined from '@assets/icons/StarOutlined.svg'

export interface ICard {
  imageUrl: string
  stars: number
  name: string
}

const Card: FC<ICard> = props => {
  const { imageUrl, stars, name } = props

  const renderStars = useCallback(() => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Image
          src={StarOutlined}
          alt={'Estrelas'}
          width={18}
          height={18}
          key={i.toString()}
        />
      )
    }
    return stars
  }, [])

  return (
    <CardContainer>
      <PresentationContainer>
        <ImageContent>
          <Image src={imageUrl} alt={name} width={110} height={105} />
        </ImageContent>
        <StarsContent>{renderStars()}</StarsContent>
      </PresentationContainer>
      <InfoContainer>
        <NameContent>
          <NameText>{name}</NameText>
        </NameContent>
      </InfoContainer>
    </CardContainer>
  )
}

export default memo(Card)
