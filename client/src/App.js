import React from 'react'
import { ThemeProvider } from '@chakra-ui/core'

// import theme from './theme'
import NavBar from './components/NavBar'
import Launcher from './Launcher'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <Launcher />
      </div>
    </ThemeProvider>
  )
}

export default App
