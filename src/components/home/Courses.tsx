import MyCourseCard from '@/src/UI/MyCourseCard'
import MyHeading from '@/src/UI/MyHeading'
import MyHighlight from '@/src/UI/MyHighlight'
import { Box, Button, Container, Flex, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Courses = () => {
    return (
        <Box bgColor={"var(--background-color)"} py={"90px"}>
            <Container maxW={"90%"}>
                <HStack justify={'space-between'}>
                    <Box>
                        <Text>
                            <MyHighlight text='10,000+ Unique Online Courses' />
                        </Text>
                        <MyHeading text='Our Featured Courses' highlight='Featured' />
                    </Box>
                    <Flex>
                        <Button bgColor={'transparent'} color={'var(--text-color)'}>All Courses</Button>
                        <Button bgColor={'transparent'} color={'var(--text-color)'}>Design</Button>
                        <Button bgColor={'transparent'} color={'var(--text-color)'}>Marketing</Button>
                        <Button bgColor={'transparent'} color={'var(--text-color)'}>Development</Button>
                    </Flex>
                </HStack>
                <HStack>
                    <MyCourseCard />
                </HStack>
            </Container>
        </Box>
    )
}

export default Courses
