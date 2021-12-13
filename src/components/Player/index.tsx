import { useState, useRef, useEffect } from 'react'
import { GiPlayButton, GiPauseButton } from 'react-icons/gi'
import { BiHeadphone } from 'react-icons/bi'

import soundMusic from '../../assets/sounds/code_relax.mp3'

import * as S from './styles'

type Props = {
  isTimeEnd: boolean
}

const Player = ({ isTimeEnd }: Props) => {
  const audioPlayer = useRef<HTMLAudioElement>()

  const [isPlay, setIsPlay] = useState(false)

  useEffect(() => {
    if (isTimeEnd) {
      handlePause()
    }
  }, [isTimeEnd])

  const handlePlay = () => {
    audioPlayer.current?.setAttribute('crossorigin', 'anonymous')
    audioPlayer.current?.play()
    setIsPlay(true)
  }

  const handlePause = () => {
    audioPlayer.current?.pause()
    setIsPlay(false)
  }

  return (
    <S.Wrapper>
      <p className="genre-music">
        Lo-fi music <BiHeadphone size={22} />
      </p>

      {isPlay ? (
        <button className="btn-pause">
          <GiPauseButton onClick={handlePause} size={30} />
        </button>
      ) : (
        <button className="btn-play">
          <GiPlayButton onClick={handlePlay} size={30} />
        </button>
      )}
      <audio ref={audioPlayer as any} src={soundMusic}></audio>
    </S.Wrapper>
  )
}

export default Player
