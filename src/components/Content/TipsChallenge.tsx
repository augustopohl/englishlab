import { Flex, Text } from "@chakra-ui/layout";

export default function TipsChallenge() {
    return (
        <Flex flexDirection="column">
        <Text
                color="orange.400"
                fontWeight="bold"
                fontSize={["md",
                    "md",
                    "xl"]}
            >
                Desafio!
        </Text>
            <Text
                color="gray.700"
                fontSize={["sm", "md", "md", "l"]}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit fuga, distinctio quam recusandae voluptas quibusdam earum deleniti quae est dolores, doloribus, asperiores tempore vel porro ipsa maiores error saepe!
            </Text>
        </Flex>
    )
}