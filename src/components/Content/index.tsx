import { Box, Flex, Heading, Text, Link } from "@chakra-ui/layout";
import React from "react";
import Lootie from "./BoyLootie";

export default function Content() {
    return (
        <>
            <Flex direction="row">
                <Box maxWidth="1160px"
                    mx="auto"
                    mb="10"
                    px={["10", "5"]}
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
                        my={["8", "19"]}
                        color="gray.700"
                        textAlign="justify"
                    >
                        Se você quer aprender Inglês, você com certeza não está sozinho!<br />
                        <br />
                        De acordo com a organização <Link
                            href="https://www.britishcouncil.cn/en/EnglishGreat/numbers"
                            isExternal={true}
                        >
                            <strong>British Council</strong>
                        </Link>, existem aproximadamente 1,5 bilhões de pessoas estudando inglês mundo a fora. E claro, com um bom motivo.
                        <br />
                        Aprender a tão famosa língua universal pode potencializar não só sua carreira <strong>acadêmica</strong> ou <strong>profissional</strong>, mas também
                        obter sucesso em conquistas pessoais tais como conhecer pessoas, <strong>viajar o mundo</strong> e conhecer as mais diversas culturas. Mas querer aprender Inglês é apenas uma parte da equação.<br />
                        Então, como encontrar o <strong>curso de inglês</strong> que encaixa com suas metas e expectativas e realmente faz diferença no seu aprendizado? Para responder essa pergunta, aqui vão algumas dicas fundamentais para você colocar em prática. <strong>Confira!</strong>
                    </Text>
                </Box>

                <Flex
                    my={["8", "160"]}
                    w={["300px", "300px", "300px", "480px"]}
                    display={["none", "none", "block"]}
                    alt="Homem segurando um livro"
                    mr="100"
                >
                    <Lootie />
                </Flex>
            </Flex>
        </>
    )
}