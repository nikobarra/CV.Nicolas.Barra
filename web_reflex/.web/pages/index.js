
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, HStack, Image as ChakraImage, Link, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "green", "padding": "16px", "zIndex": "999"}}>
  <Text sx={{"height": "40px"}}>
  {`Nicolas Barra`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em"}}>
  <VStack>
  <Avatar name={`Nicolas Barra`} size={`xl`}/>
  <Text>
  {`Soy el header`}
</Text>
  <Text>
  {`Hola soy niko`}
</Text>
  <Text>
  {`@nicolasbarrapelecano@gmail.com`}
</Text>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <Link as={NextLink} href={`https://github.com/nikobarra`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
  <VStack>
  <Text>
  {`GitHub`}
</Text>
  <Text>
  {`GitHub`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
  <VStack>
  <Text>
  {`youtube`}
</Text>
  <Text>
  {`youtube`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/nicolaspelecano/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
  <VStack>
  <Text>
  {`linked in`}
</Text>
  <Text>
  {`linked in`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`#`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
  <VStack>
  <Text>
  {`facebook bla bla bla bla`}
</Text>
  <Text>
  {`facebook bla bla bla bla`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack>
  <ChakraImage src={`favicon.ico`}/>
  <Link as={NextLink} href={`http://www.linkedin.com`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  {`soy el footer del año 2023`}
</Link>
  <Text>
  {`de la pagina`}
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
