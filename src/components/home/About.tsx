import { Box, Button, Grid, GridItem, Heading, Highlight, Stack, Text, Container, Flex, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { BsArrowRightShort, BsFileText } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import { SlFilm } from 'react-icons/sl'

const About = () => {
    return (
        <Container maxW={'90%'} py={20}>
            <Box>
                <Grid templateColumns={"repeat(2, 1fr)"}>
                    <GridItem>
                        <HStack h={'100%'} w={"100%"}>
                            <Box h={"60%"} w={"30%"} border={"5px solid gray"} borderRadius={10} mr={"-10"} clipPath={"polygon(0 0, 100% 10%, 100% 93%, 0% 100%)"} zIndex={1}></Box>
                            <Box h={"90%"} w={"40%"} border={"5px solid gray"} borderRadius={10} clipPath={"polygon(0 0, 100% 10%, 100% 93%, 0% 100%)"}></Box>
                            {/* <Image src={"/assets/images/about_img002.png"} className='h-full w-full' height={100} width={100} alt='about' />
                        <Image src={"/assets/images/about_img001.png"} className='h-full w-full' height={100} width={100} alt='about' /> */}
                        </HStack>
                    </GridItem>
                    <GridItem>
                        <Stack justify={'center'} align={"flex-start"}>
                            <Text>
                                <Highlight
                                    query='100% Satisfaction Guarantee'
                                    styles={{ px: '2', py: '1', rounded: '5', bg: 'blue.100', color: "var(--primary)" }}
                                >
                                    100% Satisfaction Guarantee
                                </Highlight>
                            </Text>
                            <Heading as='h1' size='xl' noOfLines={2}>
                                Discover Top  <span style={{ color: "var(--primary)" }}>Instructors</span><br /> Around The World
                            </Heading>
                            <Grid templateColumns={"repeat(2, 1fr)"} gap={'10px 50px'}>
                                <Flex m="10px 20px" gap={5} align={"center"}>
                                    <Box>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill='#2494E4' height="40px" width="40px" viewBox="0 0 640 512">
                                            <path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" />
                                        </svg>
                                    </Box>
                                    <Text fontWeight={700}>2000+<br />Expert Tutors</Text>
                                </Flex>
                                <Flex m="10px 20px" gap={5} align={"center"}>
                                    <BsFileText style={{ fontSize: 40, color: "#219653" }} />
                                    <Text fontWeight={700}>1500+<br />Top Lessons</Text>
                                </Flex>
                                <Flex m="10px 20px" gap={5} align={"center"}>
                                    <FaGraduationCap style={{ color: "#8121FB", fontSize: 40, rotate: "-30deg" }} />
                                    <Text fontWeight={700}>18000+<br />Over Students</Text>
                                </Flex>
                                <Flex m="10px 20px" gap={5} align={"center"}>
                                    <SlFilm style={{ color: "#FF2E2E", fontSize: 40 }} />
                                    <Text fontWeight={700}>3200+<br />Pro Videos</Text>
                                </Flex>
                            </Grid>
                            <Button mt={5} bgColor={"var(--primary)"} color={'white'}>Discover More <BsArrowRightShort style={{ color: 'white', fontSize: 25 }} /></Button>
                        </Stack>
                    </GridItem>
                </Grid>
            </Box>
        </Container>
    )
}

export default About
