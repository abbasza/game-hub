import { HStack, Image } from '@chakra-ui/react'
import React from "react";
import logo from '../assets/logo.webp';

interface Props {
    onSearch: (searchText: string) => void;
  }
  
  const NavBar = ({ onSearch }: Props) => {
    return (
      <HStack padding='10px'>
        <Image src={logo} boxSize='60px' />
      </HStack>
    )
  }
  
  export default NavBar
