import { FC, memo } from 'react'
import Image from 'next/image'
import {
  FooterContainer,
  CornerContainer,
  HalfContent,
  FooterText,
  MiddleContainer
} from './style'
import FacebookIcon from '@assets/icons/Facebook.svg'
import InstagramIcon from '@assets/icons/Instagram.svg'
import TwitterIcon from '@assets/icons/Twitter.svg'
import WhatsAppIcon from '@assets/icons/WhatsApp.svg'

const Footer: FC = () => {
  return (
    <FooterContainer>
      <CornerContainer>
        <HalfContent>
          <FooterText>Fale conosco!</FooterText>
        </HalfContent>
        <HalfContent>
          <Image src={FacebookIcon} alt={'Facebook'} width={10} height={20} />
          <Image src={InstagramIcon} alt={'Instagram'} width={20} height={20} />
          <Image src={TwitterIcon} alt={'Twitter'} width={20} height={20} />
          <Image src={WhatsAppIcon} alt={'WhatsApp'} width={20} height={20} />
        </HalfContent>
      </CornerContainer>
      <MiddleContainer>
        <HalfContent />
        <HalfContent>
          <FooterText>© 2021 - Presente da Cegonha</FooterText>
        </HalfContent>
      </MiddleContainer>
      <CornerContainer />
    </FooterContainer>
  )
}

export default memo(Footer)
