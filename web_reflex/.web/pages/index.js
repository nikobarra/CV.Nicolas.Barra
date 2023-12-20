
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import { ArrowForwardIcon, ChatIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "lightgray", "paddingX": "1em", "paddingY": "0.5em", "zIndex": "999", "top": "0"}}>
  <Text>
  {`Nicolas Barra`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack>
  <Avatar name={`Nicolas Barra`} size={`xl`}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`}>
  {`Nicolás Barra`}
</Heading>
  <Text sx={{"marginTop": "0px !important"}}>
  {`@nicolasbarrapelecano@gmail.com`}
</Text>
  <HStack>
  <Link as={NextLink} href={`https://github.com/nikobarra`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChatIcon/>
</Link>
  <Link as={NextLink} href={`https://github.com/nikobarra`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChatIcon/>
</Link>
  <Link as={NextLink} href={`https://github.com/nikobarra`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChatIcon/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontDize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "blue"}}>
  {`+1 `}
</Text>
  {`años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontDize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "blue"}}>
  {`+1 `}
</Text>
  {`años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontDize": "0.8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "blue"}}>
  {`+1 `}
</Text>
  {`años de experiencia`}
</Box>
  <Spacer/>
</Flex>
  <Text>
  {`Hola soy niko bla bla bla bla hola hola hola hol hols hols hols hols fkmfdfdkfdkfdfkdkfdfdf fjdmkdjfoiusor dsfosfhsdsd sdfjdjflsdjfsjv fljlgksjfdljfs  bla bla bls bla`}
</Text>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://github.com/nikobarra`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`GitHub`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Repositorios`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`youtube`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Videos explicativos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/nicolaspelecano/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`linked in`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Todos sabemos que es linkedin`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`#`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`facebook`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Caralibro`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack sx={{"marginBottom": "0.8em"}}>
  <ChakraImage src={`favicon.ico`}/>
  <Link as={NextLink} href={`http://www.linkedin.com`} isExternal={true} sx={{"fontSize": "0.8em", "textDecoration": "none", "_hover": {}}}>
  {`soy el footer del año 2023`}
</Link>
  <Text sx={{"fontSize": "0.8em"}}>
  {`From Argentina to the world.`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
