import { useState } from 'react'
import './App.css'
import { Button, ButtonGroup, Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

function App() {


  return <Grid templateAreas={`"nav   nav" "aside main"`}>
    <GridItem area='nav' >
      <NavBar></NavBar>
      </GridItem>
    <GridItem area='aside' >Aside</GridItem>
    <GridItem area='main' >
      <GameGrid />
      </GridItem>
    </Grid>
}

export default App
