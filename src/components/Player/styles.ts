import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100px;
  background-color: #5d5d5d;
  border-radius: 12px;
  margin-top: 40px;
  box-shadow: 5px 3px 8px -4px #000000;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  .genre-music {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 12px;
    }
  }

  .btn-play,
  .btn-pause {
    border-radius: 50%;
    border: none;
    padding: 8px;
  }
`
