import { FC } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { ICard } from '@components/homepage/card'
import MainContainer from '@components/mainContainer'
import Header from '@components/header'
import PageContainer from '@components/pageContainer'
import Slider from '@components/homepage/slider'
import Section from '@components/homepage/section'
import Footer from '@components/footer'
import Baratao from '@assets/images/Baratao.svg'

interface IProps {
  cards: ICard[]
}

const Home: FC<IProps> = props => {
  const { cards } = props

  return (
    <MainContainer>
      <Head>
        <title>Zoi do Nordestino</title>
        <meta
          name="keywords"
          content="zoi, nordestino, zoi do nordestino, lojas, estabelecimentos, empresas, mapa, milagres, ceara, afiliados, 
          plataforma, turismo"
        />
        <meta
          name="description"
          content="Zoi do Nordestino - Uma plataforma criada para agregar todos os estabelecimentos e empresas de sua cidade 
          em um único lugar! Confira mercados, lojas de roupas, restaurantes e muito mais!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageContainer>
        <Slider />
        <Section sectionTitle={'Lanchonetes'} cards={cards} />
        <Section sectionTitle={'Lojas de móveis'} cards={cards} />
      </PageContainer>
      <Footer />
    </MainContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const cards: ICard[] = []
  for (let i = 0; i < 6; i++) {
    cards.push({
      imageUrl: Baratao,
      name: 'Baratão',
      stars: 4
    })
  }
  return {
    props: {
      cards: cards
    },
    revalidate: 20
  }
}

export default Home
