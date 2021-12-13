import { useState } from 'react'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Player from '../../components/Player'

import * as S from './styles'

const Home = () => {
  const [isTimeEnd, setIsTimeEnd] = useState(false)

  return (
    <S.Wrapper>
      <Card changeIsEndTime={(isTimeEnd: any) => setIsTimeEnd(isTimeEnd)} />
      <Player isTimeEnd={isTimeEnd} />

      <Footer />
    </S.Wrapper>
  )
}

export default Home
