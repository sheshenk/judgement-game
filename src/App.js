import React, { useState } from 'react';
import {
  ChakraProvider,
  theme,
  HStack,
  Spacer,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import getCurrentView from './services/getCurrentView';

function App() {

  const [players, setPlayers] = useState([])
  const [round, setRound] = useState(-1)
  const [stage, setStage] = useState(3)

  const currentView = getCurrentView(players, setPlayers, round, setRound, stage, setStage)

  return (
    <ChakraProvider theme={theme}>
      <HStack p={2}>
        <Spacer/>
        <ColorModeSwitcher justifySelf="flex-end" />
      </HStack>
      <Flex alignItems='center' justifyContent='center' h='calc(100vh - 56px)'>
        {currentView}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
