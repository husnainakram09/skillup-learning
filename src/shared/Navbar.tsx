import { Box, Button, Center, Divider, HStack, Input, InputGroup, InputLeftElement, InputRightAddon, InputRightElement, Select, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FiSearch } from "react-icons/fi"
import { BiSolidCategory } from "react-icons/bi"

const Navbar = () => {
    return (
        <Box p={'10px 80px'} bg={"transparent"}>
            <HStack justify={'space-between'}>
                <Text>LOGO</Text>
                <HStack gap={10}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/courses"}>Courses</Link>
                    <Link href={"/shop"}>Shop</Link>
                    <Link href={"/blog"}>Blog</Link>
                </HStack>
                <HStack>

                    <InputGroup bgColor={'white'}>
                        <InputLeftElement>
                            <BiSolidCategory />
                        </InputLeftElement>
                        <Select variant={'outline'} bgColor={'white'} style={{ padding: '5px 10px' }} pl={5} placeholder={'Categories'} borderRadius={5} cursor={'pointer'} border={'none'} _focus={{ border: 'none' }}>
                            <option value='option2'>Business</option>
                            <option value='option3'>Data Science</option>
                        </Select>
                    </InputGroup>
                    <InputGroup bgColor={'white'}>
                        <Input placeholder='Search Courses' border={'none'} borderRadius={5} style={{ padding: "5px 10px" }} />
                        <InputRightElement h="100%">
                            <FiSearch style={{ fontSize: 25, marginRight: 5 }} />
                        </InputRightElement>
                    </InputGroup>
                    <Box>
                        <Button bgColor={'white'} p="12px 20px" borderRadius={5}>Log In</Button>
                        {/* <Button bgColor={'var(--text-color)'} color={'white'} p="12px 20px" borderRadius={5}>Try For Free</Button> */}
                    </Box>
                </HStack>
            </HStack>
        </Box>
    )
}

export default Navbar
