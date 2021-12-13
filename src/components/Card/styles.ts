import styled from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 12px;
  background-color: #262626;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
  height: 302px;
  box-shadow: 5px 3px 8px -4px #000000;

  .time {
    font-size: 72px;
  }
`

export const WrapperActions = styled.div`
  button {
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid #f5f5f5;
    background: transparent;
    padding: 10px 30px;
    color: #f5f5f5;
    margin: 12px;
  }
`

export const WrapperTime = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  button {
    background: transparent;
    color: #f5f5f5;
    border: none;
  }
`
