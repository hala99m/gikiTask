// ** import Chakra-UI
import { Box, Flex } from '@chakra-ui/react'
// ** import components
import HomePage from './views/home'
import StepperModal from './components/Model'
// ** import styles
import './App.css'

function App() {
  return (
    <Flex width={'100wh'} height={'90vh'} alignContent={'center'} justifyContent={'center'}>
      <Box maxW={'2xl'} m={'0 auto'}>
        <HomePage />
        <StepperModal/>
      </Box>
    </Flex>
  )
}

export default App
