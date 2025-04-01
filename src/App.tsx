import React from "react"
import { ChakraProvider, Container } from "@chakra-ui/react"
export default function App() {
  return (
    <ChakraProvider>
      <Container>Hello world</Container>
    </ChakraProvider>
  )
}
