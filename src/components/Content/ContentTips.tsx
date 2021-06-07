import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { TipsProps } from "../../pages";
import TipsContent from "./TipsContent";
import TipsTitle from "./TipsTitle";

export default function ContentTips({ tips }: TipsProps) {
    return (
        <>
            {tips.map(tip => (
                <Flex>
                    <Box
                        maxWidth="1160px"
                        mx="auto"
                        mb="10"
                        px={["5", "3"]}
                        my={["8", "30"]}
                    >
                        <Flex
                            my={["50", "100"]}
                            w="100%"
                            h={["163px", "250px", "350px", "535px"]}
                            bgImage={`url(${tip.image})`}
                            bgPosition={["100% 20%", "100% 20%", "100% 10%"]}
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            boxShadow="1px 2px 2px rgba(0, 0, 0, 0.5)"
                        />
                        <TipsTitle>{tip.title}</TipsTitle>
                        <TipsContent>
                            {tip.text}
                        </TipsContent>
                        <Flex flexDirection="column">
                            <Text
                                color="orange.400"
                                fontWeight="bold"
                                fontSize={["md",
                                    "md",
                                    "xl"]}
                            >
                                {tip.challenge_title}
                            </Text>
                            <Text
                                color="gray.700"
                                fontSize={["sm", "md", "md", "l"]}
                            >
                                {tip.challenge_text}
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
            ))}
        </>
    )
}