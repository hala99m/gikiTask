import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// **NOTE - Cutomize background color
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#434e61",
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
