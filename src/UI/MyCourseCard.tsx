import { Avatar, Box, Divider, Flex, Grid, GridItem, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image"
import { BsFileEarmarkText, BsClock } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'

const MyCourseCard = () => {
    return (
        <Box borderRadius={10} minH={300} h={'auto'} w={280} bgColor={'white'}>
            <Grid templateRows={'repeat(2, 1fr)'} h={'100%'}>
                <GridItem position={'relative'} bgImage={"/assets/images/course_thumb01.jpg"} bgSize={'cover'} bgRepeat={'no-repeat'} borderRadius={'10px 10px 0 0'}>
                </GridItem>
                <GridItem p={5}>
                    <HStack justify={'space-between'}>
                        <Flex align={'center'} gap={'2px'}>
                            <BsFileEarmarkText style={{ color: 'var(--text-color)', fontSize: 10 }} />
                            <Text fontSize={'10'}>05 Lessons</Text>
                        </Flex>
                        <Flex align={'center'} gap={'2px'}>
                            <BsClock style={{ color: 'var(--text-color)', fontSize: 10 }} />
                            <Text fontSize={'10'}>12h 30m</Text>
                        </Flex>

                        <Flex align={'center'} gap={'2px'}>
                            <FiUsers style={{ color: 'var(--text-color)', fontSize: 10 }} />
                            <Text fontSize={'10'}>Students</Text>
                        </Flex>
                    </HStack>
                    <Text fontSize={'md'} noOfLines={3} my={4}>A beginner Adobe Illustrator For Graphic Designing</Text>
                    <Flex align={'center'} gap={'2px'}>
                        <svg className=" text-yellow-300 mr-1" style={{ height: 12 }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <Text fontSize={12} className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</Text>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <Text fontSize={12} className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</Text>
                    </Flex>
                    <Divider my={3} />
                    <Flex justify={'space-between'}>
                        <Flex alignItems={'center'} gap={'5px'}>
                            <Avatar size={'sm'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            <span className="mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400">Dan Abrahmov</span>
                        </Flex>
                        <Text as='b'>$110</Text>
                    </Flex>
                </GridItem>
            </Grid>
        </Box >
    )
}

export default MyCourseCard
