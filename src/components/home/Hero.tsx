import Navbar from '@/src/shared/Navbar'
import { Box, Button, Center, Heading, Text, Container, Grid, HStack, Stack, Highlight } from '@chakra-ui/react'
import React from 'react'
import { BsArrowRightShort } from "react-icons/bs"

const Hero = () => {
    return (
        <Box h={"100vh"} maxH={'620px'} bgImage={"/assets/banner_bg.jpg"} bgRepeat={"no-repeat"} bgSize={"cover"}>
            <Navbar />
            <Container maxW={'90%'} h="80%">
                <Grid templateColumns={"repeat(2, 50%)"} h={"100%"}>
                    <Stack justify={'center'} align={"flex-start"}>
                        <Text>
                            <Highlight
                                query='100% Satisfaction Guarantee'
                                styles={{ px: '2', py: '1', rounded: '5', bg: 'blue.100', color: "var(--primary)" }}
                            >
                                100% Satisfaction Guarantee
                            </Highlight>
                        </Text>
                        <Heading as='h1' size='3xl' noOfLines={2}>
                            Learn <span style={{ color: "var(--primary)" }}>Skills</span> From <br /> Our Top Instructors
                        </Heading>
                        <Button mt={10} bgColor={"var(--primary)"} color={'white'}>Explore Courses <BsArrowRightShort style={{ color: 'white', fontSize: 25 }} /></Button>
                    </Stack>
                    <Box></Box>
                </Grid>
            </Container>
        </Box>
    )
}

export default Hero
