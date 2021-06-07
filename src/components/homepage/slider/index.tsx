import { FC, memo } from 'react'
import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Banner from '@assets/images/Banner.svg'

const Slider: FC = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      dynamicHeight
    >
      <Image src={Banner} alt={'Banner 1'} width={1366} height={344} />
      <Image src={Banner} alt={'Banner 2'} width={1366} height={344} />
    </Carousel>
  )
}

export default memo(Slider)
