import { Heading, HeadingProps } from '@chakra-ui/react'
import React from 'react'

interface propsType {
    text: string
    highlight?: string
    _myHeading?: HeadingProps
}


const MyHeading: React.FC<propsType> = ({ text, highlight = '', _myHeading }) => {
    const newText = text.split(highlight)
    return (
        <Heading as='h1' size='xl' noOfLines={2} {..._myHeading}>
            {newText[0]} {newText.length > 1 && <span style={{ color: "var(--primary)" }}>{highlight}</span>} {newText.length > 1 && newText[1]}
        </Heading>
    )
}

export default MyHeading
