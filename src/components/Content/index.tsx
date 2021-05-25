import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

export default function Content() {
    return (
        <>
            <Flex direction="row">
                <Box maxWidth="1160px"
                    mx="auto"
                    mb="10"
                    px="5rem"
                    my={["8", "20"]}
                >
                    <Heading
                        color="purple.600"
                        fontWeight="600"
                        textShadow="1px 1.4px purple"
                        fontSize={["xl",
                            "2l",
                            "2xl",
                            "2xl",
                            "5xl"]}
                    >
                        Como escolher o curso ideal?
                    </Heading>
                    <Text
                        fontSize={["lg", "xl", "xl", "2xl"]}
                        my={["8", "20"]}
                        color="gray.700"
                        textAlign="justify"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Ea error asperiores aut sapiente corporis excepturi rerum voluptatum quod debitis repellat sit voluptate
                        veritatis voluptatibus quis, vitae nihil eos, fugiat iure!
            </Text>
                </Box>

                <Image
                    my={["8", "20"]}
                    filter="drop-shadow(2px 3px 4px black)"
                    w={["300px", "300px", "300px", "480px"]}
                    display={["none", "none", "block"]}
                    src="/studying.png"
                    alt="Mulher segurando um laptop"
                    mr="100"
                />

            </Flex>
        </>
    )
}