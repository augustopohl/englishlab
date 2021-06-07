import { Heading } from "@chakra-ui/layout";

type TipsTitleProps = {
    children: string;
}

export default function TipsTitle({ children }: TipsTitleProps) {
    return (
        <Heading
            color="purple.600"
            fontWeight="600"
            textShadow="1px 0.5px"
            textAlign="center"
            fontSize={["2xl",
                "2xl",
                "2xl",
                "5xl"]}
        >
            {children}
        </Heading>
    )
}