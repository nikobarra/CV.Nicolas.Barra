
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
  <HStack sx={{"position": "sticky", "bg": ["#171f26"], "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Oswald"}}>
  <Text as={`span`} sx={{"color": ["#14a1f0"]}}>
  {`Nicolás.`}
</Text>
  <Text as={`span`} sx={{"color": ["#087ec4"]}}>
  {`Barra`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`} sx={{"color": ["#c3c7cb"]}}>
  <HStack spacing={`2em`}>
  <Avatar name={`Nicolas Barra`} size={`xl`}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": ["#f1f2f4"], "fontFamily": "Oswald"}}>
  {`Nicolás Barra`}
</Heading>
  <Text sx={{"marginTop": "0px !important", "color": ["#c3c7cb"]}}>
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
  <Box sx={{"fontDize": "0.8em", "color": ["#c3c7cb"]}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": ["#14a1f0"]}}>
  {`+1 `}
</Text>
  {`años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontDize": "0.8em", "color": ["#c3c7cb"]}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": ["#14a1f0"]}}>
  {`+1 `}
</Text>
  {`años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontDize": "0.8em", "color": ["#c3c7cb"]}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": ["#14a1f0"]}}>
  {`+1 `}
</Text>
  {`años de experiencia`}
</Box>
  <Spacer/>
</Flex>
  <Text>
  {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident temporibus officiis nulla consequatur ab, ipsa assumenda perferendis odio molestias sapiente saepe. Numquam quisquam eaque repellat molestias doloremque earum ducimus sit.`}
</Text>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "color": ["#f1f2f4"]}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://github.com/nikobarra`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "backgroundColor": ["#171f26"], "color": ["#f1f2f4"], "_hover": {"backgroundColor": ["#087ec4"]}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "color": ["#f1f2f4"]}}>
  {`GitHub`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": ["#c3c7cb"]}}>
  {`Repositorios`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "backgroundColor": ["#171f26"], "color": ["#f1f2f4"], "_hover": {"backgroundColor": ["#087ec4"]}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "color": ["#f1f2f4"]}}>
  {`youtube`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": ["#c3c7cb"]}}>
  {`Videos explicativos`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/nicolaspelecano/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "backgroundColor": ["#171f26"], "color": ["#f1f2f4"], "_hover": {"backgroundColor": ["#087ec4"]}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "color": ["#f1f2f4"]}}>
  {`linked in`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": ["#c3c7cb"]}}>
  {`Todos sabemos que es linkedin`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`#`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "backgroundColor": ["#171f26"], "color": ["#f1f2f4"], "_hover": {"backgroundColor": ["#087ec4"]}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "color": ["#f1f2f4"]}}>
  {`facebook`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": ["#c3c7cb"]}}>
  {`Caralibro`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack sx={{"marginBottom": "0.8em", "paddingBottom": "0.8em", "color": ["#a3abb2"]}}>
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
