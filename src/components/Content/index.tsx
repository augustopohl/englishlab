import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/guy-studying.json";

export default function Content() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

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

                <Flex
                    my={["8", "20"]}
                    w={["300px", "300px", "300px", "480px"]}
                    display={["none", "none", "block"]}
                    alt="Homem segurando um livro"
                    mr="100"
                >
                    <Lottie options={defaultOptions} height={400} width={400} />
                </Flex>

            </Flex>
        </>
    )
}