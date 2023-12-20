
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Divider, Flex, Heading, HStack, Image as ChakraImage, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { ArrowForwardIcon, EmailIcon, PhoneIcon, StarIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <HStack sx={{"position": "sticky", "bg": ["#171f26"], "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Oswald"}}>
  <Text as={`span`} sx={{"color": ["#14a1f0"]}}>
  {`Curriculum `}
</Text>
  <Text as={`span`} sx={{"color": ["#087ec4"]}}>
  {`Vitae`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "700px", "width": "100%", "marginY": "2em"}}>
  <VStack alignItems={`start`} sx={{"color": ["#c3c7cb"]}}>
  <HStack spacing={`2em`}>
  <Avatar name={`Nicolas Barra`} size={`xl`} sx={{"color": ["#f1f2f4"], "bg": ["#087ec4"]}}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": ["#f1f2f4"], "fontFamily": "Oswald"}}>
  {`Nicolás Barra`}
</Heading>
  <HStack>
  <PhoneIcon/>
  <Text sx={{"marginTop": "0px !important", "color": ["#c3c7cb"]}}>
  {`+54 (2266) 440616`}
</Text>
</HStack>
  <HStack>
  <EmailIcon/>
  <Text sx={{"marginTop": "0px !important", "color": ["#c3c7cb"]}}>
  {`nicolasbarrapelecano@gmail.com`}
</Text>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontDize": "0.8em", "color": ["#c3c7cb"]}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": ["#14a1f0"]}}>
  {`Edad: `}
</Text>
  {`44 años`}
</Box>
  <Spacer/>
  <Box sx={{"fontDize": "0.8em", "color": ["#c3c7cb"]}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": ["#14a1f0"]}}>
  {`Resido en: `}
</Text>
  {`Balcarce Bs. As.`}
</Box>
  <Spacer/>
  <Box sx={{"fontDize": "0.8em", "color": ["#c3c7cb"]}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": ["#14a1f0"]}}>
  {`Estudiante: `}
</Text>
  {`Tec. en App Informaticas, Unicen`}
</Box>
</Flex>
  <Divider sx={{"borderColor": ["#c3c7cb"]}}/>
  <Heading>
  {`Perfil profesional`}
</Heading>
  <Text>
  {`Estudiante Universitario y Desarrollador Backend Python con experiencia en liderar clases de apoyo en JavaScript, Python y Django. Mi objetivo es integrarme como desarrollador de software, aplicando habilidades técnicas adquiridas durante mi carrera.`}
</Text>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <Divider sx={{"borderColor": ["#c3c7cb"]}}/>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "color": ["#f1f2f4"]}}>
  {`Experiencia laboral`}
</Heading>
  <Link as={NextLink} href={`https://www.coderhouse.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "backgroundColor": ["#171f26"], "color": ["#f1f2f4"], "_hover": {"backgroundColor": ["#087ec4"]}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "color": ["#f1f2f4"]}}>
  {`Coderhouse, enero 2022 a febrero 2023`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": ["#c3c7cb"]}}>
  {`Tutor python y Javascript`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://junior.org.ar/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "backgroundColor": ["#171f26"], "color": ["#f1f2f4"], "_hover": {"backgroundColor": ["#087ec4"]}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em", "color": ["#f1f2f4"]}}>
  {`Junior Achievement Argentina, mayo 2022 a Julio 2022`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": ["#c3c7cb"]}}>
  {`Profesor, guiando y capacitando a docentes escolares en desarrollo web`}
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
  {`Independiente, 2000 al 2017`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": ["#c3c7cb"]}}>
  {`Técnico reparador, reparaciones, mantenimiento e intalaciones de equipos informáticos y consolas de juegos`}
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
  {`Audiotel S.A Noviembre 2004 a Julio 2005`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": ["#c3c7cb"]}}>
  {`Back Office, supervise ventas de telemarketers, reduje errores en los lotes del 23 al 1%`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Divider sx={{"borderColor": ["#c3c7cb"]}}/>
</VStack>
  <VStack alignItems={`start`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "color": ["#f1f2f4"]}}>
  {`Educación`}
</Heading>
  <HStack>
  <StarIcon sx={{"color": ["#c3c7cb"]}}/>
  <Text sx={{"fontSize": "1em", "color": ["#f1f2f4"]}}>
  {`Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas (Unicen Tandil)`}
</Text>
</HStack>
  <Text sx={{"fontSize": "0.8em", "color": ["#c3c7cb"]}}>
  {`Iniciada en agosto 2023, Aprobé el examen de ingreso en la primera instancia y promocioné las materias`}
</Text>
  <HStack>
  <StarIcon sx={{"color": ["#c3c7cb"]}}/>
  <Text sx={{"fontSize": "1em", "color": ["#f1f2f4"]}}>
  {`Diplomatura Python Nivel 1 (UTN FRBA Centro de E-Learning)`}
</Text>
</HStack>
  <Text sx={{"fontSize": "0.8em", "color": ["#c3c7cb"]}}>
  {`Aprobado con Sobresaliente, Desarrollé una aplicación de escritorio con tkinter y Python, realizando un CRUD con una base de datos.`}
</Text>
  <HStack>
  <StarIcon sx={{"color": ["#c3c7cb"]}}/>
  <Text sx={{"fontSize": "1em", "color": ["#f1f2f4"]}}>
  {`Desarrollador Web FullStack Python-Django (Coderhouse)`}
</Text>
</HStack>
  <Text sx={{"fontSize": "0.8em", "color": ["#c3c7cb"]}}>
  {`Aprobado con la máxima calificación, Adquirí conocimientos en desarrollo web tanto en el front-end como en el back-end.`}
</Text>
  <HStack>
  <StarIcon sx={{"color": ["#c3c7cb"]}}/>
  <Text sx={{"fontSize": "1em", "color": ["#f1f2f4"]}}>
  {`Técnico en Programación con Orientación Contable (E.T Nro. 35 Eduardo Latzina, Caba)`}
</Text>
</HStack>
  <Text sx={{"fontSize": "0.8em", "color": ["#c3c7cb"]}}>
  {`1994 - 2000, Egresado con un promedio de 7, adquiriendo habilidades para aplicaciones informáticas.`}
</Text>
  <Divider sx={{"borderColor": ["#c3c7cb"]}}/>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "color": ["#f1f2f4"]}}>
  {`Redes y Repositorio`}
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
  {`Repositorios con proyectos personales`}
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
  {`Linkedin`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": ["#c3c7cb"]}}>
  {`Red social laboral donde incluyo todos los cursos realizados`}
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
  <Link as={NextLink} href={`http://www.reflex.dev`} isExternal={true} sx={{"fontSize": "0.8em", "textDecoration": "none", "_hover": {}}}>
  {`Sitio realizado con Reflex python.`}
</Link>
  <Text sx={{"fontSize": "0.8em"}}>
  {`por Nicolás Barra`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Actualizado hasta 2023`}
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
