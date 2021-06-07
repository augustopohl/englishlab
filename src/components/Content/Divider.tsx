import { Box } from "@chakra-ui/layout"

export default function Divider() {
    return (
        <Box
            w={["60px", "100px"]}
            mx="auto"
            h="1.4px"
            bg="gray.600"
            my={["1", "10"]}
        />
    )

}