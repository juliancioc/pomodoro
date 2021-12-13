import { GiTechnoHeart } from 'react-icons/gi'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Wrapper>
      <p>
        Developed by{' '}
        <a
          href="http://juliancio.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Juliancio
        </a>{' '}
        with{' '}
      </p>
      <GiTechnoHeart color="red" />
    </S.Wrapper>
  )
}

export default Footer
