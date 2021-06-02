import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Banner() {
    return (
        <>
            <Flex
                w="100%"
                h={["163px", "250px", "350px", "535px"]}
                bgImage="url('/guys.jpg')"
                bgPosition={["100% 20%", "100% 20%", "100% 60%"]}
                bgRepeat="no-repeat"
                bgSize="cover"
            >
                <Flex
                    justify={['center', 'space-between']}
                    align="center"
                    w="100%"
                    mx="auto"
                    px={["4", "10", "15", "20", "36"]}
                    backdropFilter= "brightness(55%)"
                >
                    <div>
                    <Heading
                        color="orange.300"
                        fontWeight="600"
                        textShadow="1.9px 1.3px purple"
                        fontSize={["xl",
                            "2l",
                            "2xl",
                            "2xl",
                            "5xl"]}
                    >
                        Uma língua,<br />infinitas possibilidades.
                    </Heading>
                    <Text
                        color="white" mt="5"
                        fontSize={["0.8rem", '2xl']}
                        textShadow="1.6px 2.2px #801680"
                        fontWeight="600"
                        maxW={["100%", "100%", "100%", "350px"]}
                    >
                        Descubra qual curso se encaixa com seus objetivos e tire do papel o sonho de aprender Inglês!
                    </Text>
                </div>
            </Flex>
        </Flex>
        </>
    )
}