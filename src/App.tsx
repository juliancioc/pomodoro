import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from './styles/global'
import Routes from './routes'

const App: FC = () => (
  <div className="App">
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  </div>
)

export default App
