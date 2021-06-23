import { Text } from "@chakra-ui/layout";

type TipsContentProps = {
    children: string;
}

export default function TipsContent({ children }: TipsContentProps) {
    return (
        <Text
            fontSize={["lg", "xl", "xl", "2xl"]}
            my={["8", "20"]}
            px={["8", "10", "20"]}
            color="gray.700"
            textAlign="justify"
        >
            {children}
        </Text>
    )
}