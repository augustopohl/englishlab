import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import Link from 'next/link';

export default function Header() {
    return (
        <Flex
            bg="purple.650"
            w="100%"
            as="header"
            mx="auto"
            px="1rem"
            h={["70px",
                "100px"]}
            align="center"
            justify="flex-start"
        >
            <Image
                w={["97px", "184px"]}
                src="/logo.jpg"
                alt="Um avião voando sobre o nome da marca World Trip"
                justifySelf="center"
                gridColumn="2"
            />
            <Flex
                w="100%"
                maxW="1260px"
                alignItems="center"
                justifyContent="center"
            >
                <Link href="/">
                    <a>
                        <Text
                            _hover={{ color: "orange.200" }}
                            fontWeight="extrabold"
                            fontSize={["0.8rem", 'md']}
                            transition= "color 0.2s"
                            padding="0 1.5rem"
                            color="orange.300"
                        >Home</Text>
                    </a>
                </Link>
                <Link href="/cursos">
                    <a>
                        <Text
                            _hover={{ color: "orange.200" }}
                            fontWeight="extrabold"
                            fontSize={["0.8rem", 'md']}
                            transition= "color 0.2s"
                            padding="0 1.5rem"
                            color="orange.300"
                        >Cursos</Text>
                    </a>
                </Link>
                <Link href="/quiz">
                    <a>
                        <Text
                            _hover={{ color: "orange.200" }}
                            fontWeight="extrabold"
                            fontSize={["0.8rem", 'md']}
                            transition= "color 0.2s"
                            padding="0 1.5rem"
                            color="orange.300"
                        >Quiz</Text>
                    </a>
                </Link>
            </Flex>
        </Flex>
    )
}