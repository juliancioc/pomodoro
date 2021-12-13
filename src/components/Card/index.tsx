import { useEffect, useRef, useState } from 'react'

import { GoDiffAdded, GoDiffRemoved } from 'react-icons/go'

import soundEndPomodoro from '../../assets/sounds/mixkit-game-level-completed-2059.wav'

import * as S from './styles'

type Props = {
  changeIsEndTime: Function
}

const Card = ({ changeIsEndTime }: Props) => {
  const audioPlayer = useRef<HTMLAudioElement>()

  const [seconds, setSeconds] = useState(60)
  const [minutes, setMinutes] = useState(25)

  const [isStart, setIsStart] = useState(false)
  const [isPause, setIsPause] = useState(false)

  useEffect(() => {
    if (isStart)
      document.title = `${minutes}:${
        seconds === 60 ? '00' : seconds < 10 ? `0${seconds}` : seconds
      }`
  }, [minutes, seconds])

  useEffect(() => {
    if (minutes === -1) {
      audioPlayer.current?.play()
      changeIsEndTime(true)
      setMinutes(25)
      setIsStart(false)
      setSeconds(61)
    }
  }, [minutes])

  useEffect(() => {
    if (isStart) {
      const interval = setInterval(() => {
        setMinutes((minutes) => minutes - 1)
        setSeconds(60)
      }, 60000)

      return () => clearInterval(interval)
    }
  }, [isStart, isPause])

  useEffect(() => {
    if (isStart) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isStart])

  const handleStartPomodoro = () => {
    setIsStart(!isStart)

    if (isPause) {
      setMinutes(minutes)
      setSeconds(seconds)
    } else {
      setIsPause(false)
      setMinutes(minutes - 1)
      setSeconds(seconds - 1)
    }
  }

  const handlePausePomodoro = () => {
    setIsPause(true)
    setIsStart(!isStart)
  }

  const handleStopPomodoro = () => {
    setMinutes(25)
    setIsStart(false)
    setSeconds(60)
  }

  const handleDecrementTime = () => {
    if (minutes > 5) setMinutes(minutes - 5)
  }

  const handleIncrementTime = () => {
    if (minutes < 60) setMinutes(minutes + 5)
  }

  return (
    <S.Wrapper>
      <audio ref={audioPlayer as any} src={soundEndPomodoro}></audio>

      <S.WrapperTime>
        <button onClick={handleDecrementTime}>
          <GoDiffRemoved size={28} />
        </button>
        <p className="time">
          {minutes}:
          {seconds === 60 ? '00' : seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <button>
          <GoDiffAdded onClick={handleIncrementTime} size={28} />
        </button>
      </S.WrapperTime>

      <S.WrapperActions>
        {isStart ? (
          <button onClick={handlePausePomodoro}>Pause</button>
        ) : (
          <button onClick={handleStartPomodoro}>Start</button>
        )}

        <button onClick={handleStopPomodoro}>Stop</button>
      </S.WrapperActions>
    </S.Wrapper>
  )
}

export default Card
