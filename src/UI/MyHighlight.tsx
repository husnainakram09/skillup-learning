import { Highlight } from '@chakra-ui/react'
import React from 'react'

interface propsType {
    text: string
    query?: string
}

const MyHighlight: React.FC<propsType> = ({ text, query }) => {
    return (
        <Highlight
            query={query || text}
            styles={{ px: '2', py: '1', rounded: '5', bg: 'blue.100', color: "var(--primary)" }}
        >
            {text}
        </Highlight>
    )
}

export default MyHighlight
